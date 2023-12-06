let idCounter = 0;
const input =document.querySelector('input[type="text"]');

userinput.addEventListener('submit',(event)=>{
    event.preventDefault();
    addTask();
});

let addTask = ()=>{
        idCounter++;
        let newValue = input.value; 

        list.innerHTML += `<div class="tarea" id="${idCounter}">
        <label>
            <input type="checkbox">
            ${newValue}
        </label>
        <i class="fa-solid fa-trash" style="color: #ef0b0b;"></i>
    </div>`

    input.value = '';
    updateStats(); 
}; 

list.addEventListener('click', (event)=>{
    if(event.srcElement.nodeName === 'INPUT'){
        updateStats();
    } else if(event.srcElement.nodeName === 'I'){
        deleteTask(event.srcElement.parentNode.id);
    }
});

let updateStats = ()=> {
    let element = list.querySelectorAll('div');
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked')
    estadis.innerHTML = `<p>Tareas Pendientes: ${element.length} Completadad:${checkbox.length}</p>`;
};

let deleteTask = (id)=>{
    let taskToDelete = document.getElementById(id);
    list.removeChild(taskToDelete);
    updateStats();
}