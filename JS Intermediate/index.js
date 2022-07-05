//1. Addition
let sum = 0;
for (i = 200; i < 2700; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    sum = sum + i;
  }
}
console.log(sum);

//2. Shift the Values
let X = [2, 1, 6, 4, -7];
X.reverse();
console.log(X);

// 3. FizzBuzz
let array = [];
for (i = 1; i < 135; i++) {
  if(i % 3 == 0 && i % 5 == 0)  {
    array[i] = "FizzBuzz";
  } else if (i % 5 == 0) {
    array[i] = "Buzz";
  } else if(i % 3 == 0) {
    array[i] = "Fizz";
  } else {
    array[i] = i;
  }
  array.push(array[i]);
}
console.log(array);
//4. Fibonacci
function Fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log(Fibonacci(2));
console.log(Fibonacci(3));
console.log(Fibonacci(7));

//5. Remove the Negative

function remove(negative) {
  var finalResult = [];
  for (let i = 0; i < negative.length; i++) {
    if (negative[i] < 0) {
      finalResult.delete;
    } else {
      finalResult.push(negative[i]);
    }
  }
  console.log(finalResult);
}
const x = [1, -2, 4, -5, 1];
remove(x);

//6. Communist Censorship
function replace(replaced){
  let last=[];
  for(let i=0;i<replaced.length;i++){
    if(X[i]==="Program"){
      last.push("*********")
    } else{
      last.push(replaced[i]);
    }
  }
  console.log(last);
}
 X=['Man', 'I','Love','The','Matrix','Program'];
replace(X);
