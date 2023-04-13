import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Investor } from './InvestorList';

interface InvestorListRowProps {
    readonly investor: Investor;
}
const InvestorListRow: React.FC<InvestorListRowProps> =  ({ investor }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 10,
        opacity: investor.isActive ? 1 : .3,
        backgroundColor: investor.isActive ? 'white' : 'lightgray'
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            borderRadius: 34,
            width: 68,
            height: 68,
            backgroundColor: 'lightgray',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              borderRadius: 30,
              width: 60,
              height: 60,
              backgroundColor: 'lightblue',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontWeight: '700', fontSize: 20 }}>
              {investor.name.split(" ")[0][0]}
              {investor.name.split(" ")[1][0]}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 4, paddingHorizontal: 5}}>
        <Text style={{ fontSize: 15, fontWeight: '500' }}>{investor.name}</Text>
        <Text style={{fontSize: 12, color: 'gray'}}>{investor.email}</Text>
        <Text style={{ paddingVertical: 10 }}>{investor.balance}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{ fontSize: 12, color: 'gray'}}>Age: {investor.age}</Text>
            <Text style={{ fontSize: 12, color: 'gray'}}>Eye Color: {investor.eyeColor}</Text>
        </View>
      </View>
    </View>
  );
}
export default InvestorListRow;
