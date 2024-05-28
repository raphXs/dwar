let addtodobutton = document.getElementById('AddToDo');
let todocontainer = document.getElementById('todocontainer');
let inputField = document.getElementById('inputField');

addtodobutton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    todocontainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        todocontainer.removeChild(paragraph);
    })
})

const showtask = () => {
    let getLocalStorage = localStorage.getItem("data")
    const tasks = document.querySelector(".tasks");

    tasks.textContent = getLocalStorage

}

showtask()
console.log()


AddToDo.onclick = () => {
    console.log("first")
    localStorage.setItem("data", AddToDo.value)
    showtask()
}

let button = document.querySelector('.delete-btn')
button.addEventListener('click', () => {
    console.log("removeditem")
    localStorage.removeItem('data')
    showtask
})

let edit = document.querySelector('.edit-btn')
edit.addEventListener('click', () => {
    console.log("edit")
    localStorage.removeItem('data')
    showtask
})