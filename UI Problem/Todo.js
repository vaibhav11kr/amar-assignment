document.addEventListener("DOMContentLoaded", function () {
    const itemsList = document.querySelector(".items");
    const addTaskButton = document.querySelector(".add-task");
    const taskInputContainer = document.getElementById("taskInputContainer");
    const taskInput = document.getElementById("taskInput");
    const confirmTaskButton = document.getElementById("confirmTask");
    
    function createTask(taskName) {
      const li = document.createElement("li");
      li.classList.add("item");
  
      const itemDetails = document.createElement("div");
      itemDetails.classList.add("item-details");
  
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "vehicle";
      checkbox.value = taskName;
      checkbox.classList.add("item-check");
  
      const label = document.createElement("label");
      label.classList.add("item-name");
      label.textContent = taskName;
  
      itemDetails.appendChild(checkbox);
      itemDetails.appendChild(label);
  
      const itemIcons = document.createElement("div");
      itemIcons.classList.add("item-icons");
  
      const editSpan = document.createElement("span");
      editSpan.classList.add("edit");
      editSpan.textContent = "🖊️";
  
      const deleteSpan = document.createElement("span");
      deleteSpan.classList.add("delete");
      deleteSpan.textContent = "🗑️";
  
      itemIcons.appendChild(editSpan);
      itemIcons.appendChild(deleteSpan);
  
      li.appendChild(itemDetails);
      li.appendChild(itemIcons);
  
      itemsList.appendChild(li);
  
      
      editSpan.addEventListener("click", editItem);
      deleteSpan.addEventListener("click", deleteItem);
  
     
      taskInput.focus();
    }
  
    function toggleStrikeThrough(event) {
      const item = event.target.parentElement.parentElement.querySelector(
        ".item-name"
      );
      item.style.textDecoration = event.target.checked ? "line-through" : "none";
    }
  
    function deleteItem(event) {
      const item = event.target.parentElement.parentElement;
      item.remove();
    }
  
    function editItem(event) {
      const label = event.target.parentElement.parentElement.querySelector(
        ".item-name"
      );
      label.contentEditable = true;
      label.focus();
    }
  
    itemsList.addEventListener("change", function (event) {
      if (event.target.matches(".item-check")) {
        toggleStrikeThrough(event);
      }
    });
    
    itemsList.addEventListener("click", function (event) {
      if (event.target.matches(".delete")) {
        deleteItem(event);
      }
    });
    
    itemsList.addEventListener("click", function (event) {
      if (event.target.matches(".edit")) {
        editItem(event);
      }
    });
  
    itemsList.addEventListener("blur", function (event) {
      const label = event.target;
      label.contentEditable = false;
    }, true); 

    itemsList.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        event.target.blur(); 
      }
    });
  
    addTaskButton.addEventListener("click", function () {
      taskInputContainer.style.display = "block"; 
      taskInput.focus(); 
    });
  
    confirmTaskButton.addEventListener("click", function () {
      const taskName = taskInput.value.trim();
      if (taskName !== "") {
        createTask(taskName);
        taskInput.value = ""; 
        taskInputContainer.style.display = "none"; 
      } else {
        alert("Please enter a task.");
      }
    });
  });
  