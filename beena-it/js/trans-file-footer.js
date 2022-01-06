
var SheetID = "17mqdbWfRlfaLFZ9GbBaIQ2QQC18UNj06modaYkx2ymI";
var SheetName='Contact';
var MarketCode = "WE";
var ovrl = $("#overlay");
var url = "https://script.google.com/macros/s/AKfycbyAlcDS959cTH4cqKXO1bGwVwM0KyiUDkqb4FmfeCCu2F9GId_649q8Y_m2aVXNrQvA4Q/exec?id="+SheetID+"&sheet="+SheetName;
console.log(MarketCode);
$.getJSON(url, function(data) {
    var obj = Object.keys(data),
    json = data[obj];
    for (var i = 0; i < json.length; i++) {
        $('[data-trans="' + i + '"]').html(json[i][MarketCode]);

        $('[data-href="21"]').attr("href", json[21].WE);
        $('[data-href="22"]').attr("href", json[22].WE);
        $('[data-href="23"]').attr("href", json[23].WE);

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
