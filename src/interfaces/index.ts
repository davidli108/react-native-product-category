export interface ICategory {
    id: string;
    name: string;
    productIds?: number[]
}

export type TBrand = {
    name: string
}

export interface IProduct {
    id: number;
    image?: string;
    name: string;
    brand: TBrand[];
    price: number;
}
  