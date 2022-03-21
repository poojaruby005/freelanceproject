//v1

var SheetID = "1fkpQKWVGYJbSIGa150s15kWlYFmctadk6f6X8dSkXog";
var SheetName='Index';
var MarketCode = 'EN';
var trans  = " ";
var ovrl = $("#overlay");
var url = "https://script.google.com/macros/s/AKfycbxaJWQHYWBmSXRYEbUdT9wkKpew8A5Qqw5tt8DVrwZL0m5gqZvHgKqk-E7Y-K1-fO9J/exec?id="+SheetID+"&sheet="+SheetName;
// console.log(MarketCode);

function getcontent(){
 $.getJSON(url, function(data) {
    var obj = Object.keys(data),
    json = data[obj];
    for (var i = 0; i < json.length; i++) {
        trans=json[4][MarketCode];
        if (MarketCode == "EN") {
            $('[data-trans="' + i + '"]').html(json[i].EN);

        }
        else{
            $('[data-trans="' + i + '"]').html(json[i].KA);

        }
    }
    setTimeout(function () {
        ovrl.hide();
    }, 00);
});
}




$(document).ready(function () {
    getcontent();
	$(".btn-trans").on("click", function () {
        // debugger;
		// console.log('enter');
        if(MarketCode == 'KA'){
            MarketCode = 'EN';
        }
        else{
             MarketCode = 'KA';
        }
        getcontent();
	});
});