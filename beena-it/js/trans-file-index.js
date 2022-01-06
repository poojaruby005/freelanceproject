
var SheetID = "17mqdbWfRlfaLFZ9GbBaIQ2QQC18UNj06modaYkx2ymI";
var SheetName='Index';
var MarketCode = "WE";
var ovrl = $("#overlay");
var url = "https://script.google.com/macros/s/AKfycbyAlcDS959cTH4cqKXO1bGwVwM0KyiUDkqb4FmfeCCu2F9GId_649q8Y_m2aVXNrQvA4Q/exec?id="+SheetID+"&sheet="+SheetName;
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
