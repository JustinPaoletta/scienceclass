//This Variable Is The Number The Page Generates, The Console Will Tell You What It Is

var y = Math.floor(Math.random() * 9 + 1); 
console.log(y);


//This Function Returns The Answer The User Chooses

function returnSelectedChoice() {
    var radios = document.getElementsByName("choices");
    
    //The For Statement Creates An Array And The If Statement Goes Through Each Item In The Array, 
    //When It Finds A Checked One It Returns That Value
    for(var i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
            return radios[i].value;
        }
    }
}


//These Two Functions Bring Up The Rules And Get Rid Of Them To Start The Game 

$('#rules').click(function() {
        $('#modalrules').css({
            'display': 'block',
        });
    });


$('#start').click(function() {
    $('#modalrules').css({
        'display': 'none',
    });
});



//This Variable Randomly Chooses What Occurs When You Decide To Take The Risk

var chance = Math.floor(Math.random() * 9 + 1);


//Various Things That Happen If You Flip The Rock

$('#flip').click(function() {

        $('#modalrock').css({
            'display': 'none',
        });

        if(chance <= 2){
            $("#event1").css({'transform': 'rotate(-180deg)'});
            modallosechance.style.display = "block";
        }

        else if (chance <= 5){
            alert("A Spider Jumped Out And Tried To Bite You!..... You Saved Yourself By Jumping Backwards, Then It Ran Away.")
            pic2.style.marginLeft = "22vw";
            $("#event1").css({'transform': 'rotate(-200deg)'});
            snake.style.display = "block";
            window.setTimeout("document.getElementById('snake').style.display='none';", 2500);
        }

        else{
            alert("A Dragon Chased You Further Along The Path! He Appears To Be Looking For A Fight!")
            pic2.style.marginLeft = "55vw";
            $("#event1").css({'transform': 'rotate(-160deg)'});
            scorpion.style.display = "block";
            document.getElementById("pic2").style.transform = "scaleX(-1)";
            fight.style.display = "block";
            fire1.style.display = "block";
            document.getElementById("ltitle").style.zIndex = 3;
            document.getElementById("lives").style.zIndex = 3;
            document.getElementById("items").style.zIndex = 3;
            window.setTimeout("document.getElementById('fire1').style.display='none';", 500);
            window.setTimeout("document.getElementById('fire3').style.display='block';", 500);
            window.setTimeout("document.getElementById('fire3').style.display='none';", 1000);
            window.setTimeout("document.getElementById('fire2').style.display='block';", 1000);
            window.setTimeout("document.getElementById('fire2').style.display='none';", 1500);
            window.setTimeout("document.getElementById('fire3').style.display='block';", 1500);
            window.setTimeout("document.getElementById('modaldragonfight').style.display='block';", 2000);
        }

});

// Various Things That Happen If You Drink The Potion 

$('#drink').click(function() {
    
    $('#modalpotion').css({
        'display': 'none',
        
    });

    event2.style.display = "none";

    if(chance <= 2){
        modalwinchance.style.display = "block";
    }
    else if (chance <= 7){
        alert("You Became Confused And Forgot Where You Were Going... When The Potion Wore Off You Realized You Had Walked Backwards.")
        pic2.style.marginLeft = "35vw";
    }
    else{
        alert("You Drank The Potion, It Was Just Water, Nothing Happened.")
    }

});



//If You Decide To Leave The Items Behind

            $('#closerock').click(function() {
                $('#modalrock').css({
                    'display': 'none',
                });
            });

            $('#leavepotion').click(function() {
                $('#modalpotion').css({
                    'display': 'none',
                });
            });

//Reload The Page To Play Again

            $('.playagain').click(function() {
                window.location.reload(true);
            });

//This is to change the signs

function changeSign(){

        oldsign = [
            "RGvuLLB copy.png",
            "RGvuLLB copy 2.png",
            "RGvuLLB copy 3.png",
            "RGvuLLB copy 4.png",
            "RGvuLLB copy 5.png",
            "RGvuLLB copy 6.png",
            "RGvuLLB copy 7.png",
            "RGvuLLB copy 8.png",
            "RGvuLLB copy 9.png",
            "RGvuLLB copy 10.png",
        ];

    var randomsign = oldsign[Math.floor(Math.random() * oldsign.length)];
    document.getElementById('osign').src = randomsign;

}



//This is an array which can hold however many questions I want.

