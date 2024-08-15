let open = 0;
document.getElementById("createBoard").addEventListener("click", () => {
    open = 1;
    openForm(open);
});
document.getElementById("createTask").addEventListener("click", () => {
    open = 2;
    openForm(open);
});

function openForm(open, arr) {
    document.getElementById("dialog").showModal();
    if(open == 1) {
        document.getElementById("formTitle").textContent = "Создание Доски";
        document.getElementById("input").setAttribute("placeholder", "Введите назваание доски");
    } else if(open == 2) {
        document.getElementById("formTitle").textContent = "Создание Задачи";
        document.getElementById("input").setAttribute("placeholder", "Введите название задачи");
    }
}

document.getElementById("btnClose").addEventListener("click", (event) => {
    event.preventDefault();
    let inputValue = document.getElementById("input").value;
    if(open == 1) {
        createNewBoard(inputValue);
    } else if(open == 2) {
        createNewTask(inputValue);
    }
    document.getElementById("dialog").close();
});

// fec

function createNewBoard(inputValue) {
    let table = document.getElementById("table");
    let newBoard = document.createElement("section").setAttribute("class", "board");
    table.append(newBoard);
    let newTitle = document.createElement("h2").setAttribute("class", "title").textContent = inputValue;
    newBoard.append(newTitle);
}
function createNewTask(inputValue) {
    let tasksBoard = document.getElementById("tasksBoard");
    let newTasksPole = document.createElement("article").setAttribute("class", "task");
    tasksBoard.append(newTasksPole);
    let newTasksTime = document.createElement("section").setAttribute("class", "time");
    // let newTasksTimeOne = document.createElement("p")
    newTasksTime.append(newTasksTimeOne);
    // let newTasksTimeTwo = document.createElement("p")
    newTasksTime.append(newTasksTimeTwo);
    newTasksPole.append(newTasksTime);
    let newYourTasks = document.createElement("p").setAttribute("class", "yourTask").textContent = inputValue;
    newTasksPole.append(newYourTasks);
    

// адаптировать опенвиндоу для ввода дат и меток
// создать секцию маркера
}