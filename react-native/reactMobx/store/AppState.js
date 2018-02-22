import {action, observable, extendObservable} from 'mobx'

class AppState {
  @observable name = ''
  @observable pwd = ''

  changeName (name) {
    this.name = name
  }

  changePwd (pwd) {
    this.pwd = pwd
  }
}

export default new AppState()
