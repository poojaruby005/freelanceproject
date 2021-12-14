
var SheetID = "1bLITIzR_cKPyWzZXWj1NuIxzytF-OrabLniHoYh7qeM";
var SheetName='Index';
var MarketCode = "WE";
var ovrl = $("#overlay");
var url = "https://script.google.com/macros/s/AKfycbxOHFOgvUbYvmvhBV_mjlRQKhNTzOM7-B-sZ5ygGyBuBDOTJWYBSCC2m_hr4kXMAFvLjw/exec?id="+SheetID+"&sheet="+SheetName;
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
