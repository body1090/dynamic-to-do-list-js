// Wait for the DOM to fully load  
document.addEventListener('DOMContentLoaded', () => {  
    const addButton = document.getElementById('add-task-btn'); // Select the add button  
    const taskInput = document.getElementById('task-input'); // Select the input field  
    const taskList = document.getElementById('task-list'); // Select the task list  

    // Function to add a task  
    function addTask() {  
        const taskText = taskInput.value.trim(); // Retrieve and trim the input value  

        if (taskText === "") { // Check if the input is empty  
            alert("Please enter a task."); // Alert if empty  
            return;  
        }  

        const li = document.createElement('li'); // Create a new list item  
        li.textContent = taskText; // Set the text content to the task  

        const removeButton = document.createElement('button'); // Create a remove button  
        removeButton.textContent = "Remove"; // Set button text  
        removeButton.className = 'remove-btn'; // Assign class for styling  

        // Add event listener to remove button  
        removeButton.onclick = () => {  
            taskList.removeChild(li); // Remove the list item from the task list  
        };  

        li.appendChild(removeButton); // Append the remove button to the list item  
        taskList.appendChild(li); // Append the list item to the task list  
        taskInput.value = ""; // Clear the input field  
    }  

    addButton.addEventListener('click', addTask); // Call addTask on button click  
    taskInput.addEventListener('keypress', (event) => { // Allow Enter key to add task  
        if (event.key === 'Enter') {  
            addTask(); // Call addTask if Enter is pressed  
        }  
    });  
})