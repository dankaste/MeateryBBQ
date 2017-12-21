import { MenuItem, MenuItemCategory } from "./menu-item";
import { ICartItem } from "./cart-item";

export class Meal implements ICartItem{    

    public items: MenuItem[] = [];
    private fourOzDiscount: boolean;

    constructor(){
    }

    MakeSelection( item: MenuItem ) {
        /// check if the type has already been added or if we are vegetarian we aren't adding more than 3 vegetables
        const matchedItem = this.items.find( (i) => item.type === i.type);
        if(  matchedItem &&
         (!this.IsVegetarian() || item.type !== MenuItemCategory.Vegetable || 
            this.items.filter((i) => i.type === MenuItemCategory.Vegetable).length >= 3 )) {
                this.Deselect( matchedItem );
            }
        
        this.items.push( item );

        while( this.RemainingVegetableSelections() < 0 ) {
            this.Deselect( this.items.find( (i) => i.type === MenuItemCategory.Vegetable ));
        }
    }
 
    Deselect( item: MenuItem ) {
        const index = this.items.indexOf( item );
        this.items.splice(index, 1 );
    }

    RemainingProteinSelections(): number {
        return 1 - this.GetProteinSelections().length;
    }

    RemainingStarchSelections(): number {
        return 1 - this.GetStarchSelections().length;
    }

    RemainingVegetableSelections(): number {
        let i = 1;
        if( this.IsVegetarian() ){
            i = 3;
        }
        return i - this.GetVegetableSelections().length;
    }

    GetProteinSelections(): MenuItem[] {
        return this.items.filter( (i) => i.type === MenuItemCategory.Protein );
    }

    GetStarchSelections(): MenuItem[] {
        return this.items.filter( (i) => i.type === MenuItemCategory.Starch );
    }

    GetVegetableSelections(): MenuItem[] {
        return this.items.filter( (i) => i.type === MenuItemCategory.Vegetable);
    }

    IsVegetarian(): boolean {
        return this.GetProteinSelections().some( (i) => i.name === "Vegetarian");
    }

    GetPrice(): number {
        return this.items.map( (item) => item.price ).reduce((prev, current) => prev + current);
    }

    GetDescription(): string {
        return "Tasty Meal";
    }

    GetName(): string {
        return this.items[0].name;
    }

  }