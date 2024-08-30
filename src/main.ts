document.getElementById("click-button")!.addEventListener("click", () => {
  const text = document.getElementById("button-heading")
  const textContent = text?.textContent;

  if (textContent === "Off") {
    text!.textContent = "ON";
  } else {
    text!.textContent = "Off";
  }
});
