// 6. Using Static Method to Add Two Numbers with Calculator Class
// Create a class called Calculator with a static method called add. The add method should take two numbers as 
// arguments and return their sum. Instantiate the Calculator class and call the add method.

class calculator{

    constructor(a,b){
        this.num1=a
        this.num2=b
    }

    static Add(c){
        return c.num1+c.num2
    }
}
const cal=new calculator(10,5);
console.log(calculator.Add(cal))
