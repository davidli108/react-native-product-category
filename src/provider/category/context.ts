import { createContext, useContext } from 'react';
import { ICategory } from "../../interfaces";

export type ContextType = {
  tabIndex: number;
  categories: ICategory[];
  loading: boolean;

  setTabIndex: (tabIndex: number) => void;
};

export const Context = createContext<ContextType>({} as ContextType);

export const useCategories = () => {
  const context = useContext(Context);

  return context;
};
