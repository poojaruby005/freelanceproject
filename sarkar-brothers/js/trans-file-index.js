
var SheetID = "1ZIesJe2fpH3IyaIr0q7ynOsU6XE8_xCqiIISV8jEq-s";
var SheetName='Ajeet';
var MarketCode = "WE";
var ovrl = $("#overlay");
var url = "https://script.google.com/macros/s/AKfycbxRz84l1iP5AFvR3xmCDlksYsE_eoS7ZKtz-FOy0oUSoXwdVm4F6vl6AArqwdMcFR0i/exec?id="+SheetID+"&sheet="+SheetName;
// console.log(MarketCode);
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
