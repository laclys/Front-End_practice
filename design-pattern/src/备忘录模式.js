// 备忘录模式：
 // 随时记录一个对象的状态变化
 // 随时可以恢复之前的某一个状态（如撤销操作）

 class Memento {
   constructor(content) {
     this.content = content
   }
   getContent() {
     return this.content
   }
 }

 class CareTaker {
   constructor() {
     this.list = []
   }
   add(momento) {
     console.log(momento)
     this.list.push(momento)
   }
   get(index) {
     return this.list[index]
   }
 }

 class Editor {
   constructor() {
     this.content = null
   }
   setContent(content) {
     this.content = content
   }
   getContent() {
     return this.content
   }
   saveContentToMomento() {
     return new Memento(this.content)
   }
   getContentFromMomento(memento) {
     this.content = memento.getContent()
   }
 }

 //test
 let editor = new Editor()
 let careTaker = new CareTaker()

 editor.setContent('111')
 editor.setContent('222')
 careTaker.add(editor.saveContentToMomento())
 editor.setContent('333')
 careTaker.add(editor.saveContentToMomento())
 editor.setContent('444')

 console.log(editor.getContent())
 editor.getContentFromMomento(careTaker.get(1))
 console.log(editor.getContent())
 editor.getContentFromMomento(careTaker.get(0))
 console.log(editor.getContent())