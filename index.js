// Add your functions here

function map(array,callback){
  let newArray =[]
  for(let i=0;i<array.length;i++){
   newArray.push(callback(array[i]))
  }
  return newArray
}
function reduce(arr, cb, start) {
  let accum = start;
  if(accum) {
    for(let i=0; i<arr.length; i++) {
      accum = cb(accum, arr[i])
    }
  } else {
    accum = arr[0];
    for(let i=1; i<arr.length; i++) {
      accum = cb(accum, arr[i])
    }
  }
  
  return accum
}