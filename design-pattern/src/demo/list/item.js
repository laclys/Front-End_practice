import $ from 'jquery'
import getCart from '../shoppingCart/getCart.js'
export default class Item {
  constructor(list, data) {
    this.list = list
    this.data = data
    this.$el = $('<div>')
    this.cart = getCart()
  }

  initContent() {
    let $el = this.$el
    let data = this.data
    $el.append($(`<p>名称: ${ data.name }</p>`))
    $el.append($(`<p>价格: ${ data.name }</p>`))
  }

  initBtn() {
    let $el = this.$el
    let $btn = $(`<button>test</button>`)

    $btn.click(() => {

    })

    $el.append($($btn))
  }

  addToCartHandle() {
    this.cart.add(this.data)
  }

  deleteFromCartHandle() {
    this.cart.del(this.data.id)
  }

  render() {
    this.list.$el.append(this.$el)
  }

  init() {
    this.initContent()
    this.initBtn()
    this.render()
  }

}