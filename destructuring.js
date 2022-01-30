let obj1 = {  name: 'masai', password: 'admin@123', hostname:'masaischool', client: 'chrome' }

let {name, password} = obj1
console.log(name, password);

let obj2 = {  name: 'masai', address: {  pincode: 560095 }  }
let {address: {pincode: pin}} = obj2
console.log(pin)

let arr1 = [ 100, 200, 500, 600 ] 

const [first, second] = arr1
console.log(first, second)

let arr2 = [ 100, [  50, 60, 70  ]   ] 
const [fir, sec ] = arr2
const[val] = sec
console.log(val);

let arr3 = [  1, {  
    arr: [ 1, 2, 3 ]
 }
]

const [one, two] = arr3
const {arr} = two

const[val1, val2, val3] = arr
console.log(val2, val3)