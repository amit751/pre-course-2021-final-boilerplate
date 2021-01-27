const addButton = document.getElementById("add-button");
let input = document.getElementById("text-input");
let viewSection = document.getElementById("view-section");
let priorityNum = document.getElementById("priority-selector");
let qounter = 0;
addButton.addEventListener("click", addTodo );
function addTodo(event){
    

    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");
    const createdAt = document.createElement("div");
    createdAt.classList.add("todo-created-at");
    const todoText = document.createElement("div");
    todoText.classList.add("todo-text");
    const priority = document.createElement("div");
    priority.classList.add("todo-priority");
    todoContainer.append(priority);
    todoContainer.append(createdAt);
    todoContainer.append(todoText);
    todoText.innerText = input.value;
    viewSection.append(todoContainer);
    priority.innerText= priorityNum.value;
    input.innerText="";
    input.value="";
    // priority.value="";
    qounter++;
     
    
}
let priorities = document.querySelectorAll("todo-priority");
console.log(priorities);