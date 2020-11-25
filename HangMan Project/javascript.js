var words = ["apple", "banana", "television", "beer", "computer", "stereo", "giraffe", "keyboard", "mouse", "speaker", "studio", "women", "lady", "telephone",
"ukulele", "guitar", "saxophone", "tempest", "tool", "armageddon", "planet", "lucid", "dreams", "mother", "father", "godfather", "covenant",
"microphone", "band", "fight", "anxiety", "card", "soccer", "tribute"];
var theWord;
var mysteryWord;
var lives = 7;
var userScore = 0;
var compScore = 0;
var word ="";

function generateWord(){ //This functions generates a random word from the array words and it runs the function hiddenWord() aswell
    var snd = new Audio("/Sounds/play.mp3"); // plays sound at start
    snd.play(); 
    hideOrShowElement("play");
    hideOrShowElement("usercontrols"); // shows the form
    document.getElementById('chances').innerHTML = '';
    document.getElementById('result').innerHTML = '';
    lives = 7;
    var num = Math.floor(Math.random()*words.length);
    var randWord = words[num];
    theWord = randWord;
    hiddenWord();

    var external = document.getElementById("word").innerHTML = mysteryWord; //displays the _ _ _ _ _
    //document.getElementById('userinput').innerHTML = '';
    
    //document.getElementById("clickbutton").style.display = "block"; //to display click button again after being hidden when winning or losing
}

function checkWord(){
    
    
    if (lives !=0) {
        var letter = document.getElementById('letter').value;
        
        //var word = document.getElementById('word').value;
        //word = word.toLowerCase();

        letter = letter.toLowerCase();
        if (letter!=""){
            var check = false;
            for (i=0; i<theWord.length; i++){

                if (letter === theWord.charAt(i)){
                   
                    //mysteryWord.charAt(i) = letter;
                    mysteryWord = setCharAt(mysteryWord,i,theWord.charAt(i));
                    var external = document.getElementById("word").innerHTML = mysteryWord;//displays the correct letter
                        if (mysteryWord === theWord){
                            document.getElementById('result').innerHTML = 'YOU WIN!'
                            userScore = userScore+1;
                            var x = document.getElementById("userscore");
                            x.innerHTML = userScore;
                            hideOrShowElement("usercontrols");// hides the form 
                            hideOrShowElement("play"); //shows the play button again
                            var snd = new Audio("/Sounds/play.mp3"); // plays sound at start
                            snd.play();
                            
                                                        

                        }
                
                    
                    check = true;
                }
            }
            if (check === false){
                
                lives = lives - 1;
                switch (lives) {
                    case 6:
                        document.getElementById('chances').innerHTML = '<img src="/Photos/Hangman-0.png">'
                    break;
                    case 5:
                        document.getElementById('chances').innerHTML = '<img src="/Photos/Hangman-1.png">'
                    break;
                    case 4:
                        document.getElementById('chances').innerHTML = '<img src="/Photos/Hangman-2.png">'
                    break;
                    case 3:
                        document.getElementById('chances').innerHTML = '<img src="/Photos/Hangman-3.png">'
                    break;
                    case 2:
                        document.getElementById('chances').innerHTML = '<img src="/Photos/Hangman-4.png">'
                    break;
                    case 1:
                        document.getElementById('chances').innerHTML = '<img src="/Photos/Hangman-5.png">'
                    break;
                    case 0:
                        document.getElementById('chances').innerHTML = '<img src="/Photos/Hangman-6.png">'
                        document.getElementById('result').innerText = 'You Loose!'
                        var snd = new Audio("/Sounds/loss2.mp3"); // plays sound at start
                        snd.play();
                        document.getElementById("word").innerHTML = theWord;
                        compScore = compScore+1;
                        var y = document.getElementById("computerscore");
                        y.innerHTML = compScore;
                        hideOrShowElement("usercontrols"); // hides the form
                        hideOrShowElement("play"); //shows the play button again

                    break;  
                    default:
                    text = "No value found";
                }
                
                //console.log(lives);
                var snd = new Audio("/Sounds/loss1.mp3"); // plays sound 
                snd.play();
            }
        } 

        
    } 

   


}
function hiddenWord(){ //This function converts the random word generated in the generateWord() function and converts it into mystery letters
    mysteryWord = "";
    for (i=0; i<theWord.length; i++){
        
        mysteryWord = mysteryWord + "_";
    }
    //console.log(mysteryWord);
}
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

function hideOrShowElement(x) { // this functions is used to hide a particular form or buttons at a specific point
    var x = document.getElementById(x);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }