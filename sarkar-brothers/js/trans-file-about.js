var SheetID = "1ujXeDMlDl68yXDCFUkvzVZibVcAyu93XzJWRyUlX6zE";
var SheetName='About';
var MarketCode = "WE";
var ovrl = $("#overlay");
var url = "https://script.google.com/macros/s/AKfycbx6xMPc-b3BpAhh1nqQM9b-efZjzMpd7kIzFGf6coq15w24_L8sqDg0AV5Un54SFCi4/exec?id="+SheetID+"&sheet="+SheetName;
console.log(MarketCode);
$.getJSON(url, function(data) {
    var obj = Object.keys(data),
    json = data[obj];
    for (var i = 0; i < json.length; i++) {
        $('[data-trans="' + i + '"]').html(json[i][MarketCode]);

    }
    
    setTimeout(function () {
        ovrl.hide();
    }, 00);
});
