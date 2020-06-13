function map(sourceArr, callback){
  let newArr = [];
  for (let i = 0; i < sourceArr.length; i++) {
    newArr.push(callback(sourceArr[i]));
  }
  return newArr;
}

function reduce(sourceArr, callback, startingValue){
  let memo = startingValue ? startingValue : sourceArr[0];
  for (let i = startingValue ? 0 : 1; i < sourceArr.length; i++) {
    memo = callback(sourceArr[i], memo);
  }
  return memo;
}