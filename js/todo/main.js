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
   await loadTasks();
    
   

}

async function loadTasks() {
  
  let tasks = await getTasks(todoId);
  
 
  onTasksReceive (tasks);
  


}



function onTasksReceive (data) {
    tasks.innerHTML ='';
    data.forEach((i) => {
        let p = document.createElement('li');
        let del = document.createElement('button');
        del.classList.add('removeBtn')
        del.innerHTML ='X';
        
        del.addEventListener('click', removeTask);
        p.dataset.id = i.id
        p.innerHTML = i.title;
        tasks.append(p);
        p.append(del);
    

    })


}

async function removeTask() {
  
    // console.log(this.parentElement.dataset.id)

   await deleteTask(todoId, this.parentElement.dataset.id);
   taskField.value ='';
   await loadTasks();



}