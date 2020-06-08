function map(array, callback) {
  let newArray = [];
  array.forEach(item => {
    newArray.push(callback(item))
  })
  return newArray;
}

function reduce(array, callback, startingPoint) {
  let newArray2 = startingPoint ? startingPoint : array[0]
  for (let i = startingPoint ? 0 : 1; i < array.length; i++) {
    newArray2 = callback(array[i], newArray2)
  }
  return newArray2
}