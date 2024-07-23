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


// js for member spotlights
async function displaySpotlights() {
    try {
        const response = await fetch('data/members.json');
        if (response.ok) {
            const data = await response.json();
            const spotlightMembers = data.members.filter(member => 
                member.information[0].membership === 'Silver Membership' || 
                member.information[0].membership === 'Gold Membership'
            );

            const selectedMembers = getRandomMembers(spotlightMembers);

            const spotlightSection = document.querySelector('#spotlights');
            spotlightSection.innerHTML = '';

            selectedMembers.forEach(member => {
                const memberDiv = document.createElement('div');
                memberDiv.classList.add('spotlight');
                
                memberDiv.innerHTML = `
                    <h3>${member.information[0].name}</h3>
                    <img src="images/${member.information[0].img}" alt="${member.information[0].name}">
                    <p><strong>Address:</strong> ${member.information[0].address}</p>
                    <p><strong>Phone:</strong> ${member.information[0].phone}</p>
                    <p><a href="${member.information[0].url}" target="_blank">Visit Website</a></p>
                `;
                
                spotlightSection.appendChild(memberDiv);
            });
        } else {
            throw new Error('Failed to fetch members data');
        }
    } catch (error) {
        console.error(error);
    }
}
function getRandomMembers(members) {
    const numOfMembers = 2;
    const shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numOfMembers);
}
displaySpotlights();


// js for banner
document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('banner');
    const closeButton = document.getElementById('close-banner');

    function checkBannerDisplay() {
        const today = new Date().getDay();
        if (today === 1 || today === 2 || today === 3) {
            banner.style.display = 'block';
        }
    }
    closeButton.addEventListener('click', () => {
        banner.style.display = 'none';
    });
    checkBannerDisplay();
});




visitSidebar.textContent = message;
localStorage.setItem('lastVisit', now.toString());