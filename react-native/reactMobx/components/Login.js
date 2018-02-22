import React, {Component} from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  DeviceEventEmitter
} from 'react-native'

import {observer} from 'mobx-react'
import {Actions} from 'react-native-router-flux'

import AppState from '../store/AppState'

@observer
export default class Login extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      pwd: ''
    }
  }

  componentDidMount () {
    this.setState({
      name: AppState.name,
      pwd: AppState.pwd
    })
  }

  nextShow () {
    Actions.show()
  }

  nextChange () {
    Actions.change()
  }

  save () {
    AppState.changeName(this.state.name)
    AppState.changePwd(this.state.pwd)
  }

  render () {
    return (
      <View style={styles.container} >
        <Text style={styles.title} >Login</Text>
        <View style={styles.inputWrapper} >
          <Text>名字:</Text>
          <TextInput
            style={styles.input}
            value={this.state.name}
            onChangeText={(text) => {
              this.setState({
                name: text
              })
            }}
          />
        </View>
        <View style={styles.gap} />
        <View style={styles.inputWrapper} >
          <Text>密码:</Text>
          <TextInput
            style={styles.input}
            value={this.state.pwd}
            onChangeText={(text) => {
              this.setState({
                pwd: text
              })
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.save()}
        >
          <Text>save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.nextShow()}
        >
          <Text>show -></Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.nextChange()}
        >
          <Text>change -></Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  title: {
    marginTop: 150,
    marginBottom: 50,
    fontSize: 24,
    color: 'red'
  },
  inputWrapper: {
    flexDirection: 'row'
  },
  input: {
    marginLeft: 25,
    width: 200,
    height: 20,
    fontSize: 13,
    borderWidth: 1,
    borderColor: 'black'
  },
  gap: {
    height: 20
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    width: 100,
    height: 20
  }
})
