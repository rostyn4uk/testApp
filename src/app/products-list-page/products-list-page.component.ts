import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-products-list-page',
  templateUrl: './products-list-page.component.html',
  styleUrls: ['./products-list-page.component.css']
})
export class ProductsListPageComponent implements OnInit {

  products:any = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {

    this.productsService.getProducts().subscribe(products => {
       this.products = products;
      // console.log(products);

    });



     
  }


}
