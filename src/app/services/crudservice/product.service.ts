import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'https://crudapp-3851d-default-rtdb.firebaseio.com/products.json';
  constructor(private http: HttpClient) { }

  saveProcuct(products: any[]){
  //  return this.http.post(this.url, products);

   return this.http.put(this.url, products);
  }

  fetchProducts(){
    return this.http.get(this.url);
  }

  // doing this will delete the whole thing from so we use another method as of now.
  // leter we can implement the delete method.
  // deleteProducts(id: any){
  //   return this.http.delete(`${this.url}`);
  // }

  getTitle(){
   return this.http.get('https://crudapp-3851d-default-rtdb.firebaseio.com/datatitle.json');
  }
}

