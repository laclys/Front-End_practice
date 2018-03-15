const Arr = [1,2,3,2,'l',3,6,10,10]

// ES6
let newArr = [...new Set(Arr)]
console.log(newArr)


// 2
const newArr2 = Arr.filter((ele, index, self) => {
  return index === self.indexOf(ele)
})
console.log(newArr2)

// 3
Array.prototype._unique = function() {
  let newArr = []
  let oneArr = this
  for (let i = 0; i< oneArr.length; i++) {
    if(newArr.indexOf(oneArr[i]) === -1) {
        newArr.push(oneArr[i])
        console.log(newArr)
    }
  }
  return newArr
}

console.log(Arr._unique())