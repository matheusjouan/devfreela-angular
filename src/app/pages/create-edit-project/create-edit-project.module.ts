import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEditProjectRoutingModule } from './create-edit-project-routing.module';
import { CreateEditProjectComponent } from './create-edit-project.component';
import { WrapperModule } from 'src/app/components/wrapper/wrapper.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { IConfig, NgxMaskDirective, provideEnvironmentNgxMask } from 'ngx-mask';
import { InputModule } from 'src/app/shared/components/input/input.module';

// Não precisa realizar validação, Validators ja faz isso
const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    CreateEditProjectComponent
  ],
  imports: [
    CommonModule,
    CreateEditProjectRoutingModule,
    WrapperModule,
    ButtonModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaskDirective,
    InputModule,
    ReactiveFormsModule,
  ],
  providers: [provideEnvironmentNgxMask(maskConfig)]
})

export class CreateEditProjectModule { }
