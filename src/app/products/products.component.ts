import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any[] = [];
  filteredProducts: any[] = [];  
  category: string;

  constructor(route: ActivatedRoute,
              productService: ProductService) {
    
    productService
      .getAll()
      .switchMap(products => {
        this.products = products;
        return route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');
        console.log(this.category + 'Error: catalog loads twice. Currentlu dont know how to solve it');
  
        this.filteredProducts = (this.category) ? 
          this.products.filter(p => p.d.category === this.category) :
          this.products;
    });
    
   }

}
