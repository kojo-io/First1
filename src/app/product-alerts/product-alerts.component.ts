import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})

export class ProductAlertsComponent implements OnInit {
  @Input() product! : Product;

  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
