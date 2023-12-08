const input = document.querySelector('input');
const games = document.querySelectorAll('#games img');
const titles = document.querySelectorAll('#games a span');

input.addEventListener('input', () => {
    const searchTerm = input.value.toLowerCase();
    games.forEach((game, index) => {
        const title = titles[index];
        if (game.alt.toLowerCase().includes(searchTerm)) {
            game.parentNode.style.display = 'block';
        } else {
            game.parentNode.style.display = 'none';
        }
    });
});