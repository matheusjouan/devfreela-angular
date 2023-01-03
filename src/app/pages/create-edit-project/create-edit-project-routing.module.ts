import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditProjectComponent } from './create-edit-project.component';

const routes: Routes = [
  { path: '', component: CreateEditProjectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateEditProjectRoutingModule { }
