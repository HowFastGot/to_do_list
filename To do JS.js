let button = document.querySelector('button');
let input = document.getElementById('in');

let toDoArray = [];

if (localStorage.getItem("todo")) {
     toDoArray = JSON.parse(localStorage.getItem("todo"));
     writeDown();
}
button.onclick = function (e) {
     let deal = input.value;
     let temporaryObj = {};

     temporaryObj.todo = deal;
     temporaryObj.check = false;

     let i = toDoArray.length;
     toDoArray[i] = temporaryObj;

     writeDown();
     localStorage.setItem("todo", JSON.stringify(toDoArray))
}

input.onkeydown = function (e) {
     if (e.code == "Enter") {
          let event = new Event("click");
          button.dispatchEvent(event)
     }
}

function writeDown() {
     let text = "";

     for (let key of toDoArray) {

          if (key.check != true) {
               text += `<input type="checkbox">`
          } else {
               text += `<input type="checkbox" checked>`
          }

          text += key.todo + "<br>";
     }

     document.querySelector(".out").innerHTML = text;
}

//===============================================================
