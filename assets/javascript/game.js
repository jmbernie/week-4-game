      var targetNumber;

      var counter;
      var gameWins;
      var gameLosses;
      var numberOptions = [];
      var crystalNumber;

  function resetGame(){

      targetNumber = (Math.floor(Math.random()*101) + 19);
      $("#number-to-guess").text(targetNumber);


      counter = 0;
      gameWins = 0;
      gameLosses = 0;
      //$("#crystals").empty();


      for (var i = 0; i < 4; i++) { //creates 4 rnd# 1-12 and populates array
        crystalNumber = (Math.ceil(Math.random()*12));
        numberOptions[i] = crystalNumber;
      }

  };



  resetGame();
      for (var i = 0; i < numberOptions.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "http://farm1.static.flickr.com/585/23377281231_caefcb0142.jpg");
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
        $("#crystals").append(imageCrystal);
      }


  $(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#current-total").text(counter);

    if (counter === targetNumber) {
      alert("You win!");
      gameWins++;
      $("#current-wins").text(gameWins);
      resetGame();
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
      gameLosses++;
      $("#current-losses").text(gameLosses);
      resetGame();
    }

  });
