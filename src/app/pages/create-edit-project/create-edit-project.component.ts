import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProjectItem } from 'src/app/interfaces/IProjectItem';
import { CreateEditService } from './create-edit.service';
import { msg } from '../../shared/util/msg';

@Component({
  selector: 'app-create-edit-project',
  templateUrl: './create-edit-project.component.html',
  styleUrls: ['./create-edit-project.component.scss']
})
export class CreateEditProjectComponent implements OnInit {

  public id: string;
  public screenType: 'edit' | 'create';
  public project: IProjectItem = {} as IProjectItem;
  public actionButtonText: string = 'Salvar';
  public title = 'Vamos cadastrar seu projeto!';

  public projectForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    totalCost: ['', Validators.required],
  });

  messageError = msg;

  constructor(private createEditProjectService: CreateEditService,
              private fb: FormBuilder,
              private router: Router) {

    this.id = history.state.id;
    this.screenType = this.id ? 'edit' : 'create';
  }

  ngOnInit(): void {
    this.setScreen();
  }

  public fieldFormIsInvalid(controlName: string, validatorName?: string): boolean {
    const formControl = this.projectForm.get(controlName);
    if (formControl.errors !== null)
      return formControl.errors[validatorName] && this.projectForm.get(controlName)?.touched;

    return false;
  }

  public setScreen(): void {
    if (this.screenType === 'edit') {
      this.actionButtonText = 'Atualizar';
      this.title = 'Editar projeto'
      this.getProject();
    }
  }

  public createOrEditProject(): void {
    if (this.projectForm.valid) {
      let payload : IProjectItem	 = this.projectForm.value;
      payload.idClient = localStorage.getItem('idClient');

      if (this.screenType === 'edit') {
        this.createEditProjectService.editProject(payload, this.id).subscribe({
          next: () => {
            alert('Projeto atualizado com sucesso')
            this.router.navigate(['list']);
          },
          error: (err: Error) => console.log(err)
        })
      } else {
        this.createEditProjectService.createProject(payload).subscribe({
          next: () => {
            alert('Projeto cadastrado com sucesso')
            this.router.navigate(['list']);
          },
          error: (err: Error) => console.log(err)
        })
      }
    } else {
      this.projectForm.markAllAsTouched();
    }
  }

  public getProject(): void {
    this.createEditProjectService.getProjectById(this.id)
      .subscribe({
        next: (response) => {
          this.project = {...response};
          this.projectForm.patchValue(this.project);
        },
        error: (err: Error) => console.log(err)
      })
  }
}
