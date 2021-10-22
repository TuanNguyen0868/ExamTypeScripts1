$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});


$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
})

$(document).ready(function(){
    $("#btn-toast").click(function(){
        $('.toast').toast('show');
    });
});