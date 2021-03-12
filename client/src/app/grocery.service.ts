import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grocery } from './grocery';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  constructor(private http: HttpClient) { }

  // Retrieve Groceries method
  getGroceries()
  {
    return this.http.get<Grocery[]>('http://localhost:3000/api/groceries');
  }

  // Add Grocery method
  addGrocery(newGrocery: Grocery)
  {
    return this.http.post<any>('http://localhost:3000/api/grocery',
                                  newGrocery, {headers: {'Content-Type': 'application/json'}});
  }

  // Delete Grocery method
  deleteGrocery(id: any)
  {
    return this.http.delete<any>('http://localhost:3000/api/grocery/' + id);
  }
}
