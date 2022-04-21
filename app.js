function highAndLow(numbers){
    const stringToArr = numbers.toString().split(" ")
    const arrOfNum = []
    let largest;
    let lowest;
    
    stringToArr.forEach(str => {
    arrOfNum.push(Number(str));
  });
  
    arrOfNum.sort((a,b) => a-b)
      largest =  arrOfNum[arrOfNum.length - 1].toString()
      lowest = arrOfNum[0].toString()
      return largest + " " + lowest
  }