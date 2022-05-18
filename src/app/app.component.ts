import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: string[] = [];
  newProductName: string = "";
  addProduct(){
    if (/^$/.test(this.newProductName)){
      alert("New product name cannot be empty!")
    }
    else {
      console.log(this.newProductName);
      this.products.push(this.newProductName);
    }
  }

  clearProducts(){
    this.products = [];
  }

  onProductNameChange(event: any){
    this.newProductName = event.target.value;
  }
}
