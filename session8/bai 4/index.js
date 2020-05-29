const timesheetData = [
{
    project: 'Learn front-end',
    task: 'Learn HTML',
    timeSpent: 6,
},
{
    project: 'Learn front-end',
    task: 'Learn CSS',
    timeSpent: 8,
},
{
    project: 'Learn front-end',
    task: 'Learn JS Variables and Data Types',
    timeSpent: 6,
},
{
    project: 'Learn git',
    task: 'Learn git basics',
    timeSpent: 2,
},
];
console.log(timesheetData);

const table = document.getElementsByTagName("table")[0];
table.deleteRow(1);
let rows = [];

for(let i = 0; i < timesheetData.length; i++){
    console.log(rows);
    rows[i] = table.insertRow(i+1);
    rows[i].insertCell(0)
    rows[i].insertCell(0).innerHTML = timesheetData[i].project;
    rows[i].insertCell(1);
    rows[i].insertCell(1).innerHTML = timesheetData[i].task;
    rows[i].insertCell(2);
    rows[i].insertCell(2).innerHTML = timesheetData[i].timeSpent;
    rows[i].insertCell(3);
    rows[i].insertCell(3).innerHTML = `<button id="${i+1}" class="remove_btn">${i+1}x</button>`;
}
document.getElementById('add_btn').addEventListener('click', () => {
    rows[timesheetData.length+2] = table.insertRow(timesheetData.length+1);
    rows[timesheetData.length+2].insertCell(0);
    rows[timesheetData.length+2].insertCell(0).innerHTML = document.getElementById('project_input').value;
    rows[timesheetData.length+2].insertCell(1);
    rows[timesheetData.length+2].insertCell(1).innerHTML = document.getElementById('task_input').value;
    rows[timesheetData.length+2].insertCell(2);
    rows[timesheetData.length+2].insertCell(2).innerHTML = document.getElementById('time_input').value;
    rows[timesheetData.length+2].insertCell(3);
    rows[timesheetData.length+2].insertCell(3).innerHTML = `<button id="${timesheetData.length}" class="remove_btn">${timesheetData.length+1}x</button>`;
    let newData = 
        {
            project: document.getElementById('project_input').value,
            task: document.getElementById('task_input').value,
            timeSpent: document.getElementById('time_input').value,
        }
    
    timesheetData.push(newData);
    console.log(timesheetData);

});
const removeBtn = document.getElementsByClassName('remove_btn');
for (let i = 0; i < removeBtn.length; i++){
    removeBtn[i].addEventListener('click', () => {
        let x = Number(this.id);
        console.log(this.id); 
        table.deleteRow(x);
    });
}


