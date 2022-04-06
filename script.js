$(function(){
  
  // Fonction globale de lancé de dé --> retourne un chiffre aléatoire entre 1 et 6
  diceResult = function(){
      return Math.floor(Math.random() * (6)) + 1;
    }

  class Joueur{
    constructor(){
      this.nom
      this.nbrPointRound = 0
      this.nbrPointPartie = 0
      // this.currentActivePlayer = false
      }
//Fermeture classe joueur
    }
// Initialisation des joueurs en dehors d'une fonction
    var player1 = new Joueur()
    var player2 = new Joueur()

    
    // Scoring display functions
    updateScoringDisplayP1 = function(){
      $('.player1 .round').text(`Score du round : ${player1.nbrPointRound}`)
      $('.player1 .partie').text(`Score de la partie en cours : ${player1.nbrPointPartie}`)
    }
    updateScoringDisplayP2 = function(){
      $('.player2 .round').text(`Score du round : ${player2.nbrPointRound}`)
      $('.player2 .partie').text(`Score de la partie en cours : ${player2.nbrPointPartie}`)
    }
    
    // Dice value display function
    updateDiceDisplayP1 = function(diceValue){
      switch (diceValue){
        case 1:
          $('.player1 .dice').html('<i class="bi bi-dice-1-fill red"></i>');
          break;
        case 2:
          $('.player1 .dice').html('<i class="bi bi-dice-2-fill"></i>');
          break;
        case 3:
          $('.player1 .dice').html('<i class="bi bi-dice-3-fill"></i>');
          break;
        case 4:
          $('.player1 .dice').html('<i class="bi bi-dice-4-fill"></i>');
          break;
        case 5:
          $('.player1 .dice').html('<i class="bi bi-dice-5-fill"></i>');
          break;
        case 6:
          $('.player1 .dice').html('<i class="bi bi-dice-6-fill"></i>');
          break;
        default : 
        console.log ('Merci d\'utiliser un dé à 6 faces')
      }
    }
    updateDiceDisplayP2 = function(diceValue){
      switch (diceValue){
        case 1:
          $('.player2 .dice').html('<i class="bi bi-dice-1-fill red"></i>');
          break;
        case 2:
          $('.player2 .dice').html('<i class="bi bi-dice-2-fill"></i>');
          break;
        case 3:
          $('.player2 .dice').html('<i class="bi bi-dice-3-fill"></i>');
          break;
        case 4:
          $('.player2 .dice').html('<i class="bi bi-dice-4-fill"></i>');
          break;
        case 5:
          $('.player2 .dice').html('<i class="bi bi-dice-5-fill"></i>');
          break;
        case 6:
          $('.player2 .dice').html('<i class="bi bi-dice-6-fill"></i>');
          break;
        default : 
        console.log ('Merci d\'utiliser un dé à 6 faces')
      }
    }

// P2 Dice rolling display function trials
// diceRollingP2 = function(){
//   $('.player2 .dice').html('<i class="bi bi-dice-1-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-2-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-3-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-4-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-5-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-6-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-5-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-4-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-3-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-2-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-1-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-2-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-3-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-4-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-5-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-6-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-5-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-4-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-3-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-2-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-1-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-2-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-3-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-4-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-5-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-6-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-5-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-4-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-3-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-2-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-1-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-2-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-3-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-4-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-5-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-6-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-5-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-4-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-3-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-2-fill black"></i>');
//   $('.player2 .dice').html('<i class="bi bi-dice-1-fill black"></i>');
// }

    // Display or hide player 1 actions buttons
    displayButtonsP1 = function(){
      $('#BtnEndRoundP1').removeClass('invisible')
      $('#BtnRollDiceP1').removeClass('invisible')
    }

    hideButtonsP1 = function(){
      $('#BtnEndRoundP1').addClass('invisible')
      $('#BtnRollDiceP1').addClass('invisible')
    }  
    // Display or hide player 2 actions buttons
    displayButtonsP2 = function(){
      $('#BtnEndRoundP2').removeClass('invisible')
      $('#BtnRollDiceP2').removeClass('invisible')
    }

    hideButtonsP2 = function(){
      $('#BtnEndRoundP2').addClass('invisible')
      $('#BtnRollDiceP2').addClass('invisible')
    }  

    // End game management function
    endGame = function(){
      if (player1.nbrPointPartie > 100){
        //code victoire player 1
        hideButtonsP1()
        hideButtonsP2()
        alert(`Bravo !! ${player1.nom} a gagné la partie !`)
      } else if (player2.nbrPointPartie > 100){
        //code victoire player 2
        hideButtonsP1()
        hideButtonsP2()
        alert(`Bravo !! ${player2.nom} a gagné la partie !`)
      } 
    }

    //Initialisation of both players score
    updateScoringDisplayP1()
    updateScoringDisplayP2()



//Initialisation grace au bouton new game
$('#BtnNewGame').click(function(){
  //window.prompt('Saisir le nom du 1er joueur')
  player1.nom = window.prompt('Saisir le nom du 1er joueur')
  player2.nom = window.prompt('Saisir le nom du 2nd joueur')
  $('.player1 h5').text(player1.nom)
  $('.player2 h5').text(player2.nom)
  displayButtonsP1()
  hideButtonsP2()
})

//Lancé de dé de player1
$('#BtnRollDiceP1').click(function(){
  var diceValue = diceResult()
  console.log(`la valeur du dé est ${diceValue}`)
  updateDiceDisplayP1(diceValue)
  if (diceValue === 1){
    player1.nbrPointRound = 0
    updateScoringDisplayP1()
    hideButtonsP1()
    displayButtonsP2()
  } else {
    player1.nbrPointRound += diceValue
    updateScoringDisplayP1()
  }
})

//Lancé de dé de player2
$('#BtnRollDiceP2').click(function(){
  var diceValue = diceResult()
  console.log(`la valeur du dé est ${diceValue}`)
  updateDiceDisplayP2(diceValue)
  if (diceValue === 1){
    player2.nbrPointRound = 0
    updateScoringDisplayP2()
    hideButtonsP2()
    displayButtonsP1()
  } else {
    player2.nbrPointRound += diceValue
    updateScoringDisplayP2()
  }
})

// Prise des points du round pour player1
$('#BtnEndRoundP1').click(function(){
  player1.nbrPointPartie += player1.nbrPointRound
  player1.nbrPointRound = 0
  updateScoringDisplayP1()
  hideButtonsP1()
  displayButtonsP2()
  endGame()
})

// Prise des points du round pour player2
$('#BtnEndRoundP2').click(function(){
  player2.nbrPointPartie += player2.nbrPointRound
  player2.nbrPointRound = 0
  updateScoringDisplayP2()
  hideButtonsP2()
  displayButtonsP1()
  endGame()
})


// Fermeture du jQuery
  })