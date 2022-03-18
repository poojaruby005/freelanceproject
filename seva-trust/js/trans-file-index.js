//v1

var SheetID = "1fkpQKWVGYJbSIGa150s15kWlYFmctadk6f6X8dSkXog";
var SheetName='Index';
var MarketCode = 'KA';
var trans  = " ";
var ovrl = $("#overlay");
var url = "https://script.google.com/macros/s/AKfycbxaJWQHYWBmSXRYEbUdT9wkKpew8A5Qqw5tt8DVrwZL0m5gqZvHgKqk-E7Y-K1-fO9J/exec?id="+SheetID+"&sheet="+SheetName;
// console.log(MarketCode);
$.getJSON(url, function(data) {
    var obj = Object.keys(data),
    json = data[obj];
    for (var i = 0; i < json.length; i++) {
        trans=json[4][MarketCode];
        if (MarketCode == "we") {
            $('[data-trans="' + i + '"]').html(json[i].WE);

        }
        else{
            $('[data-trans="' + i + '"]').html(json[i].KA);

        }
    }
    setTimeout(function () {
        ovrl.hide();
    }, 00);
});


$(document).ready(function () {
	$(".btn-trans").on("click", function () {
		console.log('enter');
	});
});