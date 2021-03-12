import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../grocery.service';
import { Grocery } from '../grocery';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {
  groceries!: Grocery[];

  constructor(private groceryService: GroceryService) { }

  // Initialization function
  ngOnInit(): void {
    this.groceryService.getGroceries().subscribe( groceries => {
      this.groceries = groceries;
    });
  }

  // Function to delete grocery
  deleteGrocery(id: any)
  {
    let groceries = this.groceries;
    this.groceryService.deleteGrocery(id).subscribe(data => {
      for(let index = 0; index < groceries.length; index++)
      {
        if(groceries[index]._id == id)
        {
          groceries.splice(index, 1);
        }
      }
    });
  }

  // Function to add grocery
  addGrocery(newGrocery: Grocery)
  {
    this.groceryService.addGrocery(newGrocery).subscribe( grocery => {
      this.groceryService.getGroceries().subscribe( groceries => {
        this.groceries = groceries;
      });
    });
  }
}
