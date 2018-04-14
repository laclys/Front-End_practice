function clone(value, isDeep) {
  if (value === null) return null
  if (typeof value !== 'object') return value
  if (Array.isArray(value)) {
    if (isDeep) {
      return value.map(item => clone(item, true))
    } else {
      return [].concat(value)
    }
  } else {
    if (isDeep) {
      var newObj = {}
      Object.keys(value).forEach(item => {
        newObj[item] = clone(value[item], true)
      })
    } else {
      return {...value}
    }
  }
}