import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { useCategories } from '../provider'
import { ICategory } from '../interfaces'

export const Tabbar = () => {
    const { tabIndex, setTabIndex, categories } = useCategories();

    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map((category: ICategory, key: number) => (
                <TouchableOpacity key={key} onPress={() => setTabIndex(key)}>
                    <View
                        style={{
                            ...styles.text,
                            backgroundColor: tabIndex === key ? '#acbcde' : '#f6f6f6',
                            marginRight: key === 0 ? 6 : 6,
                            marginLeft: key === 0 ? 0 : 6
                        }}
                    >
                    <Text style={{ ...styles.tabLabel, color: tabIndex === key ? 'white' : 'black' }}>
                        {category.name}
                    </Text>
                    </View>
                </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 60,
        marginTop: 30,
        alignItems: 'flex-start',
    },
    tabLabel: {
        fontSize: 18,
    },
    text: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10
    },
});
