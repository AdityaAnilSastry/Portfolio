document.addEventListener("DOMContentLoaded", function() {
    const textArray = [
      "Currently pursuing my B.E in Information Science at BMSIT"
    ];
    let index = 0;
    const spanElement = document.getElementById("typedText");
  
    function typeText() {
      const currentText = textArray[index];
      let charIndex = 0;
      const typingInterval = setInterval(() => {
        if (charIndex < currentText.length) {
          spanElement.textContent += currentText.charAt(charIndex);
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            spanElement.textContent = ""; // Clear previous text
            index = (index + 1) % textArray.length;
            typeText();
          }, 2000); // Wait 2 seconds before switching to the next text
        }
      }, 100); // Typing speed (100 milliseconds per character)
    }
  
    typeText(); // Call the function to start typing immediately
  });
  



// PROJECTS
// var projElements = document.querySelectorAll('.proj');
// var currentProj = 0;
// var projInterval = setInterval(nextProj, 2000);

// function nextProj() {
//   projElements[currentProj].classList.remove('active');
//   currentProj = (currentProj + 1) % projElements.length;
//   projElements[currentProj].classList.add('active');
// }
document.querySelector.getElementById('submit-btn').addEventListener('submit',()=>{
  alert("Message Sent Successfully");
});