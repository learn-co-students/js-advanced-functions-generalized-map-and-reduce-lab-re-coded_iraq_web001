// Add your functions here
function map(array, functions) {
  let newArr=[]
   array.forEach(el=>{
     newArr.push(functions(el))
   })
   return newArr
}
function reduce(array, functions, startingPoint) {
  let checkArr = (!!startingPoint) ? startingPoint : array[0];
    for (let i= (!!startingPoint) ? 0 : 1 ; i < array.length; i++) {
      checkArr = functions(array[i], checkArr)
    }
    return checkArr;
}
