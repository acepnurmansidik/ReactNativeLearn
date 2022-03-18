import {StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';
import React from 'react';

const Item = () => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={{
          uri: 'https://api.adorable.io/avatars/150/acep@adorable.io.png',
        }}
        style={styles.avatar}
      />
      <View style={styles.desc}>
        <Text style={styles.descName}>Fullname</Text>
        <Text style={styles.descEmail}>Email</Text>
        <Text style={styles.descBidang}>Bidang</Text>
      </View>
      <Text style={styles.delete}>X</Text>
    </View>
  );
};

export default function LocalAPI() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Local API (JSON Server)</Text>
      <Text style={styles.normalTxt}>Masukan Anggota Kabayan Koding</Text>
      <TextInput placeholder="Fullname" style={styles.inputField} />
      <TextInput placeholder="Email" style={styles.inputField} />
      <TextInput placeholder="Bidang" style={styles.inputField} />
      <Button title="Save" />
      <View style={styles.line} />
      <Item />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 450,
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
    marginTop: 10,
  },
  line: {
    width: '95%',
    height: 2,
    backgroundColor: '#000',
    marginTop: 20,
    marginBottom: 20,
  },
  normalTxt: {
    fontSize: 15,
    marginBottom: 15,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: 'green',
  },
  inputField: {
    borderWidth: 0.5,
    marginBottom: 12,
    borderRadius: 23,
    paddingHorizontal: 18,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  desc: {
    marginLeft: 20,
    flex: 1,
  },
  descName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  descEmail: {
    fontSize: 16,
  },
  descBidang: {
    fontSize: 12,
  },
  delete: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});
