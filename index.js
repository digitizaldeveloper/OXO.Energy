        // JavaScript to handle the mobile menu toggle
        document.addEventListener('DOMContentLoaded', () => {
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinks = document.querySelector('.nav-links');

            menuToggle.addEventListener('click', () => {
                // Toggles the 'active' class, which the CSS uses to show/hide the menu
                navLinks.classList.toggle('active');
            });
            
            // OPTIONAL: Close menu when a link is clicked (useful for single-page sites)
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                });
            });
        });
        document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.how-it-works-section');
    const imageElement = document.getElementById('stepImage');
    const stepCards = [
        document.getElementById('step1'),
        document.getElementById('step2'),
        document.getElementById('step3')
    ];
    
    // Base path for your images
    const imageBaseUrl = './images/';

    // Total number of steps
    const totalSteps = stepCards.length;

    function updateScrollSteps() {
        // 1. Get the current scroll position relative to the top of the section
        const rect = section.getBoundingClientRect();
        const sectionScrollTop = -rect.top;

        // 2. Calculate the height of one scroll segment (section height - viewport height)
        // We use window.innerHeight because the content is sticky and occupies 100vh
        const totalScrollableHeight = section.offsetHeight - window.innerHeight;
        
        // Use a fraction of the total scrollable height for each step transition
        // The scroll needs to transition 3 times, so divide the height into 3 segments
        const segmentHeight = totalScrollableHeight / totalSteps;

        // 3. Determine the current step index (0, 1, or 2)
        // Clamp the scroll position to be at least 0
        const clampedScrollTop = Math.max(0, sectionScrollTop);
        
        // Divide by segmentHeight and floor the result to get the step index
        let currentStepIndex = Math.floor(clampedScrollTop / segmentHeight);
        
        // Ensure the index doesn't exceed the number of steps
        currentStepIndex = Math.min(currentStepIndex, totalSteps - 1);


        // 4. Update the UI (Image and Text)
        
        // Update the Image
        const newStepNumber = currentStepIndex + 1;
        imageElement.src = `${imageBaseUrl}${newStepNumber}.png`;
        imageElement.alt = `Crystalline bull representing AI energy process step ${newStepNumber}`;

        // Update the Text Card Visibility
        stepCards.forEach((card, index) => {
            if (index === currentStepIndex) {
                card.classList.add('active-step');
            } else {
                card.classList.remove('active-step');
            }
        });
    }

    // Attach the function to the scroll event
    window.addEventListener('scroll', updateScrollSteps);

    // Initial call to set the correct state when the page loads
    updateScrollSteps();
});