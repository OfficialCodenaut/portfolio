const statusText = document.querySelector(".hero-status span");

const phrases = [
    "> I learn by building, breaking, and rebuilding.",
    "> I turn ideas into working systems.",
    "> I explore cybersecurity through hands-on projects.",
    "> I build software to solve real problems."
]

statusText.textContent = "I learn by building, breaking, and rebuilding."

let phraseIndex = 0
let characterIndex = 0
let deleting = false

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    const visibleText = currentPhrase.slice(0, characterIndex);
    statusText.textContent = visibleText;

    if (characterIndex === currentPhrase.length) {
        setTimeout(() => {
            deleting = true;
            typeWriter();
        }, 2000);
    } else if (characterIndex === 0) {
        phraseIndex++;

        if (phraseIndex === phrases.length) {
            phraseIndex = 0;
        }

        deleting = false;

        setTimeout(typeWriter, 500);
    } else {
        setTimeout(typeWriter, deleting ? 50 : 70);
    }
}

typeWriter();