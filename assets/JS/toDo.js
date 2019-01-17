console.log(" toDo.js connected");

//check off ToDos by clicking
$("li").click(function(){
    $(this).toggleClass("completed"); //class created in CSS file
});
