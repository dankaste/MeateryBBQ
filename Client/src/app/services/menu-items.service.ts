import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { MenuItem, MenuItemCategory } from '../menu-item';
import { MENU_ITEMS } from '../data/menu-items';

@Injectable()
export class MenuItemsService {

  constructor() { }

  getMenuItems(): Observable<MenuItem[]> {
    return of(MENU_ITEMS);
  }

  getProteinItems(): Observable<MenuItem[]> {
    return of(MENU_ITEMS.filter(item => item.type === MenuItemCategory.Protein));
  }

  getStarchItems(): Observable<MenuItem[]> {
    return of(MENU_ITEMS.filter(item => item.type === MenuItemCategory.Starch));
  }

  getVegetableItems(): Observable<MenuItem[]> {
    return of(MENU_ITEMS.filter(item => item.type === MenuItemCategory.Vegetable));
  }
}
