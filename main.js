//@ts-ignore
var ToDoItem = /** @class */ (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
window.onload = function () {
    var addItem = document.getElementById("add");
    addItem.onclick = process;
};
function process() {
    if (isValid()) {
        var item = getToDoItem();
        displayToDoItem(item);
    }
}
function isValid() {
    return true;
}
// get all the input
function getToDoItem() {
    // get title
    var myItem = new ToDoItem();
    var titleInput = getInput("title");
    myItem.title = titleInput.value;
    // get date
    var dueDateInput = getInput("due-date");
    myItem.dueDate = new Date(dueDateInput.value);
    // get isCompleted
    var isCompleted = getInput("is-complete");
    myItem.isCompleted = isCompleted.checked;
    return myItem;
}
function getInput(id) {
    return document.getElementById(id);
}
// displays the items on the page
function displayToDoItem(item) {
    var itemText = document.createElement("h3");
    itemText.innerText = item.title;
    var itemDate = document.createElement("p");
    itemDate.innerText = item.dueDate.toString();
    var itemDiv = document.createElement("div");
    if (item.isCompleted) {
        itemDiv.classList.add("completed");
    }
    itemDiv.appendChild(itemText);
    itemDiv.appendChild(itemDate);
    if (item.isCompleted) {
        var completed = document.getElementById("complete-items");
        completed === null || completed === void 0 ? void 0 : completed.appendChild(itemDiv);
    }
    else {
        var incompleted = document.getElementById("incomplete-items");
        incompleted === null || incompleted === void 0 ? void 0 : incompleted.appendChild(itemDiv);
    }
}
// Task: Allow user to mark a toDoItem as completed
