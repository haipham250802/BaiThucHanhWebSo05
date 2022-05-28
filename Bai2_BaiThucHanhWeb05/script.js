const data = {
    todoList: [
        {
            taskBlock: "Home",
            tasks: [
                { task: "Clean room", done: false },
                { task: "Get storage unit", done: false },
            ],
        },
        {
            taskBlock: "Work",
            tasks: [
                { task: "Analysis", done: false },
                {
                    task: "Sorting",
                    done: false,
                    subtasks: [
                        {
                            task: "Save files",
                            done: false,
                            subtasks: [
                                { task: "Pull from computer 1", done: false },
                                { task: "Walk to computer 2", done: false },
                                { task: "Save on computer 2", done: false },
                            ],
                        },
                        { task: "Sort files", done: false },
                        { task: "Plot data", done: false },
                    ],
                },
            ],
        },
    ],
};

const home = document.getElementById("home");
console.log(home);
const work = document.getElementById("work");
const btnSave = document.querySelector(".save");

home.innerHTML = `
    <h2 class="main__header">${data.todoList[0].taskBlock}</h2>

    <input type="checkbox" id="clearRoom" name="clearRoom" />
    <label for="clearRoom">${data.todoList[0].tasks[0].task}</label><br />

    <input type="checkbox" id="storage" name=" storage" />
    <label for=" storage">${data.todoList[0].tasks[1].task}</label><br />
`;

let divNonSort = document.createElement("div");
divNonSort.classList.add("non__sorting");
divNonSort.classList.add("hidden");

let divNonSave = document.createElement("div");
divNonSave.classList.add("non__save");
divNonSave.classList.add("hidden");

divNonSave.innerHTML = `
    <input type="checkbox" id="pull" name="pull" />
    <label for="pull">${data.todoList[1].tasks[1].subtasks[0].subtasks[0].task}</label><br />
    <input type="checkbox" id="walk" name="walk" />
    <label for="walk">${data.todoList[1].tasks[1].subtasks[0].subtasks[1].task}</label><br />
    <input
        type="checkbox"
        id="saveComputer"
        name="saveComputer"
    />
    <label for="saveComputer">${data.todoList[1].tasks[1].subtasks[0].subtasks[2].task}</label
    ><br />
`;

divNonSort.innerHTML = `
    <input type="checkbox" id="sort" name="sort" />
    <label for="sort">${data.todoList[1].tasks[1].subtasks[1].task}</label><br />
    <input type="checkbox" id="plot" name="plot" />
    <label for="plot">${data.todoList[1].tasks[1].subtasks[2].task}</label><br />
    <input type="checkbox" id="save" name="save" />
    <label for="save">${data.todoList[1].tasks[1].subtasks[0].task}</label><br />
`;

work.innerHTML = `
    <h2 class="main__header">${data.todoList[1].taskBlock}</h2>

    <input type="checkbox" id="analysis" name="analysis" />
    <label for="analysis">${data.todoList[1].tasks[0].task}</label><br />

    <input type="checkbox" id="sorting" name="sorting" />
    <label for="sorting">${data.todoList[1].tasks[1].task}</label><br />
`;

divNonSort.appendChild(divNonSave);

work.appendChild(divNonSort);

let ipCheck = document.querySelectorAll("input[type=checkbox]");

function save() {
    for (let i = 0; i < ipCheck.length; i++) {
        localStorage.setItem(`${"ipcheck" + i}`, ipCheck[i].checked);
    }
}

function load() {
    for (let i = 0; i < ipCheck.length; i++) {
        let checked = JSON.parse(localStorage.getItem(`${"ipcheck" + i}`));
        document.querySelectorAll("input[type=checkbox]")[i].checked = checked;
    }

    nonSorting();
    nonSave();
}

function wis() {
    location.reload();
    localStorage.clear();
}

const nonSorting = function () {
    if (document.getElementById("sorting").checked) {
        document.querySelector(".non__sorting").classList.remove("hidden");
    } else {
        document.querySelector(".non__sorting").classList.add("hidden");
    }
};

const nonSave = function () {
    if (document.getElementById("save").checked) {
        document.querySelector(".non__save").classList.remove("hidden");
    } else {
        document.querySelector(".non__save").classList.add("hidden");
    }
};

document.getElementById("sorting").addEventListener("click", nonSorting);

document.getElementById("save").addEventListener("click", nonSave);

btnSave.addEventListener("click", save);

load();
