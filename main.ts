
//@ts-ignore
class ToDoItem{
    title:string;
    dueDate:Date;
    isCompleted:boolean;

}

window.onload = function() {
    let addItem = document.getElementById("add");
    addItem.onclick = main;

    loadSavedItem();
}

function loadSavedItem() {
    let item = getToDo();
    displayToDoItem(item);
}

function main() {
    if(isValid()) {
        let item = getToDoItem();
        displayToDoItem(item);

        saveToDo(item);
    }
}

function isValid():boolean {
    return true;
}



// get all the input
function getToDoItem():ToDoItem{
    // get title
    let myItem = new ToDoItem();
    let titleInput = getInput("title");
    myItem.title = titleInput.value;

    // get date
    let dueDateInput = getInput("due-date");
    myItem.dueDate = new Date(dueDateInput.value);

    // get isCompleted
    let isCompleted = getInput("is-complete");
    myItem.isCompleted = isCompleted.checked;

    return myItem;
}

function getInput(id):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}

// displays the items on the page
function displayToDoItem(item:ToDoItem):void{
    
    let itemText = document.createElement("h3");
    itemText.innerText = item.title;

    let itemDate = document.createElement("p");
    let dueDate = new Date(item.dueDate.toString());
    itemDate.innerText = dueDate.toDateString();


    let itemDiv = document.createElement("div");
    
    itemDiv.onclick = markComplete; // complete
    
    itemDiv.classList.add("todo");
    
    if(item.isCompleted) {
        itemDiv.classList.add("completed");
    }

    itemDiv.appendChild(itemText); 
    itemDiv.appendChild(itemDate);

    if(item.isCompleted) {
        let completed = document.getElementById("complete-items");
        completed?.appendChild(itemDiv);
    }
    else {
        let incompleted = document.getElementById("incomplete-items");
        incompleted?.appendChild(itemDiv);
    }
}

function markComplete() {
    let itemDiv = <HTMLDivElement>this;
    itemDiv.classList.add("completed");

    let completedItems = document.getElementById("complete-items");

    completedItems.appendChild(itemDiv);
}

function saveToDo(item:ToDoItem):void {
    let itemString = JSON.stringify(item);

    localStorage.setItem(todokey, itemString);
}

const todokey = "todo";

function getToDo():ToDoItem{
    let itemString = localStorage.getItem(todokey);
    let item:ToDoItem = JSON.parse(itemString);

    return item;
}
