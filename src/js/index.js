"use strict";

// new Date()를 통해 현재 날짜 가져옴
function getCurrentDate() {
  const dateObj = new Date();
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  const day = dateObj.getDay();
  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();
  const second = dateObj.getSeconds();

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

  // 현재 시간 출력
  const timeContainer = document.querySelector(".current-time");
  const hourEl = timeContainer.querySelector(".hour");
  const minuteEl = timeContainer.querySelector(".minute");
  const secondEl = timeContainer.querySelector(".second");
  const amEl = timeContainer.querySelector(".am");

  if (hour < 10) {
    hourEl.textContent = `0${hour}`;
  } else {
    hourEl.textContent = `${hour}`;
  }

  if (minute < 10) {
    minuteEl.textContent = `0${minute}`;
  } else {
    minuteEl.textContent = `${minute}`;
  }

  if (second < 10) {
    secondEl.textContent = `0${second}`;
  } else {
    secondEl.textContent = `${second}`;
  }

  if (hour < 12) {
    amEl.textContent = "AM";
  } else {
    amEl.textContent = "PM";
  }
}

setInterval(getCurrentDate, 1000);

// add 버튼 클릭시 to do list 등록 모달 open

const infoEl = document.querySelector(".info");
const taskEl = infoEl.querySelector(".task");
const addBtnEl = infoEl.querySelector("button.add");
const modalEl = infoEl.querySelector(".modal");
const modalBgEl = modalEl.querySelector(".bg");
const registerBtnEl = modalEl.querySelector("form button.register");
const storage = window.localStorage;
const inputEl = modalEl.querySelector("input");
const errorEl = modalEl.querySelector(".error");

addBtnEl.addEventListener("click", () => {
  modalEl.classList.add("visible");
});

modalBgEl.addEventListener("click", () => {
  modalEl.classList.remove("visible");
  errorEl.classList.remove("visible");
});

registerBtnEl.addEventListener("click", () => {
  if (inputEl.value === "") {
    modalEl.classList.add("visible");
    // input에 아무것도 입력 안하고 button 클릭시 error 처리
    errorEl.classList.add("visible");
  } else {
    modalEl.classList.remove("visible");
    // localStorage에 데이터 저장
    storage.setItem(inputEl.value, inputEl.value);
  }
});

// input에 아무것도 입력 안하고 button 클릭시 error 처리
inputEl.addEventListener("keydown", () => {
  if (inputEl.value !== "") {
    errorEl.classList.remove("visible");
  }
});

console.log(inputEl);

// list element에 localStorage에 있는 데이터 출력
const listContainer = document.querySelector(".list");
const listEl = listContainer.querySelector("li");

console.log(storage.getItem("hello"));
