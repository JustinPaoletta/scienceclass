// These Are FlashCards That Change The Inner Html

document.getElementById('season-one').addEventListener('click', function() {

if(document.getElementById(' season-one-text').innerHTML === 'An Instrument Measuring Atmospheric Pressure.') {
    document.getElementById(' season-one-text').innerHTML = 'BAROMETER'
} else {
    document.getElementById(' season-one-text').innerHTML = 'An Instrument Measuring Atmospheric Pressure.'
}
});

document.getElementById('season2').addEventListener('click', function() {
    if(document.getElementById(' season2text').innerHTML === 'Rain, Snow, Sleet or Hail That Falls To The Ground.') {
        document.getElementById(' season2text').innerHTML = 'PRECIPITATION'
    } else {
        document.getElementById(' season2text').innerHTML = 'Rain, Snow, Sleet or Hail That Falls To The Ground.'
    }
});

document.getElementById('season3').addEventListener('click', function() {
    if(document.getElementById(' season3text').innerHTML === "An Instrument For Measuring The Speed Of Wind.") {
        document.getElementById(' season3text').innerHTML = 'ANEMOMETER'
    } else {
        document.getElementById(' season3text').innerHTML = "An Instrument For Measuring The Speed Of Wind."
    }
});

document.getElementById('season4').addEventListener('click', function() {
    if(document.getElementById(' season4text').innerHTML === 'An Instrument To Gather And Measure The Amount Of Liquid Precipitation Over A Period Of Time.') {
        document.getElementById(' season4text').innerHTML = 'RAIN GAUGE'
    } else {
        document.getElementById(' season4text').innerHTML = 'An Instrument To Gather And Measure The Amount Of Liquid Precipitation Over A Period Of Time.'
    }
});

document.getElementById('season5').addEventListener('click', function() {
    if(document.getElementById(' season5text').innerHTML === "A Revolving Pointer To Show The Direction Of The Wind.") {
        document.getElementById(' season5text').innerHTML = 'WEATHER VANE'
    } else {
        document.getElementById(' season5text').innerHTML = "A Revolving Pointer To Show The Direction Of The Wind.";
    }
});

document.getElementById('season6').addEventListener('click', function() {
    if(document.getElementById(' season6text').innerHTML === "The Angle At Which The Earth Tilts, It Is Responsible For The Seasons.") {
        document.getElementById(' season6text').innerHTML = "EARTH'S AXIS"
    } else {
        document.getElementById(' season6text').innerHTML = "The Angle At Which The Earth Tilts, It Is Responsible For The Seasons.";
    }
});

document.getElementById('season7').addEventListener('click', function() {
    if(document.getElementById(' season7text').innerHTML === 'A Division Of The Year Marked By Changes In Weather, Ecology, And Amount Of Daylight.') {
        document.getElementById(' season7text').innerHTML = 'SEASON'
    } else {
        document.getElementById(' season7text').innerHTML = 'A Division Of The Year Marked By Changes In Weather, Ecology, And Amount Of Daylight.';
    }
});

document.getElementById('season8').addEventListener('click', function() {
    if(document.getElementById(' season8text').innerHTML === "The State Of The Atmosphere At A Place And Time.") {
        document.getElementById(' season8text').innerHTML = 'WEATHER'
    } else {
        document.getElementById(' season8text').innerHTML = "The State Of The Atmosphere At A Place And Time."
    }
});

