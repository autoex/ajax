let tasksBtn = document.querySelector('.tasksBtn');
let addTaskBtn = document.querySelector('.addTask');
let taskField = document.querySelector('.taskField');
let tasks = document.querySelector('.tasks');
let todoId = 1222;


tasksBtn.addEventListener('click', loadTasks);

addTaskBtn.addEventListener('click', addTask);


async function addTask() {
    
   await postTask(todoId, taskField.value);
   taskField.value ='';
    
   

}

async function loadTasks() {
  
  let tasks = await getTasks(todoId);
  
 
  onTasksReceive (tasks);
  


}



function onTasksReceive (data) {
    tasks.innerHTML ='';
    data.forEach((i) => {
        let p = document.createElement('ol')
        p.innerHTML = i.title;
        tasks.append(p);
    

    })


}