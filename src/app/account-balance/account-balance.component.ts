import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from '../ApiService/api-connect.service';

@Component({
  selector: 'app-account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.scss']
})
export class AccountBalanceComponent implements OnInit {
 balaceDetails: any;
 balanceSuccess = true;
 balaceFailedMessage: any;
 accountNumber: any;
 balance: any;
  constructor(private apiConnect: ApiConnectService) { }

  ngOnInit() {
  }

  getBalance(accountNumber: any) {
    this.apiConnect.getAccountBalance(accountNumber)
      .subscribe((data) => {
        this.balaceDetails = data;
        if (this.balaceDetails.hasOwnProperty('balance')) {
          this.balanceSuccess = true;
          this.balance = this.balaceDetails.balance;
          this.accountNumber = this.balaceDetails.accountNo;
        } else {
          this.balaceFailedMessage = 'Could not get balance for account Number:: ' + accountNumber;
          this.balanceSuccess = false;
        }
      }, error => {
        this.balaceFailedMessage = error.error.message;
        this.balanceSuccess = false;
      });
  }
  }
