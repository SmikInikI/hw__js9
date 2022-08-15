const addTaskBtn = document.getElementById('add-task-btn');
const deskTaskInput = document.getElementById('description-task');
const todosWrapper = document.querySelector('.todos-wrapper');

let tasks;
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

let todoItemElems = [];

function Task(description) {
    this.description = description;
    this.completed = false;
}

const createTemplate = (task, index) => {
    return `
            <div class="todo-item ${task.completed ? 'checked' : ''}">
                <div class="description">${task.description}</div>
                <div class="buttons">
                    <input onclick="completeTask(${index})" class="btn-complete" type="checkbox" ${task.completed ? 'checked' : ''}>
                    <button class="btn-delete">Delete</button>
                </div>
            </div>
            `
}

const fillHtmlList = () => {
    todosWrapper.innerHTML = "";
    if (tasks.lenght > 0) {
        tasks.forEach((item, index) => {
            todosWrapper.innerHTML += createTemplate(item, index);
        })
    }
}

fillHtmlList();

const updateLocol = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
const completeTask = index => {
    task[index].completed = !task[index].completed;
    if(tasks[index].completed) {
        todoItemElems[index].classList.add('checked');
    } else {
        todoItemElems[index].classList.remove('checked');
    }
    updateLocol();
    fillHtmlList();
}

addTaskBtn.addEventListener('click', () => {
    tasks.push(new Task(deskTaskInput.velue));
    updateLocol();
    fillHtmlList();
    deskTaskInput.velue = '';
})