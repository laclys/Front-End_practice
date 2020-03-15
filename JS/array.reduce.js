 
var groupBy = function (arr, criteria) {
  return arr.reduce(function (obj, item) {

    // 判断criteria是函数还是属性名
    var key = typeof criteria === 'function' ? criteria(item) : item[criteria];

    // 如果属性不存在，则创建一个
    if (!obj.hasOwnProperty(key)) {
      obj[key] = [];
    }

    // 将元素加入数组
    obj[key].push(item);

    // 返回这个对象
    return obj;

  }, {});
};