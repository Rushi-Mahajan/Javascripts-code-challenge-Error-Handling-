// 9. Check the presence using closures.
// Create a numberChecker function that takes an array of numbers as an argument and returns a function. The 
// returned function should take another number as an argument and return true if the number is in the array, and 
// false otherwise.

function numberChecker(Aarrys){
    return function(num){
        let checkNumber=false
        for(let i=0;i<Aarrys.length;i++){
            if(arrays[i]==num){
                checkNumber=true
                break
            }else{
                checkNumber=false
            }
        }
        return checkNumber
    }
}
arrays=[1,2,3,4,5]
console.log(numberChecker(arrays)(10));
