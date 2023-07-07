console.log("Hello World");

// 1- Write a program that allow to user enter number then printit

// var num = window.prompt("Enter a number to print it")

// window.alert("Hello the number you enter it is : "+num)


// 2- Write a program that take number from user then print yes if that number can divide by 3 
// and 4 otherwise print no


// var num = window.prompt("Enter a number")

// if (num%3 == 0 || num%4 == 0){
//     window.alert("Yes")
// }else{
//     window.alert("No")
// }


// 3- Write a program that allows the user to insert 2 integers then print the max

// var num = Number(window.prompt("Enter a number"));
// var num2 = Number(window.prompt("Enter another number"));

// if(num>num2){
//     window.alert(num)
// }else{
//     window.alert(num2)
// }


// 4- Write a program that allows the user to insert an integer then print negative if it is
// negative number otherwise print positive

// var num = Number(window.prompt("Enter a number"));


// if(num >= 0){
//     window.alert("Positive")
// }else{
//     window.alert("Negative")
// }



// 5- Write a program that take 3 integers from user then print the max element 
// and the min element.

// var num = Number(window.prompt("Enter a number"));
// var num2 = Number(window.prompt("Enter another number"));
// var num3 = Number(window.prompt("Enter another number"));

// var max =0;
// var min=0; 
// if(num > num2 && num >num3 ){
//     max =  num
// }else if(num2> num && num2 > num3) {
//     max = num2
// }
// else if(num3> num && num3 > num2) {
//     max = num3
// };

// if(num < num2 && num <num3 ){
//     min =  num
// }else if(num2< num && num2 < num3) {
//     min = num2
// }
// else if(num3< num && num3 < num2) {
//     min = num3
// }

// window.alert("The Max is : " + max + "  The min is " + min)




// 6- Write a program that allows the user to insert integer number then 
// check If a number is oven or odd


// var num = Number(window.prompt("Enter a number "))

// if (num % 2 == 0){
//     window.alert("even")
// }else{
//     window.alert("odd")
// }


// 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) 
// then print vowel otherwise print consonant

// var char = window.prompt("Enter a character")

// switch (char) {
//     case "a":
//     case "A":
//     case "e":
//     case "E":
//     case "i":
//     case "I":
//     case "o":
//     case "O":
//     case "u":
//     case "U":
//         window.alert("vowel")
//         break;

//     default:
//         window.alert("Consonant")
//         break;
// }



// 9- Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to 
// that’s number


// var num = Number(window.prompt("Enter a number "))

// for (let index = 1; index <= num; index++) {
//     console.log(index)
// }



// 10- Write a program that allows userto insert integerthen print a multiplication table up to 12.


// var num = Number(window.prompt("Enter a number "))

// for (let index = 2; index <= 10; index++) {
//     console.log(index * num)
// }



// 11- Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers 
// between 1 to this number


// var num = Number(window.prompt("Enter a number "))

// for (let index = 2; index < num; index+=2) {
//     console.log(index)
// }

// 12- Writeaprogramthattaketwointegersthenprintthepower


// var num = Number(window.prompt("Enter a number"));
// var power = Number(window.prompt("Enter power number"));
// var result = num ;
// for (let index = 0; index < power-1; index++) {
//     result *= num 
// }
// console.log(result)




// 12- Write a program to enter marks of five subjects and calculate total, average and 
// percentage.

// var num = parseInt(window.prompt("Enter a number1"));
// var num2 = parseInt(window.prompt("Enter a number2"));
// var num3 = parseInt(window.prompt("Enter a number3"));
// var num4 = parseInt(window.prompt("Enter a number4"));
// var num5 = parseInt(window.prompt("Enter a number5"));

// function sum(one , two , three , four , five){
//     var sumNums = one + two + three + four + five
//     return sumNums
// }

// function average(one , two , three , four , five){
//     var sumNums = sum(one , two , three , four , five)
//     return (sumNums/5)
// }

// function percentage(one , two , three , four , five){
//     var sumNums = sum(one , two , three , four , five)
//     return(sumNums/500*100)
// }

// console.log( "Total is : " + sum(num , num2 , num3 , num4 , num5));
// console.log("Average is : " + average(num , num2 , num3 , num4 , num5));
// console.log("Percentage is : " + percentage(num , num2 , num3 , num4 , num5)+ "%");



// 13-Write a program to input month number and print number of days in that 
// month


