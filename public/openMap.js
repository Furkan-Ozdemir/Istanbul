const coordinates = [{ Ilce: "Adalar", latitude: 40.874, longitude: 29.1294 },
{ Ilce: "Arnavutköy", latitude: 41.1864, longitude: 28.7389 },
{ Ilce: "Ataşehir", latitude: 40.9833, longitude: 29.1278 },
{ Ilce: "Avcılar", latitude: 40.9792, longitude: 28.7214 },
{ Ilce: "Bağcılar", latitude: 41.0341, longitude: 28.8330 },
{ Ilce: "Bahçelievler", latitude: 40.9977, longitude: 28.8503 },
{ Ilce: "Bakırköy", latitude: 40.9804, longitude: 28.8724 },
{ Ilce: "Başakşehir", latitude: 41.0837, longitude: 28.8169 },
{ Ilce: "Bayrampaşa", latitude: 41.0349, longitude: 28.9122 },
{ Ilce: "Beşiktaş", latitude: 41.0441, longitude: 29.0017 },
{ Ilce: "Beykoz", latitude: 41.1271, longitude: 28.6489 },
{ Ilce: "Beylikdüzü", latitude: 41.0133, longitude: 28.6489 },
{ Ilce: "Beyoğlu", latitude: 41.0371, longitude: 28.9774 },
{ Ilce: "Büyükçekmece", latitude: 41.0248, longitude: 28.5854 },
{ Ilce: "Çatalca", latitude: 41.1421, longitude: 28.4575 },
{ Ilce: "Çekmeköy", latitude: 41.0323, longitude: 29.1695 },
{ Ilce: "Esenler", latitude: 41.0542, longitude: 28.8676 },
{ Ilce: "Esenyurt", latitude: 41.0412, longitude: 28.6939 },
{ Ilce: "Eyüpsultan", latitude: 41.0551, longitude: 28.9346 },
{ Ilce: "Fatih", latitude: 41.0203, longitude: 28.9339 },
{ Ilce: "Gaziosmanpaşa", latitude: 41.0576, longitude: 28.9153 },
{ Ilce: "Güngören", latitude: 41.0105, longitude: 28.8741 },
{ Ilce: "Kadıköy", latitude: 40.9903, longitude: 29.0205 },
{ Ilce: "Kağıthane", latitude: 41.0717, longitude: 28.9646 },
{ Ilce: "Kartal", latitude: 40.8999, longitude: 29.1936 },
{ Ilce: "Küçükçekmece", latitude: 41.0092, longitude: 28.7757 },
{ Ilce: "Maltepe", latitude: 40.9339, longitude: 29.1650 },
{ Ilce: "Pendik", latitude: 40.8796, longitude: 29.2580 },
{ Ilce: "Sancaktepe", latitude: 41.0090, longitude: 29.2109 },
{ Ilce: "Sarıyer", latitude: 41.1664, longitude: 29.0500 },
{ Ilce: "Silivri", latitude: 41.0737, longitude: 28.2479 },
{ Ilce: "Sultanbeyli", latitude: 40.9684, longitude: 29.2620 },
{ Ilce: "Sultangazi", latitude: 41.1070, longitude: 28.8714 },
{ Ilce: "Şile", latitude: 41.1749, longitude: 29.6096 },
{ Ilce: "Şişli", latitude: 41.0604, longitude: 28.9878 },
{ Ilce: "Tuzla", latitude: 40.8144, longitude: 29.3094 },
{ Ilce: "Ümraniye", latitude: 41.0338, longitude: 29.1013 },
{ Ilce: "Üsküdar", latitude: 41.0327, longitude: 29.0319 },
{ Ilce: "Zeytinburnu", latitude: 40.9910, longitude: 28.8968 }];

for (let index = 0; index < coordinates.length; index++) {
    if (coordinates[index].Ilce.toLocaleLowerCase("tr") == document.getElementById("district").innerText.toLocaleLowerCase("tr")) {
        // const selectedDistrict = req.body.district
        var mymap = L.map('mapid').setView([coordinates[index].latitude, coordinates[index].longitude], 13);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: "pk.eyJ1Ijoic2V2ZXJ1cy0tc25hcGUiLCJhIjoiY2trNzY4NnpsMGFyMzJvcGJmdTllNTQ5cCJ9.K2pFstemQvALMFUunRbOTg"
        }).addTo(mymap);


        break;
    }


}




// mymap.addEventListener("click", function () {
//     var latlngs = [[37, -109.05], [41, -109.03], [41, -102.05], [37, -102.04]];

//     var polygon = L.polygon(latlngs, { color: 'red' }).addTo(mymap);

//     // zoom the map to the polygon
//     mymap.fitBounds(polygon.getBounds());
// }, false);

/*
districtId ye göre haritada polygon çizecek tıklayınca gidecek
*/
