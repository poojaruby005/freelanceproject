
var SheetID = "1_O6fe8b3wLT1KSfONOzVPIsTeovSE2BtIrbqkSsgG1U";
var SheetName='Gallary';
var MarketCode = "WE";
var ovrl = $("#overlay");
var url = "https://script.google.com/macros/s/AKfycbw-rcLymVTGFnF1kiefYJTBSFhWnyY1oi_dV-wkd4Ove0zT0dsLMR-4p3TVSUS4-9jNdQ/exec?id="+SheetID+"&sheet="+SheetName;
console.log(MarketCode);
$.getJSON(url, function(data) {
    var obj = Object.keys(data),
    json = data[obj];
    for (var i = 0; i < json.length; i++) {
        $('[data-trans="' + i + '"]').html(json[i][MarketCode]);

        var vidurl = json[21][MarketCode];
        var vidurl1 = json[22][MarketCode];
        var vidurl2 = json[23][MarketCode];
        var vidurl3 = json[21][MarketCode];
        var vidurl4 = json[22][MarketCode];
        var vidurl5 = json[23][MarketCode];

        var VID_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
        var vid = vidurl.match(VID_REGEX)[1];
        var vid1 = vidurl1.match(VID_REGEX)[1];
        var vid2 = vidurl2.match(VID_REGEX)[1];
        var vid3 = vidurl3.match(VID_REGEX)[1];
        var vid4 = vidurl4.match(VID_REGEX)[1];
        var vid5 = vidurl5.match(VID_REGEX)[1];

    }
    $('.btn-play.first').attr("id", vid);
    $('.btn-play.sec').attr("id", vid1);
    $('.btn-play.third').attr("id", vid2);
    $('.btn-play.forth').attr("id", vid3);
    $('.btn-play.fifth').attr("id", vid14);
    $('.btn-play.sixth').attr("id", vid5);
    $('.btn-play.seventh').attr("id", vid6);
    setTimeout(function () {
        ovrl.hide();
    }, 00);
});
