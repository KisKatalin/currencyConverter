import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HelpService } from '../help.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  changeAmount !: number;
  changeCurrency = 'USD';
  receiveAmount !: number;
  receiveCurrency = 'UAH';
  usdBuying !: number;
  usdSelling !: number;
  eurBuying !: number;
  eurSelling !: number;

  constructor(private helpService: HelpService) {
  }

  countLeft(event: any) {
    if (this.changeCurrency === 'USD' && this.receiveCurrency === 'USD'
      || this.changeCurrency === 'EUR' && this.receiveCurrency === 'EUR'
      || this.changeCurrency === 'UAH' && this.receiveCurrency === 'UAH') {
      this.receiveAmount = this.changeAmount;
    }
    if (this.changeCurrency === 'USD' && this.receiveCurrency === 'EUR') {
      this.receiveAmount = parseFloat(((this.changeAmount * this.usdBuying) / this.eurSelling).toFixed(2));
    }
    if (this.changeCurrency === 'EUR' && this.receiveCurrency === 'USD') {
      this.receiveAmount = parseFloat(((this.changeAmount * this.eurBuying) / this.usdSelling).toFixed(2));
    }
    if (this.changeCurrency === 'EUR' && this.receiveCurrency === 'UAH') {
      this.receiveAmount = parseFloat((this.changeAmount * this.eurSelling).toFixed(2));
    }
    if (this.changeCurrency === 'UAH' && this.receiveCurrency === 'EUR') {
      this.receiveAmount = parseFloat((this.changeAmount / this.eurBuying).toFixed(2));
    }
    if (this.changeCurrency === 'USD' && this.receiveCurrency === 'UAH') {
      this.receiveAmount = parseFloat((this.changeAmount * this.usdSelling).toFixed(2));
    }
    if (this.changeCurrency === 'UAH' && this.receiveCurrency === 'USD') {
      this.receiveAmount = parseFloat((this.changeAmount / this.usdBuying).toFixed(2));
    }

  }
  countRight(event: any) {

    if (this.changeCurrency === 'USD' && this.receiveCurrency === 'USD'
      || this.changeCurrency === 'EUR' && this.receiveCurrency === 'EUR'
      || this.changeCurrency === 'UAH' && this.receiveCurrency === 'UAH') {
      this.changeAmount = this.receiveAmount;
    }
    if (this.changeCurrency === 'USD' && this.receiveCurrency === 'EUR') {
      this.changeAmount = parseFloat(((this.receiveAmount * this.eurBuying) / this.usdSelling).toFixed(2));
    }
    if (this.changeCurrency === 'EUR' && this.receiveCurrency === 'USD') {
      this.changeAmount = parseFloat(((this.receiveAmount * this.usdBuying) / this.eurSelling).toFixed(2));
    }
    if (this.changeCurrency === 'EUR' && this.receiveCurrency === 'UAH') {
      this.changeAmount = parseFloat((this.receiveAmount / this.eurBuying).toFixed(2));
    }
    if (this.changeCurrency === 'UAH' && this.receiveCurrency === 'EUR') {
      this.changeAmount = parseFloat((this.receiveAmount * this.eurSelling).toFixed(2));
    }
    if (this.changeCurrency === 'USD' && this.receiveCurrency === 'UAH') {
      this.changeAmount = parseFloat((this.receiveAmount / this.usdBuying).toFixed(2));
    }
    if (this.changeCurrency === 'UAH' && this.receiveCurrency === 'USD') {
      this.changeAmount = parseFloat((this.receiveAmount * this.usdSelling).toFixed(2));
    }
  }


  ngOnInit(): void {
    this.helpService.usdBuying.subscribe(newValue => {
      this.usdBuying = newValue;
    });
    this.helpService.usdSelling.subscribe(newValue => {
      this.usdSelling = newValue;
    });
    this.helpService.eurBuying.subscribe(newValue => {
      this.eurBuying = newValue;
    });
    this.helpService.eurSelling.subscribe(newValue => {
      this.eurSelling = newValue;
    });
  }
}



