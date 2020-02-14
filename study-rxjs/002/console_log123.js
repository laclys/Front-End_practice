import { Observable } from 'rxjs/Observable'

const source$ = new Observable(observer => {
  let num = 1
  const timer = setInterval(() => {
    observer.next(num++)
    if (num > 3) {
      clearInterval(timer)
    }
  }, 1000)
})

const theObserver = {
  next: item => console.log(`item`, item)
}

source$.subscribe(theObserver)

// Observable推送数据可以有时间间隔