questions = [
      
    {     
    question: "Earthquakes Originate From The Earth's ______ ." ,
    answers: ["Crust","Core","Mantle","Atmosphere"],
    correctAnswer: 0,
    },

    {
    question: "The Force Between Two Objects That Causes Them to be Pulled Towards Each Other." ,
    answers: [ "Electro-Magnetism", "Weak Force", "Strong Force", "Gravity"],
    correctAnswer: 3,
    },

    {
    question: "What Is Air Resistance?" ,
    answers: ["Friction Caused By Air Slowing Down Objects That Move Through It", "The Heat From The Sun Trapped By The Air In The Atmosphere", "The Force That Repels Objects", "The Inability for Electricity to Pass Through Air"],
    correctAnswer: 0,
    },

    {
    question: "What Do We Call The Star At The Middle Of The Solar System?",
    answers: ["The North Star","Orion","The Sun","Jupiter"],
    correctAnswer: 2,
    },

    {     
    question: "A Tool That Uses The Sun To Filter Dirty Water and Make It Drinkable" ,
    answers: ["Solar Oven","Solar Still","Vacuum","None Of These"],
    correctAnswer: 1,
    },
    
    {
    question: "What is the Hottest Planet in the Solar System?" ,
    answers: [ "Venus", "Mercury", "Jupiter", "Earth"],
    correctAnswer: 0,
    },
    
    {
    question: "Is There Really A 'Dark Side Of The Moon'?" ,
    answers: ["Yes The Side Facing Away From The Earth Is Dark", "The Whole Moon Is Dark", "Yes But Only At Night", "NO! The Moon Sun Reaches Both Sides Of The Moon Even Though We Only Ever See Just One Side."],
    correctAnswer: 3,
    },
    
    {
    question: "What Causes The Different Seasons On The Earth ",
    answers: ["The Distance of The Sun From The Earth","The Tilt of The Earths Axis","The Sun Gets Colder In The Winter","None Of The Above"],
    correctAnswer: 1,
    },

    {     
    question: "How Many Moons Does Saturn Have?" ,
    answers: ["62","14","42","38"],
    correctAnswer: 0,
    },
        
    {
    question: "Who Discovered Saturn?" ,
    answers: [ "Issac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
    correctAnswer: 2,
    },
        
    {
    question: "The Moon Is " ,
    answers: ["Earth's Natural Satellite", "The Brightest Object in the Night Sky", "A Ball of Cheese In The Sky", "A & B"],
    correctAnswer: 3,
    },
        
    {
    question: "What Is A Constellation?",
    answers: ["A Group Of Comets In Space","A Colorful Cloud of Gas In Space","A Group Of Stars That Form A Shape","A Model of The Solar System"],
    correctAnswer: 2,
    },
    
    {     
    question: "What Is A Vacuum?" ,
    answers: ["An Air Pump","A Completely Empty Space","A Dark Room","Compressed Air"],
    correctAnswer: 1,
    },
    
    {
    question: "Earth Is The ___ Planet From The Sun" ,
    answers: [ "4th", "3rd", "6th", "2nd"],
    correctAnswer: 1,
    },
    
    {
    question: "What's The Largest Planet In The Solar System?" ,
    answers: ["Saturn", "Pluto", "Jupiter", "Neptune"],
    correctAnswer: 2,
    },
    
    {
    question: "Why Is The Surface Of The Moon Powdery?",
    answers: ["It's Not, Its Rock Solid","Its Made Of Sand","Solar Storms","Meteors Crash Into The Surface And Disintegrate"],
    correctAnswer: 3,
    },
    
    {     
    question: "How Can The Sun Help Us Survive?" ,
    answers: ["It Warms The Earth So We Do Not Freeze","We Can Harness It's Light And Convert It Into Energy","It Helps Us See","All Of The Above"],
    correctAnswer: 3,
    },
        
    {
    question: "What Makes A Good Experiment?" ,
    answers: [ "It Can Be Replicated", "It Follows The Scientific Method", "Both A & B", "None Of These Are Correct"],
    correctAnswer: 2,
    },
        
    {
    question: "What Is An Example Of A Chemical Reacation?" ,
    answers: ["Mixing Oil And Water", "Shredding A Piece Of Paper", "Melting Butter", "Lighting Something On Fire"],
    correctAnswer: 3,
    },
        
    {
    question: "What Type of Science Is Baking?",
    answers: ["Geology","Chemistry","Biology","Pyschology"],
    correctAnswer: 1,
    },

    {     
    question: "Why Is It Important To Have A Controlled Variable In Every Experiment? " ,
    answers: ["To Make Sure That A Change Actually Occurred","You Don't Need One","So You Dont Have To Repeat Your Experiment","No One Knows For Sure"],
    correctAnswer: 0,
    },
            
    {
    question: "What Is True About Chemical Reactions?" ,
    answers: [ "They Usually Can Not Be Reversed", "They Usually Give Off Smells", "They Usually Give Off Or Take In Heat", "All Of The Above"],
    correctAnswer: 3,
    },
            
    {
    question: "What Types Of Liquids Dissolve Eggshells" ,
    answers: ["Basic", "Acidic", "Neutral", "They Dissolve By Themselves, Liquids Don't Affect Them"],
    correctAnswer: 1,
    },
            
    {
    question: "How Do We Get Valuable Items From The Earth?",
    answers: ["MAGIC","We Dig Holes","They Are All Found On The Surface","We Buy Them From Walmart"],
    correctAnswer: 1,
    }, 

    {     
    question: "Why Can't We Drill All The Way Through The Center Of The Earth?" ,
    answers: ["Rock Is Too Hard", "We Don't Have Big Enough Drills", "It's Too Hot", "It's Liquid, You Can't Drill Through Liquids"],
    correctAnswer: 2,
    },
    
    {
    question: "What Are The Two Main Causes Of Earthquakes?" ,
    answers: [ "Volcanoes and Tectonic Plates", "Tsunamis and Avalanches", "The Sun and The Moon", "Mining and Floods"],
    correctAnswer: 0,
    },
    
    {
    question: "What Is The Inner Core Made Of?" ,
    answers: ["Nickel and Tungsten", "Mercury and Lead", "Nickel and Iron", "Iron and Gallium"],
    correctAnswer: 2,
    },
    
    {
    question: "What is The Deepest We Have Ever Dug? (Approximately)",
    answers: ["90,000 ft","30 Miles","1500 ft","40,000 ft"],
    correctAnswer: 3,
    },
    
    {     
    question: "How Many Feet Would We Have To Dig To Reach The Center Of The Earth? (Approximately)" ,
    answers: ["21 Million","100 Million","50 Thousand","80 Billion"],
    correctAnswer: 0,
    },
        
    {
    question: "Which Layer Do We Get Our Resources From?" ,
    answers: [ "Mantle", "Inner Core", "Outer Core", "Crust"],
    correctAnswer: 3,
    },
        
    {
    question: "How Does The Earth Get Its Magnetic Field?" ,
    answers: ["It Comes From Volcanoes", "It Is Generated By The Ocean Currents", "The Movement Of Metal In The Earth's Core", "The Heat From The Mantle"],
    correctAnswer: 2,
    },
        
    {
    question: "What Type Of Buildings Do Best In Earthquakes?",
    answers: ["Sturdy Buildings With Unmovable Parts","Buildings That Wobble","Only Tall Buildings Do Well","They All Do Relatively The Same"],
    correctAnswer: 1,
    },
    
    {     
    question: "Why Do We Believe There Was Once A Supercontinent Called Pangea?" ,
    answers: ["The Shapes Of The CoastLines Fit Together Like A Puzzle","There Are The Same Types Of Fossils Where The Continents Used To Fit Together","They Are Actively Moving","All Of The Above"],
    correctAnswer: 3,
    },
            
    {
    question: "Who Is Your Favorite Uncle?" ,
    answers: [ "Mike", "Justin", "Mom", "Dad"],
    correctAnswer: 1,
    },
            
    {
    question: "What Should You Always Do In Minecraft?" ,
    answers: ["Dig Holes", "Tame A Horse", "Fight Creepers", "Build Stuff"],
    correctAnswer: 0,
    },
            
    {
    question: "Name A Way That The Earth's Crust Is Slowly Replaced",
    answers: ["Hurricanes","Asteroids","Volcanic Eruptions","Solar Winds"],
    correctAnswer: 2,
    },
        
    {     
    question: "How Fast Are The Continents Moving Apart?" ,
    answers: ["They Are Not Currently Moving","Roughly 1 Inch Per Year","About 2 Feet Per Year","3cm Per Month"],
    correctAnswer: 1,
    },
        
    {
    question: "What Is The Earth's Largest Layer?" ,
    answers: [ "Core", "Crust", "Minecraft", "Mantle"],
    correctAnswer: 3,
    },
        
    {
    question: "What Happens When Tectonic Plates Crash ?" ,
    answers: ["Hurricanes Form", "We Hear A Loud Banging Noise", "Earthquakes Happen And Mountains Form", "Not Much Happens"],
    correctAnswer: 2,
    },
        
    {
    question: "How Hot Is The Earth's Core?",
    answers: ["10,800 Degrees F","20 Million Degrees F","90,000 Degrees F","75 Degrees F"],
    correctAnswer: 0,
    },
        
    {     
    question: "Which Materials Are Usually Magnetic?" ,
    answers: ["Wood","Metals","Gases","Food"],
    correctAnswer: 1,
    },
            
    {
    question: "Which Of These Is NOT Magnetic?" ,
    answers: [ "Cereal", "Grapes", "Iron", "Paper"],
    correctAnswer: 3,
    },
            
    {
    question: "What Tool Uses A Magnet To Tell Direction?" ,
    answers: ["SunDial", "Map", "Ruler", "Compass"],
    correctAnswer: 3,
    },
            
    {
    question: "What Are The Two Poles Of A Magnet Called?",
    answers: ["North And South","East And West","Up And Down","They Are Called By All Three Names"],
    correctAnswer: 0,
    },
    
    {     
    question: "Whats The Biggest Magnet You'll Ever See?" ,
    answers: ["The Earth","Electromagnets That Lift Cars","A Refrigerator","Nothing Bigger Than 100 Feet Is Magnetic "],
    correctAnswer: 0,
    },
                
    {
    question: "The Earth’s Magnetic Field" ,
    answers: [ "Protects Us From The Suns Deadly Radiation", "Is 1000 Times Weaker Than A Bar Magnet", "Is Always Moving ", "All Of The Above"],
    correctAnswer: 3,
    },
                
    {
    question: "What Is A Practical Use For Magnets?" ,
    answers: ["Putting Things On The Fridge", "Trains, HighSpeed Rails, And Some Roller Coasters", "Electronic Devices Like TV's And Smartphones", "All Of The Above"],
    correctAnswer: 3,
    },
                
    {
    question: "Is Gabriel Perdomo The Best Nephew In The World?",
    answers: ["Nope","He Is By Far The Best!","Nah He's Weird","None Of These"],
    correctAnswer: 1,
    },
    {     
    question: "Define Magnet" ,
    answers: ["To Push Away.","A Piece Of Iron Or Steel That Attracts Certain Metals.","To Pull Close.","All Of These"],
    correctAnswer: 1,
    },
                
    {
    question: "Define Attract" ,
    answers: [ "To Make Something Magnetic", "To Take Away The Magnetic Ability Of A Magnet.", "To Push Away.", "To Pull Close."],
    correctAnswer: 3,
    },
                
    {
    question: "Define Repel" ,
    answers: ["Come Together", "To Pull Close.", "To Push Away.", "None Of These"],
    correctAnswer: 2,
    },
                
    {
    question: "Define Magnetic Pole",
    answers: ["The Strongest Point On A Magnet.","Where Santa Lives","The Middle Of A Magnet","The Weakest Two Points Of A Magnet"],
    correctAnswer: 0,
    },
        
    {     
    question: "Define Magnetic Objects" ,
    answers: ["Anything Made Of Metal","Items That Are Sticky","Something That Is Attracted To A Magnet.","Anything Smaller Than 100 Feet That Is Made Of Metal"],
    correctAnswer: 2,
    },
                    
    {
    question: "Define Force" ,
    answers: [ "The Amount Energy", "A Unit Of Heat ", "That Thing From Star Wars", "Energy That Can Cause Something To Be Pushed Or Pulled."],
    correctAnswer: 3,
    },
                    
    {
    question: "Define De-Magnetize" ,
    answers: ["Pushing A Magnet With Another Magnet", "Adding Electricity To A Magnet", "A Reaction That Occurs When A Magnet Gets Wet", "To Take Away The Magnetic Ability Of A Magnet."],
    correctAnswer: 3,
    },
                    
    {
    question: "Define Compass",
    answers: ["A Tool That Tells Direction By Measuring Weather Patterns","An Instrument With A Needle That Points North And Is Used To Determine Direction.","A Tool That Can Make Magnets Stronger","None Of These"],
    correctAnswer: 1,
    },


    {
    question: "What Is The Only Natural Satellite Of The Earth?" ,
    answers: ["The International Space Station", "TV Sattelites", "The Hubble Telescope", "The Moon"],
    correctAnswer: 3,
    },
                    
    {
    question: "What Is The Scientific Method?",
    answers: ["A Scientific Procedure To Determine Something.","A series of processes that people can use to gather knowledge about the world around them.","How you become a Scientist. ","None Of These"],
    correctAnswer: 1,
    },
    {     
    question: "A Guess at what will Occur during an Experiment" ,
    answers: ["Hypothesis","Educated Guess","Probable Answer","All Of These"],
    correctAnswer: 0,
    },
                    
    {
    question: "Define Experiment" ,
    answers: [ "Blowing Things Up", "Staring A Fire", "A Scientific Procedure To Determine Something.", "All Of These"],
    correctAnswer: 2,
    },
                    
    {
    question: "The Factors in the Experiment that don't depend on other factors." ,
    answers: ["Controlled Variable", "Dependent Variable", "Independent Variable", "None Of These"],
    correctAnswer: 2,
    },
                    
    {
    question: "The Factors in the Experiment that depend on the other Factors",
    answers: ["Dependent Variable","Controlled Variable","Independent Variable","Parasitic Variable"],
    correctAnswer: 0,
    },
            
    {     
    question: "The Factors in the Experiment that stay the same." ,
    answers: ["Uncontrolled Variable","Unchangeable Variable","Controlled Variable","Independent Variable"],
    correctAnswer: 2,
    },
                        
    {
    question: "A process in which a substance changes into a different substance." ,
    answers: [ "Physical Reaction", "Experiment ", "Fire", "Chemical Reaction"],
    correctAnswer: 3,
    },
                        
    {
    question: "Chemistry Is The Branch Of Science That...." ,
    answers: ["Studies The Layers of The Earth", "Studies The Movement Of The Planets", "Studies How Substances Interact And Change", "Studies The Ability Of Magnets."],
    correctAnswer: 2,
    },
                        
];


//These Are Global Variables That Hold The Position Of The Items On The DOM  Example...
// The point at which you Lose/Win, Where the player is, Etc.

var lose = document.getElementById("event").offsetLeft;
var player = document.getElementById("pic2").offsetLeft;
var rock = document.getElementById("event1").offsetLeft;
var tpotion = document.getElementById("triggerpotion").offsetLeft;
var finish = document.getElementById("pic3").offsetLeft;
var sign = document.getElementById("sign").offsetLeft;
var shovell = document.getElementById("shovel").offsetLeft;




//These Functions Are For The Events That Occur  Win,Lose,Rock,Potion,Etc.

function riskIt () {
    if (player >= rock) {
       document.getElementById("modalrock");
       modalrock.style.display = "block"
       riskIt = function(){};
    }
};

function riskIt2 () {
    if (player >= tpotion) {
        document.getElementById("modalpotion");
        modalpotion.style.display = "block";
        riskIt2 = function(){};
    }
};

function youWin () {
    if (player >= finish) {
       document.getElementById("modalwin");
       modalwin.style.display = "block";
    }
};

function youLose () {
    if (lose >= player) {
        modallose.style.display = "block";
    }
};

function readSign () {
    if (player >= sign){
        changeSign();
        modalsign.style.display = "block";
        readSign = function(){};
    }
};

function riskItShovel () {
    if (player >= shovell) {
       document.getElementById("modalshovel");
       modalshovel.style.display = "block"
       riskItShovel = function(){};
    }
};




//This Is To Regenerate A New Number Each Time 

function regenerate () {
    return Math.floor(Math.random() * 5 + 1);
};

function regenerateAttack () {
    return Math.floor(Math.random()* 20 + 1);
}




// This Is What Happens When You Click On The Button Submitting The Number You Guessed

document.getElementById('submitguess').addEventListener('click', function() {     
        
        var x = document.getElementById("guessField").value; 
        var item = questions[Math.floor(Math.random() * questions.length)];
        var ele = document.getElementsByName("choices");
        document.getElementById("pic2").style.transform = "scaleX(1)";

        snake.style.display = "none";
        scorpion.style.display = "none";
   

   
        for(var i=0;i<ele.length;i++)
            ele[i].checked = false;
            console.log(item);
            console.log(item.correctAnswer);
  
            if(x != y){  
           
                var modal = document.getElementById('myModal');
                myModal.style.display = "block";

                document.getElementById('sciencequestion').innerHTML = item.question;
                document.getElementById('one').innerHTML = item.answers[0];
                document.getElementById('two').innerHTML = item.answers[1];
                document.getElementById('three').innerHTML = item.answers[2];
                document.getElementById('four').innerHTML = item.answers[3];

        
    

                answerbtn.onclick = function() {
            
                    console.log(returnSelectedChoice());
                    document.getElementById("guessField").value = "" ;
                    submitguess.style.display = "none";

                
                
                    if (!returnSelectedChoice()){
                        modal.style.display = "block";
                        alert("You Must Choose An Answer")
                    } 
                
                    else {
                    
                        if(returnSelectedChoice() == item.correctAnswer ){
                            myModalTrue.style.display = "block";
                            myModalFalse.style.display = "none";
                            modal.style.display = "none";
                        } 

                        else if (returnSelectedChoice() != item.correctAnswer ){
                            myModalFalse.style.display = "block";
                            myModalTrue.style.display = "none";
                            modal.style.display = "none";
                        }
                    }
                }  

            }  

            else if(x == y){ 
                $( "#pic2" ).css('margin-left','+=6vw');
                alert("You're a Great Guesser! You'll Be At The Fair In No Time!");
                y = regenerate();
                console.log(y);
                document.getElementById("guessField").value = "" ;
                player = document.getElementById("pic2").offsetLeft;
                finish = document.getElementById("pic3").offsetLeft;
                rock = document.getElementById("event1").offsetLeft;
                potion = document.getElementById("event2").offsetLeft;
                riskItShovel();
                readSign();
                riskIt();
                riskIt2();
                youWin();
                console.log(sb);
                console.log(pb);
                console.log(s);
            } 
});

//Close Sign

$(function() {
    $('#thanks').click(function () {
       document.getElementById("modalsign").style = "none";
    });
});

//Close shovel

var sb =    window.getComputedStyle(bookitem).display;
var pb =    window.getComputedStyle(pokeballitem).display;
var s  =    window.getComputedStyle(sworditem).display;




$(function() {
    $('#dignow').click(function () {
       shovel.style.display = "none";
       shovelitem.style.display = "inline-block";
       document.getElementById("modalshovel").style = "none";
    

        if(chance <= 2 ){
            spellbook.style.display = "block";
            alert("You Got A Spellbook!");
            bookitem.style.display = "inline-block";
            window.setTimeout("document.getElementById('spellbook').style.display='none';", 2000);
            sb = "inline-block";
            console.log(sb);
            console.log(pb);
            console.log(s);
            
        }
        else if (chance <= 6){
            pokeball.style.display = "block";
            alert("You Got A Pokeball! I Wonder Whats Inside.");
            pokeballitem.style.display = "inline-block";
            window.setTimeout("document.getElementById('pokeball').style.display='none';", 2000);
            pb = "inline-block";
            console.log(sb);
            console.log(pb);
            console.log(s);
        }
        else{
            sword.style.display = "block";
            alert("You Got A Sword!");
            sworditem.style.display = "inline-block";
            window.setTimeout("document.getElementById('sword').style.display='none';", 2000);
            s = "inline-block";
            console.log(sb);
            console.log(pb);
            console.log(s);
            
         }
         
       
    });
});



$(function() {
    $('#diglater').click(function () {
       document.getElementById("shovel");
       shovel.style.display = "none";
       shovelitem.style.display = "block";
       document.getElementById("modalshovel").style = "none";
       
    });
});


//The Following Two Functions Are What Happens When You Click On The Button To Move Forward/Backwards

$(function() {
    $('#moveup').click(function () {
            console.log(sb);
            console.log(pb);
            console.log(s);
       $( "#pic2" ).css('margin-left','+=5vw');
       document.getElementById("guessField").value = "" ;
       $('#myModalTrue').toggle();
       y = regenerate();
       player = document.getElementById("pic2").offsetLeft;
       finish = document.getElementById("pic3").offsetLeft;
       console.log(player);
       console.log(finish);
       rock = document.getElementById("event1").offsetLeft;
       potion = document.getElementById("event2").offsetLeft;
       submitguess.style.display = "inline-block";
       riskItShovel();
       readSign();
       riskIt();
       riskIt2(); 
       youWin();
    });
});

var heartList = document.getElementById("hearts").getElementsByTagName("li");

var heartsLeft = heartList.length;

function removeHearts(){
    var heartList = document.getElementById("hearts").getElementsByTagName("li");
    var heartsLeft = heartList.length;
    console.log(heartsLeft);

    if(heartsLeft <= 0){
        document.getElementById("modaldragonfight").style.display="none";
        document.getElementById("modallose").style.display="block";
    };}

var scaleList = document.getElementById("dscales").getElementsByTagName("li");

var scalesLeft = scaleList.length;
    
function removeScales(){
    var scaleList = document.getElementById("dscales").getElementsByTagName("li");
    var scalesLeft = scaleList.length;
     console.log(scalesLeft);
    
    if(scalesLeft <= 0){
        window.setTimeout(" document.getElementById('modaldragonfight').style.display='none';", 3400);
        scorpion.style.display = "none";
        document.getElementById("pic2").style.transform = "scaleX(1)";
        fight.style.display = "none";
        fire3.style.display = "none";
        window.setTimeout(" document.getElementById('modalbeatdragon').style.display='block';", 3500);
        window.setTimeout(" document.getElementById('modalbeatdragon').style.display='none';", 5500);
        document.getElementById("ltitle").style.zIndex = 1;
        document.getElementById("lives").style.zIndex = 1;
        document.getElementById("items").style.zIndex = 1;
    };}



$(function() {
    $('#moveback').click(function () {
       $( "#pic2" ).css('margin-left','-=5vw');
       document.getElementById("guessField").value = "" ;
       $('#myModalFalse').toggle();
       y = regenerate();
       submitguess.style.display = "inline-block";
       lose = document.getElementById("event").offsetLeft;
       player = document.getElementById("pic2").offsetLeft;
       youLose();

       $('#hearts').children().last().remove();
       
       removeHearts();

    });
});


var variousattacks = Math.floor(Math.random()* 20 + 1);



$(function() {
    $('#attack1').click(function () {
        console.log(variousattacks);
        if (variousattacks <= 1){
            $('#dscales').children().last().remove();
            $('#dscales').children().last().remove();
            $('#dscales').children().last().remove();
            $('#dscales').children().last().remove();
            $('#dscales').children().last().remove();
            window.setTimeout("document.getElementById('playerhole').style.display = 'inline-block';", 0000);
            window.setTimeout("document.getElementById('player1').style.display = 'none';", 0000);
            window.setTimeout("document.getElementById('playerhole').style.display = 'none';", 1800);
            window.setTimeout("document.getElementById('player1').style.display = 'inline-block';", 1800);
            alert("You Hid In A Hole Until The Dragon Flew Away!");
            window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 0000);
            window.setTimeout("document.getElementById('cpufire').style.display='none';", 400);
            window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 800);
            window.setTimeout("document.getElementById('cpufire').style.display='none';", 1100);
            window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 1300);
            window.setTimeout("document.getElementById('cpufire').style.display='none';", 1300);
            window.setTimeout("document.getElementById('cpu').style.display= 'none';", 1500 );
            removeScales();
            
        }
        if(variousattacks == 2){
            window.setTimeout("document.getElementById('playerhole').style.display = 'inline-block';", 0000);
            window.setTimeout("document.getElementById('player1').style.display = 'none';", 0000);
            window.setTimeout("document.getElementById('playerhole').style.display = 'none';", 1400);
            window.setTimeout("document.getElementById('player1').style.display = 'inline-block';", 1400);
            alert("You Hid In A Hole and The Dragons Attack Missed You");
            window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 0000);
            window.setTimeout("document.getElementById('cpufire').style.display='none';", 400);
            window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 800);
            window.setTimeout("document.getElementById('cpufire').style.display='none';", 1100);
            window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 1300);
            window.setTimeout("document.getElementById('cpufire').style.display='none';", 1800);
        }
        if(variousattacks >= 3 && variousattacks <= 7){
            $('#dscales').children().last().remove();
            window.setTimeout("document.getElementById('playerhole').style.display = 'inline-block';", 0000);
            window.setTimeout("document.getElementById('player1').style.display = 'none';", 0000);
            window.setTimeout("document.getElementById('playerhole').style.display = 'none';", 1400);
            window.setTimeout("document.getElementById('player1').style.display = 'inline-block';", 1400);
            window.setTimeout("document.getElementById('punch1').style.display = 'block';", 1400);
            window.setTimeout("document.getElementById('punch1').style.display = 'none';", 3200);
            alert("You Hid In A Hole And Surprise Attacked The Dragon!")
            window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 0000);
            window.setTimeout("document.getElementById('cpufire').style.display='none';", 400);
            window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 800);
            window.setTimeout("document.getElementById('cpufire').style.display='none';", 1100);
            window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 1300);
            window.setTimeout("document.getElementById('cpufire').style.display='none';", 1800);
            removeScales();
        }
        if(variousattacks >= 8 && variousattacks <= 12){
            $('#hearts').children().last().remove();
            window.setTimeout("document.getElementById('playerhole').style.display = 'inline-block';", 0000);
            window.setTimeout("document.getElementById('player1').style.display = 'none';", 0000);
            window.setTimeout("document.getElementById('playerhole').style.display = 'none';", 1400);
            window.setTimeout("document.getElementById('player1').style.display = 'inline-block';", 1400);
            alert("A Spider Bit You While You Were Hiding");
            window.setTimeout("document.getElementById('bite').style.display = 'inline-block';", 100);
            window.setTimeout("document.getElementById('bite').style.display = 'none';", 1400);
            window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 0000);
            window.setTimeout("document.getElementById('cpufire').style.display='none';", 400);
            window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 800);
            window.setTimeout("document.getElementById('cpufire').style.display='none';", 1100);
            window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 1300);
            window.setTimeout("document.getElementById('cpufire').style.display='none';", 1800);
            removeHearts();
        }
        else if (variousattacks >= 13 && variousattacks <= 20){
            $('#dscales').children().last().remove();
            $('#dscales').children().last().remove();
            $('#hearts').children().last().remove();
            alert("You Buried The Dragon In A Hole He Was Hurt But Busted Out And Hit You With Rocks!")
            window.setTimeout("document.getElementById('cpuhole').style.display = 'inline-block';", 0000);
            window.setTimeout("document.getElementById('cpu').style.display = 'none';", 0000);
            window.setTimeout("document.getElementById('cpuhole').style.display = 'none';", 1000);
            window.setTimeout("document.getElementById('cpu').style.display = 'inline-block';", 1000);
            window.setTimeout("document.getElementById('rocks1').style.display = 'block';", 1100);
            window.setTimeout("document.getElementById('rocks1').style.display = 'none';", 2400);
            removeHearts();
            removeScales();
        };
        variousattacks = regenerateAttack();

});
});





