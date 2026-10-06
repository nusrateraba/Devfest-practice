let tasks =
    JSON.parse(localStorage.getItem("studentTasks")) || [];

let currentFilter = "all";
let banglaMode = false;
let darkMode = false;


const taskForm =
    document.getElementById("taskForm");

const taskList =
    document.getElementById("taskList");

const languageBtn =
    document.getElementById("languageBtn");

const themeBtn =
    document.getElementById("themeBtn");


taskForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const task = {

        id: Date.now(),

        name:
            document
                .getElementById("taskName")
                .value
                .trim(),

        subject:
            document
                .getElementById("subject")
                .value
                .trim(),

        deadline:
            document
                .getElementById("deadline")
                .value,

        priority:
            document
                .getElementById("priority")
                .value,

        completed: false
    };


    tasks.push(task);

    saveTasks();

    renderTasks();

    taskForm.reset();
});


function saveTasks() {

    localStorage.setItem(
        "studentTasks",
        JSON.stringify(tasks)
    );
}


function completeTask(id) {

    tasks = tasks.map(task => {

        if (task.id === id) {
            task.completed = !task.completed;
        }

        return task;
    });

    saveTasks();

    renderTasks();
}


function deleteTask(id) {

    tasks =
        tasks.filter(task => task.id !== id);

    saveTasks();

    renderTasks();
}


function renderTasks() {

    taskList.innerHTML = "";

    let filteredTasks = tasks;


    if (currentFilter === "pending") {

        filteredTasks =
            tasks.filter(
                task => !task.completed
            );
    }


    if (currentFilter === "completed") {

        filteredTasks =
            tasks.filter(
                task => task.completed
            );
    }


    if (currentFilter === "high") {

        filteredTasks =
            tasks.filter(
                task => task.priority === "High"
            );
    }


    if (filteredTasks.length === 0) {

        taskList.innerHTML = `
            <div class="empty">
                ${
                    banglaMode
                        ? "কোনো টাস্ক পাওয়া যায়নি।"
                        : "No tasks found."
                }
            </div>
        `;

        updateDashboard();

        return;
    }


    filteredTasks.forEach(task => {

        const card =
            document.createElement("div");


        card.className =
            `task-card ${
                task.completed
                    ? "completed"
                    : ""
            }`;


        const completeText =
            task.completed
                ? (
                    banglaMode
                        ? "ফিরিয়ে নিন"
                        : "Undo"
                )
                : (
                    banglaMode
                        ? "সম্পন্ন করুন"
                        : "Complete"
                );


        const deleteText =
            banglaMode
                ? "ডিলিট"
                : "Delete";


        const subjectText =
            banglaMode
                ? "বিষয়"
                : "Subject";


        const deadlineText =
            banglaMode
                ? "শেষ তারিখ"
                : "Deadline";


        card.innerHTML = `

            <h3>
                ${escapeHTML(task.name)}
            </h3>

            <div class="task-info">

                ${subjectText}:
                ${escapeHTML(task.subject)}

                <br>

                ${deadlineText}:
                ${task.deadline}

            </div>

            <span class="priority ${task.priority}">
                ${getPriorityText(task.priority)}
            </span>

            <div class="task-actions">

                <button
                    class="complete-btn"
                    onclick="completeTask(${task.id})">

                    ${completeText}

                </button>

                <button
                    class="delete-btn"
                    onclick="deleteTask(${task.id})">

                    ${deleteText}

                </button>

            </div>
        `;


        taskList.appendChild(card);
    });


    updateDashboard();
}


function updateDashboard() {

    const total =
        tasks.length;


    const completed =
        tasks.filter(
            task => task.completed
        ).length;


    const pending =
        tasks.filter(
            task => !task.completed
        ).length;


    const high =
        tasks.filter(
            task => task.priority === "High"
        ).length;


    document.getElementById("totalTasks")
        .textContent = total;


    document.getElementById("completedTasks")
        .textContent = completed;


    document.getElementById("pendingTasks")
        .textContent = pending;


    document.getElementById("highTasks")
        .textContent = high;
}


