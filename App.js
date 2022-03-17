import {ScrollView, View, StyleSheet} from 'react-native';
import React from 'react';
import ReactSVG from './src/pages/ReactSVG/ReactSVG';
import CallAPIAxios from './src/pages/CallAPIAxios/CallAPIAxios';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <ReactSVG /> */}
        <CallAPIAxios />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
});
