import { createContext, useContext } from 'react';
import { IProduct } from "../../interfaces";

export type ContextType = {
    products: IProduct[];
    loading: boolean;
};

export const Context = createContext<ContextType>({} as ContextType);

export const useProducts = () => {
    const context = useContext(Context);

    return context;
};
