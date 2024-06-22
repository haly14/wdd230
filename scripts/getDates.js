// js for date last modified
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;


// js for dark mode button
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const sections = document.querySelectorAll("section.card");
const links = document.querySelectorAll("section.card ul li a");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☾")) {
		main.style.background = "#333";
		main.style.color = "#fff";
		sections.forEach(section => {
            section.style.background = "#6a6a6a";
        });
		links.forEach(link => {
			link.style.color = "#fff";
		});
		modeButton.textContent = "🌣";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		sections.forEach(section => {
            section.style.background = "";
        });
		links.forEach(link => {
			link.style.color = "";
		});
		modeButton.textContent = "☾";
	}
});


// js for hambutton
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
	navElement.classList.toggle('open');
	//hamburgerElement.classList.toggle('open');
});