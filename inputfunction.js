import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  Pressable,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

const inputFunction = () => {
  const [text, setText] = useState('');
  const [passWord, setPassWord] = useState('');

  const clickMe = () => {
    if (text !== 'sajmal') {
      //Alert.alert('incorrect User Name');
    } else if (passWord !== '8086402884') {
      Alert.alert('Incorrect user name or password');
    }
    else {
      Alert.alert('Welcome To Ooty Nice To Meet You!!')
    }
  };

  return (
    <View style={styles.container}>
     <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="user Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassWord}
        value={passWord}
        placeholder="Password"
        secureTextEntry
      />
      <Pressable onPress={() => clickMe()}>
        <Text style = {styles.button}>Verify</Text>
      </Pressable>
    <ScrollView>
      <Text style = {{fontSize: 42}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Text>
    </ScrollView>

     
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderLeftWidth: 0,
    margin: 10,
    fontSize: 20,
    borderWidth: 1,
  },
  button: {
    backgroundColor: "steelblue",
    height: 20,
    borderWidth: 1,
    paddingRight: 5,
    paddingLeft: 5,
    marginTop: 10,
  },
});
export default inputFunction;