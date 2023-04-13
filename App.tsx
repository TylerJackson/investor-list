import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import InvestorList from './InvestorList';

export default function App() {
    return (
        <SafeAreaProvider>
            <InvestorList/>
        </SafeAreaProvider>
    );
}
