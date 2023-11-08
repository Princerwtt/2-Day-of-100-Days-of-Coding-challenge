  // Function to generate a random hex color
  function randomHexColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// Get references to HTML elements
const colorBox = document.getElementById('color-box');
const colorCode = document.getElementById('color-code');
const generateColorButton = document.getElementById('generate-color');

// Add an event listener to the button
generateColorButton.addEventListener('click', () => {
    // Generate a random color and update the display
    const randomColor = randomHexColor();
    colorBox.style.backgroundColor = randomColor;
    colorCode.textContent = randomColor;
});