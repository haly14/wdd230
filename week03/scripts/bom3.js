const input = document.querySelector('#favch');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});



/*
Week 3 Activity: Web Storage API
function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters')) || null;
}
*/

let chaptersArray = getChapterList() || [];

chaptersArray.forEach (chapter => {
    displayList(chapter);
});

function displayList(item) {
    if (input.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = item;
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();
        });
    }
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter (chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
}
