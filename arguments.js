//array like object
function sum(a,b,c){
    const args = [...arguments];
    // console.log(args);
    const result = a + b+ c;
    return result;
}

const total = sum(45,23,89,76,43,56);
// console.log(total);

console.log(sum.length);