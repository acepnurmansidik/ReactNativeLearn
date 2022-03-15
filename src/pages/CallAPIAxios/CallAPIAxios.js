import {View, Text, StyleSheet, Button, Image} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

export default function CallAPIAxios() {
  const [dataUser, setDataUser] = useState({
    id: '',
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  });
  const [dataResult, setDataResult] = useState({
    name: '',
    email: '',
  });
  // Handle =================================
  const handleGetData = async () => {
    await axios
      .get('https://reqres.in/api/users/5')
      .then(result => {
        setDataUser(result.data.data);
      })
      .catth(err => console.log('Error: ', err));
  };

  const handlePostData = async () => {
    const dataForAPI = {
      name: 'lyna riyana',
      email: 'lyna@gmail.com',
    };
    await axios
      .post('https://reqres.in/api/users', dataForAPI)
      .then(result => {
        setDataResult(result.data);
      })
      .catch(err => console.log('Error: ', err));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Call API Axios</Text>
      <Button title="GET Data" onPress={handleGetData} />
      <Text style={styles.normalTxt}>Response GET Data</Text>
      {dataUser.avatar.length > 0 && (
        <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      )}
      <Text>
        {dataUser.first_name} {dataUser.last_name}
      </Text>
      <Text>{dataUser.email}</Text>
      <Button title="POST Data" onPress={handlePostData} />
      <View style={[styles.line, styles.header]} />
      <Text>{dataResult.name}</Text>
      <Text>{dataResult.email}</Text>
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
  },
  normalTxt: {
    fontSize: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
