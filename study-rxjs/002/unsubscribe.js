import { Observable } from 'rxjs/Observable'

const onSubscribe = observer => {
  let number = 1
  const handle = setInterval(() => {
    observer.next(number++)
  }, 1000)

  return {
    unsubscribe: () => {
      clearInterval(handle)
    }
  }
}

const source$ = new Observable(onSubscribe);
const subscription = source$.subscribe(item => console.log(item), null, () => console.log('over!'))

setTimeout(() => {
  subscription.unsubscribe();
}, 3500)

// 此时Observable的source$并没有结束，因为始终没有调用complete，只不过它也不会再调用next了
