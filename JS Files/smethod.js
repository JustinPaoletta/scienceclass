document.getElementById('one').addEventListener('click', function () {

    modal2.style.display = 'none';
    modal3.style.display = 'none';
    modal4.style.display = 'none';
    modal5.style.display = 'none';
    modal6.style.display = 'none';

    if (modal1.style.display == '' || modal1.style.display == "none") {
        modal1.style.display = "block"
    }
    else {
        modal1.style.display = "none"
    }

});

document.getElementById('two').addEventListener('click', function () {

    modal1.style.display = 'none';
    modal3.style.display = 'none';
    modal4.style.display = 'none';
    modal5.style.display = 'none';
    modal6.style.display = 'none';

    if (modal2.style.display == '' || modal2.style.display == "none") {
        modal2.style.display = "block"
    }
    else {
        modal2.style.display = "none"
    }

});

document.getElementById('three').addEventListener('click', function () {

    modal1.style.display = 'none';
    modal2.style.display = 'none';
    modal4.style.display = 'none';
    modal5.style.display = 'none';
    modal6.style.display = 'none';

    if (modal3.style.display == '' || modal3.style.display == "none") {
        modal3.style.display = "block"
    }
    else {
        modal3.style.display = "none"
    }

});

document.getElementById('four').addEventListener('click', function () {

    modal1.style.display = 'none';
    modal2.style.display = 'none';
    modal3.style.display = 'none';
    modal5.style.display = 'none';
    modal6.style.display = 'none';

    if (modal4.style.display == '' || modal4.style.display == "none") {
        modal4.style.display = "block"
    }
    else {
        modal4.style.display = "none"
    }

});

document.getElementById('five').addEventListener('click', function () {

    modal1.style.display = 'none';
    modal2.style.display = 'none';
    modal3.style.display = 'none';
    modal4.style.display = 'none';
    modal6.style.display = 'none';

    if (modal5.style.display == '' || modal5.style.display == "none") {
        modal5.style.display = "block"
    }
    else {
        modal5.style.display = "none"
    }

});

document.getElementById('six').addEventListener('click', function () {

    modal1.style.display = 'none';
    modal2.style.display = 'none';
    modal3.style.display = 'none';
    modal4.style.display = 'none';
    modal5.style.display = 'none';

    if (modal6.style.display == '' || modal6.style.display == "none") {
        modal6.style.display = "block"
    }
    else {
        modal6.style.display = "none"
    }

});

