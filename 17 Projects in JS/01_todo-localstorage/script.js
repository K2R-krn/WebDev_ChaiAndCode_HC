// alert("hello");
//* Doing this because we want to make sure once DOMContent then we perform all the operations 
document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById("todo-input");
    const addTaskButton = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => renderTask(task));
    

    addTaskButton.addEventListener('click', () => {
        const taskText = todoInput.value.trim(); // Trim will remove extra spaces at the end after text if there
        if(taskText ==="") return ; // If empty string then nothing executes after that 

        // If task is there we add unique id to it as well , property to it based on prop we display strike through line in css 
        //! Everytime someone clicks on it we create whole newTask Object with followign info and also grab that text as above
        const newTask = {  // Object newTask
            id: Date.now(), // Based on date this always give unique string
            text: taskText,
            completed: false
        }
        tasks.push(newTask);
        saveTasks();
        renderTask(newTask);
        todoInput.value = ""; // clearing input once added
        console.log(tasks);
    });
//*-------------------------------Till here also works fine // And tasks stored in Array
//*  _ BUT WE WANT TO STORE IT IN LOCAL STORAGE SO .... Below functionality to store this in local storage
    // We would want to check if we can add the task in local storage as well
    // method for it as we would want to update / add this values frequently
    // Below saving to local storage
    function saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    // To pick tasks from localStorage // Job = render this task one at a time
    function renderTask(task){
        // console.log(task.text);
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id)
        if(task.completed) li.classList.add("completed")
        li.innerHTML = `
        <span>${task.text}</span>
        <button>delete</button>
        `;

        li.addEventListener('click', (e) => {
            if(e.target.tagName === 'BUTTON') return ;
            task.completed = !task.completed;
            li.classList.toggle('completed');
            saveTasks();
        })

        li.querySelector('button').addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent toggle from firing
            tasks = tasks.filter(t => t.id !== task.id)
            li.remove();
            saveTasks();
        })

        todoList.appendChild(li);
    }
})


//* As soon as this page loadsd up we want it to read from local storage, grab all tasks =>
//* store it in  ( line 8 ) let tasks = [];  then immidiately run a loop and read what s inside this tasks ie run renderTask on it
//* for now only log of task