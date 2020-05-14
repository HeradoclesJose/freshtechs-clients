document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelectorAll('#map-home').length > 0){
        if (document.querySelector('html').lang)
            lang = document.querySelector('html').lang;
        else
            lang = 'es';
            var js_file = document.createElement('script');
            js_file.type = 'text/javascript';
            js_file.src = 'https://maps.googleapis.com/maps/api/js?key=APIKEY;
            js_file.setAttribute('async','');
            js_file.setAttribute('defer','');
            document.getElementsByTagName('head')[0].appendChild(js_file);
    }
});

var nodes = {
    elTucan: {
        center: {lat: 10.679771148283281, lng: -71.6501174074707},
        radius: 2981.248542235011,
        title: "Estación Av. Delicias",
        content: "Ubicada en la Zona Oeste de Maracaibo, y cubriendo la zona de Delicias, La Limpia y Circunvalación #2"
    },
    tucan2: {
        center : {lat: 10.70198882862689, lng: -71.62041998925781},
        radius: 2568.1479215575664,
        title: "Estación Zona Norte",
        content: "Ubicada en la Zona Norte de Maracaibo"
    },
    laVanega: {
        center: {lat: 10.616135, lng:-71.669485},
        radius: 3976.698584042446,
        title: "Estación Zona Industrial",
        content: "Ubicada en la Zona Industrial"
    },
    la3h: {
        center: {lat: 10.646622167965349, lng: -71.61904669824219},
        radius: 2521.0994095719893,
        title: "Estación Centro",
        content: "Ubicada en la Zona Central de Maracaibo"
    },
    bellavista: {
        center : {lat: 10.681458022678129, lng: -71.60703040185547},
        radius: 2380.350516349177,
        title: "Estación Av. Bella Vista",
        content: "Ubicada en la Av. Bella Vista"
    },
    sanFrancisco: {
        center : {lat: 10.554916547611102, lng: -71.65629721704101},
        radius: 4089.7538280148046,
        title: "Estación San Francisco",
        content: "Ubicada en San Francisco"
    },
};

function initMap() {
    var infoWindow = new google.maps.InfoWindow;
    var centerMap = {lat:  10.6187, lng: -71.641706};
    var map = new google.maps.Map(document.getElementById('map-home'), {
        center: centerMap ,
        zoom: 11,
        mapTypeId: 'roadmap',
    });
    for (var node in nodes) {

        var data = nodes[node]
        var nodeMarker = new google.maps.Marker({
            title: data.title,
            map: map,
            position: data.center,
            animation: google.maps.Animation.DROP,
            icon: '/asset/images/Map-icons/ic_wifi_black_36px.svg',
            });


        (function(nodeMarker, data) {
            var infowincontent = document.createElement('div');
            var strong = document.createElement('strong');
            strong.textContent = nodes[node].title
            infowincontent.appendChild(strong);
            infowincontent.appendChild(document.createElement('br'));

            var text = document.createElement('text');
            text.textContent = nodes[node].content
            infowincontent.appendChild(text);

            google.maps.event.addListener(nodeMarker, "click", function() {
                infoWindow.setContent(infowincontent);
                infoWindow.open(map, nodeMarker);
            });
        })(nodeMarker, data);
    }

    var puntosCobertura = google.maps.geometry.encoding.decodePath("aop`AldftLzK}J|I_MbKbQjEnQrt@rxIliBsVnvAn}@fj@{a@`g@`Grg@eIvpCrhCrFaz@xXsx@tKih@ny@voArq@bfCnvD|fAxbFf~@fqAm`ApcAoFvgAycBl`AlTlZe_@nHurA^{cBgk@_dCdVm`A|c@k|A^kb@a{Ckp@}jD{fA_sEwIoiBal@coDvdAwMcm@c{@_wAmhB_k@}rBrVkl@zZkZa^{v@re@iX`@|Pse@oHaNsl@re@oy@nzAoo@bgAiB`E{@pAgAw@pA{Iu@{AgCl@iBjEqAeAQgD_F@eDbCeE`GiAa@tEiRk@sC`BuBsDeDoDbG|AlFaI`SrAJnDiAtAbAgFjD`C`CjFaAnMqKz@y@n@hAkHnGeIfJEt@pA~@tCBbE}BtKuMdAhA}H~LsFhKBt@zBrB}GnH??aUl[m@|@??Gx@GH????@@CB");

    var setRegion = new google.maps.Polygon({
        path: puntosCobertura,
        map: map,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2.2,
        fillColor: '#FF0000',
        fillOpacity: 0.20,
    });
}
