/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import NotFound from '../../assets/images/undraw_my_app_re_gxtj.svg';

export default function ReactSVG() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>React Native SVG</Text>
      <NotFound width={200} height={200} />
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  header: {
    textAlign: 'center',
    marginBottom:20,
    fontSize:20,
  },
  line:{
    width:'95%',
    height:2,
    backgroundColor:'#000',
  },
});
