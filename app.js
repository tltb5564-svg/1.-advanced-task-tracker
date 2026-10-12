// Advanced Task & Time Tracker - Core Logic
class TaskTracker {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('dev_tasks')) || [];
    }

    // Add a new coding task with dynamic tracking
    addTask(title, durationHours, priority = 'Medium') {
        const newTask = {
            id: Date.now().toString(36),
            title: title,
            duration: parseFloat(durationHours),
            priority: priority,
            createdAt: new Date().toISOString(),
            status: 'Completed'
        };
        
        this.tasks.push(newTask);
        this.saveToStorage();
        return newTask;
    }

    // Calculate total hours logged for async client billing
    getTotalHours() {
        return this.tasks.reduce((total, task) => total + task.duration, 0);
    }

    // Filter tasks by high priority or status
    getHighPriorityTasks() {
        return this.tasks.filter(task => task.priority === 'High');
    }

    saveToStorage() {
        localStorage.setItem('dev_tasks', JSON.stringify(this.tasks));
    }
}

// Initialize tracker instance for production use
const tracker = new TaskTracker();
console.log('🚀 Developer Task Tracker initialized successfully!');
