export const splitTextIntoLines = (element) => {
    const words = element.textContent.split(" ");
    element.innerHTML = ""; // Clear existing text safely
  
    let line = document.createElement("div");
    line.classList.add("line");
    element.appendChild(line);
  
    words.forEach((word) => {
      const wordSpan = document.createElement("span");
      wordSpan.textContent = word + " "; // Ensure safe text rendering
      line.appendChild(wordSpan);
  
      // Check for line break
      const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
      if (line.offsetHeight > lineHeight) {
        // Remove and add to a new line
        line.removeChild(wordSpan);
        line = document.createElement("div");
        line.classList.add("line");
        element.appendChild(line);
        line.appendChild(wordSpan);
      }
    });
  };
  