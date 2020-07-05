// Add your functions here

function map(arr, callbackFunc) {
  let newArr = [];
  for(let item of arr){
    newArr.push(callbackFunc(item))
  }
  return newArr
}

function reduce(arr, callbackFunc, startgPoint) {
  let newValue = startgPoint ? startgPoint : arr[0]
  for (let i = startgPoint ? 0 : 1; i < arr.length; i++) {
    newValue = callbackFunc(arr[i], newValue)
  }
  return newValue
}
