

const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todolist');
const checkdefault=document.getElementById('id1');
const checkdefault2=document.getElementById('id2');
const checkdefault3=document.getElementById('id3');
const checkdefault4=document.getElementById('id4');




const deflist=document.getElementById('li1');
const deflist2=document.getElementById('li2');
const deflist3=document.getElementById('li3');
const deflist4=document.getElementById('li4');




let itemCountSpan = document.getElementById('countclick');
let count = document.getElementById('listcount');
let count2 = document.getElementById('complete');
let count3 = document.getElementById('notcomplete');






var integer=4;
var k = 1;

itemCountSpan.addEventListener('click',function(){
    integer=integer+1;
    count.innerHTML = 'No of important task to do : '+(integer);
    count2.innerHTML = 'Completed : '+(k);
    count3.innerHTML = 'Not Completed :'+(integer-k);
   
    
});



todoButton.addEventListener('click',addTodo);

function addTodo(event) {

    event.preventDefault();
  
    const newTodo =document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.style.backgroundColor="#e3f2fd";
    newTodo.classList.add('list-item');
      //connecting to div with ul 
    todoList.appendChild(newTodo);


    //check mark button
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";
    checkbox.classList.add("checkbtn");
    newTodo.appendChild(checkbox);

    var check=0;
    var n=0;
    checkbox.addEventListener('click',function(){
      if(check==2*n){
        
        k++;
     count2.innerHTML = 'Completed : '+(k);
     count3.innerHTML = 'Not Completed :'+(integer-k);
     newTodo.style.backgroundColor="#a8dca8";
     newTodo.style.textDecoration="line-through";
      }
      else if(check==2*n+1){
        k--;
        count2.innerHTML = 'Completed : '+(k);
        count3.innerHTML = 'Not Completed :'+(integer-k);
        newTodo.style.backgroundColor="#e3f2fd";
        newTodo.style.textDecoration="none";
        n++;
      }
      check++;
    
    
});
  
todoInput.value="";
  
}


var check=0;
var n=0;

  checkdefault.addEventListener('click',function(){
   
      if(check==2*n){
        
        k++;
     count2.innerHTML = 'Completed : '+(k);
     count3.innerHTML = 'Not Completed :'+(integer-k);
     deflist.style.backgroundColor="#a8dca8";
     deflist.style.textDecoration="line-through";
      }
      else if(check==2*n+1){
        k--;
        count2.innerHTML = 'Completed : '+(k);
        count3.innerHTML = 'Not Completed :'+(integer-k);
        deflist.style.backgroundColor="#e3f2fd";
        deflist.style.textDecoration="none";
        n++;
      }
      check++;
    
   
 });

 var checkme=0;
  var i=0;

 checkdefault2.addEventListener('click',function(){
   
  if(checkme==2*i+1){
    
    k++;
 count2.innerHTML = 'Completed : '+(k);
 count3.innerHTML = 'Not Completed :'+(integer-k);
 deflist2.style.backgroundColor="#a8dca8";
 deflist2.style.textDecoration="line-through";
 i++;
  }
  else if(checkme==2*i){
    k--;
    count2.innerHTML = 'Completed : '+(k);
    count3.innerHTML = 'Not Completed :'+(integer-k);
    deflist2.style.backgroundColor="#e3f2fd";
    deflist2.style.textDecoration="none";
    
  }
  checkme++;


});
var checkmeto=0;
 var j=0;

checkdefault3.addEventListener('click',function(){
   
  if(checkmeto==2*j){
    
    k++;
 count2.innerHTML = 'Completed : '+(k);
 count3.innerHTML = 'Not Completed :'+(integer-k);
 deflist3.style.backgroundColor="#a8dca8";
 deflist3.style.textDecoration="line-through";
  }
  else if(checkmeto==2*j+1){
    k--;
    count2.innerHTML = 'Completed : '+(k);
    count3.innerHTML = 'Not Completed :'+(integer-k);
    deflist3.style.backgroundColor="#e3f2fd";
    deflist3.style.textDecoration="none";
    j++;
  }
  checkmeto++;


});

var checkmelast=0;
 var l=0;

checkdefault4.addEventListener('click',function(){
   
  if(checkmelast==2*l){
    
    k++;
 count2.innerHTML = 'Completed : '+(k);
 count3.innerHTML = 'Not Completed :'+(integer-k);
 deflist4.style.backgroundColor="#a8dca8";
 deflist4.style.textDecoration="line-through";
  }
  else if(checkmelast==2*l+1){
    k--;
    count2.innerHTML = 'Completed : '+(k);
    count3.innerHTML = 'Not Completed :'+(integer-k);
    deflist4.style.backgroundColor="#e3f2fd";
    deflist4.style.textDecoration="none";
    l++;
  }
  checkmelast++;


});
  

  