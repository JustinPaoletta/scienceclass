// These Are FlashCards That Change The Inner Html

document.getElementById('space1').addEventListener('click', function() {
    if(document.getElementById('space1text').innerHTML === 'Friction exerted by air that slows down an object moving through it.') {
        document.getElementById('space1text').innerHTML = 'Air Resistance'
    } else {
        document.getElementById('space1text').innerHTML = 'Friction exerted by air that slows down an object moving through it.'
    }
});

document.getElementById('space2').addEventListener('click', function() {
    if(document.getElementById('space2text').innerHTML === 'A completely empty space.') {
        document.getElementById('space2text').innerHTML = 'Vacuum'
    } else {
        document.getElementById('space2text').innerHTML = 'A completely empty space.'
    }
});

document.getElementById('space3').addEventListener('click', function() {
    if(document.getElementById('space3text').innerHTML === 'How much stuff is in an object.') {
        document.getElementById('space3text').innerHTML = 'Mass'
    } else {
        document.getElementById('space3text').innerHTML = 'How much stuff is in an object.';
    }
});

document.getElementById('space4').addEventListener('click', function() {
    if(document.getElementById('space4text').innerHTML === 'The force between any two objects which causes them to be pulled towards each other.') {
        document.getElementById('space4text').innerHTML = 'Gravity'
    } else {
        document.getElementById('space4text').innerHTML = 'The force between any two objects which causes them to be pulled towards each other.';
    }
});

document.getElementById('space5').addEventListener('click', function() {
    if(document.getElementById('space5text').innerHTML === 'The Star around which the Earth orbits.') {
        document.getElementById('space5text').innerHTML = 'SUN'
    } else {
        document.getElementById('space5text').innerHTML = 'The Star around which the Earth orbits.'
    }
});

document.getElementById('space6').addEventListener('click', function() {
    if(document.getElementById('space6text').innerHTML === 'The natural satellite of the earth, visible mainly at night.') {
        document.getElementById('space6text').innerHTML = 'MOON'
    } else {
        document.getElementById('space6text').innerHTML = 'The natural satellite of the earth, visible mainly at night.'
    }
});

document.getElementById('space7').addEventListener('click', function() {
    if(document.getElementById('space7text').innerHTML === 'A group of stars forming a recognizable pattern or shape.') {
        document.getElementById('space7text').innerHTML = 'CONSTELLATION'
    } else {
        document.getElementById('space7text').innerHTML = 'A group of stars forming a recognizable pattern or shape.';
    }
});

document.getElementById('space8').addEventListener('click', function() {
    if(document.getElementById('space8text').innerHTML === 'A tool that converts salt water or contaminated water into drinking water.') {
        document.getElementById('space8text').innerHTML = 'SOLAR STILL'
    } else {
        document.getElementById('space8text').innerHTML = 'A tool that converts salt water or contaminated water into drinking water.';
    }
});