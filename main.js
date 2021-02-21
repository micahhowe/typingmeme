var temp = document.querySelector('.time');
 	var button = document.querySelector("button");
 	var words = document.querySelector(".words");
 	var timerDiv = document.querySelector(".time");
 	var scoreDiv = document.querySelector(".score");
 	var points = 0;
 	var spans;
 	var typed;
 	var seconds = 60;

 	function countdown() {
 		points = 0;
 		var timer = setInterval(function(){
 			button.disabled = true;
      //once you click the button the countdown starts
    		seconds--;
    		temp.innerHTML = seconds;
      //this displays the countdown under "Time left"
    		if (seconds === 0) {
    			alert("Game over ¯\\_(ツ)_/¯ Your score is " + points + "!!!! 10/10 Would meme again");
          //when countdown reaches zero the alert shows the score and additional memes
    			scoreDiv.innerHTML = "0";
          //resets score
    			words.innerHTML = "";
          //resets meme prompt
          //makes button clickable to start game again
    			clearInterval(timer);
    			seconds = 60;
    			timerDiv.innerHTML = "60";
          //these reset timer to 60
    			button.disabled = false;	
    		}
 		}, 1000);
  	}

  	function random() {
  		words.innerHTML = "";
  		var random = Math.floor(Math.random() * (list.length - 0 + 1)) + 0;
      //brings in full length of list and determines a random number between 1st and last value
  		var wordArray = list[random].split("");
      //it fails here if I enter new meme incorrectly
  		for (var i = 0; i < wordArray.length; i++) { //building the words with spans around the letters
  			var span = document.createElement("span");
        //this goes through the entire list of memes to create a pool of terms for the randomizer to compare against
  			span.classList.add("span");
  			span.innerHTML = wordArray[i];
  			words.appendChild(span);
  		}
  		spans = document.querySelectorAll(".span");
  	}


  	const list = [
      
 '100 DUCK SIZED HORSES','200 IQ','90S KIDS WILL REMEMBER',
      
 'AAAND ITS GONE','ADVICE DUCK','ALEX FROM TARGET','ALL THOSE CHICKENS','AND MY AXE','APPARENTLY KID','ARTHUR FIST','AVENGERS ASSEMBLE',
                  
 'BABY SHARK','BABY YODA','BASICALLY IM VERY SMOL','BATMAN SLAP','BEN SWOLO','BERNIE GLOVES','BIG CHUNGUS','BOOMER', 'BLUNDER YEARS','BOOTS WITH THE FUR','BUNKER JONESY','BYE FELICIA',
                  
 'CANNIBAL SHIA','CARLTON DANCE','CATCH ME OUTSIDE','CHA CHA REAL SMOOTH','CONDESCENDING WONKA','COOL STORY BRO','CHARLIE BIT ME','CHEFS KISS','CHANDLER BING','CHOCOLATE RAIN','CHUCK NORRIS','CRAB RAVE','CROCS','CRYING KIM K','CRYING JORDAN',
      
 'DAMN DANIEL','DANCING BABY','DARTH JAR JAR','DARUDE SANDSTORM','DAT BOI','DAVID AFTER DENTIST','DEAL WITH IT','DESPACITO','DEEZ NUTS','DIAMOND HANDS','DISTRACTED BOYFRIEND','DOGE','DOUBLE RAINBOW','DOZENS OF US','DRAMATIC CHIPMUNK','DROP MY CROISSANT','DUNDER MIFFLIN',
      
'EYEBROWS ON FLEEK','EXPLAIN LIKE IM FIVE',
                  
 'FLAT EARTH','FESTIVUS','FEZ','FIDGET SPINNER','FLOSSING','FLORIDA MAN',
                  
 'GANDALF DANCE','GANGNAM STYLE','GENERAL KENOBI','GOOD GIRL GINA','GOOD GUY GREG', 'GREEDO SHOT FIRST','GRUMPY CAT',
      
 'HARAMBE','HARLEM SHAKE','HAPPY CLOUDS','HATERS GONNA HATE','HIDE THE PAIN HAROLD','HODOR','HONEY BADGER','HONEY BOO BOO','HYDRO HOMIES',
      
 'INFINITE DAB','I AM BEYONCE ALWAYS','I LIKE TURTLES','I LOVE LAMP','I SMELL LIKE BEEF','ITS A TRAP','ITS GONNA BE MAY','ITS WEDNESDAY MY DUDES','I UNDERSTOOD THAT REFERENCE',
      
 'JELLO STAPLER','JIMOTHY','JIMMY NEUTRON','JOKER STAIRS',
      
 'KANYE','KAZOO KID','KRAMER','KEVINS FAMOUS CHILI','KEYBOARD CAT','KERMIT SIPPING TEA',
                  
 'LEBRON JAMES','LEFT SHARK','LEEROY JENKINS','LEGEN WAIT FOR IT DARY','LIKE A BOSS','LIKE AND SUBSCRIBE','LIL SEBASTIAN','LMFAO','LAUGHING LEO',
                  
 'MAGIC MIKE','MCLOVIN','ME AND THE BOYS','MEME','MINI ME','MIKE WAZOWSKI','MONEY PRINTER GO BRRR','MONEY IN THE BANANA STAND','MONKE','MOMS SPAGHETTI','MORPHEUS','MORE COWBELL','MURICA','MY NAME IS JEFF',
      
 'NARUTO RUN','NARD DOG','NETFLIX AND CHILL','NYAN CAT','NO U','NO SOUP FOR YOU','NUMA NUMA',
      
 'OH HI MARK','OOF','OLD MAN YELLING AT CLOUDS','OLD TOWN ROAD','ONE MAN WOLF PACK','ON WEDNESDAYS WE WEAR PINK',
      
 'PANIK','PEANUT BUTTER JELLY TIME','PEPPERIDGE FARM REMEMBERS','POGGERS','PHILOSORAPTOR','PICKLE RICK','PIVOT','PIZZA JOHN','PLANKING',
      
 'RICKROLL','RED IS SUS','REGINA GEORGE','RUN OF THE MILL GOBLIN','RUN FOREST RUN',
                  
 'SALT BAE','SAD KEANU','SAVE FERRIS','SCROLL OF TRUTH','SENOR CHANG','SEA SHANTY','SHREK','SHUT UP AND TAKE MY MONEY','SLOPPY JOES','SMASH MOUTH ALL STAR','SMILE AND WAVE BOYS','SOCIALLY AWKWARD PENGUIN','STAR WARS KID','STEP 3 PROFIT','SPIDERPIG','SPONGEBOB','STONKS','SURPRISED PIKACHU','SQUAD GOALS','SQUIDWARD','SQUINTING FRY',
  
 'TECHNOVIKING','TIGER KING','TIKTOK','TIPS FEDORA','THAT IS SO FETCH','THANOS SNAP','THANKS OBAMA','THAT WAS LEGITNESS','THICC','THIS IS FINE','THREAT LEVEL MIDNIGHT','TLDR','TROLL','TUXEDO POOH',
      
 'VAN DOWN BY THE RIVER','VOLDEMORT HUG','VOTE FOR PEDRO',
      
 'WAT','WATERSKIING SQUIRREL','WAKANDA FOREVER','WE ALL FELL IN THE PIT','WOMAN YELLING AT CAT','WHAT DOES THE FOX SAY','WHITE AND GOLD DRESS','WINTER IS COMING','WINNING',
                  
  'YEET','YES THIS IS DOG', 'YODEL KID','YOLO', 'YOU GO GLEN COCO',
      
'ZACK MORRIS','ZUCK DRINKING WATER'      
                          
];

  	button.addEventListener("click", function(e){
  		countdown();
      //starts countdown and game when button is clicked
  		random();
      //calls the function that brings in random meme
  		button.disabled = true;	
      //makes button unclickable while current attempt is running
  	});

