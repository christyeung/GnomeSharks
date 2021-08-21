const myHeader = document.getElementById('my-header');
const myDiv = document.getElementById('my-div');
const myButton = document.getElementById('my-button');

function getRandomMood() {
    const moods = ['😆', '😍', '😂', '😢', '🥳', '😡'];
    const randomIndex = Math.floor(Math.random() * moods.length);
    return moods[randomIndex];
}

myButton.addEventListener('click', () => {
    myDiv.innerHTML = getRandomMood();
});