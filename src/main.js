
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

window.onload = function(){

    if(JSON.parse(localStorage.getItem("todosObjects"))){
        const previusObj = JSON.parse(localStorage.getItem("todosObjects"));
        for (const obj of sort(previusObj)){
            

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
let priorityNum = catchElement("priority-selector");
let qounter = catchElement("counter");
const sortButton = catchElement("sort-button");

addButton.addEventListener("click", addTodo );
sortButton.addEventListener("click",sorting2);


const todosObjects = [];

function addTodo(event){
    const todoContainer = newElement( "div" , "todo-container" , "" , viewSection);
    const createdAt = newElement( "div" , "todo-created-at" , new Date().toLocaleString().replace('.', '-').replace('.', '-').replace(',', ' ') , todoContainer);
    const todoText = newElement( "div" , "todo-text" , input.value , todoContainer);
    const priority = newElement( "div" , "todo-priority" , priorityNum.value , todoContainer);



    const todoObj ={};
    todoObj.text =  input.value;
    todoObj.priority = priorityNum.value; 
    todoObj.date =  new Date().toLocaleString().replace('.', '-').replace('.', '-').replace(',', ' ') ;
    todosObjects.push(todoObj);
    
    let todosObjsJason=JSON.stringify(todosObjects);
    localStorage.clear();
    localStorage.setItem("todosObjects" , todosObjsJason);
    
    
    console.log(todoObj);
    console.log(todosObjects);


    input.value="";
    qount++;
    qounter.innerText=qount;

    
    
    
}


function sorting(event){
    let priorities = document.getElementsByClassName("todo-priority");
    console.log(priorities);
    let test= document.createElement("div");
    for (const todo of  priorities) {
        todo.parentElement.classList.add(todo.innerText);
    }
    for(let i=5 ; i>0 ;  i--){
        let order=viewSection.getElementsByClassName(i.toString());
        console.log(order);
        let length = order.length;
        for(let j=0; j<length;j++){
            test.append(order[0]);
              
        }
    }
    console.log(test);
    console.log(test.innerHTML);
    console.log(viewSection.innerHTML);
    viewSection.append(test);

}



function sort(arr){
    const newArr=[];
    for(let i =5 ; i>0 ; i--){
        for (const obj of arr) {

            if( obj.priority === i.toString()){
                newArr.push(obj);
                console.log(newArr);
            } 
        } 
    }
    console.log(newArr);
    return newArr;
}


function sorting2(){
    console.log(todosObjects);
    const arrey = sort(todosObjects);
    console.log(arrey);
    viewSection.innerHTML="";
    for (const obj of arrey) {
        

        const todoContainer = newElement( "div" , "todo-container" , "" , viewSection);
        const createdAt = newElement( "div" , "todo-created-at" , obj.date , todoContainer);
        const todoText = newElement( "div" , "todo-text" , obj.text , todoContainer);
        const priority = newElement( "div" , "todo-priority" , obj.priority , todoContainer);
        
    }
    console.log(todosObjects);
}




















// let divchek  = catchElement("chek");
// let test= document.createElement("div");

// function sorting(event){
//     let priorities = viewSection.getElementsByClassName("todo-priority");
//     let test= document.createElement("div");
//     console.log(priorities);
//     for(let i=1 ; i<6 ;  i++){
//         for (const num of priorities){
//             if(num.innerText===i.toString()){
//                 test.innerHTML=num.parentElement.innerHTML;
//                 console.log(num.parentElement.innerHTML);

//             }
//         }
//     }
//     divchek.innerHTML=test.innerHTML;


// }






// let test= document.createElement("div");
//     for (const todo of  priorities) {
//         todo.parentElement.classList.add(todo.innerText);
//     }
//     for(let i=1 ; i<6 ;  i++){
//         let order=document.getElementsByClassName(i.toString());
//         console.log(order);
//         for(let j=0; j<order.length;j++){
//             test.append(order[j]);
              
//         }
//     }
//     console.log(test);
//     console.log(test.innerHTML);
//     divchek.innerHTML=test.innerHTML;

// }
// function sorting(event){
//     let priorities = document.getElementsByClassName("todo-priority");
//     console.log(priorities);
//     let test= document.createElement("div");
//     for (const todo of  priorities) {
//         todo.parentElement.classList.add(todo.innerText);
//     }
//     for(let i=1 ; i<6 ;  i++){
//         let order=viewSection.getElementsByClassName(i.toString());
//         console.log(order);
//         let length = order.length;
//         for(let j=0; j<length;j++){
//             test.append(order[0]);
              
//         }
//     }
//     console.log(test);
//     console.log(test.innerHTML);
//     console.log(viewSection.innerHTML);
//     divchek.append(test);

// }

// function sort(arr){
























    
    
    
    
