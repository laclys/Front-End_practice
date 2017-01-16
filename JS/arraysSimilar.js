/*1. 数组中的成员类型相同，顺序可以不同。例如[1, true] 与 [false, 2]是相似的。
2. 数组的长度一致。
3. 类型的判断范围，需要区分:String, Boolean, Number, undefined, null, 函数，日期, window.   */
  
         //获取数据类型
         function getType(value) {
             return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
         }

         function arraysSimilar(arr1, arr2) {
             //如果两个参数不是数组，则返回false
             if (getType(arr1) !== 'array' || getType(arr2) !== 'array') {
                 return false;
             }

             //两个数组长度不一样时返回false
             if (arr1.length !== arr2.length) {
                 return false;
             }
             //将数组中的值，替换成其对应的类型字符串
             arr1.forEach(function (value, index, array) {
                 array[index] = getType(value);
             });
             arr2.forEach(function (value, index, array){
                 array[index] = getType(value);
             });

             //利用sort（）排序，比较两者，返回判断类型
             return arr1.sort().join('') === arr2.sort().join('');
         }