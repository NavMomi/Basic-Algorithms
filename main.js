//1. Print 1 - 135
for (i = 1; i <= 135; i++) {
  console.log(i);
}

//2. Print Odd Numbers 1 - 135
for (i = 1; i <= 135; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
//3. Sum of Printed Numbers
let sum = 0;
for (let i = 0; i <= 135; i++) {
  sum = sum + i;
  {
    console.log("number is: " + i + " sum: " + sum);
  }
}
// 4. Print the elements of an array
let x = [2, 3, "Nav", 9];
for (let i = 0; i < x.length; i++) {
  console.log(x[i]);
}
//5. Find Max
let z = [2, 0, -1, 8];
console.log(Math.max(...z));

//6. Get Average
num=[2,1,3];
let total=0;
for(let i=0;i<num.length;i++){
  total=total+num[i];
}
console.log(total/num.length);

//7. Eliminate the Negatives
function Eliminate(Negatives) {
  let result = [];
  for (i = 0; i < Negatives.length; i++) {
    if (Negatives[i] < 0) {
      result.push(0);
    } else {
      result.push(Negatives[i]);
    }
  }

  console.log(result);
}
let X = [2, -1, 4, -3];
Eliminate(X);

//8. Number to String
function numbertostring(str){
    let array=[];
    for(i=0;i<str.length;i++){
        if(str[i]<0){
            array.push('Turing')
        } else{
            array.push(str[i]);
        }
    }
    console.log(array);
}
var Y=[1,-4,0,-1] ;
numbertostring(Y);
