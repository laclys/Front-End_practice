import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/interval'

function map (project) {
  return new Observable (observer => {
    const sub = this.subscribe({
      next: val => observer.next(project(val)),
      error: err => observer.error(err),
      complete: () => observer.complete()
    })
  })
}

Observable.prototype.map = map

const source$ = Observable.interval(1000) // 返回一个可观察的序列，该序列在每个句点后生成一个值
const result$ = source$.map(x => x * 2)

const sub = result$.subscribe(
  console.log,
  error => console.log('catch', error),
  () => console.log('conplete!')
)

setTimeout(() => {
  sub.unsubscribe()
}, 5000)