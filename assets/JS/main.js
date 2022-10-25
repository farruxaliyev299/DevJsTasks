//#region Task 1
// let A = parseFloat(prompt("Number 1:"));
// let B = parseFloat(prompt("Number 2:"));

// console.log(`Division result : ${A/B} , Remainder: ${A%B}`);
//#endregion

//#region Task 2
// let A = parseFloat(prompt("Enter the value of A:"));
// let B = parseFloat(prompt("Enter the value of B:"));

// console.log(`Initial values : A = ${A} , B = ${B}`);

// let temp = A;
// A = B;
// B = temp;

// console.log(`Final values : A = ${A} , B = ${B}`);
//#endregion

//#region Task 3
// let A = parseFloat(prompt(`AX + B = C ; Enter the value of A`));
// let B = parseFloat(prompt(`${A}X + B = C ; Enter the value of B`));
// let C = parseFloat(prompt(`${A}X + ${B} = C ; Enter the value of C`));

// if(A === 0 || B === 0 || C === 0 || isNaN(A) || isNaN(B) || isNaN(C)){
//     alert("Value can not be 0");
// }
// else{
//     alert(`Final Equation : ${A}X + ${B} = ${C}`)
    
//     alert(`X = (${C}-${B})/${A} , X = ${(C-B)/A}`);
// }
//#endregion

//#region Task 4
// let A = parseFloat(prompt(`Enter the value of A`));
// let B = parseFloat(prompt(`Enter the value of B`));

// if(A > B){
//     console.log(`A + B = ${A+B}`);
// }
// else if(A === B){
//     console.log(`A * B = ${A*B}`);
// }
// else{
//     console.log(`A - B = ${A-B}`);
// }
//#endregion

//#region Task 5
// const A = parseFloat(prompt(`AX^2 + BX + C = 0 ; Enter the value of A`));
// const B = parseFloat(prompt(`${A}X^2 + BX + C = 0 ; Enter the value of B`));
// const C = parseFloat(prompt(`${A}X^2 + ${B}X + C = 0 ; Enter the value of C`));
// alert(`${A}X^2 + ${B}X + ${C} = 0`)

// const D = (B * B) - (4 * A * C);

// console.log(D);

// if(D > 0){
//     const X1 = (-B + Math.sqrt(D))/(2 * A);
//     const X2 = (-B - Math.sqrt(D))/(2 * A);

//     console.log(`X1 = ${X1} ; X2 = ${X2}`);
// }
// else if(D === 0){
//     const X = -B / (2 * A)

//     console.log(`X = ${X}`);
// }
// else{
//     console.log(`Equation has no solution with real numbers`);
// }
//#endregion

//#region Task 6
// const A = parseFloat(prompt(`Enter two digit number`))

// if((A / 10) >= 1){
//     let first = "";
//     let second = "";

//     let check = false;

//     switch (parseInt((A / 10) % 10)) {
//         case 1:
//             if(A%10 === 0){
//                 first += "ten";
//             }
//             else if(A % 10 === 1){
//                 first += "eleven";
//             }
//             else if(A % 10 === 2){
//                 first += "twelve";
//             }
//             else if(A % 10 === 3){
//                 first += "thirteen";
//             }
//             else if(A % 10 === 4){
//                 first += "fourteen";
//             }
//             else if(A % 10 === 5){
//                 first += "fifteen";
//             }
//             else if(A % 10 === 6){
//                 first += "sixteen";
//             }
//             else if(A % 10 === 7){
//                 first += "seventeen";
//             }
//             else if(A % 10 === 8){
//                 first += "eighteen";
//             }
//             else if(A % 10 === 9){
//                 first += "nineteen";
//             }
//             check = true;
//             break;
//         case 2:
//             first += "twenty";
//             break;
//         case 3:
//             first += "thirty";
//             break;
//         case 4:
//             first += "fourty";
//             break;
//         case 5:
//             first += "fifty";
//             break;
//         case 6:
//             first += "sixty";
//             break;
//         case 7:
//             first += "seventy";
//             break;
//         case 8:
//             first += "eighty";
//             break;
//         case 9:
//             first += "ninety";
//             break;
//         default:
//             break;
//     }

//     if(!check){
//         switch (A % 10) {
//             case 1:
//                 second += "one";
//                 break;
//             case 2:
//                 second += "two";
//                 break;
//             case 3:
//                 second += "three";
//                 break;
//             case 4:
//                 second += "four";
//                 break;
//             case 5:
//                 second += "five";
//                 break;
//             case 6:
//                 second += "six";
//                 break;
//             case 7:
//                 second += "seven";
//                 break;
//             case 8:
//                 second += "eight";
//                 break;
//             case 9:
//                 second += "nine";
//                 break;
//             default:
//                 break;
//         }   
//     }

//     console.log(first + " " + second);
// }
// else{
//     console.log(`Number must be two digit`);
// }
//#endregion

//#region Task 7
// //if center of the circle is at origin (0;0) coordinates
// let X = parseInt(prompt(`Enter the X value `));
// let Y = parseInt(prompt(`Enter the Y value `));
// let R = parseInt(prompt(`Enter the Radius `));

// //Equation for circle with center at origin is X^2 + Y^2 < R^2

// if(Math.pow(X,2) + Math.pow(Y,2) < Math.pow(R,2)){
//     console.log(`(${X};${Y}) point is within the circle`);
// }
// else{
//     console.log(`(${X};${Y}) point is not within the circle`);
// }
//#endregion