// var num = parseInt(window.prompt("Enter the Month number"));


// switch (num) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("31 days");
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//     case 8:
//     case 10:
//     case 12:
//         console.log("30 days");
//         break;
//     case 2:
//         console.log("29 days");
//         break;

//     default:
//         console.log("Error Enter a valid number");
//         break;
// }


// 14- Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade 

// var Physics = parseInt(window.prompt("Enter a Physics"));
// var Chemistry = parseInt(window.prompt("Enter a Chemistry"));
// var Biology = parseInt(window.prompt("Enter a Biology"));
// var Mathematics = parseInt(window.prompt("Enter a Mathematics"));
// var Computer = parseInt(window.prompt("Enter a Computer"));

// function percentage(grade){
//     var gradChar ;
//     var gradePer = grade   ; 
    
//     if(gradePer >= 90){
//         gradChar = "A"
//     }else if(gradePer >=80){
//         gradChar = "B"
//     }
//     else if(gradePer >=70){
//         gradChar = "c"
//     }
//     else if(gradePer >=60){
//         gradChar = "D"
//     }
//     else if(gradePer >=40){
//         gradChar = "E"
//     }
//     else if(gradePer <40){
//         gradChar = "F"
//     }else{
//         gradChar = "Error"
//     }

//     return gradChar
// }

// console.log("Grade of Physics : " + percentage(Physics))
// console.log("Grade of Chemistry : " + percentage(Chemistry))
// console.log("Grade of Biology : " + percentage(Biology))
// console.log("Grade of Mathematics : " + percentage(Mathematics))
// console.log("Grade of Computer : " + percentage(Computer))



// 15-Write a program to print total number of days in month


// var num = parseInt(window.prompt("Enter the Month number"));


// switch (num) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("31 days");
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//     case 8:
//     case 10:
//     case 12:
//         console.log("30 days");
//         break;
//     case 2:
//         console.log("29 days");
//         break;

//     default:
//         console.log("Error Enter a valid number");
//         break;
// }


// 16- Write a program to check whether an alphabet is vowel or consonant 

// var char = window.prompt("Enter a character")

// switch (char) {
//     case "a":
//     case "A":
//     case "e":
//     case "E":
//     case "i":
//     case "I":
//     case "o":
//     case "O":
//     case "u":
//     case "U":
//         window.alert("vowel")
//         break;

//     default:
//         window.alert("Consonant")
//         break;
// }



// 17- Write a program to find maximum between two numbers

// var num = parseInt(window.prompt("Enter first number"))
// var num2 = parseInt(window.prompt("Enter second number"))


// function maxNum(Num, Num2) {
//     var max;
//     switch (true) {
//         case Num >Num2:
//             max = Num
//             break;
//         case Num <Num2:
//             max = Num2
//             break;
//         default:
//             "ERROR"
//             break;
//     }
//     return max;
// }

// console.log(maxNum(num , num2))


// 18- Write a program to check whether a number is even or odd

// function evenOrOdd(num){
//     var result = "UnKnown";
//     switch (num%2) {
//         case 0:
//             result = "even"
//             break;
//         case 1:
//             result = "odd"
//             break;
    
//         default:
//             result = "ERROR"
//             break;
//     }
//     return result
// }


// var Num = parseInt(window.prompt("Enter a number "))
// console.log(evenOrOdd(Num))




// 19- Write a program to check whether a number is positive or negative or zero


// function checkPositiveOrNegativeOrZero(num){
//     var result;

//     switch (true) {
//         case num>0:
//             result = "Positive"
//             break;
//         case num<0:
//             result = "Negative"
//             break;
//         default:
//             result="Zero"
//             break;
//     }
//     return result
// }

// var Num = parseInt(window.prompt("Enter a number "))
// console.log(checkPositiveOrNegativeOrZero(Num))


// 20- Write a program to create Simple Calculator

// var Num1 = parseInt(window.prompt("Enter a number 1 "))
// var Num2 = parseInt(window.prompt("Enter a number 2 "))
// var simple = window.prompt("Enter + or - or * or /  ")

// var result = 0

// switch (simple) {
//     case "+":
//         result = Num1  + Num2
//         break;
//     case "-":
//         result = Num1  - Num2
//         break;
//     case "*":
//         result = Num1  * Num2
//         break;
//     case "/":
//         result = Num1  / Num2
//         break;

//     default:
//         result = "Error"
//         break;
// }

// window.alert(result)