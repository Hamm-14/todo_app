$(document).ready(function(){
    $('input[type="checkbox"]').click(function(){
        var inputValue = $(this).attr("value");
        $('#anchor-delete').attr('href',function(){
            return '/delete-contact/?id=' + inputValue;
        });
    });
}); 