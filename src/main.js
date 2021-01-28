
function newElement( element , clas , content , appendTo){
    const x = document.createElement(element);
    x.classList.add(clas);
    x.innerText=content;
    appendTo.append(x);

    return x;


}
let qount =0;
function catchElement(id){
    const x = document.getElementById(id);
    return x;
}



const addButton = catchElement("add-button");
let input = catchElement("text-input");
let viewSection = catchElement("view-section");
let priorityNum = catchElement("priority-selector");
let qounter = catchElement("counter");
const sortButton = catchElement("sort-button");

addButton.addEventListener("click", addTodo );
sortButton.addEventListener("click",sorting);




function addTodo(event){
    const todoContainer = newElement( "div" , "todo-container" , "" , viewSection);
    const createdAt = newElement( "div" , "todo-created-at" , new Date().toLocaleString().replace('.', '-').replace('.', '-').replace(',', ' ') , todoContainer);
    const todoText = newElement( "div" , "todo-text" , input.value , todoContainer);
    const priority = newElement( "div" , "todo-priority" , priorityNum.value , todoContainer);

    input.value="";
    qount++;
    qounter.innerText=qount;
    // qounter.value=qount;
    
    
    
}


function sorting(event){
    let priorities = document.getElementsByClassName("todo-priority");
    console.log(priorities);
    let test= document.createElement("div");
    for (const todo of  priorities) {
        todo.parentElement.classList.add(todo.innerText);
    }
    for(let i=1; i<6;i++){
        let order=document.getElementsByClassName(i);
        console.log(order);
        for(let j=0; j<order.length;j++){
            test.append(order[j]);  
        }
    }
    console.log(test);
    console.log(test.innerHTML);
    viewSection.innerHTML=test.innerHTML;

}

   
   

    
    
    
    
    
    
    
    
    
    
