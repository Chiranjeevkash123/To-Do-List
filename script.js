const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addtask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");

        // Create the drag handle
        let handle = document.createElement("span");
        handle.className = "drag-handle";
        handle.innerHTML = "&#9776;"; // Grip icon (≡)
        li.appendChild(handle);

        // Create a span for the task text
        let textSpan = document.createElement("span");
        textSpan.className = "task-text";
        textSpan.innerHTML = inputBox.value;
        li.appendChild(textSpan);
        
        // Create the edit button
        let editSpan = document.createElement("span");
        editSpan.innerHTML = "\u270E"; // Pencil icon
        editSpan.className = "edit-btn";
        li.appendChild(editSpan);

        // Create the delete button
        let deleteSpan = document.createElement("span");
        deleteSpan.className = "delete-btn";
        deleteSpan.innerHTML = "\u00d7";
        li.appendChild(deleteSpan);

        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    const li = e.target.closest("li");
    if (!li) return;

    // Logic for checking/unchecking a task (by clicking the circle or text)
    if (e.target.tagName === "LI" || e.target.classList.contains("task-text") || e.target.tagName === "::before") {
        const textSpan = li.querySelector('.task-text');
        if (textSpan && textSpan.isContentEditable) return; // Don't check off while editing
        li.classList.toggle("checked");
        saveData();
    }
    // Logic for the delete button
    else if (e.target.classList.contains("delete-btn")) {
        li.remove();
        saveData();
    }
    // Logic for the edit button
    else if (e.target.classList.contains("edit-btn")) {
        const textSpan = li.querySelector('.task-text');
        const editButton = li.querySelector('.edit-btn');
        if (textSpan.isContentEditable) {
            // Save the edit
            textSpan.contentEditable = false;
            editButton.innerHTML = "\u270E"; // Change back to Pencil icon
            textSpan.style.outline = "none";
            saveData();
        } else {
            // Enable editing
            textSpan.contentEditable = true;
            textSpan.focus();
            editButton.innerHTML = "\uD83D\uDCBE"; // Change to Save icon
            textSpan.style.outline = "1px solid #888";
        }
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

// Activate the drag-and-drop functionality
new Sortable(listContainer, {
    handle: '.drag-handle', // Specify our handle
    animation: 150,
    onEnd: function() {
        saveData(); // Save the new order after dragging
    }
});