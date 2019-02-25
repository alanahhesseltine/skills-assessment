/* hide and show phone or email depending on selection */
function info(){
    var elem = document.getElementById("info").value;
    var email = document.getElementsByClassName("email");
    for (var i = 0; i < email.length; i++) {
        email[i].style.display = (elem == "1") ? "block" : "none";
    }
    var phone = document.getElementsByClassName("phone");
    for (var i = 0; i < phone.length; i++) {
        phone[i].style.display = (elem == "2") ? "block" : "none";
    }
}

/* hide and show more-info when row is clicked */
$(document).ready(function(){
    $('.contact-row').click(function(){
        $('.overlay').show();
        $('.name-col').removeClass('bg-gray');

        $(this).find('.more-info').show();
        $(this).find('.name-col').addClass('bg-gray');
        return false;
    });

});


$('.overlay').click(function(){
    $(this).fadeOut();
    $('.more-info').hide();
    $('.name-col').removeClass('bg-gray');
});
