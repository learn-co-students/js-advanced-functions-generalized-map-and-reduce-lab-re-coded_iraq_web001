let arr = [1,2,3,4,5];
function map(arr,fun){
    let newArray = []
    for(let i=0;i<arr.length;i++){
      newArray.push(fun(arr[i]))
    }
    return newArray}
function reduce(arr,fun,str){
    let newArray = arr.reduce(fun)
    if(str){
      return newArray + str;
    }
    else{
        return newArray;
    }
  }
