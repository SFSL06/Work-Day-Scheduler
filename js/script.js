// var time = dayjs().format("HH:mm:ss");
// $("#4a").text(time);

var dayToday =  new Date();
console.log(dayToday);
//dayToday = dayjs(dayToday).format(Do, MMMM, YY);
$('p#currentDay').text(dayToday);

// var currentHour = parseInt(new Date().format('H'));

var currentHour = dayjs().format("HH");

// $("#timeBlock").children(".hour").each(function () {
  $(".flex-container").children("#timeBlock").each(function () {
// $( "div" ).children( ".hour" ).css( "color", "blue" );
var timeBlock = $(this).children(".hour").attr("id")

   // To check the time and add the classes for background indicators
  if (timeBlock < currentHour) {
    
    $(this).children("#taskId").css('background-color','grey');
  }
  else if (timeBlock == currentHour) {
    $(this).children("#taskId").css('background-color','red'); 
  }
  else {
    $(this).children("#taskId").css('background-color','green'); 
     
  }
})
$(".saveBtn").on("click", function () {
  // Get nearby values of the description in JQuery
  var task = $(this).siblings("#taskId").val();
  var time = $(this).siblings(".hour").attr("id");
  console.log(task);
  console.log(time);
  // Save text in local storage
  localStorage.setItem(time, task);

})

$(".flex-container").children("#timeBlock").each(function () {
  var timeSlot = $(this).children(".hour").attr("id");
  $(this).children("#taskId").val(localStorage.getItem(timeSlot));


});
