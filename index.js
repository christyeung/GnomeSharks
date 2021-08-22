const myGnome = document.getElementById('my-gnome');
const myButton = document.getElementById('my-button');

function getRandomGnome() {
    const pics = ['gnome_1.webp', 'gnome_2.jpg', 'gnome_3.jpg', 'gnome_4.jpeg', 'gnome_5.jpeg', 'gnome_6.jpg', 'gnome_7.jpg', 'gnome_8.jpg'];
    const randomIndex = Math.floor(Math.random() * pics.length);
    myButton.disabled = true;
    return '<img src="images/' + pics[randomIndex] + '" class="gnome-photo"/>';
}

myButton.addEventListener('click', () => {
    myGnome.innerHTML = getRandomGnome();
});