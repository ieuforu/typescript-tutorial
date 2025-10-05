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

console.log(`%c【${sum(1, 2)}】`, 'background-color: skyblue; font-size: 2rem')

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
console.log(`%c【${up}】`, 'background-color: skyblue; font-size: 2rem')

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

export {}
