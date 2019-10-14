$(document).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

})

var currentTime = new Date().getHours();
     if (0 <= currentTime && currentTime){
         $(".textarea").addClass("future");
      } 
     
     if (0 <= currentTime && currentTime>=22){
        $(".textarea").addClass("present");
      }
      
 








$("#saveBtn").on("click", function() {
  
var text = $("saveBtn").text();
localStorage.setItem("save", text);
localStorage.getItem("saveBtn");
}
);


   



//function update() {
    //moment().format('dddd, MMMM, Do');
//$('#currentDay').text(moment().format('dddd, MMMM Do'));
