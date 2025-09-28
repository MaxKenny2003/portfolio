const words = [
  "an Aerospace Engineer.",
  "a Computer Engineer.",
  "a Software Engineer.",
  "a U-M Engineer.",
  "eager to learn.",
  "a classical guitar lover."
];

let i = 0, j = 0;
let isDeleting = false;
const speed = 50;

function type() {
  const textEl = document.getElementById("text");
  const word = words[i];

  if (!isDeleting) {
    textEl.textContent = word.substring(0, j + 1);
    j++;
    if (j === word.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    textEl.textContent = word.substring(0, j - 1);
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(type, 1000);
      return;
    }
  }

  setTimeout(type, isDeleting ? speed / 2 : speed);
}

type();
