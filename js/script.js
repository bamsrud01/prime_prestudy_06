$(document).ready(function() {
    $('button').on('click', function(){
        $('button').fadeOut();
        $('#content').slideDown(2000);
    });
});