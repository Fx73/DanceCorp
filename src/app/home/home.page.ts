import { Router, RouterModule } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { logoGithub, logoGoogle } from 'ionicons/icons';

import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login/login.component';
import { NgIf } from '@angular/common';
import { UserComponent } from '../shared/user/user.component';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, UserComponent, HeaderComponent, RouterModule, LoginComponent, NgIf]
})
export class HomePage {
  constructor(private router: Router) {
    addIcons({ logoGoogle, logoGithub })
    onAuthStateChanged(getAuth(), user => {
      if (user)
        this.router.navigateByUrl('account')
    });
  }

  isUserLoggedIn() {
    return UserComponent.user !== null
  }


}
