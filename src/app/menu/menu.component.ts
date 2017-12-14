import { Component, OnInit } from '@angular/core';
import { MenuItemsService } from '../menu-items.service';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[];
  proteinItems: MenuItem[];
  vegetableItems: MenuItem[];
  starchItems: MenuItem[];

  constructor(private menuService: MenuItemsService) { }

  ngOnInit() {
    this.getMenuItems();
  }

  getMenuItems(): void {
    this.menuService.getMenuItems().subscribe( items => this.menuItems = items);
    this.menuService.getProteinItems().subscribe( items => this.proteinItems = items);
    this.menuService.getVegetableItems().subscribe( items => this.vegetableItems = items);
    this.menuService.getStarchItems().subscribe( items => this.starchItems = items);
  }

}
