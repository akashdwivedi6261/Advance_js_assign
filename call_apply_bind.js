function Teacher(age, gender) { //Assuming that each teacher has age 27 and gender is Male.
    this.age = age
    this.gender = gender
}

function Person(name, subject) {
    Teacher.call(this, 27, "Male")
    this.name = name
    this.subject = subject
}

const p1 = new Person("Albert", "Javascript")
const p2 = new Person("Aman", "DSA")
const p3 = new Person("Nrupul", "HTML")
console.log(p1)
console.log(p2)
console.log(p3)