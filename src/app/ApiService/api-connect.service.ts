import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {

  loginUlr = 'http://localhost:8092/springboot-rest-api/api/v1/webusers/login';
  getTrnsactionsUlr = 'http://localhost:8092/springboot-rest-api/api/v1/transactions/';
  getTrnsactionByCustIdUlr = 'http://localhost:8092/springboot-rest-api//api/v1/transactions/';
  getcustAndAccDetailsUrl = 'http://localhost:8092/springboot-rest-api/api/v1/customers/getCustomerAndAccountDetails/';
  getBalanceUrl = 'http://localhost:8092/springboot-rest-api/api/v1/accounts/';

  constructor(private http: HttpClient) { }
  CustomerLogin(body: any) {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    const options = { headers: header };
    return this.http.post(this.loginUlr, body, options);
  }

  GetTransactions() {
    const heads = new HttpHeaders();
    heads.set('Content-type', 'application/json');
    const options = { headers: heads };
    return this.http.get(this.getTrnsactionsUlr, options);
  }

  GetTransactionByCustomerId(CustomerId: any) {
    const heads = new HttpHeaders();
    heads.set('Content-type', 'application/json');
    const options = { headers: heads };
    return this.http.get(this.getTrnsactionsUlr + CustomerId, options);
  }
  GetCustomerAccountByCustomerById(CustomerId: any) {
    const heads = new HttpHeaders();
    heads.set('Content-type', 'application/json');
    const options = { headers: heads };
    return this.http.get(this.getcustAndAccDetailsUrl + CustomerId, options);
  }

  getCustomerAndAccountDetails() {
    const heads = new HttpHeaders();
    heads.set('Content-type', 'application/json');
    const options = { headers: heads };
    return this.http.get(this.getcustAndAccDetailsUrl, options);
  }

  getAccountBalance(accountNo: any) {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    const options = { headers: header };
    return this.http.get(this.getBalanceUrl + accountNo, options);
  }
}
