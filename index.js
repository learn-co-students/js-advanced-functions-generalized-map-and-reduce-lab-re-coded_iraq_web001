// Add your functions here
function map (array, callbackFn){
  let newArry = [];
  for (var i = 0; i < array.length; i++) {
    newArry.push(callbackFn(array[i]))
  }
  return newArry;
}

function reduce(array , callbackFn  , startingPoint=0){
  let acc=startingPoint==0?array[0]:startingPoint;
  for (let i = startingPoint==0?1:0; i < array.length; i++) {
  acc = callbackFn(acc,  array[i]);
  }
return acc;
}
