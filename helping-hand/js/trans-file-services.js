
var SheetID = "1_O6fe8b3wLT1KSfONOzVPIsTeovSE2BtIrbqkSsgG1U";
var SheetName='Services';
var MarketCode = "WE";
var ovrl = $("#overlay");
var url = "https://script.google.com/macros/s/AKfycbw-rcLymVTGFnF1kiefYJTBSFhWnyY1oi_dV-wkd4Ove0zT0dsLMR-4p3TVSUS4-9jNdQ/exec?id="+SheetID+"&sheet="+SheetName;
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
