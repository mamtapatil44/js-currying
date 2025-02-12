
function withoutCurrying(a, b, c) {
    return a * b * c;

}

function multiplyWIthCurrying(a) {
    return function (b) {
        return function (c) {
            return a * b * c;

        }
    }

}

console.log("multiplication ", multiplyWIthCurrying(2)(3)(4)) //24

// shortend form
const add =(a)=>(b)=>(c)=>a+b+c;
console.log("addition ",add(1)(2)(3)) //6