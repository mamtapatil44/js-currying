

function valiadte(inputfield,rule){
    return rule(inputfield)

}
const curiedVliadtion =(rule)=>(inputfield)=>valiadte(inputfield,rule)
const isrequired =(value)=>value.trim() !== '';
const isEmail =(value)=> /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
const validateRequired = curiedVliadtion(isrequired)
const validateEmail = curiedVliadtion(isEmail);
console.log(validateRequired('mamta')) //true
console.log(validateEmail('mamtapatil@gmail.com')) //true
console.log(validateRequired('')) //false