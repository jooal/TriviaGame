
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
    //15 seconds on counter
        var secondsCounter= 15;
        var panel = $("#panel"); //where the questions will be shown
        var correctAnswer = $("#correct-answer");

        var choicesSection = $("#answer-choices");
        $(document).ready(function() {
            $(document).on("click", "#id-start", function(e) {
                loadQuestion();
            })
        });
        $(document).on('click', '#button', function(e) {
            clicked(e);
        });
    
    var currentQuestion = 0;
    var correct= 0; 
    var incorrect = 0; 
    function timer(){
        var sec = 15;
        var timer = setInterval(function(){
            document.getElementById("timer").innerHTML=("00:"+sec);
            sec--;
            if (sec < 0) {
                clearInterval(timer);
                incorrect++;
                $("#wrong-counter").append(incorrect);
                panel.html("Time is up!");
                $("#correct-answer").text("The correct answer was: "+ questionsArray[this.currentQuestion].answer)
            }
        },);
    }
    
        function loadQuestion () {
            timer();
          panel.html(questionsArray[this.currentQuestion].question);
          for (var i = 0; i<questionsArray[this.currentQuestion].choices.length; i++){
            choicesSection.append('<button id="button">' + questionsArray[this.currentQuestion].choices[i] + '</button>');
          }
        }
       function nextQuestion(){
         timer();
          currentQuestion++;
          panel.empty()
          choicesSection.empty()
          //correctAnswer.empty();
          panel.html(questionsArray[this.currentQuestion].question);
          for (var i = 0; i<questionsArray[this.currentQuestion].choices.length; i++){
            choicesSection.append('<button id="button">' + questionsArray[this.currentQuestion].choices[i] + '</button>');
       
        }
    }
            
        function clicked(e) {
          clearInterval(timer);
      
          if ((e) === questionsArray[this.currentQuestion].answer){
            answeredCorrectly();
          } else {
            answeredIncorrectly();
          }
        }
        function answeredIncorrectly() {
            //need if statement to say if answer is not correct do the following
            // if (clicked() !== questionsArray[this.currentQuestion].answer){
          incorrect++;
          $("#wrong-counter").text(incorrect);
          clearInterval(timer);
          panel.empty()
          panel.html("Wrong Answer!");
          $("#correct-answer").text("The correct answer was: " + questionsArray[currentQuestion].answer);
          setTimeout(nextQuestion(), 3000);
          
        }
        function answeredCorrectly(){
          clearInterval(timer);
          correct++;
          $("#right-counter").text(correct);
          panel.empty()
          panel.html('<h2>Correct!</h2>');
            setTimeout(nextQuestion(), 3000);
          }