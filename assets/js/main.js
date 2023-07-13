console.log('javascript is here')
var timer = 60
const introContainer = document.getElementById("intro"); //find instructions container
var questions = [
    {
        question:'What color is the Sun?',
        answers: ['Green','Blue','Yellow','Purple'],
        rightAnswer: 'Yellow'
    },

    {
        question:'What color is the Sea?',
        answers: ['Pink','Blue','Red','Seafoam Green'],
        rightAnswer: 'Blue'
    }
]
document.getElementById("start-screen").addEventListener('click',function(event){
    event.preventDefault()
    var startscreen = document.getElementById('start-screen')
    startscreen.classList.add('d-none')
    startscreen.classList.remove('d-flex')
    alert('We are moving ahead')
    console.log('We are moving ahead')
   startGame()
})
function startGame() {  
    //introContainer.classList.remove("d-block");
    //introContainer.classList.add("d-none");
    startTimer();
    displayquestion(questions)
  };
  function startTimer() {
    interval=setInterval(() => {
    if(timer<0){
        clearInterval(interval)
        alert("GAME OVER")        
    }    else{
        timer--
        console.log(timer)

    }
    },1000);
  }
    