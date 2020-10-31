const input = document.querySelector("input");
input.addEventListener("input", function (e) {
    document.querySelector("h1").innerText = "Welcome, " + input.value;
    if (!input.value) {
        document.querySelector("h1").innerText = "Enter Your Username";
    }
});