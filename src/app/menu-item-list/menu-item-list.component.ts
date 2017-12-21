import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../menu-item';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/takeWhile";
import "rxjs/add/operator/startWith";

@Component({
  selector: 'app-menu-item-list',
  templateUrl: './menu-item-list.component.html',
  styleUrls: ['./menu-item-list.component.scss']
})
export class MenuItemListComponent implements OnInit {

  @Input() selectedItems: MenuItem[];
  @Input() items: MenuItem[];
  @Input() remainingSelections: number;
  @Output() selectItemEvent: EventEmitter<MenuItem> = new EventEmitter();


  public numCols: Observable<number>;

  constructor(private observableMedia: ObservableMedia) { }

  ngOnInit() {
    const grid = new Map([
      ["xs", 1],
      ["sm", 2],
      ["md", 3],
      ["lg", 3],
      ["xl", 3]
    ]);
    let start: number;
    grid.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start = cols;
      }
    });
    this.numCols = this.observableMedia.asObservable()
      .map(change => {
        console.log(change);
        console.log(grid.get(change.mqAlias));
        return grid.get(change.mqAlias);
      })
      .startWith(start);
  }

  selectItem( item: MenuItem ): void {
    this.selectItemEvent.emit(item);
  }

  itemIsSelected( item: MenuItem ): boolean {
    return this.selectedItems.indexOf( item ) > -1;
  }
}
