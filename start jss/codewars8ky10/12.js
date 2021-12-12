const quarterOf = (month) => {
    if (month  >= 1 && month <= 3) {
      return 1;
      }
    else if (month <= 6 && month >=4) {
      return 2;
      }
    else if (month <= 9 && month >=7 ) {
      return 3;
      }
    else {
      return 4;
      }
  }
  // a wold in sheep clothing kak 4to gde
  function warnTheSheep(queue) {
    if (queue[queue.length -1] === 'wolf') {
      return 'Pls go away and stop eating my sheep';
      } else {
       let index = queue.findIndex( (x) => x == 'wolf' );
       return `Oi! Sheep number ${queue.length - index - 1}! You are about to be eaten by a wolf!`;
      }
  }

  //Total amount of points ?????
  function points(games) {
    let point;
    const result = games.map((num) => {
       if(Number(num.charAt(0)) > Number(num.charAt(2))) {
         return point = 3;
       }else if(Number(num.charAt(0)) === Number(num.charAt(2))){
         return point = 1;
       }else {
         return point = 0;
      }
    })
    
    return result.reduce((x, y) => x + y);
  }
//Cat Year Dog Years
  var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    if (humanYears == 1) {return [1, 15, 15];}
    if (humanYears == 2) {return [2, 24, 24];}
    return [humanYears, 24+((humanYears-2)*4), 24+(humanYears-2)*5];
  }
// Array plus array ????
  function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, b) => a + b);
  }
  // reversed sequence
  const reverseSeq = n => {
    const x = [];
    for (let i = n;  i > 0; i -=1){
     x.push(i);
    }
    return x;
  };

// sum the strings 
function sumStr(a,b) {
  return Number(a)+Number(b)+'';
}

//Take the Derivative  /razobrat`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function derive(coefficient,exponent) {
  return `${coefficient * exponent}x^${exponent-1}`
}

//capitalization and mutability /!!!!!!!!!!!!
function capitalizeWord(word) {
  return `${word[0].toUpperCase()}${word.slice(1,)}`
}
// do u speak english ?? 
function spEng(sentence){
  //write your code here
    const reg = /english/i;
    return reg.test(sentence);
  }