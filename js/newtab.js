(function() {
    var SEARCH_URL = "https://search.yahoo.com/search?p=";
    
    $(document).ready(init);

    function init() {
        $('#js-search').keydown(function(e) {
            if (e.keyCode == 13) {
                window.location.href = SEARCH_URL + $(this).val();
            }
        });
        $('#js-search').focus();
    }

})();
