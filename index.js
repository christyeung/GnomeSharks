const myGnome = document.getElementById('my-gnome');
const myButton = document.getElementById('my-button');

function getRandomGnome() {
    const pics = ['gnome_01.jgp', 'gnome_02.jgp', 'gnome_03.jgp'];
    const randomIndex = Math.floor(Math.random() * pics.length);
    return '<img src="images/' + pics[randomIndex] + '"/>';
}

myButton.addEventListener('click', () => {
    myGnome.innerHTML = getRandomGnome();
});