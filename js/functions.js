const table = document.querySelector ('#numerot')
const counter = document.querySelector('p');
let rowCount = 0;

document.querySelector('button').addEventListener('click',() => {
 const newRow = table.insertRow();
 for (let i = 0; i < 7; i++) {
    const col = newRow.insertCell(i);
    col.innerHTML = Math.floor(Math.random() * 10)
 }

rowCount++;
counter.textContent = `Valmiita rivejä ${rowCount}`;
});
