let fibo = function (num) {
  // write your code here
  let arr = [1, 1];
  let result = 0;
  let i = 2

  do {
     arr.push(arr[i - 2] + arr[i - 1]);
     i++;
    
  } while (i > num) 

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] <= num) {
      result += arr[i];
    }
  }
  return result;
}

console.log(fibo());
