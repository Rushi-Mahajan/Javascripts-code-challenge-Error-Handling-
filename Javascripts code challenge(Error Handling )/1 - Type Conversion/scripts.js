function ConvertToNumber(number){
   
   try{
    if(typeof(number)=="number")
        return number
    else{
        throw new Error("Invalid Number");
    }
}
catch(error){
    console.log(error)

}
}

const s=ConvertToNumber("String")
console.log(s)