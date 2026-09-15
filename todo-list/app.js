const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const form = document.querySelector("#todo-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (input.value.trim() === "") {
        return null;
    } else {
        const li = document.createElement("li");
        li.classList.add("todo-item");
        li.textContent = input.value;
        const button = document.createElement("button");
        button.textContent = "\u00D7";
        button.classList.add("btn-remover");
        li.appendChild(button);
        button.addEventListener("click", (event) => {
            li.remove();
            atualizarContador();
            event.stopPropagation();
        });
        list.appendChild(li);
        input.value = "";
        input.focus();
        atualizarContador();
    }
});

list.addEventListener ("click", (event) => {

    event.target;
    event.target.classList.contains("todo-item");
    if (event.target.classList.contains("todo-item")) {
        event.target.classList.toggle("done");
        atualizarContador();
    }

});


 function atualizarContador() {
    const contador = document.querySelector("#contador");
    let valor = document.querySelectorAll(".todo-item:not(.done)");
    document.querySelector("#contador").textContent = valor.length;
}
