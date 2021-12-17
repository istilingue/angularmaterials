import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  product:Product ={
    name:'', 
    price:null
  }

  constructor(
    private productService: ProductsService, 
    private router:Router,
    ) { }

  ngOnInit(): void {

  }

  createProduct() {
    this.productService.create(this.product).subscribe(()=>{
      this.productService.showMessage('Operação executada com sucesso!')
      this.router.navigate(['/products'])
      
    })
  }
  cancel() {
    this.router.navigate(['/products'])
  }
}
