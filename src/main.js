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
    
    

    
    
    input.innerText="";
    input.value="";
    
    
    qount++;
    qounter.innerText=qount;
    qounter.value=qount;
    
    
    
}

const sortButton = document.getElementById("sort-button");
sortButton.addEventListener("click",sorting);
function sorting(event){
    
    
    let priorities = document.getElementsByClassName("todo-priority");
    console.log(priorities);
    for (const todo of  priorities) {
        todo.parentElement.classList.add(todo.innerText);
    }
    let newDiv = document.getElementsByClassName("1");
    console.log(newDiv[0].innerHTML);
    viewSection.innerHTML=newDiv[0].innerHTML;
    
    
    
    
    
    
//     var x = document.getElementById("myList").innerHTML;
//   document.getElementById("demo").innerHTML = x;
    
    
    
    
    
    
    
    
    
    
    
    
    
    // viewSection.innerHTML= "`" + newDiv[0] +"`";
    
    // let xxx=document.createElement("div");
    // xxx.innerHTML="`" + newDiv[0] +"`";

    // let newView = document.createElement("div");
    // newView.append(xxx);
    // viewSection.append(newView);

    // newView.classList.add("view-section");
    // // let test = document.getElementsByClassName("1");
    // console.log(document.getElementsByClassName("1").innerHTML);

    
    // newView.innerHTML= document.getElementsByClassName("1");
    // viewSection.append(newView);


    
    
    
    
    
    
}
//  document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");
   
   
// function order(arr){
//     let min=1;
//     let place;
//     for(let i=0 ; i<arr.length ; i++){
//         for (let x of arr) {
//             if(Number(arr[i].innerText)<=min){
//                 min=arr[i];
//                 place=i;
//             }
//         }
//         viewSection.append(arr[place]);
//         arr[place].innerText=null;
//     }
// }
   
   

    
    
    
    
    
    
    
    
    
    
