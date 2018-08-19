$(document).ready(function () {
    $(document).on('change', '.statutrange', function () {
        let currentInput = $(this);
        let currentInputValue = currentInput.val();
        currentInput.removeClass().addClass('statutrange range' + currentInputValue);

        if (currentInputValue === '0') currentInput.closest('td').find('span').html('No show');
        if (currentInputValue === '1') currentInput.closest('td').find('span').html('A faire');
        if (currentInputValue === '2') currentInput.closest('td').find('span').html('Effectuée');
    });

    $(function () {
        let handle = $("#custom-handle");
        $("#slider-notification-range").slider({
            create: function () {
                handle.text($(this).slider("value"));
            },
            slide: function (event, ui) {
                handle.text(ui.value);
            }
        });
    });
});