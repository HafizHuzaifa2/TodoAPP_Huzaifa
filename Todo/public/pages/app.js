var todoinp = document.getElementById("todoinp")
var showlist = document.getElementById("show")

function addtodo() {
    var todotext = todoinp.value
    var todoelm = document.createTextNode(todotext)
    var todoli = document.createElement("li")
    todoli.appendChild(todoelm)
    showlist.appendChild(todoli)

    var todoDelete = document.createElement("BUTTON")
    todoDelete.setAttribute('onclick', 'deltodo(this)')
    var DeL = document.createTextNode("DELETE")
    todoDelete.appendChild(DeL)
    todoli.appendChild(todoDelete)

    var editbutton = document.createElement('button')
    editbutton.setAttribute('onclick', 'edittodo(this)')
    var Edit = document.createTextNode("EDIT")
    editbutton.appendChild(Edit)
    todoli.appendChild(editbutton)





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