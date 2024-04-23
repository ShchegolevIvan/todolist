const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');

form.addEventListener('submit', function(e){
    e.preventDefault();


    console.log("submit");

    const tasktext = taskInput.value;
   
    const taskHTML =    `<li class="list-group-item d-flex justify-content-between task-item">
                         <span class="task-title">${tasktext}</span>
                            <div class="task-item__buttons">
                                <button type="button" data-action="done" class="btn-action">
                                     <img src="./img/tick.svg" alt="Done" width="18" height="18">
                                </button>
                                    <button type="button" data-action="delete" class="btn-action">
                                    <img src="./img/cross.svg" alt="Done" width="18" height="18">
                                </button>
                            </div>
                        </li>` ;

    tasksList.insertAdjacentHTML('beforeend', taskHTML);
})
