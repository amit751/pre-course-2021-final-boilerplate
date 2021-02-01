
window.onload = function(){
        const previusObj = JSON.parse(localStorage.getItem("todosObjects"));
        if(previusObj){
            
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
async function main(){

    async function postdata(data){
        // const data ={
        //     "my-todo": arrey ,
        //     "qounter": qounter ,
        //     "identfy":identfy
        // };
        
        const response =await fetch("https://api.jsonbin.io/v3/b/601585fab41a937c6d54546e" ,{ 
        method: 'PUT' ,
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        const jason = await response.json();
        console.log( "fhinished to post" + jason.record);//
    }


    async function getdata(){
        const response = await fetch("https://api.jsonbin.io/v3/b/601585fab41a937c6d54546e/latest" );
        const myjason = await response.json();
        console.log(myjason.record);
        return myjason.record;
    };

    // window.onload = function(){
    //     const previusObj = JSON.parse(localStorage.getItem("todosObjects"));
    //     if(previusObj){
            
    //         creatingaLiWithObjData(previusObj);
    //         // for (const obj of previusObj){
    //         //     if(obj.status!== "deleted"){
    //         //         const listItem = newElement( "li" , "list-item" , "" , list);
    //         //         listItem.innerHTML = obj.liHtml;
    //         //         listItem.classList.add(obj.liClass);
    //         //         addEventToButtons(); 
    //         //     }
    //         // }
    //     }
    // }

   


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

   

    /////code for icons
    const icon1 =  catchElement("img1");
    const icon2 =  catchElement("img2");
    const icon3 =  catchElement("img3");
    const divIcons = catchElement("icons");
    divIcons.addEventListener("click" , choseIcon);
    ////////////////
    


    jasonBin = await getdata();
    console.log(jasonBin); //
    // console.log(todosObjects);
    let identfy = jasonBin.identfy !== null ? jasonBin.identfy : 0 ;
    let qount = jasonBin.qounter !== null ?  Number(jasonBin.qounter) : 0 ;
    let Todos = jasonBin !== null ? jasonBin : {
        "my-todo": [] ,
        "qounter": qount ,
        "identfy": identfy
    }; 
    console.log(jasonBin.qounter);  //
    console.log(jasonBin.identfy);//
    console.log(Todos);
    console.log(qount);
    console.log(identfy);
    localStorage.setItem("todosObjects" , JSON.stringify(["my-todo"]));
    localStorage.setItem("qounter" ,qount);
    localStorage.setItem("identfy" ,identfy);

    let witchIcon="default";
    qounter.innerText=qount;



    // window.onload = function(){ 
    //     if(Todos["my-todo"]!==""){
    //       creatingaLiWithObjData(Todos["my-todo"]);
    //     }
    // }


    function deleting(event){  
        for (const obj of Todos["my-todo"]) {
        if(event.currentTarget.parentElement.parentElement.classList.contains(obj.id.toString())){
            obj.status="deleted";
        }
        }
        localStorage.setItem("my-todo" , JSON.stringify(Todos["my-todo"]));
        event.currentTarget.parentElement.parentElement.parentElement.remove();
        --qount;
        Todos["qounter"] = qount
        console.log(Todos)
        qounter.innerText=qount;
        localStorage.setItem("qounter" ,qount);
        postdata(Todos);
    }

    function addTodo(event){

        const listItem = newElement( "li" , "list-item" , "" , list);
        listItem.classList.add(witchIcon);///////can remove this line and change above
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
        // todoObj.containerInnerHtml = todoContainer.innerHTML;
        todoObj.liClass = witchIcon;
        todoObj.liHtml = listItem.innerHTML;
        Todos["my-todo"].push(todoObj);

    //post
        let TodosJason=JSON.stringify(Todos);
        localStorage.clear();
        localStorage.setItem("todosObjects" , TodosJason["my-todo"]);
        //postdata(todosObjects);
        input.value="";
        qount++;
        qounter.innerText=qount;
        ++identfy;
        localStorage.setItem("qounter" ,qount);
        localStorage.setItem("identfy" ,identfy);
        
        Todos["identfy"]=identfy;
        Todos["qounter"]=qount;
        postdata( Todos);
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
        const arrey = sort(Todos["my-todo"]);
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
    
}

main();