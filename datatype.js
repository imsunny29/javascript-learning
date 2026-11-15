// Primitive Datatype
// Null, Number, Boolean, Bigint, String, Symbol, Undefined

let a = null
let b = 345;
let c =  true;
let d = BigInt("567") + BigInt("3")
let e = "Sunny"
let f = Symbol("nice symbol")
let g = undefined
console.log(a, b, c, d, e, f, g)
console.log(typeof d)

//Non Primitive Datatype
const item = {
    "Sunny": true,
    "Shubh": false,
    "Lovish": 67,
    "Rohan": undefined
}
console.log(item["Sunny"])