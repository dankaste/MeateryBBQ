export enum MenuItemCategory{
  Protein,
  Startch,
  Vegetable
}

export class MenuItem {
  id: number;
  name: string;
  type: MenuItemCategory;
  price: number;
}
