import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProductsService {

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get('https://api.myjson.com/bins/124ss5');
    }
}
