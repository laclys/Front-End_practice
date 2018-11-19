import $ from 'jquery'
import { GET_LIST } from '../config/config.js'
import createItem from './createItem.js'

export default class List {
  constructor(app) {
    this.app = app
    this.$el = $('<div>')
  }

  loadData() {
    return fetch(GET_LIST).then(result => {
      return result.json()
    })
  }

  initItemList(data) {
    data.forEach(itemData => {
      let item = createItem(this, itemData)
      item.init()
    })
  }

  render() {
    this.app.$el.append(this.$el)
  }

  init() {
    this.loadData().then(data => {
      this.initItemList(data)
    }).then(() => {
      this.render()
    })
  }
}