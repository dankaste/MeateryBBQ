import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItemsService } from '../services/menu-items.service';
import { MenuItem, MenuItemCategory } from '../menu-item';
import { Meal } from '../meal';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @ViewChild('stepper') stepper;

  public menuItems: MenuItem[];
  public proteinItems: MenuItem[];
  public vegetableItems: MenuItem[];
  public starchItems: MenuItem[];

  public workingMeal: Meal;

  public requiredMeals: string[] = ["Meal 1", "Meal 2", "Meal 3"]

  constructor(private menuService: MenuItemsService, public cartService: CartService) { }

  ngOnInit() {
    this.getMenuItems();
  }

  getMenuItems(): void {
    this.menuService.getMenuItems().subscribe( items => this.menuItems = items);
    this.menuService.getProteinItems().subscribe( items => this.proteinItems = items);
    this.menuService.getVegetableItems().subscribe( items => this.vegetableItems = items);
    this.menuService.getStarchItems().subscribe( items => this.starchItems = items);
  }

  addWorkingMealToCart() {
    this.cartService.addItem( this.workingMeal);
    this.workingMeal = null;
  }

  removeMeal(meal) {
    this.cartService.removeItem(meal);
  }

  createNewMeal(){
    this.workingMeal = new Meal();
  }

  selectMenuItem( item: MenuItem ){
    this.workingMeal.MakeSelection(item);
  }
}
