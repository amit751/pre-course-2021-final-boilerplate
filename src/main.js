
function newElement( element , clas , content , appendTo){
    const x = document.createElement(element);
    x.classList.add(clas);
    x.innerText=content;
    appendTo.append(x);

    return x;


}

let qounter = catchElement("counter");

let qount =Number(localStorage.getItem("qounter"));
qounter.innerText=qount;

function catchElement(id){
    const x = document.getElementById(id);
    return x;
}

window.onload = function(){
    if(JSON.parse(localStorage.getItem("todosObjects"))){
        const previusObj = JSON.parse(localStorage.getItem("todosObjects"));
        for (const obj of previusObj){
            

            const todoContainer = newElement( "div" , "todo-container" , "" , viewSection);
            const createdAt = newElement( "div" , "todo-created-at" , obj.date , todoContainer);
            const todoText = newElement( "div" , "todo-text" , obj.text , todoContainer);
            const priority = newElement( "div" , "todo-priority" , obj.priority , todoContainer);
        }
        
    }
}


const addButton = catchElement("add-button");
let input = catchElement("text-input");
let viewSection = catchElement("view-section");
let priorityNum = catchElement("priority-selector");  //num

const sortButton = catchElement("sort-button");

addButton.addEventListener("click", addTodo );
sortButton.addEventListener("click",sorting2);
let todosObjects=[];




if(JSON.parse(localStorage.getItem("todosObjects"))){
     todosObjects=  JSON.parse(localStorage.getItem("todosObjects"));   
}else{ todosObjects=[];
}

function addTodo(event){
    const todoContainer = newElement( "div" , "todo-container" , "" , viewSection);
    const createdAt = newElement( "div" , "todo-created-at" , new Date().toLocaleString().replace('.', '-').replace('.', '-').replace(',', ' ') , todoContainer);
    const todoText = newElement( "div" , "todo-text" , input.value , todoContainer);
    const priority = newElement( "div" , "todo-priority" , priorityNum.value , todoContainer); //num



    const todoObj ={};
    todoObj.text =  input.value;
    todoObj.priority = priorityNum.value; //num
    todoObj.date =  new Date().toLocaleString().replace('.', '-').replace('.', '-').replace(',', ' ') ;
    todosObjects.push(todoObj);
    
    let todosObjsJason=JSON.stringify(todosObjects);
    localStorage.clear();
    localStorage.setItem("todosObjects" , todosObjsJason);
    
    
   


    input.value="";
    qount++;
    qounter.innerText=qount;
    localStorage.setItem("qounter" ,qount);

    
    
    
}






function sort(arr){
    const newArr=[];
    for(let i =5 ; i>0 ; i--){
        for (const obj of arr) {

            if( obj.priority === i.toString()){
                newArr.push(obj);
                
            } 
        } 
    }
    
    return newArr;
}


function sorting2(){
    
    const arrey = sort(todosObjects);
    
    viewSection.innerHTML="";
    for (const obj of arrey) {
        

        const todoContainer = newElement( "div" , "todo-container" , "" , viewSection);
        const createdAt = newElement( "div" , "todo-created-at" , obj.date , todoContainer);
        const todoText = newElement( "div" , "todo-text" , obj.text , todoContainer);
        const priority = newElement( "div" , "todo-priority" , obj.priority , todoContainer);
        
    }
    
}








































    
    
    
    
