const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Set initial theme based on the current class
if (body.classList.contains('dark-mode')) {
    themeToggle.classList.add('fa-sun'); // Show sun icon for dark mode
} else {
    body.classList.add('light-mode'); // Default to light mode
    themeToggle.classList.add('fa-moon'); // Show moon icon for light mode
}

themeToggle.addEventListener('click', () => {
    // Toggle dark mode
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Update the icon based on the current mode
    if (body.classList.contains('dark-mode')) {
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
    } else {
        themeToggle.classList.remove('fa-sun');
        themeToggle.classList.add('fa-moon');
    }
});
