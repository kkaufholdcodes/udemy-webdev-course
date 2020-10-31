const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const productInput = document.getElementById("product").value;
    const qtyInput = document.getElementById("qty").value;
    const newLI = document.createElement("li");
    newLI.innerText = qtyInput + " " + productInput;
    document.getElementById("list").appendChild(newLI);
    document.getElementById("product").value = "";
    document.getElementById("qty").value = "";
});