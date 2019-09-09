function nextLargest(num) {
  let result = 0;
  /*found this method of turning number into array of digits using ES6 methods on Stack Overflow; better than using parseInt(), split(), join(), toString()*/
  const arr = Array.from(num.toString()).map(Number);
  const rev = [...arr].reverse();
  
  /*Code as written below, without commented out code, works for 3-5 digit numbers, as far as I had time to test them. I originally based my theory on larger numbers, which required the commented out code to work*/
  for (let i = 0; i <= rev.length; i++) {
    if (rev[i] > rev[i + 1]) {
      const partial = rev.slice(0,i+2);
      const replace = partial.find(function(number) {
        return number > rev[i + 1]
      })
      rev.splice(i+2, 0, replace);
      const remove = rev.indexOf(replace);
      rev.splice(remove, 1);
      /*let partial2 = rev.slice(0,i+1);
      console.log(partial2);
      partial2 = partial2.sort(function(a,b) {
        return b - a
      })
      partial3 = rev.slice(i+1, rev[rev.length - 1]);
      result = partial2.concat(partial3).reverse();
      return parseInt(result.join(''), 10);*/
      result = rev.reverse().join('');
      return parseInt(result);
    }
  }
  return false;
}