 function map(array,fun){
  let resultarray=[]
  array.forEach(index=>{
    resultarray.push(fun(index))
  })
  return resultarray
}

function reduce(array, func, startingPoint){
     let accumulator;
     let index;

     if(!!startingPoint){
         accumulator = startingPoint;
         index = 0;
     } else {
         accumulator = func(array[0],array[1]);
         index = 2;
     }
     for(index; index< array.length; index++){
         accumulator = func(accumulator, array[index])
     }
     return accumulator;
 } 