import {ScrollView, View} from 'react-native';
import React from 'react';
import ReactSVG from './src/pages/ReactSVG/ReactSVG';

export default function App() {
  return (
    <View>
      <ScrollView>
        <ReactSVG />
      </ScrollView>
    </View>
  );
}
