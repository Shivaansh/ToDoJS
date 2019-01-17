console.log(" toDo.js connected");

//check off/uncheck ToDos by clicking

//listener added to ul to listen for any li's added in the future
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed"); //class created in CSS file
});

//click on X to delete TO-DOs
$("ul").on("click", "span", function(event)
{
    //fade out and remove parent <li>
    $(this).parent().fadeOut("fast", function()
    {
        $(this).remove(); //NOT parent
    });
    event.stopPropagation(); //prevent event bubbling
});

//add todos
$("#addItem").keypress(function(event)
{
    if(event.which === 13)
    {   
        //store new todo text
        var newItem = $(this).val();

        //reset input box text
        $(this).val("");
        
        //create new <li>
        $("ul").append("<li> <span><i class='far fa-trash-alt'></i></span> " + newItem + "</li>");
    }
});

$(".fa-check").click(function()
    {
        $("#addItem").fadeToggle("fast");
    });