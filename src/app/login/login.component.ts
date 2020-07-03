import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from '../ApiService/api-connect.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginerror = false;
  loginErrorMessage: any;
  loginResponse: any;
  loginsuccessMessge: any;
  loginSuccess = false;
  constructor(private apiConnect: ApiConnectService) {
  }
  ngOnInit() {

  }

  login(username, password) {
    const loginDetails = JSON.stringify({ customerId: username, pin: password});
    this.loginResponse = this.apiConnect.CustomerLogin(loginDetails)
      .subscribe((data) => {
        this.loginResponse = data;
        if (this.loginResponse.hasOwnProperty('status')) {
          this.loginerror = true;
          this.loginSuccess = false;
          this.loginErrorMessage = this.loginResponse.error;
        } else {
          // tslint:disable-next-line: max-line-length
          this.loginsuccessMessge = `Welcome ${this.loginResponse.firstName} ${this.loginResponse.lastName} to M-wallet Backend portal`;
          this.loginSuccess = true;
          this.loginerror = false;
        }
      }, err => {
          this.loginerror = true;
          this.loginSuccess = false;
          this.loginErrorMessage = err.error;
      });
  }

}
