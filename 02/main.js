;(function () {
  let num = prompt('請輸入一個數字') - 0
  let remainNumArr = []
  for (let i = 0; i < num; i++) {
    let num = i + 1
    if (num % 15 == 0) {
      remainNumArr.push(num)
    } else if (num % 3 == 0 || num % 5 == 0) {
      continue
    } else {
      remainNumArr.push(num)
    }
  }
  console.log(remainNumArr.length);

})()