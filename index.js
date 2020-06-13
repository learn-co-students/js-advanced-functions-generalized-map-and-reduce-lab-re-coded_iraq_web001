let arr = [1, 2, 3, -9]
function Negate(num){
  
  return num * -1
}


function map(arr,callback){
 let arr1 = []
 for (let i =0 ; i<arr.length;i++){
   let element = arr[i]
   arr1.push(callback(element))
 }
 return arr1
  }
  
  map(arr,Negate)
  
  function sumation(accum,value){
    return accum += value
    
  }
  
  let src = [1,2,3]
  function reduce(src,callback,stValue){
    let accum = stValue
  if (accum){
  for (let i = 0 ; i< src.length ; i++){
  let element = src[i]
  accum  =  callback(accum,element)
  }}
  else {
    accum = src[0]
    for (let i = 1 ; i< src.length ; i++){
  let element = src[i]
  accum  =  callback(accum,element)
  }
  }
  return accum ;
  }
  
  reduce(src,sumation)
  
 
  
  
  
  
  
  