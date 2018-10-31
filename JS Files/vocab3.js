// These Are FlashCards That Change The Inner Html

document.getElementById('chem1').addEventListener('click', function() {
    if(document.getElementById('chem1text').innerHTML === 'A series of processes that people can use to gather knowledge about the world around them.') {
        document.getElementById('chem1text').innerHTML = 'SCIENTIFIC METHOD'
    } else {
        document.getElementById('chem1text').innerHTML = 'A series of processes that people can use to gather knowledge about the world around them.'
    }
});

document.getElementById('chem2').addEventListener('click', function() {
    if(document.getElementById('chem2text').innerHTML === 'A Scientific Procedure To Determine Something. ') {
        document.getElementById('chem2text').innerHTML = 'EXPERIMENT'
    } else {
        document.getElementById('chem2text').innerHTML = 'A Scientific Procedure To Determine Something. '
    }
});

document.getElementById('chem3').addEventListener('click', function() {
    if(document.getElementById('chem3text').innerHTML === 'A Guess as to what will Occur during the Experiment.') {
        document.getElementById('chem3text').innerHTML = 'HYPOTHESIS'
    } else {
        document.getElementById('chem3text').innerHTML = 'A Guess as to what will Occur during the Experiment.';
    }
});

document.getElementById('chem4').addEventListener('click', function() {
    if(document.getElementById('chem4text').innerHTML === 'The Factors in the Experiment that do not Depend on other Factors.') {
        document.getElementById('chem4text').innerHTML = 'INDEPENDENT VARIABLE'
    } else {
        document.getElementById('chem4text').innerHTML = 'The Factors in the Experiment that do not Depend on other Factors.';
    }
});

document.getElementById('chem5').addEventListener('click', function() {
    if(document.getElementById('chem5text').innerHTML === 'The Factors in the Experiment that Depend on the other Factors') {
        document.getElementById('chem5text').innerHTML = 'DEPENDENT VARIABLE'
    } else {
        document.getElementById('chem5text').innerHTML = 'The Factors in the Experiment that Depend on the other Factors'
    }
});

document.getElementById('chem6').addEventListener('click', function() {
    if(document.getElementById('chem6text').innerHTML === 'The Factors in the Experiment that always stay the same.') {
        document.getElementById('chem6text').innerHTML = 'CONTROLLED VARIABLE'
    } else {
        document.getElementById('chem6text').innerHTML = 'The Factors in the Experiment that always stay the same.'
    }
});

document.getElementById('chem7').addEventListener('click', function() {
    if(document.getElementById('chem7text').innerHTML === 'A process in which a substance changes into a different substance.') {
        document.getElementById('chem7text').innerHTML = 'CHEMICAL REACTION'
    } else {
        document.getElementById('chem7text').innerHTML = 'A process in which a substance changes into a different substance.';
    }
});

document.getElementById('chem8').addEventListener('click', function() {
    if(document.getElementById('chem8text').innerHTML === 'The branch of science that deals with substances, how they interact and change') {
        document.getElementById('chem8text').innerHTML = 'CHEMISTRY'
    } else {
        document.getElementById('chem8text').innerHTML = 'The branch of science that deals with substances, how they interact and change';
    }
});
