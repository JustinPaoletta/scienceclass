// These Are FlashCards That Change The Inner Html

document.getElementById('mag-one').addEventListener('click', function() {

if(document.getElementById('mag-one-text').innerHTML === 'A piece of iron or steel that attracts certain metals.') {
    document.getElementById('mag-one-text').innerHTML = 'MAGNET'
} else {
    document.getElementById('mag-one-text').innerHTML = 'A piece of iron or steel that attracts certain metals.'
}
});

document.getElementById('mag2').addEventListener('click', function() {
    if(document.getElementById('mag2text').innerHTML === 'To pull close.') {
        document.getElementById('mag2text').innerHTML = 'ATTRACT'
    } else {
        document.getElementById('mag2text').innerHTML = 'To pull close.'
    }
});

document.getElementById('mag3').addEventListener('click', function() {
    if(document.getElementById('mag3text').innerHTML === 'To push away.') {
        document.getElementById('mag3text').innerHTML = 'REPEL'
    } else {
        document.getElementById('mag3text').innerHTML = 'To push away.'
    }
});

document.getElementById('mag4').addEventListener('click', function() {
    if(document.getElementById('mag4text').innerHTML === 'The strongest point on a magnet.') {
        document.getElementById('mag4text').innerHTML = 'MAGNETIC POLE'
    } else {
        document.getElementById('mag4text').innerHTML = 'The strongest point on a magnet.'
    }
});

document.getElementById('mag5').addEventListener('click', function() {
    if(document.getElementById('mag5text').innerHTML === 'Something that is attracted to a magnet.') {
        document.getElementById('mag5text').innerHTML = 'MAGNETIC OBJECTS'
    } else {
        document.getElementById('mag5text').innerHTML = 'Something that is attracted to a magnet.';
    }
});

document.getElementById('mag6').addEventListener('click', function() {
    if(document.getElementById('mag6text').innerHTML === 'Energy that can cause something to be pushed or pulled.') {
        document.getElementById('mag6text').innerHTML = 'FORCE'
    } else {
        document.getElementById('mag6text').innerHTML = 'Energy that can cause something to be pushed or pulled.';
    }
});

document.getElementById('mag7').addEventListener('click', function() {
    if(document.getElementById('mag7text').innerHTML === 'To take away the magnetic ability of a magnet.') {
        document.getElementById('mag7text').innerHTML = 'DE-MAGNETIZE'
    } else {
        document.getElementById('mag7text').innerHTML = 'To take away the magnetic ability of a magnet.';
    }
});

document.getElementById('mag8').addEventListener('click', function() {
    if(document.getElementById('mag8text').innerHTML === 'An instrument with a needle that points north and is used to determine direction.') {
        document.getElementById('mag8text').innerHTML = 'COMPASS'
    } else {
        document.getElementById('mag8text').innerHTML = 'An instrument with a needle that points north and is used to determine direction.'
    }
});

$('#mag-one').click(function() {
    $('#mag-one').toggleClass('changetxtsize');
  });

  $('#mag2').click(function() {
    $('#mag2').toggleClass('changetxtsize');
  });

  $('#mag3').click(function() {
    $('#mag3').toggleClass('changetxtsize');
  });

  $('#mag4').click(function() {
    $('#mag4').toggleClass('changetxtsize');
  });

  $('#mag5').click(function() {
    $('#mag5').toggleClass('changetxtsize');
  });

  $('#mag6').click(function() {
    $('#mag6').toggleClass('changetxtsize');
  });

  $('#mag7').click(function() {
    $('#mag7').toggleClass('changetxtsize');
  });

  $('#mag8').click(function() {
    $('#mag8').toggleClass('changetxtsize');
  });



