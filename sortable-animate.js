



/*Requires jQuery and jQuery-UI*/


$('ul').sortable({
    placeholder:'placeholder',
    distance: 10,
    revert: 200,
    start:function(ev, ui) {
       $(".placeholder").css({"height": "0px"});
    },
    change:function(ev, ui) {
        $(".placeholder").css({"height": "0px"});
        setTimeout(function(){
            $(".placeholder").css({"height": "40px"});
        },10);
    }
});
