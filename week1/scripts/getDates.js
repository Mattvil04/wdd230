// JavaScript to set current year and last modified date
document.getElementById('year').innerText = new Date().getFullYear();

var lastModified = new Date(document.lastModified);
document.getElementById('lastModified').innerText = 'Last modified: ' + lastModified.toLocaleString();