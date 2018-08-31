var questionsArray=[
    {question: "How many chambers are there in a dog’s heart?", 
    choices: ["2", "3", "4", "5"],
    answer: "4"},
    {question:"What is the most popular breed of dog in the United States?",
    choices:["Golden Retriever", "German Shepherd", "Labrador Retriever", "Pug"],
    answer: "Labrador Retriever"},
    {question: "Which US state has the highest number of colleges and universities?", 
    choices:["Texas", "California", "New York", "Florida"],
    answer: "California"},
    {question: "What is the most common blood type in humans?",
    choices:["o+", "b", "a+", "i"],
    answer: "o+"},
    {question: "What chemical element gives the blood of a lobster a bluish tint?",
    choices:["Iron", "Zinc", "Copper", "Gold"],
    answer: "Copper"},
    {question:"What does the acronym for the German multinational company BMW stand for?", 
    choices:["Big Motor Wheels", "Bavarian Motor Works", "Beige Master Wheels", "Bordex Machine Works"],
    answer: "Bavarian Motor Works"},
    {question: "Which gland in the human body regulates metabolism?",
    choices:["Adrenal", "Thyroid", "Pituitary", "Pineal"],
    answer: "Thyroid"},
    {question: "Diamonds are made up almost entirely of what element?", 
    choices:["Diamonds", "Carbon", "Boron", "Cadmium"],
    answer: "Carbon"},
    {question: "What does the acronym USB stand for when referring to a computer port?", 
    choices:["Unplugged Service Bit", "Universal Service Box", "Universal Serial Bus", "Universal Secure Box"],
    answer: "Universal Serial Bus"},
    {question: "If a liquor is 100 proof how much alcohol does it contain by percentage?", 
    choices:["100", "75", "50", "25"],
    answer: "50"},
    {question: "What ingredient is added to white sugar to make brown sugar?", 
    choices:["Food coloring", "Cinnamon", "Sugar cane roots", "Molasses"],
    answer: "Molasses"},
    {question: "Founded in 1921, this company was credited with being the first “fast food” chain?",
    choices:["McDonald's", "Burger King", "White Castle", "Wendy's"],
    answer: "White Castle"},
    {question:"Who was the first person selected as Time Magazine’s Man of the Year?", 
    choices:["Charles Lindbergh", "Winston Churchill", "Franklin Roosevelt", "Obama"], 
    answer: "Charles Lindbergh"},
    {question: "Stratus, Cirrus and Cumulus are types of what?", 
    choices:["Food", "Languages", "Rocks", "Clouds"],
    answer: "Clouds"},
    {question: "What is the most abundant element in the earth’s atmosphere?",
    choices:["Oxygen", "Carbon", "Nitrogen", "Carbon Dioxide"], 
    answer: "Nitrogen"},
    {question: "The Statue of Liberty was a gift to the United States from which country?",
    choices:["Germany", "France", "Spain", "Canada"], 
    answer: "France"},
    {question: "Created in 2009, what was the first decentralized cryptocurrency?",
    choices:["Ethereum", "Ripple", "Bitcoin", "Litecoin"], 
    answer: "Bitcoin"},
    {question:"What building is found on the back of a United States 100 dollar bill?",
    choices:["The Capital", "The White House", "Independence Hall", "The Washington Monument"],
    answer: "Independence Hall"},
    {question: "What is the name for the monetary unit used in Thailand?",
    choices:["Thai Baht", "Thai Won", "Thai Dollar", "Thai Coin"], 
    answer: "Thai Baht"},
    {question: "Who was the first woman to be inducted into the Rock and Roll Hall of Fame?",
    choices:["Taylor Swift", "Arethra Franklin", "Tina Turner", "Patti Smith"],
    answer: "Arethra Franklin"},
    {question:"In our solar system, which planet has the shortest day?",
    choices:["Earth", "Jupiter", "Mars", "Uranus"],
    answer: "Jupiter"},
    {question: "Which planet is furthest from the sun?",
    choices:["Venus", "Mercury", "Jupiter", "Neptune"],
    answer: "Neptune"},
    {question: "Dendrophobia is the fear of what?",
    choices:["Teeth", "Spiders", "Outside", "Trees"], 
    answer: "Trees"}
    ];

    //stopInterval(timer);
    //where the questions will be shown
    var panel = $("#panel"); 
    //where correct answer is shown
    var correctAnswer = $("#correct-answer");
    //where choices are displayed
    var choicesSection = $("#answer-choices");
    var currentQuestion = 0;
    var correct= 0; 
    var incorrect = 0; 
    var wrongCounter = $("#wrong-counter");
    var rightCounter= $("#right-counter");



    $(document).ready(function() {
        $(document).on("click", "#id-start", function() {
            // $("#margin").onload(function(){
            //     $("#margin").slideDown("slow");
            //clearInterval(timer)
            loadQuestion();
        })
    });

    // var loadQuestion = function(){
    //     console.log('running')
    //     var question = questionsArray[currentQuestion.question]
    //     panel.append('<button>' + question + '<button>')
    //     currentQuestion++
    // }

    $(document).on('click', '#choicesbutton', function(event) {
        clearInterval(timer)
        clicked(event);
    });


    var seconds = 15;
    var timer = setInterval(function() {
      console.log(seconds);
      document.getElementById("timer").innerHTML=("00:"+seconds);
      seconds--;
      if(seconds < 0) {
        stopInterval()
      }
    }, 1000);
    
    var stopInterval = function() {
      clearInterval(timer);
      incorrect++;
      wrongCounter.html("Questions wrong: " + incorrect);
      panel.html("Time is up!");
      $("#correct-answer").text("The correct answer was: "+ questionsArray[this.currentQuestion].answer)
      setTimeout( function(){ 
        nextQuestion()
      }  , 3000 );
    }

    //load first question
    function loadQuestion () {
    //clearInterval(timer);
      //timer();
      panel.html(questionsArray[this.currentQuestion].question);
      for (var i = 0; i<questionsArray[this.currentQuestion].choices.length; i++){
     choicesSection.append('<button id="choicesbutton">' + questionsArray[this.currentQuestion].choices[i] + '</button>');
      }
    }
    
    //load next question and answer choices while resetting time
    //3 occurences for nextQuestion to run: when player is right, wrong, or out of time 
   function nextQuestion(){
       // setInterval();
         timer;
         currentQuestion++;
         panel.empty()
         choicesSection.empty()
         correctAnswer.empty();
        loadQuestion();      

       // if ([this.currentQuestion].question === questionsArray.length) {
        //    gameOver();
        }
    //}

    function clicked(event) {
        //clearInterval(timer);
    
        if ((event) === questionsArray[this.currentQuestion].answer){
            console.log(event)
          answeredCorrectly();
        } else {
          answeredIncorrectly();
        }
      }

    function answeredIncorrectly() {
        //need if statement to say if answer is not correct do the following
        // if (clicked() !== questionsArray[this.currentQuestion].answer){
      incorrect++;
      $("#wrong-counter").text("Questions wrong: " + incorrect); 
      panel.empty()
      panel.html("Wrong Answer!");
      $("#correct-answer").text("The correct answer was: " + questionsArray[this.currentQuestion].answer);
      setTimeout( function(){ 
        nextQuestion()
      }  , 3000 );
    }

    function answeredCorrectly(){
        clearInterval(timer);
        correct++;
        $("#right-counter").text("Questions right: "+ correct);
        panel.empty()
        panel.html('<h2>Correct!</h2>');
        setTimeout( function(){ 
            nextQuestion()
          }  , 3000 );
        }
   
    

    //notes: want time to start when click on start game, not when page loads
    //need function to evaluate wrong vs right correctly
    //need timer to reset on nextQuestion()
    //need a gameover function
    
function gameOver() {
    clearInterval(timer);
    panel.html("<h2>Game Over!</h2>")
}

