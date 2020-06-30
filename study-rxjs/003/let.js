import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/let'

const source$ = Observable.of(1, 2, 3)
const double$ = obs$ => obs$.map(x => x * 2)
const result$ = source$.let(double$) // 就是把上游的Observable对象作为参数传递给double$

result$.subscribe(console.log)
