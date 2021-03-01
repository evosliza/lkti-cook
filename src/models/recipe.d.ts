export interface RecipeModel {
  uid: string;
  name: string;
  ingredients?: Ingredient[];
  description?: string;
  type: string;
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}
