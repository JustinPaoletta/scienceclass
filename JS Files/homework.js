//Assignments Not Online Alerts

document.getElementById("magnet").addEventListener('click',function() {
alert ("You completed this assignment offline.")
});

document.getElementById("saturn").addEventListener('click',function() {
alert ("You completed this assignment offline.")
});

//For Loop That Says We Haven't Studied This Yet

var notyet = document.getElementsByClassName("nyet");
for (var i=0; i< notyet.length; i++){notyet[i].addEventListener('click',function() {
alert
 ("We haven't studied this yet.")
});
}