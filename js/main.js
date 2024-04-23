const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');

form.addEventListener('submit', function(e){
    e.preventDefault();


    console.log("submit");

    const tasktext = taskInput.value;
   console.log(tasktext);
})
