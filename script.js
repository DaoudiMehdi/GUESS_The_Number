let num = document.querySelector("#guss")
let btn2 = document.querySelector("#btn2")
let msg1 = document.querySelector("#msg1") 
let msg2 = document.querySelector("#msg2")
let msg3 = document.querySelector("#msg3")

let number = Math.floor(Math.random()*100)+1;
console.log(number)
var number_guess = 0;
var list = []; 
btn2.addEventListener("click", play);

function play (e){
    var usernum = parseInt(document.getElementById("guss").value);
    if (usernum >100 || usernum <0){
        msg1.innerHTML="YOU SHOULD ENTER A NUMBER BETWEEN 0-100"

    }
    else if (usernum>number){
        msg1.innerHTML = " YOUR GUESS IS TOO HIGH. "
        number_guess = number_guess+1
        msg2.innerHTML = " NO OF GUESS " + number_guess
        list.push(usernum);
        msg3.innerHTML = "Guessed Numbers are :"+list
    }
    else if (usernum<number){
        msg1.innerHTML = " YOUR GUESS IS TOO LOW. "
        number_guess = number_guess+1
        msg2.innerHTML = " NO OF GUESS " + number_guess
        list.push(usernum);
        msg3.innerHTML = "Guessed Numbers are :"+list
    }
    else if (usernum==number){
        msg1.innerHTML = " YOU WON "

        msg2.innerHTML = " NO OF GUESS " + number_guess

        msg3.innerHTML = "Guessed Numbers are :"+list
    }

}
  