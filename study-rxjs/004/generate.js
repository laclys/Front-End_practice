import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/generate';

const stream$ = Observable.generate(
  2,
  value => value < 10,
  value => value + 2,
  value => value * value
)

stream$.subscribe(
  console.log,
  null,
  () => console.log('complete')
)