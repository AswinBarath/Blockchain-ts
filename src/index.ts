class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const aswin = new Human("Aswin", 19, "Male");

const sayHi = (person: Human): string => {
    return `Hi ${person.name}, you are ${person.age} years old, and you are a ${person.gender}`;
}

console.log(sayHi(aswin));

export {};