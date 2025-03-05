// Liste de phrases aléatoires psychédéliques
const phrases = [
    "The cosmic pigeon dances in an interdimensional rave.",
    "The walls look at me, but they have no eyes.",
    "Every breeze of wind is a secret message from the universe.",
    "You're in the Matrix...or maybe the Matrix is in you.",
    "Colors only exist in your mind."
];

const images = [
    "57052517b33c12cf5bfee4ce7e377f74.jpg",
    "images.jpeg",
    "5fa903c2459f5.jpeg",
    "artworks-000153711665-60oe6w-t500x500.jpg",
    "1.jpg.webp"
];

// Fonction pour changer le texte et l'image aléatoirement
function changeContent() {
    const textElement = document.getElementById('random-text');
    const imageElement = document.getElementById('random-image');
    const randomIndex = Math.floor(Math.random() * phrases.length);

    // Change le texte
    textElement.textContent = phrases[randomIndex];

    // Change l'image
    imageElement.src = images[randomIndex];

    // Effet de zoom au changement
    textElement.style.transform = "scale(1.2)";
    imageElement.style.transform = "scale(1.1)";
    setTimeout(() => {
        textElement.style.transform = "scale(1)";
        imageElement.style.transform = "scale(1)";
    }, 500);
}

// Change le texte et l’image toutes les 3 secondes
setInterval(changeContent, 3000);

// Effet psychédélique avec la souris
document.addEventListener("mousemove", function(event) {
    const x = (event.clientX / window.innerWidth - 0.5) * 50;
    const y = (event.clientY / window.innerHeight - 0.5) * 50;
    document.body.style.transform = `skew(${x}deg, ${y}deg)`;
});

// Ajout d'un son étrange
const audio = new Audio("BRUIT QUI FAIT PEUR 😱.mp3");
audio.loop = true;
audio.volume = 1; // Régle le volume entre 0 et 1

// Démarrer l'audio quand on clique sur la page
document.body.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
    }
});
