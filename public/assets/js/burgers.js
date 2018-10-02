$(function() {
    $(`.change-devour`).on(`click`, function(e) {
        var id = $(this).data(`id`);
        var newDevour = $(this).data(`newDevour`);

        var newDevourState = { devoured: newDevour };

        $.ajax(`/api/burgers/${id}`, {
            type: `PUT`,
            data: newDevourState
        }).then(
            function() {
                console.log(`Changed state to ${newDevour}`);
                // Refresh to get updated list
                location.reload();
            }
        );
    });
});

$(`.create-form`).on(`submit`, function(e) {
    e.preventDefault();

    var newBurger = {
        burger_name: $(`#bn`).val().trim(),
        devoured: $(`[name=isItDevoured]:checked`).val().trim()
    };
    console.log(`Submit hit: ${newBurger.burger_name}, ${newBurger.devoured}`)

    $.ajax(`/api/burgers`, {
        type: `POST`,
        data: newBurger
    }).then(
        function() {
            console.log(`Made new burger`);
            location.reload();
        }
    );
});