console.log("loaded link.js");

// increment favorite count by 1 when tweet is visited
$("a").click(function () {
    $id = $(this).parent().parent().attr("id");

    let selector = "#" + $id + " p span.favorite";
    $favorite = $(selector).attr("fav");

    $.ajax({
        url: '/update/' + $id + '/' + $favorite,
        type: 'post',
        data: {},
        headers: {},
        dataType: 'json',
        success: function (data) {
            console.log(data);
        }
    });
});