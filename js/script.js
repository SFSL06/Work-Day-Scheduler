var timeBlockEl = $('.flex-container');
var inputTask = $('#inputTask');

var timeBlockArr = ['9:00 am', '10:00am', '11:00am', '12:00am',
  '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm',
  '5:00 pm'];

// Dynamically create list of time blocks
// Create a for-loop to iterate through the time Block Array.

// for (var i = 0; i < timeBlockArr.length; i++) {

//   var timeBlock = $("<div>", {
//     //class: "body textarea",
//   });
//   var timeBlockCol = $("<col-md-3 col-lg-3>");
//   timeBlockCol.append($("<label>", {
//     class: "hour",
//     id: "hour",
//     text: timeBlockArr[i],
//   }));
//   var input = $("<Input>", {
//     type: "text",
//     class: "description",
//     id: "taskId",
//     placeholder: "Enter Task",

//   });
//   timeBlockCol.append(input);
//   var saveBtn = $("<button>", {
//     class: "saveBtn",
//     text: "Save",
//   });



//   timeBlockCol.append(saveBtn)
//   timeBlock.append(timeBlockCol);
//   timeBlockEl.append(timeBlock)

// }
// //$(document).ready(function(){
// // Delegate event listener to the parent element, <div id="buttons">

// timeBlockEl.on('blur', '#taskId', function (event) {
//   //saves the value inputted into the task input box
//   var task = event.target.value;
//   var time = $(this).siblings('.hour').text();
//   console.log(time + " " + task);
//   var timeTask = [time, task];
//   localStorage.setItem("task", JSON.stringify(timeTask));
//   console.log(localStorage)
// //   // //var task = $('#taskId').val();
// //   //  // Parse the serialized data back into an aray of objects
// //   //  a = JSON.parse(localStorage.getItem('session')) || [];
// //   //  // Push the new data (whether it be an object or anything else) onto the array
// //   //  a.push(data);
// //   //  // Alert the array value
// //   //  alert(a);  // Should be something like [Object array]
// //   //  // Re-serialize the array back into a string and store it in localStorage
// //   //  localStorage.setItem('session', JSON.stringify(a));


// });
// timeBlockEl.on('click', '.saveBtn', function (event) {

//   var work = JSON.parse(localStorage.getItem("task"));
//   console.log(work);
//   $(this).siblings('.description').val = work;
// // Retrieve
// // document.getElementById("demo").innerHTML = localStorage.getItem("lastname");

//   //  $("#hour11 .description").val(localStorage.getItem("hour11"));

// });
// //text = event.target.tagName;

// // //document.getElementById("txt_1").value = getSavedValue("txt_1");
// // window.onload = function () {

// //   //var task = JSON.parse(localStorage.getItem("time"));
// //   //console.log(task);

// //   // var task = JSON.parse(localStorage.getItem("task"));
// //   // var taskEl = $('#taskId');
// //   // taskEl.value = task;
// //   // taskEl.innerHTML = task;
// //   // console.log(task + " " + "saved");
// // }
// //   // Get item from local storage if any
//   // $("#hour8 .description").val(localStorage.getItem("hour8"));
