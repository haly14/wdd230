// js for date last modified
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;


// js for hambutton
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');

    if (hamburgerElement.classList.contains('open')) {
        hamburgerElement.innerHTML = "&#10005;";
    } else {
        hamburgerElement.innerHTML = "&#9776;";
    }
});


// js for days since last visited
const visitSidebar = document.querySelector('.visit-sidebar');
const now = Date.now();
const lastVisit = localStorage.getItem('lastVisit');
let message;

if (!lastVisit) {
	message = "Welcome! Let us know if you have any questions.";
} else {
	const diff = now - lastVisit;

	const diffDays = Math.floor(diff / (86400000));

	if (diffDays < 1) {
		message = "Back so soon! Awesome!";
	} else if (diffDays === 1) {
		message = `You last visited 1 day ago.`;
	} else {
		message = `You last visited ${diffDays} days ago.`;
	}
}

visitSidebar.textContent = message;
localStorage.setItem('lastVisit', now.toString());