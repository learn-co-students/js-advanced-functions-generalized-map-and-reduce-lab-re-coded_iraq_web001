// Add your functions here

const Alist=[1,5,2,9,8];
const map=function(arr,xx){
  let newarr=[];
  arr.forEach(element=>{
    newarr.push(xx(element));
  });
  return newarr;
}

const reduce=function(arr,xx,start){
  let acc=arr[0];
  let i;
  if(!!start)
  acc +=start;
  for(i=1;i<arr.length;i++){
    acc=xx(acc,arr[i])
  }
  return acc;
}