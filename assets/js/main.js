// completing the todos by on click function
$('ul').on('click', 'li', function() {
    // adding animes to completed todos
    $(this).toggleClass('completed')
});
// remove todos by clicking x 
$('ul').on('click', 'span', function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    // stop bubble effect
    event.stopPropagation();
});
// add new todos 
$("input[type='text']").on('keypress', function(event) {
    if (event.which === 13) {
        let todoText = $(this).val();
        $('ul').append('<li><span><i class="fa fa-trash"></i> </span>' + todoText + '</li>');
        $(this).val('');
    }
});
// toggle of todo add
$('.fa-plus').on('click', function() {
    $("input[type='text']").fadeToggle(500);
})