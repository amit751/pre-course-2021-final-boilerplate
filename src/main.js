const addButton = document.getElementById("add-button");
let input = document.getElementById("text-input");
let viewSection = document.getElementById("view-section");
let priorityNum = document.getElementById("priority-selector");
let qounter = document.getElementById("counter");
let qount =0;
addButton.addEventListener("click", addTodo );
let arrOfPriority=[];
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
    
    // arrOfPriority.push(priorityNum.value);

    
    
    input.innerText="";
    input.value="";
    // priority.value="";
    
    qount++;
    qounter.innerText=qount;
    qounter.value=qount;
    
    
    
}

const sortButton = document.getElementById("sort-button");
sortButton.addEventListener("click",sorting);
function sorting(event){
    let priorities = document.getElementsByClassName("todo-priority");
    console.log(priorities);
    viewSection.innerHTML="";
    let newPriority= sort(priorities);
    console.log(newPriority);

    // for (const priority of priorities) {
    //     arrOfPriority.push(priority.innerText);
    // }
    // console.log(arrOfPriority);
    
}



function sort(arr){
    let finalArr=[];
    let place=0;
    for (let i=0 ; i<arr.length ; i++){
        for(let j = 0 ; j<arr.length-1 ; j++){
            if(Number(arr[0].innerText)<Number(arr[j+1].innerText)){
                place++;
            }
        }
        finalArr[place]=arr[0];
        arr.push(arr.shift());
        place=0;
    }
    return(finalArr);
}    










// let priorities = document.getElementsByClassName("todo-priority");
// console.log(priorities);
