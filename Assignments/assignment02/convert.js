window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   const celsius = document.getElementById("cInput");
   const fahrenheit = document.getElementById("fInput");
   const convertButton = document.getElementById("convertButton");
   convertButton.addEventListener("click", function () {
      if (fahrenheit.value && !celsius.value) {
         if (isNaN(parseFloat(fahrenheit.value))) {
            document.getElementById("errorMessage").innerText = `${fahrenheit.value} is not a number`;
         } else {
            document.getElementById("errorMessage").innerText = "";
            let c = convertFtoC(parseFloat(fahrenheit.value));
            celsius.value = c;
         }
      } else if (celsius.value && !fahrenheit.value) {
         if (isNaN(parseFloat(celsius.value))) {
            document.getElementById("errorMessage").innerText = `${celsius.value} is not a number`;
         } else {
            document.getElementById("errorMessage").innerText= "";
            let f = convertCtoF(parseFloat(celsius.value));
            fahrenheit.value = f;
         }
      }

      if (fahrenheit.value < 32) {
         document.getElementById("weatherImage").setAttribute("src", "images/cold.png");
      } else if (fahrenheit.value >= 32 && fahrenheit.value <= 50) {
         document.getElementById("weatherImage").setAttribute("src", "images/cool.png");
      } else if (fahrenheit.value > 50) {
         document.getElementById("weatherImage").setAttribute("src", "images/warm.png");
      }
   });
   fahrenheit.addEventListener("input", () => {
      celsius.value = "";
   });
   celsius.addEventListener("input", () => {
      fahrenheit.value = "";
   });
}

function convertCtoF(degreesCelsius) {
   return (degreesCelsius * (9/5)) + 32;
}

function convertFtoC(degreesFahrenheit) {
   return (degreesFahrenheit - 32) * (5/9);
}