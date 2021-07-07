let addBtn=document.getElementById("add-btn");
let task =document.getElementById("task");
let list=document.getElementById("list");
addBtn.addEventListener("click", function(){
let para =document.createElement("p");
para.classList.add("para");
para.innerText=task.value;
list.appendChild(para);
task.value="";
para.addEventListener("click",function(){
     list.removeChild(para);
    })
    })
