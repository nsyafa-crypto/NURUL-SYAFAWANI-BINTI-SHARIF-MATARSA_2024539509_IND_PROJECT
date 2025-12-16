const dateElement = document.getElementById("lastUpdated");
if (dateElement) {
    dateElement.textContent = new Date(document.lastModified).toLocaleDateString("en-GB");
}

const textElement = document.getElementById("changing-text");

if (textElement) {
 const phrases = ["Hello everyone", "I'm Syafa", "Nice to meet you"];
 let phraseIndex = 0;
 const animationDuration = 6000;

function updateMarqueeText() {
  textElement.textContent = phrases[phraseIndex];
  phraseIndex = (phraseIndex + 1) % phrases.length;

textElement.style.animation = 'none';

  void textElement.offsetWidth;
  textElement.style.animation = `marquee-in-out ${animationDuration / 1000}s ease-in-out`;
}

function startMarqueeLoop() {
  updateMarqueeText();
  setTimeout(startMarqueeLoop, 6500);
    }

    startMarqueeLoop();
}
