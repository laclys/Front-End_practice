import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  CameraRoll,
  StyleSheet,
  Dimensions,
  Alert,
  ScrollView,
  TouchableOpacity
} from 'react-native'

const fetchParams = {
  first: 6,
  groupTypes: 'All',
  assetType: 'Photos'
}

const webImgUrl = `https://tva2.sinaimg.cn/crop.0.0.750.750.180/68f74d54jw8f22cfa95ijj20ku0kumy7.jpg`

export default class useLib extends Component {
  constructor (props) {
    super(props)
    this.state = {
      photos: []
    }
  }

  componentDidMount () {
    this.getPhotos()
  }
  getPhotos () {
    CameraRoll.getPhotos(fetchParams).then((data) => {
      console.log(data)
      let edges = data.edges
      let photos = []
      for (var index in edges) {
        photos.push(edges[index].node.image.uri)
      }
      this.setState({
        photos: photos
      })
    },
       (error) => { Alert.alert(error) })
  }

  showPics (photos) {
    return (
      <View style={styles.picWrapper}>
        {
          photos.map((result, index, arr) => {
            return (
              <Image
                key={index}
                style={styles.libPic}
                source={{uri: result}}
              />
            )
          })
        }
      </View>
    )
  }
  handleClick = () => {
    CameraRoll.saveToCameraRoll(webImgUrl)
      .then(data => {
        let photos = this.state.photos
        photos.unshift(data)
        this.setState({
          photos: photos
        })
      })
      .catch(err => {
        Alert.alert(err)
      })
  }
  render () {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>
          Get Photos
        </Text>
        {this.showPics(this.state.photos)}
        <Text style={styles.subTitle}>
          A Web photo
        </Text>
        <Image
          style={styles.webPic}
          source={{uri: webImgUrl}}
        />
        <TouchableOpacity
          style={styles.btnWrapper}
          onPress={this.handleClick}
        >
          <Text style={styles.btnText} >
            Touch To Save
          </Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  title: {
    alignSelf: 'center',
    marginTop: 30,
    fontSize: 24
  },
  picWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    width: Dimensions.get('window').width
  },
  libPic: {
    width: Dimensions.get('window').width / 2,
    height: 120
  },
  webPic: {
    alignSelf: 'center',
    width: 200,
    height: 150
  },
  subTitle: {
    alignSelf: 'center',
    fontSize: 24
  },
  btnWrapper: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: 40
  },
  btnText: {
    fontSize: 20,
    color: 'red'
  }
})
