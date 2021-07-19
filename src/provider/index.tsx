import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { CategoryProvider } from './category';
import { ProductProvider } from './product';

interface Props {
  children: React.ReactNode;
}

export const Provider: React.FC<Props> = ({ children }: Props) => {
    return (
        <SafeAreaProvider>
            <CategoryProvider>
                <ProductProvider>{children}</ProductProvider>
            </CategoryProvider>
        </SafeAreaProvider>
    );
};

export { useCategories } from './category';
export { useProducts } from './product';