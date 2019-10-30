
function dragIt(theEvent) {
    theEvent.dataTransfer.setData("Text", theEvent.target.id);
    }

function dropIt(ev) {
    var data = ev.dataTransfer.getData("Text");
    var theDraggedElement = document.getElementById(data);
    ev.target.appendChild(theDraggedElement);
    ev.preventDefault();
    }

function dragOver(event)
{
    event.preventDefault();
}