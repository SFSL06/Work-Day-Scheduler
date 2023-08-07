var timeBlockEl = $('.flex-container');
var inputTask = $('#inputTask');

var timeBlockArr = ['9:00 am','10:00am','11:00am','12:00am',
                '1:00 pm','2:00 pm','3:00 pm','4:00 pm',
                '5:00 pm'];

function loadScheduler(){
  // Dynamically create list of time blocks
  // Create a for-loop to iterate through the time Block Array.
 
  for (var i = 0; i < timeBlockArr.length; i++) {
  
    var timeBlock = $("<div>",{
    //class: "body textarea",
    });
    var timeBlockCol = $("<col-md-3 col-lg-3>");
    timeBlockCol.append($("<label>", {
      class: "hour",
      text: timeBlockArr[i] + ' ',
    }));
    var input = $("<Input>", {
      type: "text",
      class: "description",
      id: "taskId",
      placeholder: "Enter Task",
    });
    timeBlockCol.append(input);
    var saveBtn = $("<button>", {
     class: "saveBtn",
     text: "Save",
    });
    timeBlockCol.append(saveBtn)
    timeBlock.append(timeBlockCol);
    timeBlockEl.append(timeBlock)

  
// Delegate event listener to the parent element, <div id="buttons">
   timeBlock.on('blur', '#taskId.val', function (event) {
    var task = $('#taskId').val();
    console.log(task);});

  //timeBlockEl.on('focus', '#taskId', function (event) {
    
}
  // });
}
  
 

loadScheduler();