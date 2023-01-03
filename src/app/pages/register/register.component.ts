// @ts-nocheck

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICreateUser } from 'src/app/request/ICreateUser';
import Swal from 'sweetalert2';
import { msg } from '../../shared/util/msg';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  messageError = msg;

  constructor(private fb: FormBuilder,
              private registerService: RegisterService) {}

  registerForm: FormGroup = this.fb.group({
    role:['', Validators.required],
    fullName:['', Validators.required],
    birthDate:['', Validators.required],
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required],
  })

  ngOnInit(): void {
  }

  checkIfAnyRoleIsChecked() {
    let list = document.getElementsByName("role");
    let counter = 0;

    for (let radioButton of list) {
        if (radioButton.checked === false) {
            counter++;
        }
    }

    return counter !== list.length;
  }

  public fieldFormIsInvalid(controlName: string, validatorName?: string): boolean {
    const formControl = this.registerForm.get(controlName);
    if (formControl.errors !== null)
      return formControl.errors[validatorName] && this.registerForm.get(controlName)?.touched;

    return false;
  }

  public toogleRole(role: 'dev' | 'client') {
    this.registerForm.get('role').setValue(role);
  }

  public onSubmitForm() {
    if (this.registerForm.valid) {
      let payload: ICreateUser = this.registerForm.value;

      this.registerService.createUser(payload)
        .subscribe({
          next: (response: ICreateUser) => {
            localStorage.setItem("username", response.fullName);
            localStorage.setItem("role", response.role === "dev" ? "Desenvolvedor" : "Cliente");
            localStorage.setItem("idClient", response.id);

            Swal.fire({
              title: 'Bom Trabalho!',
              text: "Cadastrado com sucesso!",
              icon: 'success',
              confirmButtonText: 'Ok!'
            })
           },
          error: (err: Error) => { console.log(err); }
        });

    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}

