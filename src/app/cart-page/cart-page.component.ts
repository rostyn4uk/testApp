import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  productsInCart:any[] = [];
  total: number = 0;

  constructor() { }

  ngOnInit() {

    this.getProductsFromCart();

  }

  deleteItem(id: number){
    for(let i = 0; i < this.productsInCart.length; i++){
      if (id == this.productsInCart[i].id) {
        this.total -= this.productsInCart[i].price;
        if(this.productsInCart[i].count == 1) this.productsInCart.splice(i, 1);
        else this.productsInCart[i].count--;

        break;
      }
    }

     localStorage.setItem("cart", JSON.stringify(this.productsInCart));



  }
  getProductsFromCart(){
    let data = JSON.parse(localStorage.getItem('cart'))
    if(data)
      this.productsInCart = data;
     this.total = this.getTotal();
     
  }


  getTotal(){
    let total = 0;
    for(let item of this.productsInCart){
     
      total += item.price * item.count;
    }
    return total;
  }

}
