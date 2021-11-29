$(document).ready(function() {

    $("#close-sidebar").click(function() {

        $("#sidebar-menu").toggle();
        $(this).hide();
    });
    $("#show-sidebar").click(function() {
        $("#sidebar-menu").toggle();

        $("#close-sidebar").show();
        $(this).toogle();
    });

    console.log("done");
});