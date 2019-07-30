import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListPageComponent } from './products-list-page/products-list-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductComponent } from './products-list-page/product/product.component';
import { ProductsService } from './shared/products.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListPageComponent,
    CartPageComponent,
    NotFoundPageComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
