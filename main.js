const ulElement = document.querySelector('#tasks ul')
const tasks = []

function removeTask(index) {
    const taskElement = document.querySelector(`#tasks li#item-${index}`)
    const taskDescription = document.querySelector(`#tasks li#item-${index} span`).innerHTML

    const question = confirm(`Você deseja excluir a tarefa ${taskDescription}?`)

    if (question) {
        tasks.splice(index, 1)
        ulElement.removeChild(taskElement)
    }
}


function addTask(text) {
    const total = tasks.push(text)
    const index = total - 1

    const taskElement = document.createElement('li')
    const textElement = document.createElement('span')
    const buttonElement = document.createElement('button')
    const checkBoxElement = document.createElement('input')
    checkBoxElement.setAttribute('type', 'checkbox')

    taskElement.setAttribute('id', `item-${index}`)

    buttonElement.onclick = () => removeTask(index)

    taskElement.appendChild(checkBoxElement)
    taskElement.appendChild(textElement)
    taskElement.appendChild(buttonElement)

    checkBoxElement.onclick = () => {
        if (checkBoxElement.checked) {
            textElement.style.textDecoration = 'line-through'
            textElement.style.color = '#ccc'
        } else {
            textElement.style.textDecoration = 'none'
            textElement.style.color = '#333'
        }
    }

    textElement.innerHTML = text
    buttonElement.innerHTML = 'Excluir'

    ulElement.appendChild(taskElement)
}

const btnElement = document.querySelector('#form button')
const inputElement = document.querySelector('#form input')

const verifyEmptyForAdd = () => {
    if (inputElement.value) {
        addTask(inputElement.value)
        inputElement.value = ''
        inputElement.focus()
    } else {
        alert('Descreva uma tarefa antes de adicionar')
    }
}
btnElement.onclick = () => verifyEmptyForAdd()

inputElement.addEventListener('keyup', event => {
    if (event.key == 'Enter') {
        verifyEmptyForAdd()
    }
})