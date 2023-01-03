import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: IUser = {} as IUser;

  ngOnInit(): void {
    this.verifyUserAuthenticate();
    this.buildHeader();
  }

  public verifyUserAuthenticate() : boolean  {
    return localStorage.getItem('username') !== null && localStorage.getItem('role') !== null;
  }

  public buildHeader() {
    if (this.verifyUserAuthenticate()) {
      this.user.name = localStorage.getItem('username') || '';
      this.user.role = localStorage.getItem('role') || '';
    }
  }

}
