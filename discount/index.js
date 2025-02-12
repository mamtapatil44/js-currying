function discountFun(amount,discount,minamount){
    if(amount <minamount ) return amount;

    return amount - (amount * discount)

}
// first we know the minimum abount with per discount then me calculated disount for given amount
const curriedDiscount = (discount)=>(minamount)=>(amount)=>discountFun(amount,discount,minamount);
const discount10 = curriedDiscount(0.10)(50) // 10% discount for mini $50 dollars
const discount20 = curriedDiscount(0.20)(100) // 10% discount for mini $100 dollars

console.log((discount20(60))) //60
console.log((discount10(30))) //30 
console.log((discount20(120))) // here we get calculated discount 96