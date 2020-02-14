import { Observable } from 'rxjs/Observable'

const source$ = new Observable(observer => {
    observer.next(1)
    observer.next(2)
    observer.next(3)
    observer.complete()
})

const theObserver = {
  next: item => console.log(`item`, item),
  complete: () => console.log('over')
}

source$.subscribe(theObserver)

// Observable推送数据可以有时间间隔