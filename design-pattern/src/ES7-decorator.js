// ES7 decorator
@testDec
class Demo {

}

function testDec(target) {
  target.isDec = true
}

alert(Demo.isDec)