//this is where the magic happens
  	function typing(e) {
  			typed = String.fromCharCode(e.which);
  			for (var i = 0; i < spans.length; i++) {
  				if (spans[i].innerHTML === typed) { // if typed letter is the next/ expected one from the word
  					if (spans[i].classList.contains("bg")) { // if it already has class with the background color then check the next one
  						continue;
  					} else if (spans[i].classList.contains("bg") === false && spans[i-1] === undefined || spans[i-1].classList.contains("bg") !== false ) { // if it doesnt have class, if it is not first letter or if the letter before it doesnt have class (this is done to avoid marking the letters who are not in order for being checked, for example if you have two "A"s so to avoid marking both of them if the first one is at the index 0 and second at index 5 for example)
  						spans[i].classList.add("bg");
  						break;
  					}
  				}
  			}
  			var checker = 0;
  			for (var j = 0; j < spans.length; j++) { //checking if all the letters are typed
  				if (spans[j].className === "span bg") {
  					checker++;
  				}
  				if (checker === spans.length) { // if so, animate the words with animate.css class
  					words.classList.add("animated");
  					words.classList.add("fadeOut");
  					//points++; 
            // increment the point by 1 if length is less than 7
            if(spans.length < 7) {
            points++;
          }
            //increment points by 2 if length is more than 7 but less than 13
            else if(spans.length > 7 && spans.length < 13){
              points += 2;
            }
           //increment points by 3 if more than a length of 13. Long Bois
          else {
            points += 3;
          }
  					scoreDiv.innerHTML = points; //add points to the points div based on these conditionals
  					document.removeEventListener("keydown", typing, false);
  					setTimeout(function(){
  						words.className = "words"; // restart the classes
  						random(); // give another word if previous word has been fully typed
  						document.addEventListener("keydown", typing, false);
  					}, 400);
  				}

  			}
  	}

  	document.addEventListener("keydown", typing, false);
//these run the typing function from line 115 every time a keyboard button is pressed (while the game is running)
