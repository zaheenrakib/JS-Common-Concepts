// prints();
console.log(print10);
print10();
for(let i =0; i < 5; i++){
    // console.log(i);
}
// console.log('outside',i);

function prints(){
    console.log('inside prints',5);
}

var print10 = function(){
    console.log('inside prints 10',10);;
}