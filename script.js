//your JS code here. If required.
let counter = 0;

// Get the button and counter elements
const incrementBtn = document.getElementById("incrementBtn");
const counterParagraph = document.getElementById("counter");

// Add event listener to the button
incrementBtn.addEventListener("click", () => {
    // Display alert with the current counter value
    alert(`localHost: 3000 says \n ${counter}`);

    // Increment the counter
    counter++;

    // Update the counter paragraph text
    counterParagraph.textContent = counter;
});