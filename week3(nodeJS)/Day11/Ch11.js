function AddNum(num1, num2) {
    return num1 + num2;}
function SubtractNum(num1, num2){
    return num1 - num2;}
function MultiplyNum(num1, num2){
    return num1 * num2;
}
function DivideNum(num1, num2){
    if (num2 === 0) {
        return "Error, num2 must be greater than 0";
    } else {
        return num1 / num2;
    
}
}
// console.log('add '+AddNum(24,12));
// console.log('Subtract '+SubtractNum(24,12));
// console.log('Multiply '+MultiplyNum(24,12));
// console.log('Divide '+DivideNum(24,12));
// console.log('Divide '+DivideNum(24,0));
