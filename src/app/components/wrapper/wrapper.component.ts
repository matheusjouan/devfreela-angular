import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})

export class WrapperComponent {

constructor(private location: Location) {}

  @Input() wrapperClass: '-one-col' | '-two-col' = '-two-col';
  @Input() isGoBack: boolean = false;

  public goBack() : void {
    this.location.back();
  }
}
