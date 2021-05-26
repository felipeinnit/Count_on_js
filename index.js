let countHtml = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function plus() {
    count+=1;
    countHtml.textContent = count;
}

function minus() {
    count-=1;
    countHtml.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countHtml.textContent = 0;
    count = 0;
}
