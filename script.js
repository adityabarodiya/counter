const c = document.getElementById("counter");
const addBtn = document.getElementById("add");
const reset = document.getElementById("reset");
let count = 0

function addOne(){
    // increase counter
    c.innerHTML= ++count;
}

function reSet() {
  count = 0;
  c.innerHTML = count;
}