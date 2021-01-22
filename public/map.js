
const coordinates = [{ Ilce: "Adalar", latitude: 40.8583, longitude: 29.1209 },
{ Ilce: "Arnavutköy", latitude: 41.2313, longitude: 28.6768 },
{ Ilce: "Ataşehir", latitude: 40.9863, longitude: 29.1274 },
{ Ilce: "Avcılar", latitude: 41.0273, longitude: 28.7145 },
{ Ilce: "Bağcılar", latitude: 41.0341, longitude: 28.8330 },
{ Ilce: "Bahçelievler", latitude: 40.9977, longitude: 28.8503 },
{ Ilce: "Bakırköy", latitude: 40.9804, longitude: 28.8724 },
{ Ilce: "Başakşehir", latitude: 41.0986, longitude: 28.7594 },
{ Ilce: "Bayrampaşa", latitude: 41.0490, longitude: 28.8994 },
{ Ilce: "Beşiktaş", latitude: 41.0701, longitude: 29.0217 },
{ Ilce: "Beykoz", latitude: 41.1464, longitude: 29.1978 },
{ Ilce: "Beylikdüzü", latitude: 40.9842, longitude: 28.6441 },
{ Ilce: "Beyoğlu", latitude: 41.0371, longitude: 28.9774 },
{ Ilce: "Büyükçekmece", latitude: 41.0506, longitude: 28.4497 },
{ Ilce: "Çatalca", latitude: 41.2232, longitude: 28.4637 },
{ Ilce: "Çekmeköy", latitude: 41.0763, longitude: 29.2696 },
{ Ilce: "Esenler", latitude: 41.0625, longitude: 28.8674 },
{ Ilce: "Esenyurt", latitude: 41.0427, longitude: 28.6586 },
{ Ilce: "EyüpSultan", latitude: 41.0430, longitude: 28.9292 },
{ Ilce: "Fatih", latitude: 41.0126, longitude: 28.9487 },
{ Ilce: "Gaziosmanpaşa", latitude: 41.0743, longitude: 28.9064 },
{ Ilce: "Güngören", latitude: 41.0174, longitude: 28.8699 },
{ Ilce: "Kadıköy", latitude: 40.9801, longitude: 29.0618 },
{ Ilce: "Kağıthane", latitude: 41.0831, longitude: 28.9773 },
{ Ilce: "Kartal", latitude: 40.8999, longitude: 29.1936 },
{ Ilce: "Küçükçekmece", latitude: 41.0295, longitude: 28.7823 },
{ Ilce: "Maltepe", latitude: 40.9471, longitude: 29.1598 },
{ Ilce: "Pendik", latitude: 40.8970, longitude: 29.2876 },
{ Ilce: "Sancaktepe", latitude: 40.9823, longitude: 29.2282 },
{ Ilce: "Sarıyer", latitude: 41.1664, longitude: 29.0500 },
{ Ilce: "Silivri", latitude: 41.1807, longitude: 28.1832 },
{ Ilce: "Sultanbeyli", latitude: 40.9684, longitude: 29.2620 },
{ Ilce: "Sultangazi", latitude: 41.1070, longitude: 28.8714 },
{ Ilce: "Şile", latitude: 41.1749, longitude: 29.6096 },
{ Ilce: "Şişli", latitude: 41.0604, longitude: 28.9878 },
{ Ilce: "Tuzla", latitude: 40.8144, longitude: 29.3094 },
{ Ilce: "Ümraniye", latitude: 41.0261, longitude: 29.1295 },
{ Ilce: "Üsküdar", latitude: 41.0327, longitude: 29.0319 },
{ Ilce: "Zeytinburnu", latitude: 41.0048, longitude: 28.9074 }]


var ibbMAP = new SehirHaritasiAPI({
    mapFrame: "mapFrame", apiKey: "5fb574eca2f7461080932b35ae386227"
}, function () {


    for (let index = 0; index < coordinates.length; index++) {
        if (coordinates[index].Ilce.toLocaleLowerCase("tr") == document.getElementById("district").innerText.toLocaleLowerCase("tr")) {

            ibbMAP.Map.Goto({
                lat: coordinates[index].latitude,
                lon: coordinates[index].longitude,
                zoom: 14,
                effect: true
            });
            break;
        }
    }
});
