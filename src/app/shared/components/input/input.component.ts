import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { msg } from '../../util/msg';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() label: string = '';
  @Input() field: string = '';
  @Input() formRef: FormGroup;
  @Input() inputType: string = 'text';
  @Input() inputMask: string;

  errorMessage = msg;

  public fieldFormIsInvalid(controlName: string, validatorName?: string): boolean {
    const formControl = this.formRef.get(controlName);
    if (formControl.errors !== null)
      return formControl.errors[validatorName] && this.formRef.get(controlName)?.touched;

    return false;
  }
}
