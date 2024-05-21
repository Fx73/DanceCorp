import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../shared/header/header.component";
import { IonicModule } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { UserComponent } from '../shared/user/user.component';

@Component({
  selector: 'app-browse',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, UserComponent, HeaderComponent]
})
export class AccountPage {

  get user(): User | null {
    return UserComponent.user
  }
  set user(value: User | null) {
    UserComponent.user = value
  }

  name: string = '';
  email: string = '';
  password: string = '';
  password2: string = '';

  constructor(private loginService: LoginService) {
    if (UserComponent.user) {
      this.name = UserComponent.user.displayName ?? ''
      this.email = UserComponent.user.email ?? ''
    }
  }

  emailVerified(): boolean {
    return UserComponent.user!.emailVerified
  }

  saveProfile() {
    this.loginService.updateProfile(this.email, this.name)
  }
  savePassword() {
    if (this.password === this.password2)
      this.loginService.updatePassword(this.password)
  }
  resendEmail() {
    this.loginService.resendEmail()
  }
  logOut() {
    this.loginService.logOut()
  }

}
