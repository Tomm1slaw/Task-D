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
var status = 'nowe';
var selectedRow = null;

//add new table row
function insertNewRecord(data) {
	taskTable.querySelector('tbody')[0];
	var newRow = taskTable.insertRow();
	var cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.id;
	var cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.title;
	var cell3 = newRow.insertCell(2);
	cell3.innerHTML = data.description;
	var cell4 = newRow.insertCell(3);
	cell4.innerHTML = data.status;
	var cell5 = newRow.insertCell(4);
	cell5.innerHTML = data.date;
	var cell6 = newRow.insertCell(5);
	cell6.innerHTML = data.time;
	var cell7 = newRow.insertCell(6);
	cell7.innerHTML = data.owner;
	var cell8 = newRow.insertCell(7);
	//confirm without any function
	cell8.innerHTML = '<button onclick="confirm(\'wykonane\')">Status</button>';
}

//build data from form and variables
function readFormData() {
	var formData = {};
	formData['id'] = uuidv4();
	formData['title'] = titleInput.value;
	formData['description'] = descriptionInput.value;
	formData['status'] = status;
	formData['date'] = date;
	formData['time'] = timeInput.value;
	formData['owner'] = ownerInput.value;

	return formData;
}

//send data
form.addEventListener('submit', function(e) {
	e.preventDefault(); //stop default action
	var formData = readFormData();
	localStorage.setItem('object', JSON.stringify(formData)); //send data to local storage
	if (selectedRow === null) {
		insertNewRecord(formData);
	}
});

//show data in console
console.log(JSON.parse(localStorage.getItem('object')));
