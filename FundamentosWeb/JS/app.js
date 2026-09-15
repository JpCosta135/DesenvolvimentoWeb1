const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (input.value.trim() == '') {
        return null
    }
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.textContent = input.value;
    const button = document.createElement('button');
    button.textContent = "\u00D7";
    button.classList.add('delete-button');
    li.appendChild(button);
    button.addEventListener('click', function() {
        li.remove();
        atualizarContador();
        event.stopPropagation();
    
    });
    list.appendChild(li);
    atualizarContador();
    input.value = '';
    input.focus();
});

list.addEventListener('click', function(event) {
    console.log(event.target);
    console.log(event.target.classList.contains('todo-item'));
    if (event.target.classList.contains('todo-item')) {
        event.target.classList.toggle('done');
        atualizarContador();
    }
});

const contador = document.querySelector('#contador');
function atualizarContador () {
    const pendentes = list.querySelectorAll('.todo-item:not(.done)').length;
    contador.textContent = `Tarefas pendentes: ${pendentes}`;
}
    