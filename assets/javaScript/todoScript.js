$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        console.log(inputValue);
        var link = '/delete-contact/' + inputValue;
        console.log(link);
        $('#anchor-delete').attr('href',function(){
            return '/delete-contact/?id=' + inputValue;
        });
    });
}); 