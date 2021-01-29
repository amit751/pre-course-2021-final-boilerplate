function addTodo(event){
    
    const todoObj ={};
    todoObj.text =  input.value;
    todoObj.priority = priorityNum.value; 
    todoObj.date =  new Date().toLocaleString().replace('.', '-').replace('.', '-').replace(',', ' ') ;
    
    todosObjects.push(todoObj);


    input.value="";
    qount++;
    qounter.innerText=qount;

    
    
    
}
const todoObj ={};
    todoObj.priority = priorityNum.value;
    todoObj.element = todoContainer;
    todoObj.html = todoContainer.innerHTML;
    todoObj.text = input.value;
    todoObj.time = new Date().toLocaleString().replace('.', '-').replace('.', '-').replace(',', ' ');






[
    {
        "text": "An example to-do",
        "priority": "1",
        "date": 1611662776177
    },
    {
        "text": "A second example to-do",
        "priority": "4",
        "date": 1611661776177
    }
]
