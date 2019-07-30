import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product;
  constructor() { }

  ngOnInit() {
  }


  onClick() {


    var productsInCart: any[] = [];
    var isProductInCart = false;
    if (localStorage.getItem('cart')) {
      productsInCart = JSON.parse(localStorage.getItem('cart'));
    }


    for(let item of productsInCart){
      if (this.product.id == item.id) {
        item.count++;
        isProductInCart = true;
        break;
      }
    }

    // productsInCart.forEach(function (element) {
    //   if (this.product.id == element.id) {
    //     element.count++;
    //     isProductInCart = true;
    //   }
    // });

    if (isProductInCart == false) {
      this.product.count = 1;
      productsInCart.push(this.product);
    }

     localStorage.setItem("cart", JSON.stringify(productsInCart));
  }


}
