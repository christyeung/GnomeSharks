const myGnome = document.getElementById('my-gnome');
const myButton = document.getElementById('my-button');

function getRandomGnome() {
    const pics = ['gnome_1.jpg', 'gnome_2.jpg', 'gnome_3.jpg'];
    const randomIndex = Math.floor(Math.random() * 3);
    return '<img src="images/' + pics[randomIndex] + '" class="gnome-photo"/>';
}

myButton.addEventListener('click', () => {
    myGnome.innerHTML = getRandomGnome();
});