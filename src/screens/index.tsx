import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    SafeAreaView,
    ActivityIndicator
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import { Tabbar } from "../components/Tabbar";
import { CategoryItem } from "../components/CategoryItem";
import { useCategories, useProducts } from "../provider";

export const Screens = () => {
    const { categories, tabIndex, loading } = useCategories();
    const { products, loading: productLoading } = useProducts();
    
    const filteredProducts =
        tabIndex === 0 ?
            products :
            products.filter(p => categories[tabIndex].productIds?.includes(p.id))

    return (
        <View style={styles.container}>
            <SafeAreaView>
                { loading ?
                    <Spinner
                        visible={loading || productLoading}
                        textContent={'Loading...'}
                    /> :
                    <> 
                        <View style={styles.header} >
                            <Text style={styles.title}>Personal Care</Text>
                            <Image source={{ uri: 'https://placekitten.com/640/360' }} style={styles.image}/>
                        </View>
                        <Tabbar />
                        <FlatList
                            data={filteredProducts}
                            numColumns={2}
                            renderItem={CategoryItem}
                            keyExtractor={(item, index) => item.id.toString()}
                            contentContainerStyle={{ paddingBottom: 260 }}
                        />
                    </>
                }
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    header: {
        width: '100%',
        height: 200
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20
    },
    title: {
        width: '100%',
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        zIndex: 1,
        top: '50%',
        left: '50%',
        transform: [{ translateX: -110 }, { translateY: -20 }]
    }
});
