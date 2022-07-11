const circle1 = document.querySelector(".box__circle1");
const circle2 = document.querySelector(".box__circle2");
const circle3 = document.querySelector(".box__circle3");

const reset = document.querySelector(".box__reset");

circle1.addEventListener("click", () => {
  const currentColor = circle1.style.backgroundColor;

  console.log("circle1.style", circle1.style);

  if (currentColor === "blue") {
    circle1.style.backgroundColor = "red";
  } else {
    circle1.style.backgroundColor = "blue";
  }
});

circle2.addEventListener("click", () => {
  const currentColor = circle2.style.backgroundColor;

  if (currentColor === "blue") {
    circle2.style.backgroundColor = "red";
  } else {
    circle2.style.backgroundColor = "blue";
  }
});

circle3.addEventListener("click", () => {
  const currentColor = circle3.style.backgroundColor;

  if (currentColor === "blue") {
    circle3.style.backgroundColor = "red";
  } else {
    circle3.style.backgroundColor = "blue";
  }
});

reset.addEventListener("click", () => {
  circle1.style.backgroundColor = "red";
  circle2.style.backgroundColor = "red";
  circle3.style.backgroundColor = "red";
});
