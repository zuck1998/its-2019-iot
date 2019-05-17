import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.scss']
})
export class ProductInsertComponent implements OnInit {

  @Output()
  insert = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  save = ()=> {
    let p = new Product();
    p.code = "ABC"; // this.code
    p.name = "Prodotto 1"; // this.name
    this.insert.emit(p);
  }

}
