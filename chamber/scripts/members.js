document.addEventListener("DOMContentLoaded", () => {
    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");
    const directory = document.querySelector("#directory");

    gridButton.addEventListener("click", () => {
        directory.classList.add("grid");
        directory.classList.remove("list");
    });

    listButton.addEventListener("click", () => {
        directory.classList.add("list");
        directory.classList.remove("grid");
    });

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            const members = data.members;
            directory.innerHTML = members.map(member => `
                <section class="card">
                    <img src="images/${member.information[0].img}" alt="${member.information[0].name}" />
                    <h3>${member.information[0].name}</h3>
                    <p>${member.information[0].address}</p>
                    <p>${member.information[0].phone}</p>
                    <p>${member.information[0].membership}</p>
                    <a href="${member.information[0].url}" target="_blank">Visit Website</a>
                </section>
            `).join('');
        })
        .catch(error => console.error('Error fetching member data:', error));
});
