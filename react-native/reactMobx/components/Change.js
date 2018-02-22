import React, {Component} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import AppState from '../store/AppState'
import {observer} from 'mobx-react'

@observer
export default class Change extends Component {
  render () {
    return (
      <View style={styles.container} >
        <Text>name:{AppState.name}</Text>

        <TouchableOpacity
          style={{
            marginTop: 50
          }}
          onPress={() => { AppState.changeName(AppState.name + 'さん') }}
        >
          <Text
            style={{
              color: 'red'
            }}
          >'さん'をつけてる</Text>
        </TouchableOpacity>

      </View>
    )
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
