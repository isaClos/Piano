
$('.key').each(function( index ) {
    let keydiv = this.attr('data-key');
    let audiokey = $(`audio[data-key="${keydiv}"]`);
    $(this).on('click', function () {
        audiokey.currentTime = 0;
        audiokey.play();
        $(this).addClass('animate');
    });
});
