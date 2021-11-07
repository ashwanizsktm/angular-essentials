import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/crudservice/product.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {

  ProductTitle =  this.product.getTitle();
  products: any;

  @ViewChild('id') id! : ElementRef;
  @ViewChild('name') name! : ElementRef;
  @ViewChild('price') price! : ElementRef;

  editMode: boolean =false;
  editIndex!: number;
  currentProduct: any;

  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.onFetchProcut();
  }

  onAddProcut(id:any, name:any, price:any){
    if(this.editMode) {
        this.products[this.editIndex] = {
          id: id.value,
          name: name.value,
          price: price.value
        }
        this.id.nativeElement.value = '';
        this.name.nativeElement.value = '';
        this.price.nativeElement.value = '';
        this.editMode = false;
    } else {
      this.products.push(
        {
          id: id.value,
          name: name.value,
          price: price.value
        },
      )
      id.value = '';
      name.value = '';
      price.value = '';
    }
    this.onSaveProduct();
  }

  onSaveProduct(){
    this.product.saveProcuct(this.products).subscribe(res => {
      // console.log(res);
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

  onEditProduct(index: number, product: any) {
    this.editMode = true
    this.editIndex = index;
   this.id.nativeElement.value = this.products[index].id;
   this.name.nativeElement.value = this.products[index].name;
   this.price.nativeElement.value = this.products[index].price;
  this.currentProduct = product;
  }

  discard() {
    this.id.nativeElement.value = this.currentProduct.id;
   this.name.nativeElement.value = this.currentProduct.name;
   this.price.nativeElement.value = this.currentProduct.price;
   this.onSaveProduct();
  }
}
