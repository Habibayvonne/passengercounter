

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
//// change the count-el in the HTML to reflect the new count
function increment() {
    console.log("the button was clicked");
    count += 1;
    countEl.textContent = count;
    console.log(count);

}

function save() {
    console.log(count);
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    console.log(countStr);
    countEl.textContent = 0;
    count = 0;
}


