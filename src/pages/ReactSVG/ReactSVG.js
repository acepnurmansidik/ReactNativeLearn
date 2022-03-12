/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet,Image} from 'react-native';
import React from 'react';
import NotFound from '../../assets/images/undraw_my_app_re_gxtj.svg'

export default function ReactSVG() {
  return (
    <View>
      <Text style={styles.header}>React Native SVG</Text>
      <NotFound width={`100%`} height={200} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    marginBottom:20
  },
});
