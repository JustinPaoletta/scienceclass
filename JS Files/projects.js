var myProjects = [
    {
        name: "Weather Station",
        info: "The Weather Station Consisted Of A Barometer, Anemometer, Rain Gauge, And A Weather Vane!",
        photo: "../Pictures/54601574-vector-illustration-rooster-weather-vane-black-silhouette-rooster-cock-weather-vane-symbol-icon.jpg",
        link: "",
    },

    {
        name: "Egg Drop",
        info: "We Built Containers To Protect Eggs From Cracking And Then Dropped Them Off The Roof!",
        photo: "../Pictures/clipart-egg-drop-8.jpg",

        link: "href='https://youtu.be/1T6EReKOyT4'",

    },

    {
        name: "Shake Table",
        info: "We Constructed A Bunch Of Towers And Shook Their Platform To See How They Survived!",
        photo: "../Pictures/maxresdefault-1.jpg",
        link: "href='https://www.youtube.com/embed/zq7DgkZk-kQ'",

    },

    {
        name: "Solar Oven",
        info: "We Cooked Quesadillas Using Power From The Sun!",
        photo: "../Pictures/solar-oven-diagram.jpg",
        link: "../Pictures/Solar Oven Quesadillas_.mp4",
    },
]

var counter = 0

function countingArray(arr){
    counter ++ ;
    if(counter == arr.length){
        counter = 0;
    }
    return counter
}


document.getElementById("arrowright").addEventListener('click', function(){
    var holder = countingArray(myProjects);
    document.getElementById("projectname").innerHTML = myProjects[holder].name
    document.getElementById("projectinfo").innerHTML = myProjects[holder].info
    document.getElementById("projectphoto").src = myProjects[holder].photo
    document.getElementById("projectlink").href = myProjects[holder].link
});

