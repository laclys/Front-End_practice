import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import AppState from '../store/AppState'

export default class Show extends Component {
  render () {
    return AppState.name && AppState.pwd ? (
      <View style={styles.container} >
        <Text>名字：{AppState.name}</Text>
        <Text>密码：{AppState.pwd}</Text>
      </View>
    ) : null
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFF'
  }
})
