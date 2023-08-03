// 7. Password Checker.
// Create a class called User with properties username and password. Implement a getter method for password 
// that returns the password with all characters replaced by asterisks. Implement a setter method for password 
// that checks if the new password is at least 8 characters long and contains at least one number and one 
// uppercase letter. If the password is valid, set the new password. If not, log an error message.s

class user{

    constructor(uersname,password){
        this.uersname=uersname
        this.password=password
    }

    set setPassword(pass){
        let Numberexist=false
        let Uppercaseexist=false

        for(let i=0;i<pass.length;i++){
            let char=pass[i]
            if(isNaN(char)){
                Numberexist=true
            }
            if(char.toUpperCase()==true){
                Uppercaseexist=true
            }
        }
        try{
        if(pass.length>=8 && Numberexist ==true && Uppercaseexist ==true){
            this.password=pass
        }else{
            throw new Error("password is at least 8 characters long and contains at least one number and one uppercase letter");
        }
        }
        catch(e)
        {
            console.log(e)
        }
    }

    get getPassword(){
        return this.password.replace(/./g,"*")
    }
}

const user1=new user("rushi2","Hello")

user1.setPassword="Hello@01"
console.log(user1.getPassword)