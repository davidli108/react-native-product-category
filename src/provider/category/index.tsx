import React, { useState, useEffect } from 'react';

import { ICategory } from "../../interfaces";
import { Context } from "./context";
import axios from 'axios';

export { useCategories } from './context';

interface Props {
  children: React.ReactNode;
}

export const CategoryProvider: React.FC<Props> = ({ children }: Props) => {
    const [categories, setCategories] = useState<ICategory[]>([{
        name: 'All Products',
        id: 'all'
    }])
    const [tabIndex, setTabIndex] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get('/categories.json');
            setCategories(res.data?.categories);
            setLoading(false);
        }
        
        fetchData()
    }, []);

    return (
        <Context.Provider
            value={{
                tabIndex,
                loading,
                categories,
                setTabIndex
            }}
        >
            {children}
        </Context.Provider>
    );
};
