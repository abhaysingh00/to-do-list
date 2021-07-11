let addBtn=document.getElementById("add-btn");
let task =document.getElementById("task");
let list=document.getElementById("list");
let countEle =document.getElementById("COUNT");

let count=0;
addBtn.addEventListener("click", function(){
     count =count +1;
     if(count<=1){
          countEle.innerText="TASK PENDING = "+count;}
          else {
          countEle.innerText="TASKS PENDING = "+count;}
 
let listEle =document.createElement("li"); 
let checkbox=document.createElement("input");
let cross=document.createElement("span");


cross.id="cross";
cross.textContent="+" ;
cross.classList.add("cross");
checkbox.type="checkbox";
checkbox.name="toDo"; 
checkbox.id="toDo";
listEle.append(checkbox);
listEle.classList.add("listEle");
listEle.append(task.value);
listEle.append(cross);
list.appendChild(listEle);
task.value="";

    checkbox.addEventListener("click", function(){
         listEle.style.textDecoration="line-through";
         listEle.classList.add("afftercb");
         count = count - 1;
         if(count<=1){
         countEle.innerText="TASK PENDING = "+count;}
         else {
         countEle.innerText="TASKS PENDING = "+count;}
    })
    cross.addEventListener("click", function(){
         list.removeChild(listEle);
    })
    })
