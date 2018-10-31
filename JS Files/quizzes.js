//Password for Quiz

var pass = 'snowballfight!'

document.getElementById('quizlink').addEventListener('click', function() {
    var attempt = prompt('Please Enter The Password.');
    if(attempt === pass) {
        alert('Happy Test Taking!');
        window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdGDIvPSAGoQKvT7no4gSxZRYzT0og3u25ak7Tf6XFEOosERw/viewform?usp=sf_link';
    } else {
        alert('The Password You Entered Is Incorrect.');
    }
})

// This Test Was Completed Offline Alert

document.getElementById("magnet").addEventListener('click',function() {
alert ("You took this test offline.")
});

// Alert To Click The Image Above For Current Quiz

document.getElementById("dino").addEventListener('click',function(){alert("Take this weeks test by clicking on the paper above and typing in the password.")
});

// Alert That We Havent Studied This Subject Yet

var notyet = document.getElementsByClassName("nyet");
for (var i=0; i< notyet.length; i++){notyet[i].addEventListener('click',function() {
alert
 ("We haven't studied this yet.")
});
}




