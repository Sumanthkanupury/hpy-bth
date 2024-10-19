document.addEventListener('DOMContentLoaded', () => {
    const balloonContainer = document.getElementById('balloonContainer');
    const birthdayMessage = document.getElementById('birthdayMessage');
    const popBalloonsButton = document.getElementById('popBalloonsButton');
    const confettiContainer = document.getElementById('confettiContainer');

    const message = "Happy Birthday Aditya"; // Message to display
    let currentIndex = 0;

    // Function to create confetti
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Random color
        confettiContainer.appendChild(confetti);

        // Remove confetti after falling
        setTimeout(() => {
            confetti.remove();
        }, 1000);
    }

    // Function to show confetti animation
    function showConfetti() {
        confettiContainer.style.opacity = 1; // Make confetti container visible
        for (let i = 0; i < 50; i++) {
            setTimeout(createConfetti, i * 100); // Create confetti with a delay
        }
        setTimeout(() => {
            confettiContainer.style.opacity = 0; // Hide confetti container after animation
        }, 2000);
    }

    // Function to create balloons
    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}%`;
        balloonContainer.appendChild(balloon);

        // Remove balloon after rising
        setTimeout(() => {
            balloon.classList.add('pop');

            // Show letters after balloon pops
            setTimeout(() => {
                balloon.remove();

                if (currentIndex < message.length) {
                    const letter = document.createElement('span');
                    letter.textContent = message[currentIndex];
                    letter.classList.add('letter');
                    letter.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
                    birthdayMessage.appendChild(letter);

                    // Trigger bounce animation
                    setTimeout(() => {
                        letter.classList.add('bounce');
                        letter.style.opacity = 1; // Fade in after bounce
                    }, 50);

                    currentIndex++;
                }
            }, 500); // After balloon pops
        }, 1000); // After balloon rises
    }

    // Pop balloons and reveal letters
    popBalloonsButton.addEventListener('click', () => {
        currentIndex = 0;
        birthdayMessage.innerHTML = ''; // Clear previous letters
        birthdayMessage.style.opacity = 0; // Start hidden

        showConfetti(); // Show confetti animation

        setTimeout(() => {
            birthdayMessage.style.opacity = 1; // Make message visible
            for (let i = 0; i < message.length; i++) {
                setTimeout(createBalloon, i * 1500); // Create a balloon every 1.5 seconds
            }
        }, 2000); // Wait for 2 seconds before starting balloons
    });
});
