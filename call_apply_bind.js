function Teacher(age, gender) {
    this.age = age
    this.gender = gender
}

function Person(name, subject) {
    Teacher.call(this, 27, "Male")
    this.name = name
    this.subject = subject
}

const p1 = new Person("Albert", "Javascript")
console.log(p1)