

const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');

let itemCountSpan = document.getElementById('countclick');
let int = document.getElementById('item-count');



var integer=0;
var t=0;
var k = 0;



todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);



itemCountSpan.addEventListener('click',function(){
    integer=integer+1;
    t=t+1;
    int.innerHTML = 'NO OF TASK ARE : '+(integer);
    
});
    


    
   





function addTodo(event) {

    event.preventDefault();
    //make dynamic div for list
    const todoDiv =document.createElement("div");
    todoDiv.classList.add("todo");
    //creating list
    const newTodo =document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    

      //connecting to div with ul 
      todoList.appendChild(todoDiv);
    
    
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML='<i class="fa-solid fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    completedButton.addEventListener('click',function(){
      
          k=k+1;
          integer--;
         
            console.log(`No of completed Task are ${k}`);
            console.log(`No of Pending Task are ${t-k}`);
                  

        
    });
   

    

     //check trash button
     const trashButton = document.createElement('button');
     trashButton.innerHTML='<i class="fas fa-trash"></i>';
     trashButton.classList.add("trash-btn");
     todoDiv.appendChild(trashButton);

     // erasing the input vlaue
     todoInput.value="";
}
//new fn of delete
function deleteCheck(e){
    const item= e.target;
    if(item.classList[0]==='trash-btn'){
        const todo =  item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend',function(){

            todo.remove();
            integer=integer-1;
            int.innerHTML = 'NO OF TASK ARE : '+(integer);
           

          });
       
    }
    if(item.classList[0]==="complete-btn"){
        const todo =item.parentElement;
        todo.classList.toggle("completed");

    }
}

