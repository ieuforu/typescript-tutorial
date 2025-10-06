/* 
数组的类型声明方式，两种，直接跟类型 / 泛型
    - type []
    - Array<type>
*/
let numArr: number[] = [1, 2, 3, 4, 5]
let strArr: string[] = ['a', 'b']
let numArr2: Array<number> = [1, 2, 3]
let strArr2: Array<string> = ['a', 'b']
let arr: Array<number | string> = [1, '2', 3, '4']

/* 

元祖，类似于数组，长度类型都固定

*/

let tuple: [number, string, boolean] = [1, '2', false]
// tuple[0] = '2' error
let type = tuple[2] // boolean

/* 
枚举
*/

enum Size {
  S = 'small',
  M = 'medium',
  L = 'large',
}

/* function */

function sum(a: number, b: number): number {
  return a + b
}

// console.log(`%c【${sum(1, 2)}】`, 'background-color: skyblue; font-size: 2rem')

/* object */

let obj: { name: string; age: number } = { name: 'lve', age: 20 }

interface ObjProps {
  name: string
  age: number
}

let obj2: ObjProps = {
  name: 'lve',
  age: 20,
}

// union types / intersection types
let strOrNum: string | number = '1'

// type
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'
let up: Direction = 'UP'
// console.log(`%c【${up}】`, 'background-color: skyblue; font-size: 2rem')

type Woman =
  | {
      wealthy: true
      waste: string
    }
  | {
      wealthy: false
      waste: string
    }

let richWoman: Woman = {
  wealthy: true,
  waste: '消费购物',
}

let poorWoman: Woman = {
  wealthy: false,
  waste: '勤俭持家',
}

type ISum = (x: string, y: string) => string
let sum2: ISum = (a: string, b: string): string => a + b
// console.log(
//   `%c【${sum2('a', 'b')}】`,
//   'background-color: skyblue; font-size: 2rem',
// )

type ICallback = (a: number, b: string, c: boolean) => string // 如果这里是void，代表的是不关心返回值的类型，而不是不返回任何东西
/* 

类似于 Array.prototype.forEach

let r = [1,2,3].forEach(item => item)
r:void

*/
function fn(cb: ICallback) {}
fn((x, y, z) => '')

// 可选参数，?，可选参数必须放在最后面
function f(a: string, b?: number): void {}

// 剩余运算符
let total = (...rest: number[]): number => {
  return rest.reduce((memo, current) => ((memo += current), memo))
}

// 推导对象类型和key类型，keyof只能取对象的key类型，不能直接keyof p，且this必须放在函数的第一个参数，固定的
let p = {
  name: 'lve',
  age: 21,
}

function getValue(this: typeof p, key: keyof typeof p) {
  return this[key]
}

// console.log(
//   `%c【${getValue.call(p, 'name')}】`,
//   'background-color: skyblue; font-size: 2rem',
// )

// Class 原型方法 原型属性 静态属性
// 修饰符 public protected private readonly
class Circle {
  public x: number
  public y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}
// 太繁琐了上面这种方法
class Animal {
  constructor(
    public name: string,
    public color: string,
  ) {}

  eat(food: string) {
    console.log(`%c【${food}】`, 'background-color: skyblue; font-size: 2rem')
  }
}
const dog = new Animal('哈士奇', '白色')
// console.log(dog)
class Cat extends Animal {
  constructor(name: string, color: string) {
    super(name, color)
  }
  eat(food: string): void {
    console.log(
      `%c【${this.name} 吃 -- ${food}】`,
      'background-color: skyblue; font-size: 2rem',
    )
  }
}
const cat = new Cat('狸花猫', '黑色')
// console.log(cat)
cat.eat('猫粮')

/* 
super 原型方法指向实例，构造函数和静态方法中指向父类
*/

class Singleton {
  private static instance = new Singleton()
  private constructor() {}
  static getInstance() {
    return this.instance
  }
  public eat() {}
}
const i1 = Singleton.getInstance()
const i2 = Singleton.getInstance()
console.log(i1 === i2)

// 抽象类，不能被实例化
abstract class Person {
  static hanbit = '吃火锅'
  abstract eat(): void // 子类必须实现
  drink() {} // 子类不必须实现
}
class Student extends Person {
  eat(): void {}
}
export {}
