// DEFINE YOUR FUNCTION BELOW:
function sumArray(arr) {
    
    function getSum(accumulator, currentValue) {
        return accumulator += currentValue;
    }
    return arr.reduce(getSum, 0) ;
}