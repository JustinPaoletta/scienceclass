// These Are FlashCards That Change The Inner Html

document.getElementById('mag-one').addEventListener('click', function() {

if(document.getElementById('mag-one-text').innerHTML === 'A piece of iron or steel that attracts certain metals.') {
    document.getElementById('mag-one-text').innerHTML = 'Magnet'
} else {
    document.getElementById('mag-one-text').innerHTML = 'A piece of iron or steel that attracts certain metals.'
}
});

document.getElementById('mag2').addEventListener('click', function() {
    if(document.getElementById('mag2text').innerHTML === 'To pull close.') {
        document.getElementById('mag2text').innerHTML = 'Attract'
    } else {
        document.getElementById('mag2text').innerHTML = 'To pull close.'
    }
});

document.getElementById('mag3').addEventListener('click', function() {
    if(document.getElementById('mag3text').innerHTML === 'To push away.') {
        document.getElementById('mag3text').innerHTML = 'Repel'
    } else {
        document.getElementById('mag3text').innerHTML = 'To push away.'
    }
});

document.getElementById('mag4').addEventListener('click', function() {
    if(document.getElementById('mag4text').innerHTML === 'The strongest point on a magnet.') {
        document.getElementById('mag4text').innerHTML = 'Magnetic Pole'
    } else {
        document.getElementById('mag4text').innerHTML = 'The strongest point on a magnet.'
    }
});

document.getElementById('mag5').addEventListener('click', function() {
    if(document.getElementById('mag5text').innerHTML === 'Something that is attracted to a magnet.') {
        document.getElementById('mag5text').innerHTML = 'Magnetic Objects'
    } else {
        document.getElementById('mag5text').innerHTML = 'Something that is attracted to a magnet.';
    }
});

document.getElementById('mag6').addEventListener('click', function() {
    if(document.getElementById('mag6text').innerHTML === 'Energy that can cause something to be pushed or pulled.') {
        document.getElementById('mag6text').innerHTML = 'Force'
    } else {
        document.getElementById('mag6text').innerHTML = 'Energy that can cause something to be pushed or pulled.';
    }
});

document.getElementById('mag7').addEventListener('click', function() {
    if(document.getElementById('mag7text').innerHTML === 'To take away the magnetic ability of a magnet.') {
        document.getElementById('mag7text').innerHTML = 'De-Magnetize'
    } else {
        document.getElementById('mag7text').innerHTML = 'To take away the magnetic ability of a magnet.';
    }
});

document.getElementById('mag8').addEventListener('click', function() {
    if(document.getElementById('mag8text').innerHTML === 'An instrument with a needle that points north and is used to determine direction.') {
        document.getElementById('mag8text').innerHTML = 'Compass'
    } else {
        document.getElementById('mag8text').innerHTML = 'An instrument with a needle that points north and is used to determine direction.'
    }
});