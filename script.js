window.addEventListener("load", function() {
    const loadingScreen = document.getElementById("loading-screen");
    const loadingLine = document.getElementById("loading-line");
    const mainContent = document.getElementById("main-content");
    const loadingText = document.getElementById("loading-text");

    //loadingScreen.style.opacity = 1;

    // Start the loading animation
    loadingLine.style.width = '100%';

    // Once the transition ends, shrink the loading line and show the content
    loadingLine.addEventListener('transitionend', function() {
        setTimeout(function() {
            // start shrinking the line
            loadingLine.style.transition = 'width 1s ease-in-out';
            loadingLine.style.width = '0%';

            // After the line has shrunk, hide it and reveal the content
            loadingLine.addEventListener('transitionend', function() {
                loadingLine.style.display = 'none';
                loadingScreen.classList.add('fade-out'); // Trigger the fade-out effect
                mainContent.style.opacity = 1;
            }, { once: true }); // Ensures this event listener runs only once
        }, 2000); // 2 seconds delay before starting to shrink the line
    }, { once: true }); // Ensures this event listener runs only once
});



/*
    // Simulate loading progress (optional: can be linked with actual loading progress)
    let width = 0;
    const interval = setInterval(function() {
        width += 7;
        loadingLine.style.width = width + "%";
        if (width >= 100) {
            clearInterval(interval);
            loadingLine.style.width = '100%';

            // Hide the loading line after a short delay
            setTimeout(function() {
                loadingLine.style.display = 'none';
                mainContent.style.opacity = 1;
            }, 500); // 0.5 seconds delay
        }
    }, 100); // Progress every 400ms
});

*/

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation ul');

    menuToggle.addEventListener('click', function() {
        navigation.classList.toggle('show');
    });
});

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const today = new Date();
            
            // Extracting date components
            const day = today.getDate().toString().padStart(2, '0');
            const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
            const year = today.getFullYear();
    
    document.getElementById('time').textContent = `${day}:${month}:${year}:${hours}:${minutes}:${seconds}`;
}

// Initial call to display time right away
updateTime();

// Update the time every second
setInterval(updateTime, 1000);


