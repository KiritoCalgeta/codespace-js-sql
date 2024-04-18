// Get references to the input box and list container

const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");
 
// Function to add a new item to the list

function addTask() {

    // Check if the input box is empty

    if (inputBox.value.trim() === "") {

        alert("Please enter a shopping item!");

    } else {

        // Create a new list item

        const listItem = document.createElement("li");

        listItem.textContent = inputBox.value;
 
        // Add a delete button to the list item

        const deleteButton = document.createElement("span");

        deleteButton.textContent = "\u00d7";

        listItem.appendChild(deleteButton);
 
        // Append the new list item to the list container

        listContainer.appendChild(listItem);
 
        // Clear the input box

        inputBox.value = "";
 
        // Save the updated list to local storage

        saveData();

    }

}
 
// Function to toggle the 'checked' class when a list item is clicked

listContainer.addEventListener("click", function (event) {

    const target = event.target;
 
    // Toggle the 'checked' class if a list item is clicked

    if (target.tagName === "LI") {

        target.classList.toggle("checked");

        saveData();

    }

    // Remove the list item if the delete button is clicked

    else if (target.tagName === "SPAN") {

        target.parentElement.remove();

        saveData();

    }

});
 
// Function to save the list to local storage

function saveData() {

    localStorage.setItem("shoppingList", listContainer.innerHTML);

}
 
// Function to load the list from local storage

function loadList() {

    listContainer.innerHTML = localStorage.getItem("shoppingList");

}
 
// Load the list when the page is loaded

loadList();