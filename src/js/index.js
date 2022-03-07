"use strict";

// new Date()를 통해 현재 날짜 가져옴
const dateObj = new Date();
const year = dateObj.getFullYear();
const month = dateObj.getMonth() + 1;
const date = dateObj.getDate();
const day = dateObj.getDay();
const hour = dateObj.getHours();
const minute = dateObj.getMinutes();

// date에 현재 날짜 출력
const dateContainer = document.querySelector(".date");
const yearEl = dateContainer.querySelector(".date__year");
const monthEl = dateContainer.querySelector(".date__month");
const dateEl = dateContainer.querySelector(".date__date");
const dayEl = dateContainer.querySelector(".date__day");

yearEl.textContent = `${year}.`;
monthEl.textContent = `${month}.`;
dateEl.textContent = `${date}.`;
if (day === 0) {
  dayEl.textContent = "SUNDAY,";
} else if (day === 1) {
  dayEl.textContent = "MONDAY,";
} else if (day === 2) {
  dayEl.textContent = "TUESDAY,";
} else if (day === 3) {
  dayEl.textContent = "WEDNESDAY,";
} else if (day === 4) {
  dayEl.textContent = "THURSDAY,";
} else if (day === 5) {
  dayEl.textContent = "FRIDAY,";
} else {
  dayEl.textContent = "SATURDAY,";
}
