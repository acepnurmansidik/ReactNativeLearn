import {StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';
import React, {useState} from 'react';
import Axios from 'axios';

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');

  const handleOnSubmit = () => {
    const data = {
      name,
      email,
      bidang,
    };

    Axios.post('http://10.0.2.2:3004/users', data).then(result => {
      console.log('result: ', result);
      setName('');
      setEmail('');
      setBidang('');
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Local API (JSON Server)</Text>
      <Text style={styles.normalTxt}>Masukan Anggota Kabayan Koding</Text>
      <TextInput
        placeholder="Fullname"
        style={styles.inputField}
        value={name}
        onChangeText={value => setName(value)}
      />
      <TextInput
        placeholder="Email"
        style={styles.inputField}
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        placeholder="Bidang"
        style={styles.inputField}
        value={bidang}
        onChangeText={value => setBidang(value)}
      />
      <Button title="Save" onPress={handleOnSubmit} />
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
