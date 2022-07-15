import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpService {
  usdBuying !: BehaviorSubject<number>;
  usdSelling !: BehaviorSubject<number>;
  eurBuying !: BehaviorSubject<number>;
  eurSelling !: BehaviorSubject<number>;

  constructor(private http: HttpClient) {
    this.usdBuying = new BehaviorSubject(0);
    this.usdSelling = new BehaviorSubject(0);
    this.eurBuying = new BehaviorSubject(0);
    this.eurSelling = new BehaviorSubject(0);
    this.getCurrency();
  }

  getCurrency() {
    this.http.get<any>('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').subscribe(data => {
      data.forEach((element: any) => {
        if (element.ccy === 'USD') {
          this.usdBuying.next(parseFloat(parseFloat(element.buy).toFixed(2)));
          this.usdSelling.next(parseFloat(parseFloat(element.sale).toFixed(2)));

        }
        if (element.ccy === 'EUR') {
          this.eurBuying.next(parseFloat(parseFloat(element.buy).toFixed(2)));
          this.eurSelling.next(parseFloat(parseFloat(element.sale).toFixed(2)));
        }
      })
    });
  }
}
