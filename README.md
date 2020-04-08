If you wanna check out some of the fib solutions:
"regular" fib: https://repl.it/@JessicaBracht1/regFib
memoized fib: https://repl.it/@JessicaBracht1/memoFib

let memo = {}; // hash table

function fib(n) {
  if(n === 0 || n === 1) return n;

  if(memo[n]) return memo[n];

  memo[n] = fib(n-1) + fib(n-2);

  return memo[n];
}

fib(50);


function fib(n) {
  if(n === 0 || n === 1) return n;
  return fib(n-1) + fib(n-2);
}

fib(5); // 2^n
// fib(50) // will turn your computer into a rocketship

// [0,1,1,2,3,5,8,13,21]..
