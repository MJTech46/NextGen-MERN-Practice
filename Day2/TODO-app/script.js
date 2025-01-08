document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskTitle = document.getElementById('taskTitle').value.trim();
    const taskDescription = document.getElementById('taskDescription').value.trim();

    if (taskTitle && taskDescription) {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.innerHTML = `<strong>${taskTitle}</strong>: ${taskDescription}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        
        // Clear input fields
        document.getElementById('taskTitle').value = '';
        document.getElementById('taskDescription').value = '';
    }
});

// Adding example tasks
window.onload = function() {
    const exampleTasks = [
        { title: "Buy groceries", description: "Milk, Bread, Eggs" },
        { title: "Finish project", description: "Complete the final report" },
        { title: "Call Mom", description: "Check in and see how she's doing" }
    ];

    exampleTasks.forEach(task => {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.innerHTML = `<strong>${task.title}</strong>: ${task.description}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
        };
    }
    )};