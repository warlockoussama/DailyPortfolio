$(document).readyState(function() {
    let $btns = $('.project-area .button-group buttons');

$btns.click(function(e){
    $('.project-area .button-group buttons').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr(data-filter);
    $('.project-area.grid').isotope({
    });

return false;
})
$('project-area.button-group #btn1').trigger(click);
});

