// JavaScript to set current year and last modified date
document.getElementById('year').innerText = new Date().getFullYear();

var lastModified = new Date(document.lastModified);
document.getElementById('lastModified').innerText = 'Last modified: ' + lastModified.toLocaleString();
//hamburger menu
const hamburgerElement = document.querySelector('#menuButton');
const navElement = document.querySelector('.menuLinks')
hamburgerElement.addEventListener("click", () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
})
const darkmodeElement = document.querySelector('#darkMode')
const mainElement =document.querySelector("main")
darkmodeElement.addEventListener('click', () => {
    mainElement.classList.toggle('open');
})

//
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve last visit date from localStorage
    const lastVisit = localStorage.getItem('lastVisit');

    // If this is the user's first visit or no last visit date is found
    if (!lastVisit) {
        // Display welcome message
        document.getElementById('visitMessage').textContent = "Welcome! Let us know if you have any questions.";
    } else {
        // Calculate days between last visit and current visit
        const daysSinceLastVisit = Math.floor((Date.now() - lastVisit) / (1000 * 60 * 60 * 24));
        
        // If less than a day has passed
        if (daysSinceLastVisit < 1) {
            // Display "Back so soon! Awesome!" message
            document.getElementById('visitMessage').textContent = "Back so soon! Awesome!";
        } else {
            // Display "You last visited n days ago." message
            const message = daysSinceLastVisit === 1 ? "day" : "days";
            document.getElementById('visitMessage').textContent = `You last visited ${daysSinceLastVisit} ${message} ago.`;
        }
    }

    // Update localStorage with current visit date
    localStorage.setItem('lastVisit', Date.now());
});
function setTimestamp() {
    var timestampField = document.getElementById("timestamp");
    var now = new Date();
    var timestamp = now.toISOString(); // Format: YYYY-MM-DDTHH:MM:SSZ
    timestampField.value = timestamp;
}

// Call the function when the page is loaded
window.onload = setTimestamp;