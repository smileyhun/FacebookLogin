import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/_services/account/account.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private router: Router,
    private accountService: AccountService
) {
    // redirect to home if already logged in
    if (this.accountService.accountValue) {
        this.router.navigate(['/']);
    }
}
  ngOnInit(): void {
  }

  login() {
      this.accountService.login();
  }
}
