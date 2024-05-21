import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserComponent } from '../shared/user/user.component';

@Injectable({
  providedIn: 'root'
})
export class AccountGuard {

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (UserComponent.user === null) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
