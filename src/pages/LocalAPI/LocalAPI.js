import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const Item = ({name, email, bidang, onPress, onDelete}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{
            uri: `https://api.adorable.io/avatars/150/${email}.png`,
          }}
          style={styles.avatar}
        />
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descBidang}>{bidang}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function LocalAPI() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState('Save');
  const [selectUser, setSelectUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const handleOnSubmit = () => {
    const data = {
      name,
      email,
      bidang,
    };

    if (button === 'Save') {
      Axios.post('http://10.0.2.2:3004/users', data).then(result => {
        setName('');
        setEmail('');
        setBidang('');
        getData();
      });
    } else {
      Axios.put(`http://10.0.2.2:3004/users/${selectUser.id}`, data).then(
        res => {
          setName('');
          setEmail('');
          setBidang('');
          setButton('Save');
          getData();
        },
      );
    }
  };

  const getData = () => {
    Axios.get('http://10.0.2.2:3004/users').then(res => {
      setUsers(res.data);
    });
  };

  const selectedItem = item => {
    setName(item.name);
    setEmail(item.email);
    setBidang(item.bidang);
    setButton('Update');
    setSelectUser(item);
  };

  const onDelete = item => {
    Axios.delete(`http://10.0.2.2:3004/users/${item.id}`).then(res =>
      getData(),
    );
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
      <Button title={`${button}`} onPress={handleOnSubmit} />
      <View style={styles.line} />
      {users.map(user => {
        return (
          <Item
            key={user.id}
            name={user.name}
            email={user.email}
            bidang={user.bidang}
            onPress={() => selectedItem(user)}
            onDelete={() =>
              Alert.alert('Warning', 'Are sure delete this user?', [
                {
                  text: 'No',
                  onPress: () => console.log('Not delete'),
                },
                {
                  text: 'Yes',
                  onPress: () => onDelete(onDelete(user)),
                },
              ])
            }
          />
        );
      })}
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
