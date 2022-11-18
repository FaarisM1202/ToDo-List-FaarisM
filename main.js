class ToDoItem {
}
window.onload = function () {
    let addItem = document.getElementById("add");
    addItem.onclick = process;
};
function process() {
    if (isValid()) {
        let item = getToDoItem();
        displayToDoItem(item);
    }
}
function isValid() {
    return true;
}
function getToDoItem() {
    let myItem = new ToDoItem();
    let titleInput = getInput("title");
    myItem.title = titleInput.value;
    let dueDateInput = getInput("due-date");
    myItem.dueDate = new Date(dueDateInput.value);
    let isCompleted = getInput("is-complete");
    myItem.isCompleted = isCompleted.checked;
    return myItem;
}
function getInput(id) {
    return document.getElementById(id);
}
function displayToDoItem(item) {
    let itemText = document.createElement("h3");
    itemText.innerText = item.title;
    let itemDate = document.createElement("p");
    itemDate.innerText = item.dueDate.toDateString();
    let itemDiv = document.createElement("div");
    itemDiv.onclick = markComplete;
    itemDiv.classList.add("todo");
    if (item.isCompleted) {
        itemDiv.classList.add("completed");
    }
    itemDiv.appendChild(itemText);
    itemDiv.appendChild(itemDate);
    if (item.isCompleted) {
        let completed = document.getElementById("complete-items");
        completed === null || completed === void 0 ? void 0 : completed.appendChild(itemDiv);
    }
    else {
        let incompleted = document.getElementById("incomplete-items");
        incompleted === null || incompleted === void 0 ? void 0 : incompleted.appendChild(itemDiv);
    }
}
function markComplete() {
    let itemDiv = this;
    itemDiv.classList.add("completed");
    let completedItems = document.getElementById("complete-items");
    completedItems.appendChild(itemDiv);
}
//# sourceMappingURL=main.js.map