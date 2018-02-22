import React, { Component } from 'react'

import Login from './components/Login'
import Show from './components/Show'
import Change from './components/Change'

import {Scene, Router, Actions} from 'react-native-router-flux'

const scenes = Actions.create(
  <Scene key='root'>
    <Scene key='login' component={Login} initial hideNavBar />
    <Scene key='change' component={Change} title='Change' navTransparent />
    <Scene key='show' component={Show} title='Show' hideNavBar />
  </Scene>
)

export default class App extends Component {
  render () {
    return <Router scenes={scenes} />
  }
}
