//add task//
document.querySelector('.addBtn').onclick = function () {
    if (document.querySelector('.taskInput').value === ""){
          alert('Please enter the task')
    } else {
        (document.querySelector('.tasks').innerHTML
            += `<div class="task">
                <span class="taskName">${document.querySelector('.taskInput').value}</span>
                <button class="delete">x</button>
            </div>`)
        //инпут очищается
        document.querySelector('.taskInput').value = ''
        //delete task//
        let current_task = document.querySelectorAll('.delete');
        for (let i = 0; i < current_task.length; i++) {
            current_task[i].onclick = function (){
                this.parentNode.remove();
            }
        }
                //done task//
        let doneTask = document.querySelectorAll('.taskName');
        for (let i = 0; i < doneTask.length; i++){
            doneTask[i].onclick = function (){
                this.classList.toggle('completed')
            }
        }
    }
}
const firstNumber = document.querySelector('.firstNumber')
const   secondNumber = document.querySelector('.secondNumber')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const mult = document.querySelector('.mult')
const devide = document.querySelector('.devide')
const   result = document.querySelector('.result')


function plusNumbers (){
    result.innerHTML = +firstNumber.value + +secondNumber.value
}
function minusNumbers (){
    result.innerHTML = +firstNumber.value - +secondNumber.value
}
function multNumbers (){
    result.innerHTML = +firstNumber.value * +secondNumber.value
}
function devideNumbers (){
    result.innerHTML = +firstNumber.value / +secondNumber.value
}

plus.addEventListener('click', plusNumbers)
minus.addEventListener('click', minusNumbers)
mult.addEventListener('click', multNumbers)
devide.addEventListener('click', devideNumbers)
