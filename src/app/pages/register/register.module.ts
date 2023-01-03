import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { WrapperModule } from 'src/app/components/wrapper/wrapper.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/components/input/input.module';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ButtonModule,
    WrapperModule,
    MatFormFieldModule,
    InputModule,
    MatInputModule,
    SweetAlert2Module.forRoot(),
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
