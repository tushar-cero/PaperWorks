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

export const sortProductsByPriceOrRating = (products: Product[], sortBy: SortByParameterEnum, order: SortByTypeEnum): Product[] => {
  console.log('function triggered');
  return products.slice().sort((a, b) => {
    const valueA = a[sortBy];
    const valueB = b[sortBy];
    
    if (order === 'ascending') {
      console.log('function concluded ascending',sortBy, order);
      return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
    } else {
      console.log('function concluded ascending',sortBy, order);
      return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
    }
  });
}