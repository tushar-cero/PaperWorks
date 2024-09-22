import { Product, SortByParameterEnum, SortByTypeEnum } from "../types";

export const filterProductsByIds = (filteringArray: any, allProducts: Product[]): Product[] => {
  const cartItemIds = new Set(filteringArray.map((item: { id: any; }) => item.id));
  return allProducts.filter(product => cartItemIds.has(product.id));
}

export const filterSimpleProductsByIds = (filteringArray: any, allProducts: Product[]): Product[] => {
  return allProducts.filter(product => filteringArray.includes(product.id));
}

export const searchProductsByTag = (
  allProducts: Product[],
  searchTag: string
): Product[] => {
  if (searchTag === '') {
    return allProducts;
  }

  return allProducts.filter(product =>
    product.tags.some(tag => tag.toLowerCase().includes(searchTag.toLowerCase()))
  );
}

export const sortProductsByPriceOrRating = (
  products: Product[], 
  sortBy: SortByParameterEnum, 
  order: SortByTypeEnum
): Product[] => {
  return products.sort((a: Product , b: Product) => {
    return (order === 'ascending') ?
      Number(a[sortBy]) - Number(b[sortBy])
      :
      Number(b[sortBy]) - Number(a[sortBy]);
  })
}