$(function() {
    $('#attack2').click(function () {

        document.getElementById('attack2').style.display = "none"

        console.log(sb);
        console.log(pb);
        console.log(s);




        if (variousattacks <= 2){
            $('#dscales').children().last().remove();
            $('#dscales').children().last().remove();
            removeScales();
            window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 0000);
            window.setTimeout("document.getElementById('cpufire').style.display='none';", 400);
            window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 800);
            window.setTimeout("document.getElementById('cpufire').style.display='none';", 1100);
            window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 1300);
            window.setTimeout("document.getElementById('cpufire').style.display='none';", 1800);
            

            if(pb === "inline-block"){
                pokeballitem.style.display="none";
                window.setTimeout("document.getElementById('poke1').style.display='inline-block';", 0000);
                window.setTimeout("document.getElementById('poke1').style.display='none';", 400);
                window.setTimeout("document.getElementById('poke1').style.display='inline-block';", 800);
                window.setTimeout("document.getElementById('poke1').style.display='none';", 1100);
                window.setTimeout("document.getElementById('poke2').style.display='inline-block';", 1300);
                window.setTimeout("document.getElementById('poke2').style.display='none';", 5400);
                alert('Pichu Attacked The Dragon! He Lost 2 Scales! You Were Not Hurt')
                }

                else if(sb === "inline-block"){
                bookitem.style.display="none";
                window.setTimeout("document.getElementById('magic1').style.display='inline-block';", 0000);
                window.setTimeout("document.getElementById('magic1').style.display='none';", 500);
                window.setTimeout("document.getElementById('magic2').style.display='inline-block';", 600);
                window.setTimeout("document.getElementById('magic2').style.display='none';", 900);
                window.setTimeout("document.getElementById('magic3').style.display='inline-block';", 1000);
                window.setTimeout("document.getElementById('magic3').style.display='none';", 1300);
                window.setTimeout("document.getElementById('magic4').style.display='inline-block';", 1400);
                window.setTimeout("document.getElementById('magic4').style.display='none';", 2000);
                alert('Your Magic Really Hurt Him, And Protected You From His Attack!')
                }
                else if(s === "inline-block"){
                sworditem.style.display="none";
                window.setTimeout("document.getElementById('swod1').style.display='inline-block';", 0000);
                window.setTimeout("document.getElementById('swod1').style.display='none';", 400);
                window.setTimeout("document.getElementById('swod1').style.display='inline-block';", 800);
                window.setTimeout("document.getElementById('swod1').style.display='none';", 1100);
                window.setTimeout("document.getElementById('swod1').style.display='inline-block';", 1300);
                window.setTimeout("document.getElementById('swod1').style.display='none';", 3000);
                alert('Your Sword Really Hurt Him, And Blocked The Dragons Flame!')
                }
        }
        else if(variousattacks <= 5){
            $('#dscales').children().last().remove();
            removeScales();
            window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 0000);
            window.setTimeout("document.getElementById('cpufire').style.display='none';", 400);
            window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 800);
            window.setTimeout("document.getElementById('cpufire').style.display='none';", 1100);
            window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 1300);
            window.setTimeout("document.getElementById('cpufire').style.display='none';", 1800);

            if(pb === "inline-block"){
                pokeballitem.style.display="none";
                window.setTimeout("document.getElementById('poke1').style.display='inline-block';", 0000);
                window.setTimeout("document.getElementById('poke1').style.display='none';", 400);
                window.setTimeout("document.getElementById('poke1').style.display='inline-block';", 800);
                window.setTimeout("document.getElementById('poke1').style.display='none';", 1100);
                window.setTimeout("document.getElementById('poke2').style.display='inline-block';", 1300);
                window.setTimeout("document.getElementById('poke2').style.display='none';", 5400);
                alert('Pichu Attacked The Dragon! He Only Lost 1 Scale.. You Were Not Hurt Though!')
                }

                else if(sb === "inline-block"){
                bookitem.style.display="none";
                window.setTimeout("document.getElementById('magic1').style.display='inline-block';", 0000);
                window.setTimeout("document.getElementById('magic1').style.display='none';", 500);
                window.setTimeout("document.getElementById('magic2').style.display='inline-block';", 600);
                window.setTimeout("document.getElementById('magic2').style.display='none';", 900);
                window.setTimeout("document.getElementById('magic3').style.display='inline-block';", 1000);
                window.setTimeout("document.getElementById('magic3').style.display='none';", 1300);
                window.setTimeout("document.getElementById('magic4').style.display='inline-block';", 1400);
                window.setTimeout("document.getElementById('magic4').style.display='none';", 2000);
                alert('Your Spell Only Took One Scale From The Dragon, But It Protected You From His Attack!')

                }
                else if(s === "inline-block"){
                sworditem.style.display="none";
                window.setTimeout("document.getElementById('swod1').style.display='inline-block';", 0000);
                window.setTimeout("document.getElementById('swod1').style.display='none';", 400);
                window.setTimeout("document.getElementById('swod1').style.display='inline-block';", 800);
                window.setTimeout("document.getElementById('swod1').style.display='none';", 1100);
                window.setTimeout("document.getElementById('swod1').style.display='inline-block';", 1300);
                window.setTimeout("document.getElementById('swod1').style.display='none';", 3000);
                alert('One Slice From The Sword Took One Scale From The Dragon And Blocked His Flame!')
                }
        }
        else if(variousattacks <= 9){
            $('#dscales').children().last().remove();
            $('#dscales').children().last().remove();
            $('#hearts').children().last().remove();
            window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 0000);
            window.setTimeout("document.getElementById('cpufire').style.display='none';", 400);
            window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 800);
            window.setTimeout("document.getElementById('cpufire').style.display='none';", 1100);
            window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 1300);
            window.setTimeout("document.getElementById('cpufire').style.display='none';", 1800);
            removeHearts();
            removeScales();
            
            

                if(pb === "inline-block"){
                pokeballitem.style.display="none";
                window.setTimeout("document.getElementById('poke1').style.display='inline-block';", 0000);
                window.setTimeout("document.getElementById('poke1').style.display='none';", 400);
                window.setTimeout("document.getElementById('poke1').style.display='inline-block';", 800);
                window.setTimeout("document.getElementById('poke1').style.display='none';", 1100);
                window.setTimeout("document.getElementById('poke2').style.display='inline-block';", 1300);
                window.setTimeout("document.getElementById('poke2').style.display='none';", 5400);
                alert('Pichu I Choose You!  He Hurt The Dragon But You Were Burned In The Attack')
                }

                else if(sb === "inline-block"){
                bookitem.style.display="none";
                window.setTimeout("document.getElementById('magic1').style.display='inline-block';", 0000);
                window.setTimeout("document.getElementById('magic1').style.display='none';", 500);
                window.setTimeout("document.getElementById('magic2').style.display='inline-block';", 600);
                window.setTimeout("document.getElementById('magic2').style.display='none';", 900);
                window.setTimeout("document.getElementById('magic3').style.display='inline-block';", 1000);
                window.setTimeout("document.getElementById('magic3').style.display='none';", 1300);
                window.setTimeout("document.getElementById('magic4').style.display='inline-block';", 1400);
                window.setTimeout("document.getElementById('magic4').style.display='none';", 2000);
                alert('Your Magic Hurt Him Bad! The Dragons Flame Still Busted Through And You Lost A Life')

                }
                else if(s === "inline-block"){
                sworditem.style.display="none";
                window.setTimeout("document.getElementById('swod1').style.display='inline-block';", 0000);
                window.setTimeout("document.getElementById('swod1').style.display='none';", 400);
                window.setTimeout("document.getElementById('swod1').style.display='inline-block';", 800);
                window.setTimeout("document.getElementById('swod1').style.display='none';", 1100);
                window.setTimeout("document.getElementById('swod1').style.display='inline-block';", 1300);
                window.setTimeout("document.getElementById('swod1').style.display='none';", 3000);
                alert('You Got Him Good But The Sword Could Not Stop You From Being Burned!')
                }
        }
        else {
            $('#dscales').children().last().remove();
            $('#hearts').children().last().remove();
            window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 0000);
            window.setTimeout("document.getElementById('cpufire').style.display='none';", 400);
            window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 800);
            window.setTimeout("document.getElementById('cpufire').style.display='none';", 1100);
            window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 1300);
            window.setTimeout("document.getElementById('cpufire').style.display='none';", 1800);
            removeHearts();
            removeScales();

            if(pb === "inline-block"){
                pokeballitem.style.display="none";
                window.setTimeout("document.getElementById('poke1').style.display='inline-block';", 0000);
                window.setTimeout("document.getElementById('poke1').style.display='none';", 400);
                window.setTimeout("document.getElementById('poke1').style.display='inline-block';", 800);
                window.setTimeout("document.getElementById('poke1').style.display='none';", 1100);
                window.setTimeout("document.getElementById('poke2').style.display='inline-block';", 1300);
                window.setTimeout("document.getElementById('poke2').style.display='none';", 5400);
                alert('Pichu Attacked The Dragon! He Couldnt Protect You Though, You Both Lost A Life')
                }

                else if(sb === "inline-block"){
                bookitem.style.display="none";
                window.setTimeout("document.getElementById('magic1').style.display='inline-block';", 0000);
                window.setTimeout("document.getElementById('magic1').style.display='none';", 500);
                window.setTimeout("document.getElementById('magic2').style.display='inline-block';", 600);
                window.setTimeout("document.getElementById('magic2').style.display='none';", 900);
                window.setTimeout("document.getElementById('magic3').style.display='inline-block';", 1000);
                window.setTimeout("document.getElementById('magic3').style.display='none';", 1300);
                window.setTimeout("document.getElementById('magic4').style.display='inline-block';", 1400);
                window.setTimeout("document.getElementById('magic4').style.display='none';", 2000);
                alert('Both Your Attacks Bounced Back At You And You Each Lost A Life!')
                }
                else if(s === "inline-block"){
                sworditem.style.display="none";
                window.setTimeout("document.getElementById('swod1').style.display='inline-block';", 0000);
                window.setTimeout("document.getElementById('swod1').style.display='none';", 400);
                window.setTimeout("document.getElementById('swod1').style.display='inline-block';", 800);
                window.setTimeout("document.getElementById('swod1').style.display='none';", 1100);
                window.setTimeout("document.getElementById('swod1').style.display='inline-block';", 1300);
                window.setTimeout("document.getElementById('swod1').style.display='none';", 3000);
                alert('You Sliced The Dragon And He Lost A Scale! You Got Too Close Though And Were Hit By The Flame!')
                }
            
        };
        variousattacks = regenerateAttack();
});
});

