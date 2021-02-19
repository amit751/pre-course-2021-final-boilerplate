////ask about skiping on load window

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
    //////

    let todoObj = await getdata();
    console.log(todoObj["my-todo"]);
    // if (!(JSON.stringify(todoObj["my-todo"])===JSON.stringify([]))){
    //     creatingaLiWithObjData(todoObj["my-todo"]);
    // } 
    
    
    let identfy=0;
    if(todoObj["identfy"]){
        identfy= Number( todoObj["identfy"]);   
    }

    let qount =0;
    if(todoObj["qounter"]){
     qount = Number(todoObj["qounter"]);
     
     qounter.innerText=qount;
    }
    let jasonBin = todoObj;
    todosObjects=  jasonBin["my-todo"];
    localStorage.setItem("qounter",qount);

     if (!(JSON.stringify(todoObj["my-todo"])===JSON.stringify([]))){
        creatingaLiWithObjData(todoObj["my-todo"]);
        qounter.innerText= localStorage.getItem("qounter");
    } 
    
    // let jasonBin = await getdata();
    // if(jasonBin["identfy"]){
    //     identfy= Number( jasonBin["identfy"]);   
    // }
    // if(jasonBin["qounter"]){
    //  qount = Number(jasonBin["qounter"]);
    //  console.log(qount);
    //  console.log(jasonBin["qounter"]);
    // }
    // qounter.innerText=qount.toString();
    // let todosObjects=[];
    // if( jasonBin["my-todo"]!==""){
    //     console.log(jasonBin["my-todo"])
        // todosObjects=  jasonBin["my-todo"];   
        
        
    // }
    
    // let jasonBin = dataJason !== "" ? dataJason : [];
    // console.log(jasonBin);
    
    // if(jasonBin["identfy"]!==""){
    //     identfy=  jasonBin.identfy;   
    // }
    // if(jasonBin["qounter"]!==""){
    //  qount =Number(jasonBin.qounter);
    // }
    // qounter.innerText=qount;
    // let todosObjects=[];
    // if( jasonBin["my-todo"]!==""){
    //     console.log(jasonBin["my-todo"])
    //     todosObjects=  jasonBin["my-todo"];   
        
        
    // }
    let witchIcon = "default";

    ////code to select icon
    const icon1 =  catchElement("img1");
    const icon2 =  catchElement("img2");
    const icon3 =  catchElement("img3");
    const divIcons = catchElement("icons");
    divIcons.addEventListener("click" , choseIcon);

    /////post data to bin
    async function postdata(data){
        const response =await fetch("https://api.jsonbin.io/v3/b/602fa7b2bd6b755d0199af74" ,{ 
        method: 'PUT' ,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        const jason = await response.json();
        console.log( jason);
    }
    
    ////read from bin
    async function getdata(){
        const response = await fetch("https://api.jsonbin.io/v3/b/602fa7b2bd6b755d0199af74/latest" );
        const myjason = await response.json();
        return myjason.record;
        
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
        for (const obj of todosObjects) {
        if(event.currentTarget.parentElement.parentElement.classList.contains(obj.id.toString())){
            obj.status="deleted";
        }
        }
        localStorage.setItem("todosObjects" , JSON.stringify(todosObjects));
        
        console.log(todosObjects);
        console.log(jasonBin["my-todo"]);
        jasonBin["my-todo"]=todosObjects;
        event.currentTarget.parentElement.parentElement.parentElement.remove();
        --qount;
        qounter.innerText=qount;
        localStorage.setItem("qounter" ,qount);
        jasonBin["qounter"] = qount;
        console.log(jasonBin["qounter"] );
        postdata(jasonBin);
    }
    ///addtodo
    function addTodo(event){
        

        const listItem = newElement( "li" , "list-item" , "" , list);
        listItem.classList.add(witchIcon);
        const todoContainer = newElement( "div" , "todo-container"  , "" ,  listItem);
        todoContainer.classList.add(identfy);
        const priority = newElement( "span" , "todo-priority" , priorityNum.value , todoContainer);
        const createdAt = newElement( "span" , "todo-created-at" , new Date().toLocaleString().replace('.', '-').replace('.', '-').replace(',', ' ') , todoContainer);
        const todoText = newElement( "span" , "todo-text" , input.value , todoContainer);
        addingButtons(todoContainer);

        let todoObj ={};
        todoObj.id = identfy;
        todoObj.text =  input.value;
        todoObj.priority = priorityNum.value; 
        todoObj.date =  new Date().toLocaleString().replace('.', '-').replace('.', '-').replace(',', ' ') ;
        
        todoObj.liClass = witchIcon;
        todoObj.liHtml = listItem.innerHTML;
        console.log(todosObjects);
        console.log(todoObj);
        
        console.log(todoObj.liHtml);

        console.log(todosObjects);
        todosObjects.push(todoObj);
        
        qount++;
        qounter.innerText=qount;
        ++identfy;
        
        let todosObjJason=JSON.stringify(todosObjects);
        localStorage.clear();
        localStorage.setItem("qounter" ,qount);
        localStorage.setItem("identfy" ,identfy);
        localStorage.setItem("todosObjects" , todosObjJason);
        jasonBin["my-todo"] = todosObjects;
        jasonBin["qounter"] = qount;
        jasonBin["identfy"] = identfy;
        postdata(jasonBin);
        input.value="";
        
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
        const arrey = sort(todosObjects);
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
            }
        }
    }
   
    
}


main();
