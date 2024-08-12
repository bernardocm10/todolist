const form = document.querySelector("#task-form")
const taskList = document.querySelector("#tasks")

form.onsubmit = function (e){
    e.preventDefault();
    const task = document.querySelector("#input").value;
    const li = document.createElement("li");
    li.innerHTML= task;
    taskList.appendChild(li);
    document.querySelector("#input").value = "";
}
taskList.onclick =  function (e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
}
