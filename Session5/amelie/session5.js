//let ageGroup;
//const age = 20;
//if(age<18){
//    ageGroup = "Child";
//
//}else{
//    ageGroup = "Adult";
//}

//console.log("ageGroup:",ageGroup);


let age = 18;
let ageGroup = age<18?"child":"adult";

let reactionTime = 100;
switch (true) {
case reactionTime < 200 && reactionTime > 0:
console.log("Fast Response! Excellent!");
break;
case reactionTime <= 500 && reactionTime >= 200
:
console.log("Moderate Response! Keep it up!");
break;
case reactionTime > 500:
console.log("Slow Response. Try to improve!");
break;
default:
console.log("Invalid reaction time.");
}