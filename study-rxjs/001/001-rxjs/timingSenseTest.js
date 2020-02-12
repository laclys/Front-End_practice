const holdBtn = document.querySelector('#hold-me');
const mouseDown$ = Rx.Observable.fromEvent(holdBtn, 'mousedown');
const mouseUp$ = Rx.Observable.fromEvent(holdBtn, 'mouseup');

const holdTime$ = mouseUp$.timestamp().withLatestFrom(mouseDown$.timestamp(), (mouseUpEvent, mouseDownEvent) => {
  return mouseUpEvent.timestamp- mouseDownEvent.timestamp;
})

holdTime$.subscribe(ms => {
  document.querySelector('#hold-time').innerText = ms
})

holdTime$.flatMap(ms => Rx.Observable.ajax('https://timing-sense-score-board.herokuapp.com/score/' + ms))
.map(e => e.response)
.subscribe(res => {
  document.querySelector('#rank').innerText = '你超过了' + res.rank + '% 的用户';
})