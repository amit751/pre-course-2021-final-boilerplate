function newElement( element , clas , content , appendTo){
    const x = document.createElement(element);
    x.classList.add(clas);
    x.innerText=content;
    appendTo.append(x);
    return x;
}
const list = catchElement("list");
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
            if(obj.status!== "deleted"){

                const listItem = newElement( "li" , "list-item" , "" , list);
                const todoContainer = newElement( "div" , "todo-container" , "" , listItem);
                const createdAt = newElement( "span" , "todo-created-at" , obj.date , todoContainer);//span
                const todoText = newElement( "span" , "todo-text" , obj.text , todoContainer);//span
                const priority = newElement( "span" , "todo-priority" , obj.priority , todoContainer);//span
                const buttonsContainer = newElement( "span" , "buttons-container" , "" ,todoContainer );
                const deletButton = newElement( "button" , "delete" , "delete" ,buttonsContainer); //new button-pass the test
                const markButton = newElement( "button" , "mark" , "mark" ,buttonsContainer); //new button-pass the test
                deletButton.addEventListener("click" , deleting ); //n
                markButton.addEventListener("click" , marking ); //n
                readingContentFromObj(obj ,todoContainer,listItem);
                addingButtons(todoContainer);
            }


        }
       
        
    }
}



function deleting(event){  //new pass
function deleting(event){  
    for (const obj of todosObjects) {
        console.log(obj);
        console.log(obj.innerHTML);
        console.log(event.currentTarget.parentElement.innerHTML);
       if(obj.containerInnerHtml===event.currentTarget.parentElement.parentElement.innerHTML){
           obj.status="deleted";
       } 
    }
    localStorage.setItem("todosObjects" , JSON.stringify(todosObjects));
    event.currentTarget.parentElement.parentElement.parentElement.remove();
    
    --qount;
    qounter.innerText=qount;
    localStorage.setItem("qounter" ,qount);
}
const addButton = catchElement("add-button");
let input = catchElement("text-input");
let viewSection = catchElement("view-section");
let priorityNum = catchElement("priority-selector");  //num
let priorityNum = catchElement("priority-selector");  

const sortButton = catchElement("sort-button");

addButton.addEventListener("click", addTodo );
sortButton.addEventListener("click",sorting2);
let todosObjects=[];
let witchIcon;
if(JSON.parse(localStorage.getItem("todosObjects"))){
     todosObjects=  JSON.parse(localStorage.getItem("todosObjects"));   
}else{ todosObjects=[];
}

function addTodo(event){

    const listItem = newElement( "li" , "list-item" , "" , list);
    listItem.classList.add(witchIcon);////////////////////////////////////////////////////////////
    listItem.classList.add(witchIcon);
    const todoContainer = newElement( "div" , "todo-container" , "" ,  listItem);
    const createdAt = newElement( "span" , "todo-created-at" , new Date().toLocaleString().replace('.', '-').replace('.', '-').replace(',', ' ') , todoContainer);
    const todoText = newElement( "span" , "todo-text" , input.value , todoContainer);
    const priority = newElement( "span" , "todo-priority" , priorityNum.value , todoContainer); //num
    const buttonsContainer = newElement( "span" , "buttons-container" , "" ,todoContainer );
    const deletButton = newElement( "button" , "delete" , "delete" ,buttonsContainer); //new button-pass the test
    const markButton = newElement( "button" , "mark" , "mark" ,buttonsContainer); //new button-pass the test
    deletButton.addEventListener("click" , deleting ); //n
    markButton.addEventListener("click" , marking ); //n
    console.log(todoContainer.innerHTML);
    const priority = newElement( "span" , "todo-priority" , priorityNum.value , todoContainer); 
    addingButtons(todoContainer);






    const todoObj ={};
    todoObj.text =  input.value;
    todoObj.priority = priorityNum.value; //num
    todoObj.priority = priorityNum.value; 
    todoObj.date =  new Date().toLocaleString().replace('.', '-').replace('.', '-').replace(',', ' ') ;
    todoObj.containerInnerHtml = todoContainer.innerHTML;
    todoObj.liClass = witchIcon;
    todosObjects.push(todoObj);

    let todosObjsJason=JSON.stringify(todosObjects);
    localStorage.clear();
    localStorage.setItem("todosObjects" , todosObjsJason);
    
    
   
    input.value="";
    qount++;
    qounter.innerText=qount;
    localStorage.setItem("qounter" ,qount);
    
    
    
}
function marking(event){
    if(!event.currentTarget.parentElement.parentElement.classList.contains("marker")){
        event.currentTarget.parentElement.parentElement.classList.add("marker");
        console.log(event.currentTarget.parentElement.parentElement); 
    }else{
        event.currentTarget.parentElement.parentElement.classList.remove("marker");
    }
    
    
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
    
    list.innerHTML="";
    for (const obj of arrey) {
        if(obj.status!== "deleted"){
            const listItem = newElement( "li" , "list-item" , "" , list);
            const todoContainer = newElement( "div" , "todo-container" , "" , listItem);
            const createdAt = newElement( "span" , "todo-created-at" , obj.date , todoContainer);
            const todoText = newElement( "span" , "todo-text" , obj.text , todoContainer);
            const priority = newElement( "span" , "todo-priority" , obj.priority , todoContainer);
            const buttonsContainer = newElement( "span" , "buttons-container" , "" ,todoContainer );
            const deletButton = newElement( "button" , "delete" , "delete" ,buttonsContainer); //new button-pass the test
            const markButton = newElement( "button" , "mark" , "mark" ,buttonsContainer); //new button-pass the test
            deletButton.addEventListener("click" , deleting ); //n
            markButton.addEventListener("click" , marking ); //n
            addingButtons(todoContainer);
            readingContentFromObj(obj, todoContainer , listItem);

        }

    }
    
}
const icon1 =  catchElement("img1");
const icon2 =  catchElement("img2");
const icon3 =  catchElement("img3");
const divIcons = catchElement("icons");
divIcons.addEventListener("click" , choseIcon);
function choseIcon(event){
    switch(event.target){
        case icon1:
            witchIcon = "icon1";
            icon1.classList.add("chosen");
            icon2.classList.remove("chosen");
            icon3.classList.remove("chosen");
            break;
        case icon2:
            witchIcon = "icon2";
            icon2.classList.add("chosen");
            icon1.classList.remove("chosen");
            icon3.classList.remove("chosen");
            break;
        case icon3:
            witchIcon = "icon3";
            icon3.classList.add("chosen");
            icon1.classList.remove("chosen");
            icon2.classList.remove("chosen");
            break;
    }
}

function addingButtons(todoContainer){

    const buttonsContainer = newElement( "span" , "buttons-container" , "" ,todoContainer );
    const deletButton = newElement( "button" , "delete" , "delete" ,buttonsContainer); 
    const markButton = newElement( "button" , "mark" , "mark" ,buttonsContainer); 
    deletButton.addEventListener("click" , deleting ); 
    markButton.addEventListener("click" , marking );    
}



function readingContentFromObj(obj, todoContainer,listItem){
    const createdAt = newElement( "span" , "todo-created-at" , obj.date , todoContainer);
    const todoText = newElement( "span" , "todo-text" , obj.text , todoContainer);
    const priority = newElement( "span" , "todo-priority" , obj.priority , todoContainer);
    listItem.classList.add(obj.liClass);
} 