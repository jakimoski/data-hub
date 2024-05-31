import { Product } from "../data/data";

export type FilterOptionProps = {
  category: string;
  isActive: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filterProducts: (event: any) => void;
  filerItemsLength: (name: string) => number;
};

export type FilterPropsType = {
  updateProducts(prev: Product[]): void;
  productsList: Product[];
};
