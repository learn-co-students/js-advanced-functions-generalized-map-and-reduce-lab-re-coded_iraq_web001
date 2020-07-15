// Add your functions here
function map(src, callBack){
  let nArr = []
  src.forEach(val => nArr.push(callBack(val)))
  return nArr
}

function reduce(src, callBack, SP){
  let nVal = SP ? SP : src[0];
  for (let i= SP ? 0 : 1; i<src.length; i++){
    nVal = callBack(src[i], nVal)
  }
  return nVal
}