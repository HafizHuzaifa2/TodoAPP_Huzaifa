var todoinp = document.getElementById("todoinp")
var showlist = document.getElementById("show")

function addtodo() {
    // showlist.innerHTML += `<li class="d-flex justify-content-between py-2" style="border-bottom: 1px solid gray;" id="todotext">
    //     <div class="fw-bold">
    //     ${todoinp.value}

    //     </div>


    //     <button onclick="edittodo('this')" class="btn btn-success px-2" id="Edit">Edit List</button>
    //     <button onclick="deltodo('this')" class="btn btn-danger px-2" id="Delete">Delete</button>


    // </li>`;
    var todotext = todoinp.value
    var todoelm = document.createTextNode(todotext)
    var todoli = document.createElement("li")
    todoli.setAttribute('class', 'd-flex justify-content-between py-2 fw-bold')
    todoli.appendChild(todoelm)
    showlist.appendChild(todoli)

    var editbutton = document.createElement('button')
    editbutton.setAttribute('onclick', 'edittodo(this)')
    editbutton.setAttribute('class', 'btn btn-danger px-2')
    var Edit = document.createTextNode("EDIT")
    editbutton.appendChild(Edit)
    todoli.appendChild(editbutton)


    var todoDelete = document.createElement("BUTTON")
    todoDelete.setAttribute('onclick', 'deltodo(this)')
    todoDelete.setAttribute('class', 'btn btn-success px-2 mx-2')
    var DeL = document.createTextNode("DELETE")
    todoDelete.appendChild(DeL)
    todoli.appendChild(todoDelete)






}

function deltodo(element) {
    element.parentNode.remove()
}

function edittodo(element) {
    element.parentNode.firstChild.nodeValue = prompt("Edit" + element.parentNode.firstChild.nodeValue)
}

function DeleteAll() {
    showlist.innerHTML = ""

}