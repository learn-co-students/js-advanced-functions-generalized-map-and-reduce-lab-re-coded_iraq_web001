// Add your functions here
function map(s,l){
  let a = []

for (let i = 0; i<s.length; i++){
  let element = s[i]
  a.push(l(element))
}
return a
}
function reduce(s,l,starting){
  let r = (!!starting) ? starting : s[0]
  let i = (!!starting) ? 0:1
  for (; i < s.length; i++) {
    r=l(s[i],r)
  }
  return r
}
