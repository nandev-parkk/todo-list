"use strict";

const infoEl = document.querySelector(".info");
const taskEl = infoEl.querySelector(".item__task");
const addBtnEl = infoEl.querySelector(".item__add");
const modalEl = infoEl.querySelector(".item__modal");
const modalBgEl = modalEl.querySelector(".bg");
const formEl = modalEl.querySelector("form");
const registerBtnEl = formEl.querySelector("button.register");
const inputEl = formEl.querySelector("input");
const emptyErrorEl = formEl.querySelector(".error.empty");
const storage = window.localStorage;
const toDoList = [];
const TODOS = "todos";

// add 버튼 클릭시 modal open
addBtnEl.addEventListener("click", openModal);

// modal 배경 클릭시 modal close
modalBgEl.addEventListener("click", closeModal);

// 등록 버튼 클릭시 to do 등록
registerBtnEl.addEventListener("click", handleSubmit);

// enter 입력시 to do 등록
formEl.addEventListener("submit", handleSubmit);

// input에 error 메시지 나타난 상태에서 입력하면 error 메시지 삭제
inputEl.addEventListener("keydown", (event) => {
  if (event.value !== "") {
    emptyErrorEl.classList.remove("visible");
  }
});

function saveToDos(content) {
  const MATERIAL_OUTLINED_ICON = "material-icons-outlined";
  const MATERIAL_ICON = "material-icons";
  const id = toDoList.length + 1;
  const ulEl = document.querySelector(".list");
  const liEl = document.createElement("li");
  const checkBtnEl = document.createElement("button");
  const divEl = document.createElement("div");
  const delBtnEl = document.createElement("button");
  const toDos = {
    id,
    content,
  };

  checkBtnEl.classList.add(MATERIAL_OUTLINED_ICON, "check");
  checkBtnEl.textContent = "circle";
  divEl.textContent = content;
  divEl.classList.add("content");
  delBtnEl.classList.add(MATERIAL_OUTLINED_ICON, "delete");
  delBtnEl.textContent = "delete";
  delBtnEl.addEventListener("mouseover", () => {
    delBtnEl.classList.remove(MATERIAL_OUTLINED_ICON);
    delBtnEl.classList.add(MATERIAL_ICON);
  });
  delBtnEl.addEventListener("mouseout", () => {
    delBtnEl.classList.add(MATERIAL_OUTLINED_ICON);
    delBtnEl.classList.remove(MATERIAL_ICON);
  });
  liEl.id = id;
  liEl.appendChild(checkBtnEl);
  liEl.appendChild(divEl);
  liEl.appendChild(delBtnEl);
  ulEl.appendChild(liEl);

  toDoList.push(toDos);
  storage.setItem(TODOS, JSON.stringify(toDoList));
}

function deleteToDos() {}

function loadToDos() {
  const loadedToDos = JSON.parse(storage.getItem(TODOS));
  if (loadedToDos === null) {
    return;
  } else {
    loadedToDos.forEach((toDo) => {
      saveToDos(toDo.content);
    });
  }
}

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

  // 현재 날짜 출력
  const dateContainer = document.querySelector(".date");
  const dayEl = dateContainer.querySelector(".item__day");
  const dateEl = dateContainer.querySelector(".item__date");
  dateEl.textContent = `${year}. ${month}. ${date}. `;

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

function openModal() {
  modalEl.classList.add("visible");
  inputEl.focus();
}

// error 메세지 삭제 및 입력한 input value 초기화하면서 modal close
function closeModal() {
  modalEl.classList.remove("visible");
  emptyErrorEl.classList.remove("visible");
  inputEl.value = null;
}

// localStorage에 to do 등록 및 modal close
function handleSubmit(event) {
  event.preventDefault();
  if (inputEl.value === "") {
    emptyErrorEl.classList.add("visible");
  } else {
    saveToDos(inputEl.value);
    paintTask();
    closeModal();
  }
}

// task에 현재 to do 목록 수 출력
function paintTask() {
  taskEl.textContent = `${toDoList.length} TASKS`;
}

function init() {
  getCurrentDate();
  setInterval(getCurrentDate, 1000);
  loadToDos();
  paintTask();
}

init();
