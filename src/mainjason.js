



async function postdata(arrey, qounter , identfy){
    const data ={
        "my-todo": arrey ,
        "qounter": qounter ,
        "identfy":identfy
    };
    
    const response =await fetch("https://api.jsonbin.io/v3/b/601585fab41a937c6d54546e" ,{ 
    method: 'PUT' ,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    const jason = await response.json();
    console.log( "fhinished to post" + jason);
}


async function getdata(){
    const response = await fetch("https://api.jsonbin.io/v3/b/601585fab41a937c6d54546e/latest" , {method:"GET"});
    const myjason = await response.json();
    console.log(myjason.record);
    return myjason.record;
};




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
    const jasonBin = getdata();
    if(jasonBin["my-todo"]){
        const previusObjs = jasonBin["my-todo"];
        creatingaLiWithObjData(previusObjs);
        
    }
}

function deleting(event){  
    for (const obj of todosObjects) {
       if(event.currentTarget.parentElement.parentElement.classList.contains(obj.id.toString())){
           obj.status="deleted";
       }
    }
    localStorage.setItem("todosObjects" , JSON.stringify(todosObjects));
    event.currentTarget.parentElement.parentElement.parentElement.remove();
    --qount;
    qounter.innerText=qount;
    localStorage.setItem("qounter" ,qount);
    postdata(todosObjects, qount);
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

//post
    let todosObjJason=JSON.stringify(todosObjects);
    localStorage.clear();
    localStorage.setItem("todosObjects" , todosObjJason);
    //postdata(todosObjects);
    input.value="";
    qount++;
    qounter.innerText=qount;
    ++identfy;
    localStorage.setItem("qounter" ,qount);
    localStorage.setItem("identfy" ,identfy);
    postdata( todosObjects , qount , identfy);
   
    
    
}
function marking(event){
    if(!event.currentTarget.parentElement.parentElement.classList.contains("marker")){
        event.currentTarget.parentElement.parentElement.classList.add("marker"); 
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
    creatingaLiWithObjData(arrey);
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
let jasonBin = getdata();
if(jasonBin.identfy){               
    identfy=jasonBin.identfy;
}
// if(JSON.parse(localStorage.getItem("identfy"))){                       
//     identfy=  JSON.parse(localStorage.getItem("identfy"));   
// }
let qount =Number(jasonBin.qounter);
qounter.innerText=qount;
let todosObjects=[];
let witchIcon;
if(jasonBin["my-todo"]){
    todosObjects= jasonBin["my-todo"];   
}else{ todosObjects=[];
}


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
        }
    }
}
