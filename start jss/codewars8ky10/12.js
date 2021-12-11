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

  