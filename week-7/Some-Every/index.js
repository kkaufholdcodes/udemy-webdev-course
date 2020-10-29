function allEvens(arr){
    let isEven = (num) => (num % 2) === 0;
    return arr.every(isEven);
}