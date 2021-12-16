
var SheetID = "1C34m6Qf7HZ8CC_zJjhZXFLEZsdrCovemydXwXVfNQyc";
var SheetName='Index';
var MarketCode = "WE";
var ovrl = $("#overlay");
var url = "https://script.google.com/macros/s/AKfycby_KmlIs24oaZ2CLKj7sUPvqXF2_7A8SgjpjIJKuCwjavdeTMmkNBdTtZhgU1I90EE5/exec?id="+SheetID+"&sheet="+SheetName;
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
