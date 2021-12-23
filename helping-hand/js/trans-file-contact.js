
var SheetID = "1bLITIzR_cKPyWzZXWj1NuIxzytF-OrabLniHoYh7qeM";
var SheetName='Contact';
var MarketCode = "WE";
var ovrl = $("#overlay");
var url = "https://script.google.com/macros/s/AKfycbxOHFOgvUbYvmvhBV_mjlRQKhNTzOM7-B-sZ5ygGyBuBDOTJWYBSCC2m_hr4kXMAFvLjw/exec?id="+SheetID+"&sheet="+SheetName;
console.log(MarketCode);
$.getJSON(url, function(data) {
    var obj = Object.keys(data),
    json = data[obj];
    for (var i = 0; i < json.length; i++) {
        $('[data-trans="' + i + '"]').html(json[i][MarketCode]);

        $('[data-href="10"]').attr("href", json[10].WE);
        $('[data-href="11"]').attr("href", json[11].WE);
        // $('[data-href="13"]').attr("href", json[13].WE);
        $('[data-href="12"]').attr("href", json[12].WE);

        var telNo = json[4].WE;
        $('[data-tel="4"]').attr("href", "tel:" + telNo);

        var mailto = json[5].WE;
        $('[data-mail="5"]').attr("href", "mailto:" + mailto);
    }
    
    setTimeout(function () {
        ovrl.hide();
    }, 00);
});
