// Function to preload iframes
function preloadIframes() {
    const iframes = document.querySelectorAll('iframe[data-src]');
    iframes.forEach(iframe => {
        iframe.src = iframe.getAttribute('data-src'); // Load the iframe content
    });
}

// Function to switch between sections
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.iframe-section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';

    // Update active link in navigation
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`nav ul li a[href="#${sectionId}"]`).classList.add('active');
}

// Event listeners for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const sectionId = this.getAttribute('href').substring(1); // Get section ID
        showSection(sectionId); // Show the corresponding section
    });
});

// Preload iframes when the page loads
window.onload = function () {
    preloadIframes(); // Preload all iframes
    showSection('steamunlocked'); // Show the default section
};