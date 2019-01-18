//For Loop That Says We Haven't Studied This Yet

var notyet = document.getElementsByClassName("nyet");
for (var i=0; i< notyet.length; i++){notyet[i].addEventListener('click',function() {
alert
 ("We haven't studied this yet.")
});
}

document.getElementById('magnet').addEventListener('click', function(){

    var pixies = 0;

    setInterval(function() {
        document.getElementById('cardOne').style.position = 'relative';
        pixies += 3.5;
        var pixString = pixies.toString() + 'px';
        document.getElementById('cardOne').style.bottom = pixString;
    }, 40)
    setTimeout(function(){
        window.location.assign('vocabd1.html');
    }, 1300)

    
});

document.getElementById('saturn').addEventListener('click', function(){

    var pixies = 0;

    setInterval(function() {
        document.getElementById('cardTwo').style.position = 'relative';
        pixies += 3.5;
        var pixString = pixies.toString() + 'px';
        document.getElementById('cardTwo').style.bottom = pixString;
    }, 40)
    setTimeout(function(){
        window.location.assign('vocabd2.html');
    }, 1300)

    
});

document.getElementById('chem').addEventListener('click', function(){

    var pixies = 0;

    setInterval(function() {
        document.getElementById('cardThree').style.position = 'relative';
        pixies += 3.5;
        var pixString = pixies.toString() + 'px';
        document.getElementById('cardThree').style.bottom = pixString;
    }, 40)
    setTimeout(function(){
        window.location.assign('vocabd3.html');
    }, 1300)

    
});

document.getElementById('geo').addEventListener('click', function(){

    var pixies = 0;

    setInterval(function() {
        document.getElementById('cardFour').style.position = 'relative';
        pixies += 3.5;
        var pixString = pixies.toString() + 'px';
        document.getElementById('cardFour').style.bottom = pixString;
    }, 40)
    setTimeout(function(){
        window.location.assign('vocabd4.html');
    }, 1300)

    
});

document.getElementById('seasons').addEventListener('click', function(){

    var pixies = 0;

    setInterval(function() {
        document.getElementById('cardFive').style.position = 'relative';
        pixies += 3.5;
        var pixString = pixies.toString() + 'px';
        document.getElementById('cardFive').style.bottom = pixString;
    }, 40)
    setTimeout(function(){
        window.location.assign('vocabd5.html');
    }, 1300)

    
});

