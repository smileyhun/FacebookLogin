import { Component } from '@angular/core';
import { AccountService } from 'src/_services/account/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(private accountService: AccountService) {
    
  }
  
  get userName() {
    return this.accountService.accountValue.name;
  }

  get extraInfo() {
    return this.accountService.accountValue.extraInfo;
  }
}
