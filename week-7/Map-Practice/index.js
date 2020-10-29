function cleanNames(arr) {
    let fresh = arr.map(function (x) {
       return x.trim();
    });
    return fresh;
}