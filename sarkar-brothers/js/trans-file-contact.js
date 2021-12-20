var SheetID = "1_O6fe8b3wLT1KSfONOzVPIsTeovSE2BtIrbqkSsgG1U";
var SheetName='Contact';
var MarketCode = "WE";
var ovrl = $("#overlay");
var url = "https://script.google.com/macros/s/AKfycbw-rcLymVTGFnF1kiefYJTBSFhWnyY1oi_dV-wkd4Ove0zT0dsLMR-4p3TVSUS4-9jNdQ/exec?id="+SheetID+"&sheet="+SheetName;
console.log(MarketCode);
$.getJSON(url, function(data) {
    var obj = Object.keys(data),
    json = data[obj];
    for (var i = 0; i < json.length; i++) {
        $('[data-trans="' + i + '"]').html(json[i][MarketCode]);

        $('[data-href="11"]').attr("href", json[11].WE);
        $('[data-href="12"]').attr("href", json[12].WE);
        // $('[data-href="13"]').attr("href", json[13].WE);
        $('[data-href="14"]').attr("href", json[14].WE);

        var telNo = json[4].WE;
        $('[data-tel="4"]').attr("href", "tel:" + telNo);

        var mailto = json[5].WE;
        $('[data-mail="5"]').attr("href", "mailto:" + mailto);
    }
    
    setTimeout(function () {
        ovrl.hide();
    }, 00);
});
