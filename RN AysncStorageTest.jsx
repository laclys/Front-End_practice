/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, AsyncStorage, Text, View,Button} from 'react-native';

const LOGIN_FLAG = {
  flag: 'login_flag'
}

export default class login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '?'
    }
  }
  componentDidMount() {
    AsyncStorage.getItem(LOGIN_FLAG.flag, (e, r) => {
      console.log(e)
      if (!e) {
        if(r){
        this.setState({text: 'have'})
        }else{
        this.setState({text: 'none'})
        }
      } else {
        console.log(e)
      }
    })
  }
  touch() {
    AsyncStorage.setItem(LOGIN_FLAG.flag,'1')
  }
  remove() {
    AsyncStorage.removeItem(LOGIN_FLAG.flag)
  }
  render() {
    contain = <View>
      <Text>获取到Flag--{this.state.text}</Text>
    </View>
    return (
      <View style={styles.container}>
        {contain}
        <Button
        title="set"
        onPress={()=>this.touch()}
        >
        </Button>
        <Button
        title="remove"
        onPress={()=>this.remove()}
        >
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('login', () => login);
