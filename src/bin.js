/////ask about skiping on load window
const binPOSTpath = "https://api.jsonbin.io/v3/b/602fa7b2bd6b755d0199af74" ;
const binGETpath = "https://api.jsonbin.io/v3/b/602fa7b2bd6b755d0199af74/latest";
const localpath = "http://localhost:3000/b/1";


async function main(){
    

    ///catching elements
    const list = catchElement("list");
    let qounter = catchElement("counter");
    let input = catchElement("text-input");
    let viewSection = catchElement("view-section");
    let priorityNum = catchElement("priority-selector");  
    const sortButton = catchElement("sort-button");
    const addButton = catchElement("add-button");
    addButton.addEventListener("click", addTodo );
    sortButton.addEventListener("click",sorting2);
    const spinnerContainer = catchElement("spinner-container");
    spinnerContainer.setAttribute("class" , "none");
    //////

    let BIN = await getdata();
    console.log(BIN);
    let identfy;
    let qount;
    let localBin = BIN;
    if(BIN["identfy"]){
        identfy= Number( BIN["identfy"]);   
    }else{
        identfy=0;  
    }
    if(BIN["qounter"]){
        qount = Number(BIN["qounter"]);
    }else{
        qount=0;
    }
     
    let todosARREY=[];
    qounter.innerText=qount;
    if (!(JSON.stringify(BIN["my-todo"])===JSON.stringify([]))){
        
        todosARREY=BIN["my-todo"]
        creatingaLiWithObjData(BIN["my-todo"]);
        qounter.innerText=getQount();
    }
    localStorage.setItem("qounter" ,qount);
    localStorage.setItem("identfy" ,identfy);
    localStorage.setItem("todosObjects" , JSON.stringify(BIN["my-todo"]));
    


    
    let witchIcon = "default";

    ////code to select icon
    const icon1 =  catchElement("img1");
    const icon2 =  catchElement("img2");
    const icon3 =  catchElement("img3");
    const divIcons = catchElement("icons");
    divIcons.addEventListener("click" , choseIcon);

    /////post data to bin
    async function postdata(data){
        spinnerContainer.classList.remove("none");
        try{
            
            const response =await fetch(localpath ,{ 
            method: 'PUT' ,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            });
            console.log("post:");
            console.log(response);
            spinnerContainer.classList.add("none");
            if (!response.ok){
                throw (`${response.status} status , post request faild`);
            }
            
        }catch(error){
            console.log(error);
            spinnerContainer.classList.add("none");
            alert("sory, could not save new tasks , comunication error ");

        }

        
    }
    
    ///read from bin
    async function getdata(){
        try{
            spinnerContainer.classList.remove("none");
            const response = await fetch(localpath );
            console.log("get:");
            console.log(response);
            const myjason = await response.json();
            spinnerContainer.classList.add("none");
            if (!response.ok){
                throw (`${response.status} status , get request faild`);
            }
            return myjason.record;
        }catch(error){
            
            console.log(error);
            spinnerContainer.classList.add("none");
            alert("comunication failed , could not get your data.")
            let usePlanB = confirm("YOU WANT TO USE YOUR LOCAL STORAGE ?");
            if(usePlanB){
              let test = {
                "my-todo": JSON.parse(localStorage.getItem("todosObjects")) ,
                identify: localStorage.getItem("todosObjects") ,
                qounter: localStorage.getItem("qounter")
              } 
              
              return test; 
            }else{
                console.log(55555);
                return {"my-todo":[] , identify: 0 , qounter: 0 };
            }
        }
        
    };
    ///create a new element
    function newElement( element , clas , content , appendTo){
        const x = document.createElement(element);
        x.classList.add(clas);
        x.innerText=content;
        appendTo.append(x);
        return x;
    }
    //catching element from html
    function catchElement(id){
        const x = document.getElementById(id);
        return x;
    }
    ///delete a todo
    function deleting(event){  
        for (const obj of todosARREY) {
        if(event.currentTarget.parentElement.parentElement.classList.contains(obj.id.toString())){
            obj.status="deleted";
        }
        }
        localStorage.setItem("todosObjects" , JSON.stringify(todosARREY));
        
        
        localBin["my-todo"]=todosARREY;
        event.currentTarget.parentElement.parentElement.parentElement.remove();
        --qount;
        // qounter.innerText=qount;
        qounter.innerText=getQount();
        localStorage.setItem("qounter" ,qount);
        localBin["qounter"] = qount;
        console.log(localBin["qounter"] );
        postdata(localBin); ////////////may be a problem
    }
    ///addtodo
    function addTodo(event){
        

        const listItem = newElement( "li" , "list-item" , "" , list);
        listItem.classList.add(witchIcon);
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
        
        todoObj.liClass = witchIcon;
        todoObj.liHtml = listItem.innerHTML;
        
        todosARREY.push(todoObj);
        
        qount++;
        // qounter.innerText=qount;
        qounter.innerText=getQount();
        ++identfy;
        
        let todosObjJason=JSON.stringify( todosARREY);
        localStorage.clear();
        localStorage.setItem("qounter" ,qount);
        localStorage.setItem("identfy" ,identfy);
        localStorage.setItem("todosObjects" , todosObjJason);
        localBin["my-todo"] = todosARREY;
        localBin["qounter"] = qount;
        localBin["identfy"] = identfy;
        input.value="";
        postdata(localBin); //maybe a problem
    }
    ///marker fitcher
    function marking(event){
        if(!event.currentTarget.parentElement.parentElement.classList.contains("marker")){
            event.currentTarget.parentElement.parentElement.classList.add("marker"); 
        }else{
            event.currentTarget.parentElement.parentElement.classList.remove("marker");
        }
    }
    ////sort an areey
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
    ///new placement of todos after pushing the button
    function sorting2(){
        const arrey = sort(todosARREY);
        list.innerHTML="";
        creatingaLiWithObjData(arrey);
    
    }
    ///code to select icon
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
            default:
                witchIcon = "default";
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
    ////create alist item whit a todo' receve data to fill the content of them
    function creatingaLiWithObjData(arrey){
        for (const obj of arrey) {
            if(obj.status!== "deleted"){
                const listItem = newElement( "li" , "list-item" , "" , list);
                listItem.classList.add(obj.liClass);
                const todoContainer = newElement( "div" , "todo-container" , "" , listItem);
                todoContainer.classList.add(obj.id);
                const createdAt = newElement( "span" , "todo-created-at" , obj.date , todoContainer);
                const todoText = newElement( "span" , "todo-text" , obj.text , todoContainer);
                const priority = newElement( "span" , "todo-priority" , obj.priority , todoContainer);
                addingButtons(todoContainer);  
                addEventToButtons();  
            }
        }
    }
    function getQount(){
        let tasks = document.querySelectorAll("li");
        return tasks.length;
    }
    //    postdata({"my-todo":[]});  
}


main();
