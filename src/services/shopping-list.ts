import { Ingredient } from '../models/ingredient';

export class ShoppingListService {
  private ingredients: Ingredient[] = [];

  addItem(ingredient: Ingredient) {
    console.log(ingredient);
    this.ingredients.push(ingredient);
    console.log(this.ingredients);
  }

  addItems(items: Ingredient[]) {
    this.ingredients.push(...items); //DECOMPOSE LE TABLEAU POUR AJOUTER CHAQUE ITEM INDIVIDUELLEMENT
  }

  getItems() {
    return this.ingredients.slice();
  }

  removeItem(index: number) {
    this.ingredients.splice(index, 1);
  }
}
