import Item from './item.js'

// 工厂函数
export default function (list, itemData) {
  return new Item(list, itemData)
}