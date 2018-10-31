//This section is the buttons that scroll to the corresponding div.

document.getElementById('b1').onclick = function () {

 $('html, body').animate({
        scrollTop: $("#l1").offset().top
    }, 1200);

}

document.getElementById('b2').onclick = function () {
    
    $('html, body').animate({
        scrollTop: $("#l2").offset().top
    }, 1500);
}

document.getElementById('b3').onclick = function () {

$('html, body').animate({
    scrollTop: $("#l3").offset().top
}, 1200);

}

document.getElementById('b4').onclick = function () {

    $('html, body').animate({
        scrollTop: $("#l4").offset().top
    }, 1000);
    
    }

document.getElementById('b5').onclick = function () {

        $('html, body').animate({
            scrollTop: $("#l5").offset().top
        }, 1000);
        
        }


//This section is how we return back to the top of the page.

document.getElementById('t1').onclick = 
function() {

var myDiv = document.getElementById('toptext');
scrollTo(document.body, myDiv.offsetTop);

}

document.getElementById('t2').onclick = 
function() {

var myDiv = document.getElementById('toptext');
scrollTo(document.body, myDiv.offsetTop);

}

document.getElementById('t3').onclick = 
function() {

var myDiv = document.getElementById('toptext');
scrollTo(document.body, myDiv.offsetTop);

}

document.getElementById('t4').onclick = 
function() {

var myDiv = document.getElementById('toptext');
scrollTo(document.body, myDiv.offsetTop);

}

document.getElementById('t5').onclick = 
function() {

var myDiv = document.getElementById('toptext');
scrollTo(document.body, myDiv.offsetTop);

}




    