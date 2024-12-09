function showGameDetails(title, description) {
    const gameTitle = document.getElementById('game-title');
    const gameDescription = document.getElementById('game-description');
    const gameDetails = document.getElementById('game-details');

    gameTitle.textContent = title;
    gameDescription.textContent = description;
    gameDetails.style.display = 'block';
}

function scrollToSection(section) {
    document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
}
