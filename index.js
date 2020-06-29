// Add your functions here
function map(source, callback){
  let result = [];
  source.forEach(elem => {
    result.push(callback(elem));
  })
  return result
}

function reduce(source, callback, startingPoint){
  let result = (!!startingPoint) ? startingPoint : source[0]
  let i = (!!startingPoint) ? 0 : 1
  for(i;i<source.length;i++){
    result = callback(source[i], result)
  }
  return result
}
