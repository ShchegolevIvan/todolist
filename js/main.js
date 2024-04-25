const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const emptylist = document.querySelector('#emptyList');
const tasksList = document.querySelector('#tasksList');

form.addEventListener('submit',addTask);

tasksList.addEventListener('click', deleteTask) ;

tasksList.addEventListener('click', doneTask) ;

MetkaDlyaAddTask :  function addTask(e){
    e.preventDefault();


   

    const tasktext = taskInput.value;
    if (tasktext == 'лох'){
        console.log("ошибка:задача оскорбительного содержания");
        return ; 
    }
   
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

    taskInput.value = '' ;
    taskInput.focus() ;

    if (tasksList.children.length > 1) {
        emptylist.classList.add('none');
        }

   
}


function deleteTask(event){
 
    
   if (event.target.dataset.action == 'delete'){
   
   

       const nodeParent =  event.target.closest('li'); 
       nodeParent.remove();
   }

    if (tasksList.children.length == 1) {
        emptylist.classList.remove('none');
        }  
        
}

function doneTask(event){
    
    if(event.target.dataset.action == 'done'){
        

            const nodeParent = event.target.closest('li');
            const taskTitle = nodeParent.querySelector('.task-title');
            taskTitle.classList.add('task-title--done');

    }
}


