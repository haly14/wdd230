const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

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


/*
other dark mode example:

const myBtn = document.querySelector('#darkBtn');

myBtn.addEventListener('click', () => {
	main.classList.toggle('dark');
})
*/