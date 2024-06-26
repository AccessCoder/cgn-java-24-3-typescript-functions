function greetWorld():void {
    console.log("Hello World!")
}

greetWorld()

function greetUserByNameAndAge(name:string, age:number):void{
    console.log("Hello " + name + ", you are " + age + " years old!")
}

greetUserByNameAndAge("Max", 19)


// arrow functions

const add = (a:number, b:number):number => {
    return a+b
}

console.log(add(5,6))

const greetUserByNameAndAgeArrow = (name:string, age:number):void => {
    console.log("Hello " + name + ", you are " + age + " years old!")
}
greetUserByNameAndAgeArrow("Tim", 54)

// array functions

const numbers:number[] = [1,2,3,4,5,6]

// map
const doubledNumbers:number[] = numbers.map((num:number) => num*2)

console.log("numbers= " + numbers)
console.log("doubledNumbers= " + doubledNumbers)

// filter
const evenNumbers:number[] = numbers.filter((currywurst:number) => currywurst % 2 === 0)
console.log("evenNumbers= " + evenNumbers)

//Bonus Calc
const list:number[] = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];

const result = list
    .sort((a, b) => b - a)
    .map(num => num **2)
    .slice(4, -2)
    .filter(num => num % 4 !== 0)
    .reduce((acc, num) => acc + num, 0);

console.log("BONUS Result= "+result); //=231667