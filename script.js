document.addEventListener('DOMContentLoaded', () => {  
    // Select DOM Elements  
    const addButton = document.getElementById('add-task-btn');  
    const taskInput = document.getElementById('task-input');  
    const taskList = document.getElementById('task-list');  

    // Function to add a task  
    const addTask = () => {  
        const taskText = taskInput.value.trim(); // Get the task input value  
        
        if (taskText === "") {  
            alert("Please enter a task."); // If empty, alert the user  
            return;  
        }  

        // Create new list item  
        const li = document.createElement('li');  
        li.textContent = taskText;  

        // Create remove button  
        const removeBtn = document.createElement('button');  
        removeBtn.textContent = "Remove";  
        removeBtn.className = 'remove-btn';  
        
        // Remove task on button click  
        removeBtn.onclick = () => {  
            taskList.removeChild(li);  
        };  

        li.appendChild(removeBtn); // Append remove button to list item  
        taskList.appendChild(li); // Append list item to the task list  
        
        // Clear the input field  
        taskInput.value = '';  
    };  

    // Attach event listeners  
    addButton.addEventListener('click', addTask);  
    
    // Allow adding task with 'Enter' key  
    taskInput.addEventListener('keypress', (event) => {  
        if (event.key === 'Enter') {  
            addTask();  
        }  
    });  
});