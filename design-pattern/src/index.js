// 有限状态机：有限个状态，以及在这些状态之间的变化
import StateMachine from 'javascript-state-machine'
// init
let fsm = new StateMachine({
  init: '收藏',
  transitions: [
    {
      name: 'doState',
      from: '收藏',
      to: '取消收藏'
    },
    {
      name: 'deleteState',
      from: '取消收藏',
      to: '收藏'
    }
  ],
  methods: {
    // listen
    onDoState: function() {
      alert('收藏成功')
      // do something
      updateText()
    },

    onDeleteState: function() {
      alert('已经取消收藏')
      // do something
      updateText()
    }
  }
})

let btn = document.getElementById('btn1')

btn.onclick = function() {
  if (fsm.is('收藏')) {
    fsm.doState()
  } else {
    fsm.deleteState()
  }
}

function updateText() {
  btn.innerHTML=fsm.state
}

updateText()