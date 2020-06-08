// Add your functions here

function map(sourceArray,work){
  let newArr=[]
    sourceArray.forEach(elem=>{
      newArr.push(work(elem));
    });
    return newArr;
}
function reduce(arr, callback, startingValue){
  let memo = (!!startingValue) ? startingValue : arr[0]
  // let i = (!!starting) ? 0 : 1

  for (let i= (!!startingValue) ? 0 : 1 ; i < arr.length; i++) {
    memo = callback(arr[i], memo)
  }

  return memo;
}
