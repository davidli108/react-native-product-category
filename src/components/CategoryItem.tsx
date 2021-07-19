import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import { IProduct, TBrand } from "../interfaces";
import { currencyFormat } from "../utils";
import { useProducts } from "../provider";

type IProps = {
    item: IProduct
}

export const CategoryItem = ({ item }: IProps) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: item.image ?? 'https://placebeard.it/640x360' }} style={styles.image}/>
            <View style={{ width: 150 }}>
                <Text style={styles.title}>{item.name}</Text>
            </View>
                {
                    item.brand.map((b: TBrand, _i: number) => (
                        <Text style={styles.brand} key={_i}>{b.name}</Text>
                    ))
                }
            <Text style={styles.price}>{currencyFormat(item.price, 2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginHorizontal: 10,
        marginTop: 10
    },
    image: {
        width: 155,
        height: 155,
        borderRadius: 10
    },
    title: {
        marginVertical: 5,
        color: '#888282',
        flexShrink: 1
    },
    brand: {
        fontWeight: 'bold'
    },
    price: {
        fontWeight: 'bold',
        marginVertical: 3
    }
});
