// Get current date
var dayToday = dayjs().format("dddd, MMMM DD, YYYY");
//Display current date
$('p#currentDay').text(dayToday);

var currentHour = dayjs().format("HH");

// Capture and cpmare label of each time block to current time to colour code it
  $(".flex-container").children("#timeBlock").each(function () {

  var timeBlock = $(this).children(".hour").attr("id")

  if (timeBlock < currentHour) 
  {
    $(this).children("#taskId").css('background-color','grey');
  }
  else if (timeBlock == currentHour) {
    $(this).children("#taskId").css('background-color','red'); 
  }
  else {
    $(this).children("#taskId").css('background-color','green'); 
     
  }
})
// Add listener event to save button
$(".saveBtn").on("click", function () {
  
  var task = $(this).siblings("#taskId").val();
  var time = $(this).siblings(".hour").attr("id");
  // Save task in local storage
  localStorage.setItem(time, task);

})
//Lopp through all time blocks and get retrieve tasks from local storage to display in scheduler
$(".flex-container").children("#timeBlock").each(function () {
  var timeSlot = $(this).children(".hour").attr("id");
  $(this).children("#taskId").val(localStorage.getItem(timeSlot));
});
