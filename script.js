$(document).ready(function() {

    // Set position of clock hand
    function getRotate( el, rotate ) {
        var elRotate = "rotate(" + rotate + "deg)";
        $( el ).css({"transform" : elRotate });
    }

    // Check time every second
    setInterval( function() {

        //set clock variables
        var hours = new Date().getHours(),
            mins = new Date().getMinutes(),
            seconds = new Date().getSeconds(),
            hoursRotate = hours * 30 + (mins / 2),
            minRotate = mins * 6,
            secRotate = seconds * 6;

        // fire getRotate function for second hand
        getRotate( "#sec-hand", secRotate );

        // fire getRotate function for hour hand
        getRotate( "#hour-hand", hoursRotate );

        // fire getRotate function for minute hand
        getRotate( "#min-hand", minRotate );

    }, 1000 );


});
