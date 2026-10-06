let tasks = [];

const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const task = {
        id: Date.now(),
        name: document.getElementById("taskName").value,
        subject: document.getElementById("subject").value,
        deadline: document.getElementById("deadline").value,
        priority: document.getElementById("priority").value,
        completed: false
    };

    tasks.push(task);

    renderTasks();
    taskForm.reset();
});

function renderTasks() {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        taskList.innerHTML = `<div class="empty">No tasks added yet.</div>`;
        return;
    }

    tasks.forEach(task => {
        const card = document.createElement("div");

        card.className = `task-card ${task.completed ? "completed" : ""}`;

        card.innerHTML = `
            <h3>${task.name}</h3>
            <div class="task-info">
                Subject: ${task.subject}<br>
                Deadline: ${task.deadline}
            </div>

            <span class="priority ${task.priority}">
                ${task.priority}
            </span>

            <div class="task-actions">
                <button class="complete-btn" onclick="completeTask(${task.id})">
                    ${task.completed ? "Undo" : "Complete"}
                </button>

                <button class="delete-btn" onclick="deleteTask(${task.id})">
                    Delete
                </button>
            </div>
        `;

        taskList.appendChild(card);
    });
}
