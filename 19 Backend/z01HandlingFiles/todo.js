
// Ways - 1. Require    2. Es module

// Require brings everything what all node module has to provide
// fs - file system module     const fs = require('fs')

const fs = require('fs');
const filePath = "./tasks.json";


// 3. // Methods

const loadTask = () => {
    // Read a file so use try catch
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);  
    } catch (error) {
        return [] // If fail reuturn empty array
    }
}

const saveTask = (tasks) => {
    // This ensures the input to saveTask is always an array.

    // Add error handling for JSON.stringify in saveTask:
    try {
        const dataJson = JSON.stringify(tasks);
        fs.writeFileSync(filePath, dataJson);
    } catch (error) {
        console.error("Failed to save tasks:", error);
    }

    // if (!Array.isArray(tasks)) {
    //     console.error("Error: tasks is not an array!", tasks);
    //     return;
    // }
    // const dataJson = JSON.stringify(tasks);
    // fs.writeFileSync(filePath , dataJson);
};
const addTask = (task) => {
    // To add task first load task already there and then add in that array of tasks
    const tasks = loadTask(); // 1. Load Task.
    tasks.push({ task });         // 2. Add task to array.
    saveTask(tasks);          // 3. After adding you need to save as well.  
    console.log("Tasks added ", task);
}

const listTask = () => {
    const tasks = loadTask();
    tasks.forEach((task, idx) => {
        console.log(`${idx+1} - ${task.task}`);
        
    });
}

const removeTask = (idx) => {
    const tasks = loadTask();

    if (idx > 0 && idx <= tasks.length) {
        const removedT = tasks.splice(idx - 1, 1);
        saveTask(tasks); // Ensure the updated array is saved
        console.log("Task removed:", removedT[0].task);
    } else {
        console.log("Invalid IDX. Provide a valid Index.");
    }
};
// const removeTask = (idx) => {
//     const tasks = loadTask();

//     // Check if index is valid or no
//     if(idx >0 && idx <=tasks.length){
//         const removedT = tasks.splice(idx -1, 1);
//         saveTask(tasks);
//         console.log("Task removed", removedT[0].task);
// //         Correctly Save Updated Tasks: After using splice to remove the task, the tasks array is updated. You need to pass this updated array to saveTask to ensure the file reflects the changes.
// // Error Handling: The check for a valid index ensures you avoid out-of-bound errors when attempting to remove a task.
//     }else{
//         console.log("Invalid IDX. Provide a valid Index.");
//     }
// }

// 2. // How to grab commands / arguments
const command = process.argv[2]
const argument = process.argv[3]



// 1. // Checking for certain commands    // Building a command line application so we need to check for commands
// Creating interfaces  //  If command match to certain keywords
if(command === 'add'){
    addTask(argument)
}else if(command ==='list'){
    listTask()
}else if(command === 'remove'){
    removeTask(parseInt(argument))
}else{
    console.log("Command Not found !! ");
}
