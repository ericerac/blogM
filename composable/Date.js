
const DayNight = ((sunData) => {
    // console.log("SUNDATA", sunData);
    let dateActual = Date.now()
    var hL = new Date(dateActual).getHours();
    var mL = new Date(dateActual).getMinutes();

    hL = (hL < 10) ? '0' + hL : hL;
    mL = (mL < 10) ? '0' + mL : mL;

   
let sunRiseUTC = sunData.sunRise;
let sunSetUTC = sunData.sunSet;
    // let sunRiseTMC = res.data.astronomy.astro.sunrise
    // let sunSetTMC = res.data.astronomy.astro.sunset

    let [sunRise, dayTimeSunrise] = sunRiseUTC.split(" ")
    let [sunSetHour, DayTimeSunset] = sunSetUTC.split(" ");

    var SunRiseMinut = parseInt(sunRise.split(":")[1])
    var SunRiseHour = "";

    var SunSetMinut = parseInt(sunSetHour.split(":")[1])
    var SunSetHour = "";

    if (dayTimeSunrise === "PM") {
        SunRiseHour = parseInt(sunRise) + 12;
        // console.log("SUNRISE PM",SunRiseHour,SunRiseMinut);
    } else {
        SunRiseHour = parseInt(sunRise);
        // console.log("SUNRISE AM",SunRiseHour,SunRiseMinut);
    }

    if (DayTimeSunset === "PM") {
        SunSetHour = parseInt(sunSetHour) + 12;
        // console.log("SUNSET PM",SunSetHour,SunSetMinut);
    } else {
        SunSetHour = parseInt(sunRise);
        // console.log("SUNSET AM",SunSetHour,SunSetMinut);
    }
// console.log("LOCALK HOUR",hL,mL);
// let [hourLocal, minutLocal]  = LocalHour.split(":")
// let hL = parseInt(hourLocal)
// let mL = parseInt(minutLocal)
// console.log("HEURE DU JOUR",hL,":", mL);

let dark ="";
    if(hL > SunRiseHour  && hL < SunSetHour){
        // console.log("IL FAIT JOUR SUNSET");
        dark = false
    }else{
        console.log("IL FAIT NUIT SUNSET");
        dark = true
    }
    if(hL == SunRiseHour && mL >= SunRiseMinut ){
        // console.log("IL FAIT JOUR SUNRISE");
        dark = false
    }else if(hL == SunRiseHour && mL <= SunRiseMinut ){
        // console.log("IL FAIT NUIT SUNSET");
        dark = true
    }
    if(hL == SunSetHour && mL >= SunSetMinut ){
        // console.log("IL FAIT NUIT SUNRISE");
        dark = true
    }else if(hL == SunSetHour && mL <= SunSetMinut ){
        // console.log("IL FAIT JOUR SUNSET");
        dark = false
    }
    return dark

})

export default DayNight