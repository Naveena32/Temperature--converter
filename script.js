function convertTemperature() {
  const tempInput = document.getElementById("tempInput").value;
  const unitSelect = document.getElementById("unitSelect").value;
  const resultDisplay = document.getElementById("result");

  if (isNaN(tempInput) || tempInput === "") {
    resultDisplay.textContent = "Please enter a valid number.";
    return;
  }

  const temp = parseFloat(tempInput);
  let result = "";

  switch (unitSelect) {
    case "celsius":
      result = `${((temp * 9) / 5 + 32).toFixed(2)} °F`;
      break;
    case "fahrenheit":
      result = `${(((temp - 32) * 5) / 9).toFixed(2)} °C`;
      break;
    case "kelvin":
      result = `${(temp - 273.15).toFixed(2)} °C / ${(temp * 9 / 5 - 459.67).toFixed(2)} °F`;
      break;
    default:
      result = "Invalid selection.";
  }

  resultDisplay.textContent = `Converted Temperature: ${result}`;
}
