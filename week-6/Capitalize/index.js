// DEFINE YOUR FUNCTION BELOW:
function capitalize(string) {
    let result = "";
    result += string.slice(0,1).toUpperCase();
    result += string.slice(1);
    return result;
}