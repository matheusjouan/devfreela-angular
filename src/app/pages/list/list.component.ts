import { Component, OnInit } from '@angular/core';
import { NavigationBehaviorOptions, Router } from '@angular/router';
import { IProjectItem } from 'src/app/interfaces/IProjectItem';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: IProjectItem[] = [];
  isLoadingTable: boolean = false;

  constructor(private listService: ListService,
              private router: Router) { }

  ngOnInit(): void {
    this.getProject();
  }

  public getProject() {
    this.listService.getProject()
      .subscribe({
        next: (response) => {
          this.list = response;
          // this.buildToTable();
          this.isLoadingTable = true;
        },
        error: () => { }
      })
  }

  public buildToTable() {
    const idClient = localStorage.getItem('idClient');
    this.list = this.list.filter(item => item.idClient === idClient);
  }

  public goToEdit(id: string) : void {
		const dataParams: NavigationBehaviorOptions = {
		  state: {
		    id: id
		  }
		}

		this.router.navigate(['create-edit'], dataParams);
  }

  public deleteProject(id: string) {
    this.listService.deleteProject(id)
      .subscribe({
        next: () => { this.getProject(); },
        error: (error: Error) => { console.log(error) }
      })
  }

  public goToCreateProject() : void {
    this.router.navigate(['/create-edit']);
  }

}

// let list = [];

// window.onload = function () {
//     document.querySelector("#name").innerText = localStorage.getItem("userName");
//     document.querySelector("#role").innerText = localStorage.getItem("role");

//     getProjects();
// }

// function getProjects() {
//     fetch("https://622cd1e6087e0e041e147214.mockapi.io/api/projects")
//         .then(response => response.json())
//         .then(response => {
//             list = response;
//             buildTable();
//         })
// }

// function goToEdit(id) {
//     window.location.href = `project-create-edit.html?id=${id}`;
// }

// function deleteProject(id) {
//     fetch(`https://622cd1e6087e0e041e147214.mockapi.io/api/projects/${id}`, {
//             method: 'DELETE'
//         })
//         .then(response => response.json())
//         .then(response => {
//             list = list.filter(project => project.id != id);

//             buildTable();
//         })
// }

// function buildTable() {
//     document.querySelector("#table-body").innerHTML = '';
//     const idClient = localStorage.getItem('idClient');

//     list = list.filter(el => el.idClient === idClient);

//     list.forEach(el => {
//         let template = `
//             <div class="row">
//                 <div class="title-description">
//                     <h6 class="title">${el.title}</h6>
//                     <p class="description">${el.description}</p>
//                 </div>
//                 <div class="price">R$ ${el.totalCost}</div>
//                 <div class="actions">
//                     <span class="edit material-icons" onclick="goToEdit(${el.id})">edit</span>
//                     <span class="delete material-icons" onclick="deleteProject(${el.id})">delete_outline</span>
//                 </div>
//             </div>
//         `

//         document.querySelector("#table-body").insertAdjacentHTML("beforeend", template)
//     });
// }
