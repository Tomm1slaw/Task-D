import './scss/style.scss';
import { format } from 'date-fns';
const uuidv4 = require('uuid/v4');

//DOM
var titleInput = document.querySelector('#title-input');
var descriptionInput = document.querySelector('#description-input');
var timeInput = document.querySelector('#time-input');
var ownerInput = document.querySelector('#owner-input');
var taskTable = document.querySelector('#task-table');
var form = document.querySelector('#form');

//variables
var date = format(Date.now(), 'DD:MM:YYYY HH:mm:ss');
var status = ['nowe', 'w_trakcie', 'wykonane'];

function insertNewTask(data) {
   taskTable.querySelector('tbody')[0];
   var newRow = taskTable.insertRow();
   var cell1 = newRow.insertCell(0);
   cell1.innerHTML = data[0];
   var cell2 = newRow.insertCell(1);
   cell2.innerHTML = data[1];
   var cell3 = newRow.insertCell(2);
   cell3.innerHTML = data[2];
   var cell4 = newRow.insertCell(3);
   cell4.innerHTML = data[3];
   var cell5 = newRow.insertCell(4);
   cell5.innerHTML = data[4];
   var cell6 = newRow.insertCell(5);
   cell6.innerHTML = data[5];
   var cell7 = newRow.insertCell(6);
   cell7.innerHTML = data[6];
   var cell8 = newRow.insertCell(7);
   cell8.innerHTML = '<button onclick="confirm(\'wykonane\')">Status</button>';
}

function createNewTask() {
   var formData = [];
   formData.push(uuidv4());
   formData.push(titleInput.value);
   formData.push(descriptionInput.value);
   formData.push(status[0]);
   formData.push(date);
   formData.push(timeInput.value);
   formData.push(ownerInput.value);
   return formData;
}

form.addEventListener('submit', function(e) {
   e.preventDefault();
   var formData = createNewTask();
   insertNewTask(formData);
   localStorage.setItem('task', JSON.stringify(formData));
});

(function init() {
   var data = localStorage.getItem('task');
   var newData = JSON.parse(data);
   insertNewTask(newData);
})();
