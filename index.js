// Add your functions here
function map(src,a) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(a(src[i])) // Unique work
  }
  return r
}
function reduce(src,fn, arr = 0){
   let val = arr
   for(let element of src){
     val = fn(val, element )
   }
   return val
}
sourceArray = [1, 2, true, "razmatazz"]
console.log(reduce(sourceArray, function(a, memo){ return !!a && !!memo},true))