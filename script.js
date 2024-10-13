document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');});
// Function to add a new task  
function addTask() {  
    const taskText = taskInput.value.trim();  
    
    if (taskText === "") {  
        alert("Please enter a task.");  
        return;  
    }  

    const li = document.createElement('li');  
    li.textContent = taskText;  

    const removeButton = document.createElement('button');  
    removeButton.textContent = 'Remove';  
    removeButton.className = 'remove-btn';  
    removeButton.onclick = function() {  
        taskList.removeChild(li);  
    };  

    li.appendChild(removeButton);  
    taskList.appendChild(li);  
    taskInput.value = ""; // Clear the input  
}  

// Attach event listeners  
addButton.addEventListener('click', addTask);  
taskInput.addEventListener('keypress', function(event) {  
    if (event.key === 'Enter') {  
        addTask();  
    }  
});