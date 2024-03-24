    function addTask() {
        var taskInput = document.getElementById("taskInput");
        var tk = taskInput.value;
        if (tk.trim() !== "") {
            var ul = document.getElementById("tasks");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(tk));
            var removeButton = document.createElement("button");
            removeButton.innerHTML = "Remove";
            removeButton.className = "removeButton";
            removeButton.onclick = function() {
                this.parentNode.parentNode.removeChild(this.parentNode);
            };
            li.appendChild(removeButton);
            ul.appendChild(li);
            taskInput.value = ""; 
        } else {
            alert("Please enter a task.");
        }
    }

