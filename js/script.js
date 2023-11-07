
 $(document).ready(function () {
        $('#toggle-menu-button').click(function (e) {
            e.preventDefault();
            $('#menu').slideToggle();
        });
 });

 UIkit.scrollspy("#animation-section", {
    cls: "uk-animation-fade",
    repeat: true,})