// Find a union b
// Find a intersection b
// Find a with b

const a = [1, 2, 3, 4, 5, 4, 6]
const b = [4, 6, 7, 8, 0, 9]
const aUb = [...a, ...b]

let setA = new Set(a)
let setB = new Set(b)
console.log(setA) //[1, 2, 3, 4, 5, 6]
console.log(setB)  //[ 4, 6, 7, 8, 0, 9 ]

let AuB = new Set(aUb)
console.log(AuB) //Set(10) [ 1, 2, 3, 4, 5, 6, 7, 8, 0, 9 ]

let aInb = a.filter((n) => setB.has(n))
let aInbSet = new Set(aInb)
console.log(aInbSet) //Set [ 4, 6 ]

let aWithb = a.filter((n) => !setB.has(n))
let aWithbSet = new Set(aWithb)
console.log(aWithbSet) //Set(4) [ 1, 2, 3, 5 ]

let bWitha = b.filter((n) => !setA.has(n))
let bWithaSet = new Set(bWitha)
console.log(bWithaSet) //Set(4) [ 7, 8, 0, 9 ]