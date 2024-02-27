function kitchen(){
    let roast = 0;
    return function(){
        roast ++;
        return roast;

    }
}

const firstSever = kitchen();
console.log(firstSever());
console.log(firstSever());
console.log(firstSever());
console.log(firstSever());
console.log(firstSever());