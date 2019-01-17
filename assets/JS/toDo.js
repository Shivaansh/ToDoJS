console.log(" toDo.js connected");

//check off/uncheck ToDos by clicking
$("li").click(function(){
    $(this).toggleClass("completed"); //class created in CSS file
});

//click on X to delete TO-DOs
$("span").click(function(event)
{
    //fade out and remove parent <li>
    $(this).parent().fadeOut("fast", function()
    {
        $(this).remove(); //NOT parent
    });
    event.stopPropagation(); //prevent event bubbling
}); 
