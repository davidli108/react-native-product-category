import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { IProduct } from "../../interfaces";
import { Context } from "./context";

export { useProducts } from './context';

interface Props {
  children: React.ReactNode;
}

export const ProductProvider: React.FC<Props> = ({ children }: Props) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get('/products.json');
            setProducts(res.data?.products);
            setLoading(false);
        }
        
        fetchData();
    }, []);

    return (
        <Context.Provider
            value={{
                products,
                loading
            }}
        >
            {children}
        </Context.Provider>
    );
};
