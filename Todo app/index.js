// finding elements
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#inputTodo");
const todoAddButton = document.querySelector("#addTodoButton");
const todoLists = document.querySelector("#lists");
const messageElement = document.querySelector("#message");


// getTosdoFromLocalStorage
const getTodosFromLocalStorage = () => {
    return localStorage.getItem("myTodos") ? JSON.parse(localStorage.getItem("myTodos")) : [];   
};


// showMessage function
const showMessage = (text, status) => {
    messageElement.textContent = text;
    messageElement.classList.add(`bg-${status}`);
    setTimeout(() => {
        messageElement.textContent = "";
        messageElement.classList.remove(`bg-${status}`);
    },1000);
};

// createTodo function 
const createTodo = (todoId, todoValue) => {
    const todoElement = document.createElement("li");
    todoElement.id = todoId;
    todoElement.classList.add("li-style")
    todoElement.innerHTML = `
    <span>${todoValue}</span>
    <span><button id="deleteButton"><i class="fa-solid fa-trash"></i></button></span>
    `
    todoLists.appendChild(todoElement);

    const deleteButton = todoElement.querySelector("#deleteButton");
    deleteButton.addEventListener("click", deleteTodo);
};

const deleteTodo = (event) => {
    const selectedTodo = event.target.parentElement.parentElement.parentElement;

    todoLists.removeChild(selectedTodo);
    showMessage("todo is deleted", "danger");

    const deletedTodoId = selectedTodo.id;
    let todos = getTodosFromLocalStorage();
    todos = todos.filter(todo => todo.todoId !== deletedTodoId);
    localStorage.setItem("myTodos", JSON.stringify(todos));
};


// add todo function
const addTodo = (event) => {
    event.preventDefault();
    const todoValue = todoInput.value;

    // unique id 
    const todoId = Date.now().toString();
    
    createTodo(todoId, todoValue);
    showMessage("todo is added", "success");
    
    // add todo to localStorage
    const todos = getTodosFromLocalStorage();
    todos.push({todoId, todoValue});
    localStorage.setItem("myTodos", JSON.stringify(todos));
    todoInput.value = "";
};

// loadTodos
const loadTodos = () => {
    const todos = getTodosFromLocalStorage();
    todos.map(todo => createTodo(todo.todoId, todo.todoValue))
}

// adding listener 
todoForm.addEventListener("submit", addTodo);
window.addEventListener("DOMContentLoaded", loadTodos)

