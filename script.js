let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculateAge() {
  let birthDate = new Date(userInput.value);

  let inputDay = birthDate.getDate();
  let inputMonth = birthDate.getMonth();
  let inputYear = birthDate.getFullYear();

  let today = new Date();

  let currentDay = today.getDate();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  let calculatedDay, calculatedMonth, calculatedYear;

  calculatedYear = currentYear - inputYear;
  calculatedMonth = currentMonth - inputMonth;
  calculatedDay = currentDay - inputDay;

  result.innerHTML = `You are <span>${calculatedYear}</span> years, <span>${calculatedMonth}</span> months, and <span>${calculatedDay}</span> days old.`;
}

function getDaysInMonth (year, month) {
  return new Date(year, month, 0).getDate();
}