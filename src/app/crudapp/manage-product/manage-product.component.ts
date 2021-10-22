import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/crudservice/product.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {

  ProductTitle =  this.product.getTitle();
  products: any;


  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.onFetchProcut();
  }

  onAddProcut(id:any, name:any, price:any){
    this.products.push(
      {
        id: id.value,
        name: name.value,
        price: price.value
      },
    )
  }

  onSaveProduct(){
    this.product.saveProcuct(this.products).subscribe(res => {
      console.log(res);
    })
  }


  onFetchProcut() {
  this.product.fetchProducts().subscribe(res => {
    console.log(res);
    this.products = res;
  })
  }


  onDeleteProduct(id:number){
    if(confirm('Do you want to delete this products?')){
      this.products.splice(id, 1);
      this.onSaveProduct();
    }
  }
}
