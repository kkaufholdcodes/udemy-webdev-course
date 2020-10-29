const validUserNames = (arr) => {
    let valid = arr.filter(pass => pass.length < 10);
    return valid;
}