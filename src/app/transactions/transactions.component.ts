import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from '../ApiService/api-connect.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  transactionDetails: any  = [];
  transuctionsSucess = false;
  transuctionsFailedmessage: any;
  constructor(private apiConnect: ApiConnectService) {
  }

  ngOnInit() {
 this.apiConnect.GetTransactions()
      .subscribe((data) => {
        this.transactionDetails = data;
        if (this.transactionDetails.length > 0) {
          this.transuctionsSucess = true;
        } else {
          this.transuctionsFailedmessage = 'There is no transactions at the moment';
          this.transuctionsSucess = false;
        }
      }, error => {
          this.transuctionsFailedmessage = error.message;
          this.transuctionsSucess = false;
      });
  }
  seachTransactionByTrnId( CustomerId: any) {
    this.apiConnect.GetTransactionByCustomerId(CustomerId)
      .subscribe((data) => {
        this.transactionDetails = data;
        if (this.transactionDetails.length > 0) {
          this.transuctionsSucess = true;
        } else {
          this.transuctionsFailedmessage = 'There is no transactions at the moment';
          this.transuctionsSucess = false;
        }
      }, error => {
        this.transuctionsFailedmessage = error.error.message;
        this.transuctionsSucess = false;
      });
  }
}
