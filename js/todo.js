const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];


function checkToDoCount(){
  if(toDos.length > 3){
    toDoForm.classList.add("hidden");
  }
  else{
    toDoForm.classList.remove("hidden");
  }
}

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e){
   const li = e.target.parentElement;
   li.remove();
   toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
   saveToDos();
   checkToDoCount();
}

function paintToDo(newTodo) {
  checkToDoCount();
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
//   const button = document.createElement("button");
//   button.innerText = "❌";
  const close = document.createElement("i");
  close.classList.add("fas", "fa-times", "close");
  close.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(close);
  toDoList.appendChild(li);

}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
      text: newTodo,
      id: Date.now(),
  }
  toDos.push(newTodoObj); 
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);
const loadedUserName = localStorage.getItem("username");

if(loadedUserName){
    toDoForm.classList.remove("hidden");
}

if(savedToDos && loadedUserName){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
