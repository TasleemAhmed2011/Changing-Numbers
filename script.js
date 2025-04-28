var number;
var maxRange = 6; // Default range for random numbers
var intervalId = null; // To store the interval ID
var isChanging = false; // Flag to track if the change is running

function change() {
    var random = Math.floor(Math.random() * maxRange);
    number.innerHTML = random + 1; // Display numbers based on the current range

    updateBackgroundColor();
}

function setRange(range) {
    maxRange = range; // Update the range for random numbers
    change(); // Trigger a change immediately
}

function toggleChange(range) {
    if (isChanging) {
        clearInterval(intervalId); // Stop the interval
        intervalId = null;
        isChanging = false;
    } else {
        setRange(range); // Set the range and trigger a change
        intervalId = setInterval(change, 500); // Start the interval with 1-second speed
        isChanging = true;
    }
}

function changeButton() {
    toggleChange(10); // Numbers between 1 and 10
}

function changeButton1() {
    toggleChange(100); // Numbers between 1 and 100
}

function changeButton2() {
    toggleChange(1000); // Numbers between 1 and 1000
}

window.onload = function () {
    number = document.getElementById("number");
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");

    button1.onclick = changeButton;
    button2.onclick = changeButton1;
    button3.onclick = changeButton2;

    // Initial setup
    change();
};

function updateBackgroundColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var bgcolor = "rgb(" + r + ", " + g + ", " + b + ")";
    document.body.style.backgroundColor = bgcolor;

    // Calculate brightness using the formula: (0.299*R + 0.587*G + 0.114*B)
    var brightness = 0.299 * r + 0.587 * g + 0.114 * b;

    // Set text color based on brightness
    if (brightness < 128) {
        number.style.color = "white";
    } else {
        number.style.color = "black";
    }
}
