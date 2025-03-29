const portfolioTitle = document.getElementById('portfolioTitle');
const originalColor = window.getComputedStyle(portfolioTitle).color; // Obtém a cor computada
const hoverColor = 'blueviolet'; // Cor desejada ao passar o mouse

portfolioTitle.addEventListener('mouseover', () => {
    portfolioTitle.style.color = hoverColor;
});

portfolioTitle.addEventListener('mouseout', () => {
    portfolioTitle.style.color = originalColor;
});