$(function() {
    $('#attack3').click(function () {

        

            if (variousattacks <= 1){
                $('#dscales').children().last().remove();
                $('#dscales').children().last().remove();
                $('#dscales').children().last().remove();
                window.setTimeout("document.getElementById('punch1').style.display = 'block';", 0000);
                window.setTimeout("document.getElementById('punch1').style.display = 'none';", 3200);
                alert("Critical Hit!!!")
                removeScales();

            }
            else if(variousattacks <= 5){
                $('#hearts').children().last().remove();
                alert("That Didn't Hurt Him, You Got Burned By His Flame!")
                window.setTimeout("document.getElementById('punch1').style.display = 'block';", 0000);
                window.setTimeout("document.getElementById('punch1').style.display = 'none';", 2000);
                window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 0000);
                window.setTimeout("document.getElementById('cpufire').style.display='none';", 400);
                window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 800);
                window.setTimeout("document.getElementById('cpufire').style.display='none';", 1100);
                window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 1300);
                window.setTimeout("document.getElementById('cpufire').style.display='none';", 1800);
                removeHearts();
    
            }
            else if(variousattacks <= 12){
                $('#dscales').children().last().remove();
                $('#hearts').children().last().remove();
                alert("You Punched Him In His Sweet Spot But Also Got Hurt By His Flame!")
                window.setTimeout("document.getElementById('punch1').style.display = 'block';", 0000);
                window.setTimeout("document.getElementById('punch1').style.display = 'none';", 2000);
                window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 0000);
                window.setTimeout("document.getElementById('cpufire').style.display='none';", 400);
                window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 800);
                window.setTimeout("document.getElementById('cpufire').style.display='none';", 1100);
                window.setTimeout("document.getElementById('cpufire').style.display='inline-block';", 1300);
                window.setTimeout("document.getElementById('cpufire').style.display='none';", 1800);
                removeHearts();
                removeScales();
            
            }
            else {
                alert("He Didn't Even Notice, Nothing Happened, Why Would You Punch A Dragon???")
                window.setTimeout("document.getElementById('punch1').style.display = 'block';", 0000);
                window.setTimeout("document.getElementById('punch1').style.display = 'none';", 2000);
                window.setTimeout("document.getElementById('fire1').style.display='none';", 500);
            };
            variousattacks = regenerateAttack();

});
});






