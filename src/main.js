function newElement( element , clas , content , appendTo){
    const x = document.createElement(element);
    x.classList.add(clas);
    x.innerText=content;
    appendTo.append(x);
    return x;
}
function catchElement(id){
    const x = document.getElementById(id);
    return x;
}

window.onload = function(){
    if(JSON.parse(localStorage.getItem("todosObjects"))){
        const previusObj = JSON.parse(localStorage.getItem("todosObjects"));
        creatingaLiWithObjData(previusObj);
        // for (const obj of previusObj){
        //     if(obj.status!== "deleted"){
        //         const listItem = newElement( "li" , "list-item" , "" , list);
        //         listItem.innerHTML = obj.liHtml;
        //         listItem.classList.add(obj.liClass);
        //         addEventToButtons(); 
        //     }
        // }
    }
}

function deleting(event){  
    for (const obj of todosObjects) {
       if(event.currentTarget.closest("div").classList.contains(obj.id.toString())){  //was befor:event.currentTarget.parentElement.parentElement.classList.contains(obj.id.toString())
           obj.status="deleted";
       }
    }
    localStorage.setItem("todosObjects" , JSON.stringify(todosObjects));
    // event.currentTarget.parentElement.parentElement.parentElement.remove();
    event.currentTarget.closest("li").remove(); // insted
    --qount;
    qounter.innerText=qount;
    localStorage.setItem("qounter" ,qount);
}

function addTodo(event){

    const listItem = newElement( "li" , "list-item" , "" , list);
    listItem.classList.add(witchIcon);///////can remove this line and change above
    const todoContainer = newElement( "div" , "todo-container"  , "" ,  listItem);
    todoContainer.classList.add(identfy);
    const createdAt = newElement( "span" , "todo-created-at" , new Date().toLocaleString().replace('.', '-').replace('.', '-').replace(',', ' ') , todoContainer);
    const todoText = newElement( "span" , "todo-text" , input.value , todoContainer);
    const priority = newElement( "span" , "todo-priority" , priorityNum.value , todoContainer); 
    addingButtons(todoContainer);

    let todoObj ={};
    todoObj.id = identfy;
    todoObj.text =  input.value;
    todoObj.priority = priorityNum.value; 
    todoObj.date =  new Date().toLocaleString().replace('.', '-').replace('.', '-').replace(',', ' ') ;
    // todoObj.containerInnerHtml = todoContainer.innerHTML;
    todoObj.liClass = witchIcon;
    todoObj.liHtml = listItem.innerHTML;
    todosObjects.push(todoObj);


    let todosObjJason=JSON.stringify(todosObjects);
    localStorage.clear();
    localStorage.setItem("todosObjects" , todosObjJason);
    
    
   
    input.value="";
    qount++;
    qounter.innerText=qount;
    localStorage.setItem("qounter" ,qount);
    localStorage.setItem("identfy" ,identfy);
    ++identfy;
    localStorage.setItem("identfy" ,identfy);
    
    
}
function marking(event){
    if(!event.currentTarget.closest("div").classList.contains("marker")){
        event.currentTarget.closest("div").classList.add("marker");               // insted event.currentTarget.parentElement.parentElement.classList
    }else{
        event.currentTarget.closest("div").classList.remove("marker");
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
    creatingaLiWithObjData(arrey);
    // for (const obj of arrey) {
    //     if(obj.status!== "deleted"){
    //         const listItem = newElement( "li" , "list-item" , "" , list);
    //         listItem.innerHTML=obj.liHtml;
    //         listItem.classList.add(obj.liClass);
    //         addEventToButtons();
    //     }
    // }
}

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

// function readingContentFromObj(obj, todoContainer,listItem){
//     const createdAt = newElement( "span" , "todo-created-at" , obj.date , todoContainer);
//     const todoText = newElement( "span" , "todo-text" , obj.text , todoContainer);
//     const priority = newElement( "span" , "todo-priority" , obj.priority , todoContainer);
//     listItem.classList.add(obj.liClass);
// } 





///main structre of html
const list = catchElement("list");
let qounter = catchElement("counter");
let input = catchElement("text-input");
let viewSection = catchElement("view-section");
let priorityNum = catchElement("priority-selector");  
const sortButton = catchElement("sort-button");
const addButton = catchElement("add-button");
addButton.addEventListener("click", addTodo );
sortButton.addEventListener("click",sorting2);
////////////////////////

///////////////asiigning to varibales
let identfy=0;
if(JSON.parse(localStorage.getItem("identfy"))){
    identfy=  JSON.parse(localStorage.getItem("identfy"));   
}
let qount =Number(localStorage.getItem("qounter"));
qounter.innerText=qount;
let todosObjects=[];
let witchIcon;
if(JSON.parse(localStorage.getItem("todosObjects"))){
     todosObjects=  JSON.parse(localStorage.getItem("todosObjects"));   
}else{ todosObjects=[];
}
////////////////////////

/////code for icons
const icon1 =  catchElement("img1");
const icon2 =  catchElement("img2");
const icon3 =  catchElement("img3");
const divIcons = catchElement("icons");
divIcons.addEventListener("click" , choseIcon);
////////////////




function addEventToButtons(){

    let allDelete = document.getElementsByClassName( "delete");
    for (const button of allDelete) {
        button.addEventListener("click" ,deleting );
    }
    let allMark = document.getElementsByClassName( "mark");
    for (const button of allMark) {
        button.addEventListener("click" ,marking );
    }
}





function creatingaLiWithObjData(arrey){
    for (const obj of arrey) {
        if(obj.status!== "deleted"){
            const listItem = newElement( "li" , "list-item" , "" , list);
            listItem.innerHTML=obj.liHtml;
            listItem.classList.add(obj.liClass);
            addEventToButtons();
            addEventTodoLine();
        }
    }
}


function addEventTodoLine(){

    let allTodoLine = document.getElementsByClassName( "todo-container");
    for (const line of allTodoLine) {
        line.addEventListener("click" ,done );
    }
}

function done(event){
    if(event.target.closest("span")){
    if(!event.currentTarget.classList.contains("done")){
        event.currentTarget.classList.add("done");               // insted event.currentTarget.parentElement.parentElement.classList
    }else{
        event.currentTarget.classList.remove("done");
    }
}
}