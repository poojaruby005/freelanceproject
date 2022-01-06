
var SheetID = "1vaStAasIUPRczveJlAx6xuPHcbaVbaV_5i_2CYbUp38";
var SheetName='About';
var MarketCode = "WE";
var ovrl = $("#overlay");
var url = "https://script.google.com/macros/s/AKfycbxACuS_cctcScHGWhY7gRxxCbNKzbTBkXcBOfTUs_jL98KzrR_5-P9WtuY4lzEw_AvB/exec?id="+SheetID+"&sheet="+SheetName;
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
