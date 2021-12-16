
var SheetID = "1C34m6Qf7HZ8CC_zJjhZXFLEZsdrCovemydXwXVfNQyc";
var SheetName='Contact';
var MarketCode = "WE";
var ovrl = $("#overlay");
var url = "https://script.google.com/macros/s/AKfycby_KmlIs24oaZ2CLKj7sUPvqXF2_7A8SgjpjIJKuCwjavdeTMmkNBdTtZhgU1I90EE5/exec?id="+SheetID+"&sheet="+SheetName;
console.log(MarketCode);
$.getJSON(url, function(data) {
    var obj = Object.keys(data),
    json = data[obj];
    for (var i = 0; i < json.length; i++) {
        $('[data-trans="' + i + '"]').html(json[i][MarketCode]);

        var telNo = json[8].WE;
        $('[data-tel="8"]').attr("href", "tel:" + telNo);

        var telNo1 = json[9].WE;
        $('[data-tel="9"]').attr("href", "tel:" + telNo1);

        var mailto = json[11].WE;
        $('[data-mail="11"]').attr("href", "mailto:" + mailto);

        var mailto1 = json[12].WE;
        $('[data-mail="12"]').attr("href", "mailto:" + mailto1);
    }
    
    setTimeout(function () {
        ovrl.hide();
    }, 00);
});
