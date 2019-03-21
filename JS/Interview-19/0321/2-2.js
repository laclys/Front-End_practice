// 原型写法~

function machine(name) {
  if(!(this instanceof machine)){
      return new machine(name)
  }  
  this.name = name
  this.logs = []
  this.logs.push(`start ${name}`)
}
machine.defer = function(time){
  const times = time
  return function(){
      console.log(`wait ${times}s`)
        return new Promise((resolve)=>{
          setTimeout(()=>{resolve()},times * 1000)
      })
  }
}

machine.prototype.execute = async function(){
  const logs = this.logs
  if(logs.length > 0){
       for(let i=0; i<logs.length; i++){
           if(typeof(logs[i]) === 'function'){
               await logs[i]()
           }else {
               console.log(logs[i])
           }
       }
   }
}

machine.prototype.do = function(argument){
  this.logs.push(`${this.name} ${argument}s`)
  return this
}

machine.prototype.wait = function(item){
  this.logs.push(machine.defer(item))
  return this
}

machine.prototype.waitFirst = function(item){
  this.logs.unshift(machine.defer(item))
  return this
}