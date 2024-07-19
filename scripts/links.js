const baseURL = "https://haly14.github.io/wdd230/";
const linksURL = "https://haly14.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(data) {
    const activitiesList = document.getElementById('learning-activities');
    data.weeks.forEach(week => {
        const weekItem = document.createElement('li');
        
        const weekHeading = document.createElement('span');
        weekHeading.textContent = week.week + ": ";
        weekHeading.className = 'week-heading';

        const linksSpan = document.createElement('span');

        week.links.forEach((link, index) => {
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;

            linksSpan.appendChild(anchor);

            if (index < week.links.length - 1) {
                linksSpan.appendChild(document.createTextNode(" | "));
            }
        });

        weekItem.appendChild(weekHeading);
        weekItem.appendChild(linksSpan);

        activitiesList.appendChild(weekItem);
    });
}

getLinks();
