const c = document.getElementById("counter")
const addBtn = document.getElementById('add')
const reset = document.getElementById('reset')
let count = 0;

function addOne(){
    c.innerHTML= ++count;
    console.log('dsfkjhfds')

}

function reSet(){
    count = 0;
    c.innerHTML= count;
}