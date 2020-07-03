import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from '../ApiService/api-connect.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  CustomerDetails: any = [];
  transuctionsSucess = false;
  transuctionsFailedmessage: any;
  constructor(private apiConnect: ApiConnectService) { }

  ngOnInit() {
    this.apiConnect.getCustomerAndAccountDetails()
      .subscribe((data) => {
        this.CustomerDetails = data;
        if (this.CustomerDetails.length > 0) {
          this.transuctionsSucess = true;
        } else {
          this.transuctionsFailedmessage = 'There is no customer details at the moment';
          this.transuctionsSucess = false;
        }
      }, error => {
        this.transuctionsFailedmessage = error.message;
        this.transuctionsSucess = false;
      });
  }
  seachCustDetailsByCustId(CustomerId: any) {
    this.apiConnect.GetCustomerAccountByCustomerById(CustomerId)
      .subscribe((data) => {
        this.CustomerDetails = data;
        console.log(this.CustomerDetails);
        if (this.CustomerDetails.length > 0) {
          this.transuctionsSucess = true;
        } else {
          this.transuctionsFailedmessage = 'There is no customer details with serch id :: ' + CustomerId;
          this.transuctionsSucess = false;
        }
      }, error => {
        console.log(error);
        this.transuctionsFailedmessage = error.error.message;
        this.transuctionsSucess = false;
      });
  }


}
