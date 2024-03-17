// JavaScript to set current year and last modified date
document.getElementById('year').innerText = new Date().getFullYear();

var lastModified = new Date(document.lastModified);
document.getElementById('lastModified').innerText = 'Last modified: ' + lastModified.toLocaleString();

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
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.
