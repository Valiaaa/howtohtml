$(document).ready(function(){


$("#setupt").click(function(){
    $(this).hide();
    $("#setuptc").show();
    $("#setup").show();
});

$("#setuptc").click(function(){
    $(this).hide();
    $("#setupt").show();
    $("#setup").hide();
});

$("#inspect").hover(function(){
    $("#inspectpic").show();
}, function(){
    $("#inspectpic").hide();
});

$("#createt").click(function(){
    $(this).hide();
    $("#createtc").show();
    $("#create").show();
});

$("#createtc").click(function(){
    $(this).hide();
    $("#createt").show();
    $("#create").hide();
});

$("#documentt").click(function(){
    $(this).hide();
    $("#documenttc").show();
    $("#document").show();
});

$("#documenttc").click(function(){
    $(this).hide();
    $("#documentt").show();
    $("#document").hide();
});

$("#createfile").hover(function(){
    $("#createfilepic").show();
}, function(){
    $("#createfilepic").hide();
});

$("#htmldoct").click(function(){
    $(this).hide();
    $("#htmldoctc").show();
    $(".htmldoc").show();
});

$("#htmldoctc").click(function(){
    $(this).hide();
    $("#htmldoct").show();
    $(".htmldoc").hide();
});



});