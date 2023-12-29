const numbers = [];

const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 89) + 1; // Generates a random number between 1 and 89
  if (numbers.includes(randomNumber)) {
    generateRandomNumber();
  } else {
    numbers.push(randomNumber);
  }
  return numbers[numbers.length - 1];
};

const handleEnter = (event) => {
  if (event.key === "Enter" || event.keyCode === 13) {
    const randomNumber = generateRandomNumber();
    const result = document.getElementById("result");

    const numberSpan = document.createElement("span");
    numberSpan.textContent = randomNumber;
    Object.assign(numberSpan.style, numberStyle);
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    if (randomColor != "FFFFFF") {
      numberSpan.style.backgroundColor = "#" + randomColor;
    }
    result.appendChild(numberSpan);
  }
};

document.addEventListener("keydown", handleEnter);

const numberStyle = {
  display: "inline-block",
  fontSize: "80px",
  width: "150px",
  height: "150px",
  border: "2px solid white",
  borderRadius: "50%",
  textAlign: "center",
  lineHeight: "150px",
  fontFamily: "Arial, sans-serif",
  marginRight: "10px",
  marginBottom: "10px",
  color: "white",
  backgroundColor: "green",
};
