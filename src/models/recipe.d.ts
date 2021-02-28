export interface RecipeModel {
  name: string;
  ingredients?: Ingredient[];
  description?: string;
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}
