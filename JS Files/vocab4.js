// These Are FlashCards That Change The Inner Html

document.getElementById('earth-one').addEventListener('click', function() {

if(document.getElementById('earth-one-text').innerHTML === 'A ball of solid iron and nickel at the center of the earth.') {
    document.getElementById('earth-one-text').innerHTML = 'INNER CORE'
} else {
    document.getElementById('earth-one-text').innerHTML = 'A ball of solid iron and nickel at the center of the earth.'
}
});

document.getElementById('earth2').addEventListener('click', function() {
    if(document.getElementById('earth2text').innerHTML === 'A layer of molten iron and nickel surrounding the inner core.') {
        document.getElementById('earth2text').innerHTML = 'OUTER CORE'
    } else {
        document.getElementById('earth2text').innerHTML = 'A layer of molten iron and nickel surrounding the inner core.'
    }
});

document.getElementById('earth3').addEventListener('click', function() {
    if(document.getElementById('earth3text').innerHTML === "Earth's largest layer, between the core and crust, made of magma and rock.") {
        document.getElementById('earth3text').innerHTML = 'MANTLE'
    } else {
        document.getElementById('earth3text').innerHTML = "Earth's largest layer, between the core and crust, made of magma and rock."
    }
});

document.getElementById('earth4').addEventListener('click', function() {
    if(document.getElementById('earth4text').innerHTML === 'The Outer Layer of the Earth.') {
        document.getElementById('earth4text').innerHTML = 'CRUST'
    } else {
        document.getElementById('earth4text').innerHTML = 'The Outer Layer of the Earth.'
    }
});

document.getElementById('earth5').addEventListener('click', function() {
    if(document.getElementById('earth5text').innerHTML === "Any of the 7 huge landmasses on the Earth's crust.") {
        document.getElementById('earth5text').innerHTML = 'CONTINENTS'
    } else {
        document.getElementById('earth5text').innerHTML = "Any of the 7 huge landmasses on the Earth's crust.";
    }
});

document.getElementById('earth6').addEventListener('click', function() {
    if(document.getElementById('earth6text').innerHTML === "Large slabs of rock that piece together the Earth's crust.") {
        document.getElementById('earth6text').innerHTML = 'TECTONIC PLATES'
    } else {
        document.getElementById('earth6text').innerHTML = "Large slabs of rock that piece together the Earth's crust.";
    }
});

document.getElementById('earth7').addEventListener('click', function() {
    if(document.getElementById('earth7text').innerHTML === 'Violent shaking of the ground, can be caused by volcanoes, tectonic plates crashing, etc.') {
        document.getElementById('earth7text').innerHTML = 'EARTHQUAKE'
    } else {
        document.getElementById('earth7text').innerHTML = 'Violent shaking of the ground, can be caused by volcanoes, tectonic plates crashing, etc.';
    }
});

document.getElementById('earth8').addEventListener('click', function() {
    if(document.getElementById('earth8text').innerHTML === "The process of obtaining coal and other resources from the Earth's crust.") {
        document.getElementById('earth8text').innerHTML = 'MINING'
    } else {
        document.getElementById('earth8text').innerHTML = "The process of obtaining coal and other resources from the Earth's crust."
    }
});