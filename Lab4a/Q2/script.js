
function checkInput() {

    let input = document.getElementById("userInput").value.trim();
    let number = Number(input);
    let result = document.getElementById("result");

    if (input === "" || !Number.isFinite(number)) {
        result.textContent = "Please enter a valid number!";
    }
    else if (number < 10) {
        result.textContent = "The number is lower than 10";
    }
    else if (number > 10) {
        result.textContent = "The number is higher than 10";
    }
    else {
        result.textContent = "The number is equal to 10";
    }

}

document.getElementById("checkBtn").addEventListener("click", checkInput);
