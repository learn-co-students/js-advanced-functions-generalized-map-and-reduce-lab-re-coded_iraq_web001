function map(arr, callbackFn) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callbackFn(arr[i]))
  }
  return newArr
}

function reduce(arr, callbackFn, startingPoint) {
  let newValue = startingPoint ? startingPoint : arr[0]
  for (let i = startingPoint ? 0 : 1; i < arr.length; i++) {
    newValue = callbackFn(arr[i], newValue)
  }
  return newValue
}
