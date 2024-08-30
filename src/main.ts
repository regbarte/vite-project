document.getElementById("click-button")!.addEventListener("click", () => {
  const text = document.querySelector("h1");
  const textContent = text?.textContent;

  if (textContent === "Off") {
    text!.textContent = "ON";
  } else {
    text!.textContent = "Off";
  }
});
