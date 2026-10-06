* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f4f7fb;
    color: #1f2937;
    transition: 0.3s;
}

.header {
    background: #2563eb;
    color: white;
    padding: 25px 7%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header h1 {
    font-size: 28px;
    margin-bottom: 6px;
}

.header p {
    opacity: 0.9;
}

.header-buttons {
    display: flex;
    gap: 10px;
}

.header button {
    border: none;
    background: white;
    color: #2563eb;
    padding: 10px 15px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
}

.container {
    width: 86%;
    max-width: 1200px;
    margin: 30px auto;
}

.dashboard {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
    margin-bottom: 25px;
}

.stat-card {
    background: white;
    padding: 22px;
    border-radius: 14px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
}

.stat-card span {
    display: block;
    color: #6b7280;
    margin-bottom: 8px;
}

.stat-card strong {
    font-size: 30px;
    color: #2563eb;
}

.form-section,
.tasks-section {
    background: white;
    padding: 25px;
    border-radius: 14px;
    margin-bottom: 25px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
}

.form-section h2,
.tasks-section h2 {
    margin-bottom: 20px;
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
}

.input-group label {
    display: block;
    margin-bottom: 7px;
    font-weight: bold;
}

.input-group input,
.input-group select {
    width: 100%;
    padding: 12px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    outline: none;
    font-size: 14px;
}

.input-group input:focus,
.input-group select:focus {
    border-color: #2563eb;
}

.add-btn {
    margin-top: 20px;
    padding: 12px 22px;
    border: none;
    border-radius: 8px;
    background: #2563eb;
    color: white;
    font-weight: bold;
    cursor: pointer;
}

.add-btn:hover {
    background: #1d4ed8;
}

.task-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
}

.filters {
    display: flex;
    gap: 7px;
    flex-wrap: wrap;
}

.filter {
    border: 1px solid #d1d5db;
    background: white;
    padding: 8px 12px;
    border-radius: 7px;
    cursor: pointer;
}

.filter.active {
    background: #2563eb;
    color: white;
    border-color: #2563eb;
}

.task-list {
    display: grid;
    gap: 15px;
    margin-top: 20px;
}

.task-card {
    border: 1px solid #e5e7eb;
    padding: 18px;
    border-radius: 10px;
    transition: 0.2s;
}

.task-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.task-card h3 {
    margin-bottom: 8px;
}

.task-info {
    color: #6b7280;
    margin-bottom: 12px;
    line-height: 1.6;
}

.priority {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
}

.priority.High {
    background: #fee2e2;
    color: #dc2626;
}

.priority.Medium {
    background: #fef3c7;
    color: #d97706;
}

.priority.Low {
    background: #dcfce7;
    color: #16a34a;
}

.task-actions {
    margin-top: 12px;
    display: flex;
    gap: 8px;
}

.task-actions button {
    border: none;
    padding: 8px 12px;
    border-radius: 7px;
    cursor: pointer;
}

.complete-btn {
    background: #dcfce7;
    color: #15803d;
}

.delete-btn {
    background: #fee2e2;
    color: #dc2626;
}

.completed {
    opacity: 0.6;
}

.completed h3 {
    text-decoration: line-through;
}

.empty {
    text-align: center;
    color: #6b7280;
    padding: 30px;
}

body.dark {
    background: #111827;
    color: #f9fafb;
}

body.dark .form-section,
body.dark .tasks-section,
body.dark .stat-card {
    background: #1f2937;
    color: #f9fafb;
}

body.dark .stat-card span,
body.dark .task-info {
    color: #d1d5db;
}

body.dark .task-card {
    border-color: #374151;
}

body.dark .filter {
    background: #1f2937;
    color: white;
    border-color: #4b5563;
}

body.dark .input-group input,
body.dark .input-group select {
    background: #111827;
    color: white;
    border-color: #4b5563;
}

@media (max-width: 800px) {

    .dashboard {
        grid-template-columns: repeat(2, 1fr);
    }

    .form-grid {
        grid-template-columns: 1fr;
    }

    .header {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }

    .task-header {
        flex-direction: column;
        align-items: flex-start;
    }
}

@media (max-width: 500px) {

    .dashboard {
        grid-template-columns: 1fr;
    }

    .container {
        width: 92%;
    }

    .header h1 {
        font-size: 23px;
    }
}
