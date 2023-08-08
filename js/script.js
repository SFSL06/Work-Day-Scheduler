// var time = dayjs().format("HH:mm:ss");
// $("#4a").text(time);

var dayToday =  new Date();
console.log(dayToday);
//dayToday = dayjs(dayToday).format(Do, MMMM, YY);
$('p#currentDay').text(dayToday);

// var currentHour = parseInt(new Date().format('H'));

var currentHour = dayjs().format("HH");
console.log(currentHour);

// $("#timeBlock").children(".hour").each(function () {
  $(".flex-container").children("#timeBlock").each(function () {
// $( "div" ).children( ".hour" ).css( "color", "blue" );
var timeBlock = $(this).children(".hour").attr("id")

  console.log("Time Block " + timeBlock);
  console.log("Time Current " + currentHour);
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
