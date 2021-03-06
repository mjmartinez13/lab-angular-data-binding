import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Array<Object>;
  pattern: string;
  newFood: Object = {};
  constructor() { }

  ngOnInit() {
     this.foodList = foods;
  }

  addFood () {
    this.foodList.push(this.newFood);
    this.newFood = {};
  }

}
