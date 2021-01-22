require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const fetch = require('node-fetch');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))
app.set("view engine", "ejs")



String.prototype.turkishtoEnglish = function () {
    return this.replace('Ğ', 'g')
        .replace(/Ü/g, 'u')
        .replace(/Ş/g, 's')
        .replace(/I/g, 'i')
        .replace(/İ/g, 'i')
        .replace(/Ö/g, 'o')
        .replace(/Ç/g, 'c')
        .replace(/ğ/g, 'g')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ı/g, 'i')
        .replace(/ö/g, 'o')
        .replace(/ç/g, 'c');
};

app.get("/", function (req, res) {

    res.render("Istanbul")
})


app.post("/", function (req, res) { // doğalgaz kullanım miktarı

    const gasUrl = "https://data.ibb.gov.tr/en/api/3/action/datastore_search?resource_id=d5fe41b0-3848-4548-9ac7-6e4756c3027b"
    const aboneUrl = "https://data.ibb.gov.tr/api/3/action/datastore_search?resource_id=b6a8daa2-074d-4536-ae68-a6fe15b965c9"
    const nüfusUrl = "https://data.ibb.gov.tr/en/api/3/action/datastore_search?resource_id=c6c9b289-2824-41b3-ab3d-4fd655ed4e24"
    const districtId = req.body.district
    let gasAmount, district, toplamNüfus, subAmount, districtSahibinden;



    (async () => {
        try {

            const response = await fetch(gasUrl)
            const json = await response.json()


            for (let index = 0; index < json.result.records.length; index++) {
                if (json.result.records[index].Ilce.toLocaleLowerCase("tr") == districtId.toLocaleLowerCase("tr")) {
                    console.log(json.result.records[index].Ilce);
                    console.log(json.result.records[index]["2019.0"]);
                    district = json.result.records[index].Ilce;
                    gasAmount = json.result.records[index]["2019.0"];
                    break;
                }
            }

            const responseAbone = await fetch(aboneUrl)
            const jsonAbone = await responseAbone.json()
            for (let index = 0; index < jsonAbone.result.records.length; index++) {
                if (jsonAbone.result.records[index].ILCE.toLocaleLowerCase("tr") == districtId.toLocaleLowerCase("tr")) {
                    console.log(jsonAbone.result.records[index].ILCE);
                    console.log(jsonAbone.result.records[index]["ABONE SAYI"]);
                    subAmount = jsonAbone.result.records[index]["ABONE SAYI"];
                    break;
                }
            }
            const responseNüfus = await fetch(nüfusUrl)
            const jsonNüfus = await responseNüfus.json()
            for (let index = 0; index < jsonNüfus.result.records.length; index++) {
                if (jsonNüfus.result.records[index].Belediyeler.split(" ")[0].toLocaleLowerCase("tr") == districtId.toLocaleLowerCase("tr")) {
                    console.log(jsonNüfus.result.records[index].Belediyeler.split(" ")[0]);
                    toplamNüfus = jsonNüfus.result.records[index]["2019 yili nufuslari"];
                    console.log(toplamNüfus);
                    break;
                }
            }

            districtSahibinden = districtId.turkishtoEnglish().toLowerCase();


            res.render("result", { district: district, gasAmount: gasAmount, toplamNüfus: toplamNüfus, subAmount: subAmount, districtSahibinden: districtSahibinden })
        } catch (error) {
            console.log(error);
        }

    })();


})

app.listen(3000, function () {
    console.log("running on port 3000")
})