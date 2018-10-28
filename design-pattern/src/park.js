//Car
class Car {
  constructor(num) {
    this.num = num
  }
}

// Camera
class Camera {
  shot(car) {
    return {
      num: car.num,
      inTime: Date.now()
    }
  }

}

// Screen
class Screen {
  show(car, inTime) {
    console.log('Num', car.num)
    console.log('停车时间', Date.now() - inTime)
  }

}

// park
class Park {
  constructor(floors) {
    this.floors = floors || []
    this.camera = new Camera()
    this.screen = new Screen()
    this.carList = {}
  } in (car) {
    const info = this.camera.shot(car)
    // 停到某个位置
    const i = parseInt(Math.random() * 100 % 100)
    const place = this.floors[0].places[i]
    place.in()
    info.place = place
    this.carList[car.num] = info
  }
  out(car) {
    const info = this.carList[car.num]
    const place = info.place
    place.out()

    this.screen.show(car, info.inTime)
    delete this.carList[car.num]
  }
  emptyNum() {
    return this.floors.map(floor => (`${floor.index}层还有${floor.emptyPlaceNum()}个空余车位`)).join('\n')
  }
}

//Floors
class Floors {
  constructor(index, places) {
    this.index = index
    this.places = places || []
  }

  emptyPlaceNum() {
    let num = 0
    this.places.forEach(p => {
      if (p.empty) {
        num = num + 1
      }
    })
    return num
  }

}

// Place
class Place {
  constructor() {
    this.empty = true
  } in () {
    this.empty = false
  }
  out() {
    this.empty = true
  }
}


// test

// init
const floors = []
for (let i = 0; i < 3; i++) {
  const places = []
  for (let j = 0; j < 100; j++) {
    places[j] = new Place()
  }
  floors[i] = new Floors(i + 1, places)
}

const park = new Park(floors)

// init car
const car1 = new Car(100)
const car2 = new Car(200)
const car3 = new Car(300)

console.log('car1 in')

console.log(park.emptyNum())

park.in(car1)

console.log('car2 in')

console.log(park.emptyNum())

park.in(car2)

console.log(park.emptyNum())

console.log('car1 out')

park.out(car1)

console.log(park.emptyNum())

console.log('car2 out')

park.out(car2)

console.log(park.emptyNum())

console.log('car3 in')

park.in(car3)

console.log(park.emptyNum())