function getPriorityText(priority) {

    if (!banglaMode) {
        return priority;
    }


    if (priority === "High") {
        return "উচ্চ";
    }


    if (priority === "Medium") {
        return "মাঝারি";
    }


    return "কম";
}


function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


document
    .querySelectorAll(".filter")
    .forEach(button => {

        button.addEventListener(
            "click",
            function() {

                document
                    .querySelectorAll(".filter")
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });


                this.classList.add("active");


                currentFilter =
                    this.dataset.filter;


                renderTasks();
            }
        );
    });


themeBtn.addEventListener(
    "click",
    function() {

        darkMode = !darkMode;

        document.body
            .classList.toggle("dark");


        themeBtn.textContent =
            darkMode
                ? "☀️"
                : "🌙";
    }
);


languageBtn.addEventListener(
    "click",
    function() {

        banglaMode = !banglaMode;

        updateLanguage();

        renderTasks();
    }
);


function updateLanguage() {

    if (banglaMode) {

        languageBtn.textContent =
            "English";


        document.getElementById("title")
            .textContent =
            "স্টুডেন্ট টাস্ক ট্র্যাকার";


        document.getElementById("subtitle")
            .textContent =
            "সহজে আপনার একাডেমিক কাজ পরিচালনা করুন";


        document.getElementById("totalLabel")
            .textContent =
            "মোট টাস্ক";


        document.getElementById("completedLabel")
            .textContent =
            "সম্পন্ন";


        document.getElementById("pendingLabel")
            .textContent =
            "বাকি";


        document.getElementById("highLabel")
            .textContent =
            "উচ্চ অগ্রাধিকার";


        document.getElementById("formTitle")
            .textContent =
            "নতুন টাস্ক যোগ করুন";


        document.getElementById("taskNameLabel")
            .textContent =
            "টাস্কের নাম";


        document.getElementById("subjectLabel")
            .textContent =
            "বিষয়";


        document.getElementById("deadlineLabel")
            .textContent =
            "শেষ তারিখ";


        document.getElementById("priorityLabel")
            .textContent =
            "অগ্রাধিকার";


        document.getElementById("addBtn")
            .textContent =
            "+ টাস্ক যোগ করুন";


        document.getElementById("myTasksTitle")
            .textContent =
            "আমার টাস্ক";


        const filters =
            document.querySelectorAll(
                ".filter"
            );


        filters[0].textContent = "সব";
        filters[1].textContent = "বাকি";
        filters[2].textContent = "সম্পন্ন";
        filters[3].textContent =
            "উচ্চ অগ্রাধিকার";

    } else {

        languageBtn.textContent =
            "বাংলা";


        document.getElementById("title")
            .textContent =
            "Student Task Tracker";


        document.getElementById("subtitle")
            .textContent =
            "Manage your academic tasks easily";


        document.getElementById("totalLabel")
            .textContent =
            "Total Tasks";


        document.getElementById("completedLabel")
            .textContent =
            "Completed";


        document.getElementById("pendingLabel")
            .textContent =
            "Pending";


        document.getElementById("highLabel")
            .textContent =
            "High Priority";


        document.getElementById("formTitle")
            .textContent =
            "Add New Task";


        document.getElementById("taskNameLabel")
            .textContent =
            "Task Name";


        document.getElementById("subjectLabel")
            .textContent =
            "Subject";


        document.getElementById("deadlineLabel")
            .textContent =
            "Deadline";


        document.getElementById("priorityLabel")
            .textContent =
            "Priority";


        document.getElementById("addBtn")
            .textContent =
            "+ Add Task";


        document.getElementById("myTasksTitle")
            .textContent =
            "My Tasks";


        const filters =
            document.querySelectorAll(
                ".filter"
            );


        filters[0].textContent = "All";
        filters[1].textContent = "Pending";
        filters[2].textContent = "Completed";
        filters[3].textContent =
            "High Priority";
    }
}


renderTasks();
