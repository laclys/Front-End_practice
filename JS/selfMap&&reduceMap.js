/*
 * @Author: Lac 
 * @Date: 2019-04-04 14:46:37 
 * @Last Modified by: Lac
 * @Last Modified time: 2019-04-04 15:08:47
 */

 Array.prototype.selfmap = function() {
   const ary = this
   const ret = []
   const [ fn, args ] = [].slice(arguments)
   if (typeof fn !== 'function') {
     throw new TypeError(fn + 'is not function')
   }
   for (let i = 0; i< ary.length; i++) {
     ret.push(fn.call(args, ary[i], i, ary))
   }
   return ret
 }

 const reduceMap = (fn) => {
   return (list) => {
     if (typeof fn !== 'function') {
       throw new TypeError(fn + 'is not function')
     }
     if (!Array.isArray(list)) {
       throw new TypeError(list + 'is not array')
     }
     if (list.length === 0) return []
     return list.reduce((acc, val, index) => {
      return acc.concat([fn(val, index, list)])
     }, [] )
   }
 }
