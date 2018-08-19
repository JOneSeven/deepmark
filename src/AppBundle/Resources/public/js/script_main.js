$(document).ready(function () {
    $(document).on('click', '.btn-menu-mobile', function () {
        $(".btn-menu-mobile").toggleClass("bar_change");
        $(".dropdown-menu-mobile").removeClass("d-none");
        let x = document.getElementsByClassName("principal-navbar");
        if (x.className === "principal-navbar") {
            x.className += " responsive";
            console.log('close');
            $('#dropdown_content_menu_mobile').removeClass('dropdown_content_menu_mobile_active').addClass('dropdown_content_menu_mobile');
        } else {
            x.className = "principal-navbar";
            console.log('open');
            $('#dropdown_content_menu_mobile').removeClass('dropdown_content_menu_mobile').addClass('dropdown_content_menu_mobile_active');
        }
    });

    AOS.init({
        duration: 800
    });
});

function validateEmail(elementValue){
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue); 
} 

function validatePhone(elementValue){
    let phonePattern = /^\+?[0-9]{6,12}$/;
    return phonePattern.test(elementValue); 
}

function sweetAlertError(message)
{
    swal({
        title: 'Zut...',
        text: message,
        type: 'error',
        showCancelButton: false,
        showLoaderOnConfirm: false,
    }).then(function () {
        location.reload();
    });
}

function sweetAlertWarning(message)
{
    swal({
        title: 'Attention',
        text: message,
        type: 'warning',
        showCancelButton: false,
        showLoaderOnConfirm: false,
    });
}