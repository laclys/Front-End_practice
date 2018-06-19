import * as _ from 'lodash'

console.log(_.chunk([1,2,3,4,5], 2))

const num = 45

interface Cat {
  name: String,
  sex: String
}

function touchcat (cat: Cat) {
  console.log('miao~', cat.name)
}

touchcat({
  name: 'miki',
  sex: 'male'
})