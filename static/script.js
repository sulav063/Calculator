function appendToDisplay(value) {
    let display = document.getElementById("display");
    let calculationDiv = document.getElementById("calculation");

    display.value += value;
    calculationDiv.innerHTML = display.value; // Show the ongoing calculation
}

function clearDisplay() {
    document.getElementById("display").value = "";
    document.getElementById("calculation").innerHTML = "";
}

function calculateResult() {
    let expression = document.getElementById("display").value;

    fetch("/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ expression: expression })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("display").value = data.result;
        document.getElementById("calculation").innerHTML = expression + " = " + data.result;
    })
    .catch(error => console.error("Error:", error));
}
