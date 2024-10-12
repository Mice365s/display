// nFunction to create bouncing letters in the background
function createBouncingLetters() {
    const container = document.querySelector('.bouncing-letters');
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Define the letters to use
    const numberOfLetters = 30; // Number of letters to generate

    for (let i = 0; i < numberOfLetters; i++) {
        const letter = document.createElement('div');
        letter.classList.add('bouncing-letter');
        letter.textContent = letters[Math.floor(Math.random() * letters.length)];
        
        // Set random position
        letter.style.left = Math.random() * window.innerWidth + 'px';
        letter.style.top = Math.random() * window.innerHeight + 'px';
        
        // Set random animation direction and speed
        const directionX = (Math.random() > 0.5 ? 1 : -1);
        const directionY = (Math.random() > 0.5 ? 1 : -1);
        const speedX = (Math.random() * 2 + 1) * directionX; // Random speed between 1 and 3
        const speedY = (Math.random() * 2 + 1) * directionY; // Random speed between 1 and 3
        
        // Animate letter
        animateLetter(letter, speedX, speedY);
        container.appendChild(letter);
    }
}

// Function to animate each letter
function animateLetter(letter, speedX, speedY) {
    let posX = parseFloat(letter.style.left);
    let posY = parseFloat(letter.style.top);

    function move() {
        // Update position
        posX += speedX;
        posY += speedY;

        // Check for wall collisions
        if (posX <= 0 || posX >= window.innerWidth - letter.clientWidth) {
            speedX = -speedX; // Reverse direction on x-axis
        }
        if (posY <= 0 || posY >= window.innerHeight - letter.clientHeight) {
            speedY = -speedY; // Reverse direction on y-axis
        }

        // Update letter position
        letter.style.left = posX + 'px';
        letter.style.top = posY + 'px';

        // Request next frame
        requestAnimationFrame(move);
    }

    move(); // Start the animation
}

// Function to display the entered name with animation
function displayName() {
    var name = document.getElementById("nameInput").value.trim(); // Get the name from input
    var nameDisplay = document.getElementById("nameDisplay"); // Get the display element

    // Clear the previous name display content
    nameDisplay.innerHTML = '';

    if (name === "") { // Check if the input is empty
        alert("Please enter a name!");
        return;
    }

    // Loop through each character in the name and create a span element
    for (let i = 0; i < name.length; i++) {
        let span = document.createElement("span");
        span.classList.add("letter"); // Add letter class for styling
        span.textContent = name[i]; // Set the letter text

        // Delay the animation for each letter by increasing the delay
        span.style.animationDelay = `${(name.length - i - 1) * 0.2}s`; // Reverse order for right to left

        // Append the letter to the display container
        nameDisplay.appendChild(span);
    }
}

// Start the bouncing letters when the page loads
window.onload = createBouncingLetters;
