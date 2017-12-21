export enum MenuItemCategory{
  Protein,
  Starch,
  Vegetable
}

export class MenuItem {
  id: number;
  name: string;
  type: MenuItemCategory;
  price: number;
}
