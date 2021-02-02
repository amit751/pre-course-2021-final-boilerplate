///catching elements that i need - structre of html +evetliseners
const serchInput=catchElement("serch-input");
const serchButton=catchElement("serch-button");
const list = catchElement("list");
let qounter = catchElement("counter");
let input = catchElement("text-input");
let viewSection = catchElement("view-section");
let priorityNum = catchElement("priority-selector");  
const sortButton = catchElement("sort-button");
const addButton = catchElement("add-button");
addButton.addEventListener("click", addTodo );
sortButton.addEventListener("click",sorting2);
const icon1 =  catchElement("img1");
const icon2 =  catchElement("img2");
const icon3 =  catchElement("img3");
const divIcons = catchElement("icons");
divIcons.addEventListener("click" , choseIcon);
////////////////////////

//////asiigning to varibales - the starting point of varibles value
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

//creating element giving it properties, content and more
function newElement( element , clas , content , appendTo){
    const elm = document.createElement(element);
    elm.classList.add(clas);
    elm.innerText=content;
    appendTo.append(elm);
    return elm;
}
//catching element from html to js
function catchElement(id){
    const element = document.getElementById(id);
    return element;
}
//on louding it reads localstorage`s todos and represintig them on the page
window.onload = function(){
    if(JSON.parse(localStorage.getItem("todosObjects"))){
        const previusObj = JSON.parse(localStorage.getItem("todosObjects"));
        creatingaLiWithObjData(previusObj);
    }
}
///delete listitem(a todo)
function deleting(event){  
    for (const obj of todosObjects){
       if(event.currentTarget.closest("div").classList.contains(obj.id.toString())){  
           obj.status="deleted";
        }
    }
    localStorage.setItem("todosObjects" , JSON.stringify(todosObjects));
    event.currentTarget.closest("li").remove(); 
    --qount;
    qounter.innerText=qount;
    localStorage.setItem("qounter" ,qount);
}
//whats hapnenig when adding a todo: reding the input , creating todo and saving in arrey of objects
function addTodo(event){
    //creating structre of listitem and filling with data
    const listItem = newElement( "li" , "list-item" , "" , list);
    listItem.classList.add(witchIcon);
    const todoContainer = newElement( "div" , "todo-container"  , "" ,  listItem);
    todoContainer.classList.add(identfy);
    const priority = newElement( "span" , "todo-priority" , priorityNum.value , todoContainer);
    const createdAt = newElement( "span" , "todo-created-at" , new Date().toLocaleString().replace('.', '-').replace('.', '-').replace(',', ' ') , todoContainer);
    const todoText = newElement( "span" , "todo-text" , input.value , todoContainer);
    addingButtons(todoContainer);
    addEventTodoLine();
    ////////

    ///saving information about the todo in an arey
    let todoObj ={};
    todoObj.id = identfy;
    todoObj.text =  input.value;
    todoObj.priority = priorityNum.value; 
    todoObj.date =  new Date().toLocaleString().replace('.', '-').replace('.', '-').replace(',', ' ') ;
    todoObj.liClass = witchIcon;
    todoObj.liHtml = listItem.innerHTML;
    todosObjects.push(todoObj);
    //////

    /////saving the arrey in local storage
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
///mark a todo line
function marking(event){
    if(!event.currentTarget.closest("div").classList.contains("marker")){
        event.currentTarget.closest("div").classList.add("marker");               
    }else{
        event.currentTarget.closest("div").classList.remove("marker");
    }
}

///takes an areey and sort it acording to the priority property
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

//when clicking on sort
function sorting2(){
    const arrey = sort(todosObjects);
    list.innerHTML="";
    creatingaLiWithObjData(arrey);
    
}
///this function anable to chose an icon to a todo
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
////ading the buttons and their callback function to every list item
function addingButtons(todoContainer){

    const buttonsContainer = newElement( "span" , "buttons-container" , "" ,todoContainer );
    const deletButton = newElement( "button" , "delete" , "delete" ,buttonsContainer); 
    const markButton = newElement( "button" , "mark" , "mark" ,buttonsContainer); 
    deletButton.addEventListener("click" , deleting ); 
    markButton.addEventListener("click" , marking );    
}


///when needed it giving the delet and mark botton eventlistiener
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
/////receving information and create an list item - a todo 
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

////the 2 functions putting a crossline on a todo
function addEventTodoLine(){

    let allTodoLine = document.getElementsByClassName( "todo-text");
    for (const line of allTodoLine) {
        line.addEventListener("click" ,done );
    }
}

function done(event){
    if(event.target.closest("span")){
    if(!event.currentTarget.parentElement.classList.contains("done")){
        event.currentTarget.parentElement.classList.add("done");               
    }else{
        event.currentTarget.parentElement.classList.remove("done");
    }
}
}

/////