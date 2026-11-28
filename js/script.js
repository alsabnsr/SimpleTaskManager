// Mengambil elemen HTML
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Fungsi menambahkan tugas
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    // Tombol edit
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

    editButton.onclick = function () {
        const updatedTaskText = prompt("Edit tugas:", span.textContent);

        if (updatedTaskText === null) {
            return;
        }

        const trimmedTaskText = updatedTaskText.trim();

        if (trimmedTaskText === "") {
            alert("Tugas tidak boleh kosong!");
            return;
        }

        span.textContent = trimmedTaskText;
    };

    // Tombol selesai
    const completeButton = document.createElement("button");
    completeButton.textContent = "Selesai";

    completeButton.onclick = function () {
        span.style.textDecoration = "line-through";
    };

    // Tombol hapus
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Hapus";

    deleteButton.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
}
