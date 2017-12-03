/**
 * 顶部滑动显示NaviBar动画，及顶部悬浮
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Animated
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fixedTabBar: false,
      fadeAnim: new Animated.Value(0)          // 透明度初始值设为0
    }
  }

  componentDidMount () {
    //监听滑动的值
    this.state.fadeAnim.addListener(({ value }) => {
      console.log(value)
      if (value > 230) {
        this.setState({
          fixedTabBar: true
        })
      } else {
        this.setState({
          fixedTabBar: false
        })
      }
    })
  }

  render() {
    return (
      <View  style={styles.container} >
        <Animated.View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            height: 60,
            width: 375,
            backgroundColor: 'yellow',
            zIndex: 999,
            opacity: this.state.fadeAnim.interpolate({
              inputRange: [0,225],
              outputRange: [0, 1.0]
            })
          }}
        >
          <Text>BiliBili~</Text>
        </Animated.View>
        {this.state.fixedTabBar
        ?<View style={{
            position: 'absolute',
            top: 60,
            width: 375,
            height: 60,
            backgroundColor: 'gray',
            flexDirection: 'row',
            zIndex: 999
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              height: 60,
              backgroundColor: 'red'
            }}
          >
            <Text>A</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              height: 60,
              backgroundColor: 'blue'
            }}
          >
            <Text>B</Text>
          </View>
        </View> : null}
        <ScrollView
          scrollEventThrottle={200}
          onScroll= {
            // (e) => {
            //   console.log(e.nativeEvent.contentOffset.y)
            // }
            Animated.event(
              [{nativeEvent: {contentOffset: {y: this.state.fadeAnim}}}] ////把contentOffset.y绑定给this.state.fadeAnim
            )
          }
        >
          <Text
            style={{
              marginTop: 40,
              marginLeft: 20,
              fontSize: 24,
              color: '#333'
            }}
          >御坂美琴</Text>
          <Image
            style={{
              marginTop: 20,
              width: 200,
              height: 200,
              alignSelf: 'center'
            }}
            source={require('./test.jpg')}
          />
          <View style={{
            marginTop: 5,
            width: 375,
            height: 60,
            backgroundColor: 'gray',
            flexDirection: 'row'
          }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                height: 60,
                backgroundColor: 'red'
              }}
            >
              <Text>A</Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                height: 60,
                backgroundColor: 'blue'
              }}
            >
              <Text>B</Text>
            </View>
          </View>
          <View
              style={{
                marginTop: 30,
                height: 300,
                backgroundColor: '#6cf'
              }}
          />
          <View
              style={{
                marginTop: 30,
                height: 300,
                backgroundColor: '#6cf'
              }}
          />
          <View
              style={{
                marginTop: 30,
                height: 300,
                backgroundColor: '#6cf'
              }}
          />
          <View
              style={{
                marginTop: 30,
                height: 300,
                backgroundColor: '#6cf'
              }}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
