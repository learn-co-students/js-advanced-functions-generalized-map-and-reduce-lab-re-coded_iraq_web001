// Add your functions here
function map(array, functions) {
  let newArr=[]
   array.forEach(el=>{
     newArr.push(functions(el))
   })
   return newArr
}
function reduce(array, functions, startingPoint) {

}
