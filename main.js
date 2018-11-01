const spanText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");
let indexLetter = 0;
const txt = ['Tekst numer 1...', 'Następny tekst...', 'Ostatni tekst...'];
let indexText = 0;



const addLetter = () => {
  let activeText = txt[indexText];
  const printLetters = () => {
    spanText.textContent += activeText[indexLetter];
    indexLetter++;
    if (indexLetter === activeText.length) {
      clearInterval(interval);
      setTimeout(() => {
        indexText++;
        if (indexText != txt.length) {
          spanText.textContent = "";
          indexLetter = 0;
          addLetter();
        } else return;
        // setTimeout(() => {
        //   indexText = 0;
        //   indexLetter = 0;
        //   spanText.textContent = "";
        //   addLetter();
        // }, 2000);

      }, 1000);
    }
  };
  const interval = setInterval(printLetters, 100);

};


addLetter();
const cursorAnimation = () => {
  spnCursor.classList.toggle('active');
};
setInterval(cursorAnimation, 400);