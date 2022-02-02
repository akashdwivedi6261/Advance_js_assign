// 
var obj = {
    name: "Akash",
    getName: function getName() {
        // console.log(10)
        // var a= {p:"sohit"}
        console.log(this)
        console.log(this.name);
    },
    greet(user){
        console.log(`Hi ${user} I am ${this.name}`)
        // obj.this.call(person2)
    }
}


let person1 ={
    name: "Neha",
    greet(user) {
        console.log(this)
        console.log(`Hi ${user} I am ${this.name}`)
    }
}
let person2 = {
    job: "Coder",
    greet(user) {
        console.log(this)
        console.log(`Hello ${user} I am a ${this.name}`)
    }
}
let fn = obj.greet
fn.call(person1, "Albert")
let fn2 = person2.greet
fn2.call(person1)