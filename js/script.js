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
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
}
