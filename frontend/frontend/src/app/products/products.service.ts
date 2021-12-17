import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http'
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl = 'http://localhost:3001/products'

  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) {
  }
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 2500,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    })
  }
  create(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl, product)
  }

  read(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl)
  }


}
