;(function () {
  // 1.
  function reverseStr(str) {
    return str.split('').reverse().join('')
  }

  console.log(reverseStr('abc') === 'cba');

  // 2. 
  function reverseVoc(str) {
    let finalArr = []
    str.split(' ').forEach(item => {
      item = reverseStr(item)
      finalArr.push(item)
    })
    str = finalArr.join(' ')
    return str
  }

  console.log(reverseVoc('I am Happy') === 'I ma yppaH');
})()

