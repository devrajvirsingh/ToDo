var todo_input = document.getElementById("todo-input");

todo_input.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    addTodo(this.value);
    this.value = "";
  }
});

const addTodo = (item) => {
  let todo_box = document.getElementById("todo-list-box");
  let todo_list = document.createElement("li");
  todo_list.className = "todo-list";

  todo_list.innerHTML = `${item}
    <i class="fa-regular fa-trash-can" id="delete-todo" style="color: #bebcbc;"></i>`;

  todo_box.appendChild(todo_list);

  todo_list
    .querySelector("#delete-todo")
    .addEventListener("click", function () {
      todo_list.remove();
    });

    todo_list.addEventListener('click' , function(){
        this.classList.toggle('toggle-list')
    })
};
