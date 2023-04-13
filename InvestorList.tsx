import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    TextInput,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import data from './investors.json';
import { FontAwesome } from '@expo/vector-icons'; 
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import InvestorListRow from './InvestorListRow';
export interface Investor {
    readonly _id: string;
    readonly index: number;
    readonly guid: string;
    readonly isActive: Boolean;
    readonly balance: string;
    readonly age: number;
    readonly eyeColor: string;
    readonly name: string;
    readonly email: string;
    readonly about: string;
    readonly registered: string;
    readonly favoriteFruit: string;
}
const InvestorList: React.FC =  () => {
    const [filteredData, setFilteredData] = useState<Investor[]>(data.investors);
    const [filters, setFilters] = useState<string>("");
    const { top } = useSafeAreaInsets();
    const renderItemDivider = () => (
        <View style={{width: '95%', height: 1, backgroundColor: 'lightgray', alignSelf: 'center'}}/>
    )
    useEffect(() => {
        if(filters === "") {
            setFilteredData(data.investors);
        } else {
            const lowerCaseFilters = filters.toLowerCase();
            setFilteredData(data.investors.filter((investor: Investor) => {
                const {
                    name,
                    email,
                    age,
                    eyeColor
                } = investor;
                return name.toLowerCase().includes(lowerCaseFilters) ||
                    email.toLowerCase().includes(lowerCaseFilters) ||
                    `${age}`.includes(lowerCaseFilters) ||
                    eyeColor.toLowerCase().includes(lowerCaseFilters)
            }))
        }
    }, [filters]);
    return (
        <View
            style={[
                styles.container,
                {
                    paddingTop: top,
                }
            ]}
        >
            <View
                style={{
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    width: '100%',
                    backgroundColor: 'lightgray',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <TextInput
                    style={{
                        width: '100%',
                        height: 40,
                        backgroundColor: 'white',
                        borderRadius: 5,
                        paddingLeft: 10,
                        paddingRight: 30,
                        marginRight: -30
                    }}
                    onChangeText={(text) => setFilters(text)}
                    value={filters}
                />
                <FontAwesome style={{ width: 30 }} name="search" size={24} color="gray" />
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                style={{ width: '100%', flex: 1}}
            >
                <FlatList
                    style={{ height: '100%', width: '100%' }}
                    contentContainerStyle={{ paddingHorizontal: 5}}
                    renderItem={({item}) => <InvestorListRow investor={item} /> }
                    data={filteredData}
                    keyExtractor={item => item._id}
                    ItemSeparatorComponent={renderItemDivider}
                    showsVerticalScrollIndicator={false}
                />
            </KeyboardAvoidingView>
        </View>
    );
}
export default InvestorList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
