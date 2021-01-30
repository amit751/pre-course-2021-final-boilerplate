
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
            if(obj.status!== "deleted"){
                const todoContainer = newElement( "div" , "todo-container" , "" , viewSection);
                const createdAt = newElement( "div" , "todo-created-at" , obj.date , todoContainer);
                const todoText = newElement( "div" , "todo-text" , obj.text , todoContainer);
                const priority = newElement( "div" , "todo-priority" , obj.priority , todoContainer);
                const deletButton = newElement( "button" , "delete" , "delete" ,todoContainer); //new button-pass the test
                const markButton = newElement( "button" , "mark" , "mark" ,todoContainer); //new button-pass the test
                deletButton.addEventListener("click" , deleting ); //n
                markButton.addEventListener("click" , marking ); //n
            }
           
            

        }
        // const allDelets = document.getElementsByClassName("delete");   //new pass
        // const allMarks = document.getElementsByClassName("mark");   //new pass
        // for (const button of allDelets) {
        //     button.addEventListener("click" , deleting );
        // }
        // const allMarks = document.getElementsByClassName("mark");   //new pass
        // for (const button of allMarks) {
        //     button.addEventListener("click" , marking );
        // }
        
    }
}



function deleting(event){  //new pass
    for (const obj of todosObjects) {
        console.log(obj);
        console.log(obj.innerHTML);
        console.log(event.currentTarget.parentElement.innerHTML);
       if(obj.containerInnerHtml===event.currentTarget.parentElement.innerHTML){
           obj.status="deleted";
       } 
    }
    localStorage.setItem("todosObjects" , JSON.stringify(todosObjects));
    event.currentTarget.parentElement.remove();
    
    --qount;
    qounter.innerText=qount;
    localStorage.setItem("qounter" ,qount);


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
    const deletButton = newElement( "button" , "delete" , "delete" ,todoContainer); //new button-pass the test
    const markButton = newElement( "button" , "mark" , "mark" ,todoContainer); //new button-pass the test
    deletButton.addEventListener("click" , deleting ); //n
    markButton.addEventListener("click" , marking ); //n
    console.log(todoContainer.innerHTML);
               



    const todoObj ={};
    todoObj.text =  input.value;
    todoObj.priority = priorityNum.value; //num
    todoObj.date =  new Date().toLocaleString().replace('.', '-').replace('.', '-').replace(',', ' ') ;
    todoObj.containerInnerHtml = todoContainer.innerHTML;
    todosObjects.push(todoObj);
    
    let todosObjsJason=JSON.stringify(todosObjects);
    localStorage.clear();
    localStorage.setItem("todosObjects" , todosObjsJason);
    
    
   


    input.value="";
    qount++;
    qounter.innerText=qount;
    localStorage.setItem("qounter" ,qount);

    
    
    
}
function marking(){
    console.log(1);
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
        if(obj.status!== "deleted"){
        

            const todoContainer = newElement( "div" , "todo-container" , "" , viewSection);
            const createdAt = newElement( "div" , "todo-created-at" , obj.date , todoContainer);
            const todoText = newElement( "div" , "todo-text" , obj.text , todoContainer);
            const priority = newElement( "div" , "todo-priority" , obj.priority , todoContainer);
            const deletButton = newElement( "button" , "delete" , "delete" ,todoContainer); //new button-pass the test
            const markButton = newElement( "button" , "mark" , "mark" ,todoContainer); //new button-pass the test
            deletButton.addEventListener("click" , deleting ); //n
            markButton.addEventListener("click" , marking ); //n
        }
            
    }
    
}



// const allDelets = document.getElementsByClassName("delete");   //new pass

// for (const button of allDelets) {
//     button.addEventListener("click" , deleting );
// }
// const allMarks = document.getElementsByClassName("mark");   //new pass
// for (const button of allMarks) {
//     button.addEventListener("click" , marking );
// }




































    
    
    
    
