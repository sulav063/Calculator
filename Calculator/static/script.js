// Function to append characters to the display
function appendCharacter(char) {
    let display = document.getElementById("display");
    if (display.innerText === "0") {
        display.innerText = char;
    } else {
        display.innerText += char;
    }
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").innerText = "0";
}

// Function to delete last character (Backspace)
function backspace() {
    let display = document.getElementById("display");
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === "") {
        display.innerText = "0";
    }
}

// Function to send calculation request to the backend
async function calculate() {
    let expression = document.getElementById("display").innerText;

    let response = await fetch("/calculate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ expression: expression })
    });

    let data = await response.json();
    if (data.result !== undefined) {
        document.getElementById("display").innerText = data.result;
    } else {
        document.getElementById("display").innerText = "Error";
    }
}
