
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
   
   
    for (const todo of  priorities) {
        todo.parentElement.classList.add(todo.innerText);
    }
    
    
    let innerHtml="";
    let finelHtml="";
    for(let i=1; i<6;i++){
        console.log(i);
        let order = document.getElementsByClassName(i);
        
        
        for(let j=0; j<order.length;j++){
            console.log(order.length);

            console.log(order[j].innerHTML);
            innerHtml=innerHtml.concat(order[j].innerHTML);
            console.log(innerHtml);

        }
        finelHtml=finelHtml.concat(innerHtml);
        innerHtml="";

    }
    console.log(finelHtml);
    let div = document.createElement("div");
    div.innerHTML=finelHtml;
    // viewSection.append(div);
    viewSection.innerHTML =div.innerHTML;
}
    
    // viewSection.innerHTML=finelHtml;
    // str1.concat(str2);
   
   
   
    // let newDiv = document.getElementsByClassName("1");
    // console.log(newDiv[0].innerHTML);
    // viewSection.innerHTML=newDiv[0].innerHTML;
    
    
    
    
    
    
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


    
    
       
    
    
    



console.log("dsfrdsf".concat("gdf"));
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
   
   

    
    
    
    
    
    
    
    
    
    
