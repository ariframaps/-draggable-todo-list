$(function () {
    $('input').keydown(function (e) {
        if (e.keyCode == 13) {
            let inputValue = $(this).val();

            $(this).parent().parent().append('<li class="listItem">' + inputValue + '</li>');
            $(this).val('');
            console.log($('document'));
        }
    });

    $('.lists').sortable({
        items: 'li:not(".listTitle, .listInput")',
        connectWith: 'ul',
        revert: 'invalid'
    });

    $('.trash').droppable({
        drop: function (event, ui) {
            ui.draggable.remove();
            // $(this).css('background-color', 'salmon');
        }
    });
});