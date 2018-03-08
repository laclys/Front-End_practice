import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PanResponder
} from 'react-native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class RNdrag extends Component {

  constructor (props) {
    super(props)
    this.state ={
      minx: 0,
      miny: 0,
      color: 'blue',
      top: height / 2 - 30,
      left: width / 2 - 30
    }
  }

  componentWillMount () {
    this._panResponder = PanResponder.create({
      // 成为响应者
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // console.log(gestureState.x0, gestureState.y0)
        this.setState({
          minx: gestureState.x0 - this.state.left,
          miny: gestureState.y0 - this.state.top,
          color: '#6cf'
        })
      },
      onPanResponderMove: (evt, gestureState) => {
        // console.log(gestureState.moveX, gestureState.moveY)
        // console.log(gestureState.moveX - this.state.minx)
        // console.log(gestureState.dx, gestureState.dy)
        let newTop = gestureState.moveY - this.state.miny
        let newLeft = gestureState.moveX - this.state.minx

        if (newTop < 20) newTop = 20
        if (newTop > height - 60) newTop = height - 60
        if (newLeft < 0) newLeft = 0
        if (newLeft > width - 60) newLeft = width - 60

        this.setState({
          top: newTop,
          left: newLeft
        })
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
      // 一般来说这意味着一个手势操作已经成功完成。
      onPanResponderRelease: (evt, gestureState) => this._endMove(evt, gestureState),
      // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
      onPanResponderTerminate: (evt, gestureState) => this._endMove(evt, gestureState)
    })
  }

  _endMove (evt, gestureState) {
    this.setState({
      color: 'blue'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.ball,
            {
              position: 'absolute',
              top: this.state.top,
              left: this.state.left,
              backgroundColor: this.state.color
            }
          ]}
          {...this._panResponder.panHandlers}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white'
  },
  ball: {
    width: 60,
    height: 60,
    borderRadius: 30
    // backgroundColor: 'blue'
  }
});

AppRegistry.registerComponent('RNdrag', () => RNdrag);
