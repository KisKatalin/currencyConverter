import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HelpService } from '../help.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  usdBuying !: number;
  usdSelling !: number;
  eurBuying !: number;
  eurSelling !: number;

  constructor(private helpService: HelpService) {

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
