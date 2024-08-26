import { Product } from "../types";

export const filterProductsByIds = (filteringArray: any, allProducts: Product[]) => {
  return allProducts.filter(obj => filteringArray.includes(obj.id));
}
