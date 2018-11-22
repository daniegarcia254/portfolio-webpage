
$(document).ready(function() {

    var options = {
        lng: window.location.search == '' ? "en_EN" : window.location.search.substring(1).split("=")[1]+"_"+window.location.search.substring(1).split("=")[1].toUpperCase(),
        resGetPath: '/locales/__lng__/__lng__.json'
    };

    i18n.init(options, function (t) {
        $("#home").i18n({ name: "Daniel García"});
        $(".header").i18n();
        $("#services").i18n();
        $("#portfolio").i18n();
        $(".calltoaction").i18n();
        $("#skills").i18n();
        $("#contact").i18n();
        $(".modal-header").i18n();
        $(".modal-content").i18n();
    });

    $('.idioma-en').click(function(){
        window.location.href = "//" + window.location.host + "/index.html";
    });
    $('.idioma-centre-en').click(function(){
        window.location.href = "//" + window.location.host + "/index.html";
    });
    $('.idioma-es').click(function(){
       window.location.href = "//" + window.location.host + "/index.html?lng=es";
    });
    $('.idioma-centre-es').click(function(){
        window.location.href = "//" + window.location.host + "/index.html?lng=es";
    });
});
