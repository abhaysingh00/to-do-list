let addBtn=document.getElementById("add-btn");
let task =document.getElementById("task");
let list=document.getElementById("list");
addBtn.addEventListener("click", function(){
 
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
    })
    cross.addEventListener("click", function(){
         list.removeChild(listEle);
    })
    })
