$(()=>{
//================================welcome modal=================================
  // Grabbing About the Game button
  const $openBtn = $('#openModal');

  // Grabbing modal element
  const $modal = $('#modal');

  // Grabbing close button
  const $closeBtn = $('#close');

  // Event handler to open the modal
  const openModal = () =>{
    $modal.css('display', 'block');
  }

  // Event handler to close the modal
  const closeModal = () =>{
    $modal.css('display', 'none');
  }

  //Add event listener to About the Game button
  $openBtn.on('click', openModal);

  //Add event listener to Close button
  $closeBtn.on('click', closeModal);

//======================================Win Modal===============================
  // Grabbing modal element
  const $winModal = $('#winModal');
  // Grabbing close button
  const $closeBtnWin = $('#closeWin');

  // Event handler to open the modal
  const openWinModal = () =>{
    $winModal.css('display', 'block');
  }

  // Event handler to close the modal
  const closeWinModal = () =>{
    $winModal.css('display', 'none');
  }

  $closeBtnWin.on('click', closeWinModal);
//====================================Lose Modal================================
  // Grabbing modal element
  const $loseModal = $('#loseModal');

  // Grabbing close button
  const $closeBtnLose = $('#closeLose');

  // Event handler to open the modal
  const openLoseModal = () =>{
    $loseModal.css('display', 'block');
  }

  // Event handler to close the modal
  const closeLoseModal = () =>{
    $loseModal.css('display', 'none');
  }

  $closeBtnLose.on('click', closeLoseModal);

//================================Tie Modal=====================================

  // Grabbing modal element
  const $tieModal = $('#tieModal');

  // Grabbing close button
  const $closeTieModalBtn = $('#closeTieModalBtn');

  // Event handler to open the modal
  const openTieModal = () =>{
    $tieModal.css('display', 'block');
  }

  // Event handler to close the modal
  const closeTieModal = () =>{
    $tieModal.css('display', 'none');
  }

  //Add event listener to Close button
  $closeTieModalBtn.on('click', closeTieModal);
//============================BLACKJACK Modal===================================
    // Grabbing modal element
    const $blackJackModal = $('#blackJackModal');

    // Grabbing close button
    const $closeBtnBlackJack = $('#closeBlackJack');

    // Event handler to open the modal
    const openBlackJackModal = () =>{
      $blackJackModal.css('display', 'block');
    }

    // Event handler to close the modal
    const closeBlackJackModal = () =>{
      $blackJackModal.css('display', 'none');
    }

    $closeBtnBlackJack.on('click', closeBlackJackModal);

//================================Game Logic Constants==========================
const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];

const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

let deck = [];

let playerHand = [];
let playerScore = 0;
let playerClickCounter = 0;
let playerMoney = 500;
let gotJack = false;

let dealerHand = [];
let dealerSecondCard = "";
let dealerScore = 0;
let dealerClickCounter = 0;

let whoseTurnIsIt = "";
let bank = 0;


// find the Jack of Spades for ultimate win-screen
const findJack = () =>{
  playerHand.find(function(element) {
    return element == 'JSpades';
    gotJack = true;
  })
};

//function generates the deck array
const createDeck = () =>{
  for (var i = 0 ; i < values.length; i++){
    for (var j = 0; j < suits.length; j++) {
      deck.push(values[i] + suits[j]);
    } // end secondary for loop in create deck
  } // end primary for loop in create deck
};//end create deck

//adds the value of the card to player/dealer score and append card image to player area
const generateValueOfCard = (x) =>{
  let currentPlayArea = ('.'+ whoseTurnIsIt +'s-area');
  if (whoseTurnIsIt == whoseTurnIsIt){
    if (x == "2Spades" || x == "2Clubs" || x == "2Hearts" || x == "2Diamonds"){
        if (whoseTurnIsIt == "player"){
          playerScore += 2;
        } else{
          dealerScore += 2;
        }

        if (x == "2Spades"){
          $(currentPlayArea).append('<img src="images/spades/2spades.jpg" alt="2 of Spades" />');
        }else if (x == "2Clubs") {
          $(currentPlayArea).append('<img src="images/clubs/2club.jpg" alt="2 of Clubs" />');
        }else if (x == "2Hearts"){
          $(currentPlayArea).append('<img src="images/hearts/2heart.jpg" alt="2 of Hearts" />');
        }else if (x == "2Diamonds"){
          $(currentPlayArea).append('<img src="images/diamonds/2diamond.jpg" alt="2 of Diamonds" />');
        }
    } else if (x == "3Spades" || x == "3Clubs" || x == "3Hearts" || x == "3Diamonds") {
      if (whoseTurnIsIt == "player"){
        playerScore += 3;
      } else{
        dealerScore += 3;
      }

      if (x == "3Spades"){
        $(currentPlayArea).append('<img src="images/spades/3spades.jpg" alt="3 of Spades" />');
      }else if (x == "3Clubs") {
        $(currentPlayArea).append('<img src="images/clubs/3club.jpg" alt="3 of Clubs" />');
      }else if (x == "3Hearts"){
        $(currentPlayArea).append('<img src="images/hearts/3heart.jpg" alt="3 of Hearts" />');
      }else if (x == "3Diamonds"){
        $(currentPlayArea).append('<img src="images/diamonds/3diamond.jpg" alt="3 of Diamonds" />');
      }
    } else if (x == "4Spades" || x == "4Clubs" || x == "4Hearts" || x == "4Diamonds") {
      if (whoseTurnIsIt == "player"){
        playerScore += 4;
      } else{
        dealerScore += 4;
      }

      if (x == "4Spades"){
        $(currentPlayArea).append('<img src="images/spades/4spades.jpg" alt="4 of Spades" />');
      }else if (x == "4Clubs") {
        $(currentPlayArea).append('<img src="images/clubs/4club.jpg" alt="4 of Clubs" />');
      }else if (x == "4Hearts"){
        $(currentPlayArea).append('<img src="images/hearts/4heart.jpg" alt="4 of Hearts" />');
      }else if (x == "4Diamonds"){
        $(currentPlayArea).append('<img src="images/diamonds/4diamond.jpg" alt="4 of Diamonds" />');
      }
    } else if (x == "5Spades" || x == "5Clubs" || x == "5Hearts" || x == "5Diamonds") {
      if (whoseTurnIsIt == "player"){
        playerScore += 5;
      } else{
        dealerScore += 5;
      }

      if (x == "5Spades"){
        $(currentPlayArea).append('<img src="images/spades/5spades.jpg" alt="5 of Spades" />');
      }else if (x == "5Clubs") {
        $(currentPlayArea).append('<img src="images/clubs/5club.jpg" alt="5 of Clubs" />');
      }else if (x == "5Hearts"){
        $(currentPlayArea).append('<img src="images/hearts/5heart.jpg" alt="5 of Hearts" />');
      }else if (x == "5Diamonds"){
        $(currentPlayArea).append('<img src="images/diamonds/5diamond.jpg" alt="5 of Diamonds" />');
      }
    } else if (x == "6Spades" || x == "6Clubs" || x == "6Hearts" || x == "6Diamonds") {
      if (whoseTurnIsIt == "player"){
        playerScore += 6;
      } else{
        dealerScore += 6;
      }

      if (x == "6Spades"){
        $(currentPlayArea).append('<img src="images/spades/6spades.jpg" alt="6 of Spades" />');
      }else if (x == "6Clubs") {
        $(currentPlayArea).append('<img src="images/clubs/6club.jpg" alt="6 of Clubs" />');
      }else if (x == "6Hearts"){
        $(currentPlayArea).append('<img src="images/hearts/6heart.jpg" alt="6 of Hearts" />');
      }else if (x == "6Diamonds"){
        $(currentPlayArea).append('<img src="images/diamonds/6diamond.jpg" alt="6 of Diamonds" />');
      }
    } else if (x == "7Spades" || x == "7Clubs" || x == "7Hearts" || x == "7Diamonds") {
      if (whoseTurnIsIt == "player"){
        playerScore += 7;
      } else{
        dealerScore += 7;
      }

      if (x == "7Spades"){
        $(currentPlayArea).append('<img src="images/spades/7spades.jpg" alt="7 of Spades" />');
      }else if (x == "7Clubs") {
        $(currentPlayArea).append('<img src="images/clubs/7club.jpg" alt="7 of Clubs" />');
      }else if (x == "7Hearts"){
        $(currentPlayArea).append('<img src="images/hearts/7heart.jpg" alt="7 of Hearts" />');
      }else if (x == "7Diamonds"){
        $(currentPlayArea).append('<img src="images/diamonds/7diamond.jpg" alt="7 of Diamonds" />');
      }
    } else if (x == "8Spades" || x == "8Clubs" || x == "8Hearts" || x == "8Diamonds") {
      if (whoseTurnIsIt == "player"){
        playerScore += 8;
      } else{
        dealerScore += 8;
      }

      if (x == "8Spades"){
        $(currentPlayArea).append('<img src="images/spades/8spades.jpg" alt="8 of Spades" />');
      }else if (x == "8Clubs") {
        $(currentPlayArea).append('<img src="images/clubs/8club.jpg" alt="8 of Clubs" />');
      }else if (x == "8Hearts"){
        $(currentPlayArea).append('<img src="images/hearts/8heart.jpg" alt="8 of Hearts" />');
      }else if (x == "8Diamonds"){
        $(currentPlayArea).append('<img src="images/diamonds/8diamond.jpg" alt="8 of Diamonds" />');
      }
    } else if (x == "9Spades" || x == "9Clubs" || x == "9Hearts" || x == "9Diamonds") {
      if (whoseTurnIsIt == "player"){
        playerScore += 9;
      } else{
        dealerScore += 9;
      }

      if (x == "9Spades"){
        $(currentPlayArea).append('<img src="images/spades/9spades.jpg" alt="9 of Spades" />');
      }else if (x == "9Clubs") {
        $(currentPlayArea).append('<img src="images/clubs/9club.jpg" alt="9 of Clubs" />');
      }else if (x == "9Hearts"){
        $(currentPlayArea).append('<img src="images/hearts/9heart.jpg" alt="9 of Hearts" />');
      }else if (x == "9Diamonds"){
        $(currentPlayArea).append('<img src="images/diamonds/9diamond.jpg" alt="9 of Diamonds" />');
      }
    } else if (x == "ASpades" || x == "AClubs" || x == "AHearts" || x == "ADiamonds") {
      if (whoseTurnIsIt == "player"){
        playerScore += 11;
      } else{
        dealerScore += 11;
      }

      if (x == "ASpades"){
        $(currentPlayArea).append('<img src="images/spades/Aspades.jpg" alt="A of Spades" />');
      }else if (x == "AClubs") {
        $(currentPlayArea).append('<img src="images/clubs/Aclub.jpg" alt="A of Clubs" />');
      }else if (x == "AHearts"){
        $(currentPlayArea).append('<img src="images/hearts/Aheart.jpg" alt="A of Hearts" />');
      }else if (x == "ADiamonds"){
        $(currentPlayArea).append('<img src="images/diamonds/Adiamond.jpg" alt="A of Diamonds" />');
      }
    } else {
      if (whoseTurnIsIt == "player"){
        playerScore += 10;
      } else{
        dealerScore += 10;
      }

      if (x == "KSpades"){
        $(currentPlayArea).append('<img src="images/spades/Kspades.jpg" alt="King of Spades" />');
      }else if (x == "KClubs") {
        $(currentPlayArea).append('<img src="images/clubs/Kclub.jpg" alt="King of Clubs" />');
      }else if (x == "KHearts"){
        $(currentPlayArea).append('<img src="images/hearts/Kheart.jpg" alt="King of Hearts" />');
      }else if (x == "KDiamonds"){
        $(currentPlayArea).append('<img src="images/diamonds/Kdiamond.jpg" alt="King of Diamonds" />');
      }else if (x == "QSpades"){
        $(currentPlayArea).append('<img src="images/spades/Qspades.jpg" alt="Queen of Spades" />');
      }else if (x == "QClubs") {
        $(currentPlayArea).append('<img src="images/clubs/Qclub.jpg" alt="Queen of Clubs" />');
      }else if (x == "QHearts"){
        $(currentPlayArea).append('<img src="images/hearts/Qheart.jpg" alt="Queen of Hearts" />');
      }else if (x == "QDiamonds"){
        $(currentPlayArea).append('<img src="images/diamonds/Qdiamond.jpg" alt="Queen of Diamonds" />');
      }else if (x == "JSpades"){
        $(currentPlayArea).append('<img src="images/spades/Jspades.jpg" alt="Jack of Spades" />');
      }else if (x == "JClubs") {
        $(currentPlayArea).append('<img src="images/clubs/Jclub.jpg" alt="Jack of Clubs" />');
      }else if (x == "JHearts"){
        $(currentPlayArea).append('<img src="images/hearts/Jheart.jpg" alt="Jack of Hearts" />');
      }else if (x == "JDiamonds"){
        $(currentPlayArea).append('<img src="images/diamonds/Jdiamond.jpg" alt="Jack of Diamonds" />');
      }else if (x == "10Spades"){
        $(currentPlayArea).append('<img src="images/spades/10spades.jpg" alt="10 of Spades" />');
      }else if (x == "10Clubs") {
        $(currentPlayArea).append('<img src="images/clubs/10club.jpg" alt="10 of Clubs" />');
      }else if (x == "10Hearts"){
        $(currentPlayArea).append('<img src="images/hearts/10heart.jpg" alt="10 of Hearts" />');
      }else if (x == "10Diamonds"){
        $(currentPlayArea).append('<img src="images/diamonds/10diamond.jpg" alt="10 of Diamonds" />');
      }
    }
  }else{
    console.log('VALUE ERROR input: ' + x);
  }
}; //end of winCheck

//removes the selected card from the deck array
const removeItem = (array, item) =>{
    for (var i = 0; i < deck.length; i++) {
        if(deck[i]==item){
            deck.splice(i,1);
        }// end remove item if
    }//end remove item for loop
};//end remove item function

//clears the card play area
const clearPlayArea = () =>{
  $('#theBet').empty();
}

//update the player bank
const updatePlayerBank = () =>{
  $('#player-money').empty();
  $('#player-money').append($('<h3>').text(playerMoney));
}

//display the score of the two players under their respective headers
const displayScore = () =>{
  $('#player-total').empty($('<h4>'));
  $('#player-total').append($('<h4>').text(playerScore).attr('id', 'player-total'));
  $('#dealer-total').empty($('<h4>'));
  $('#dealer-total').append($('<h4>').text(dealerScore).attr('id', 'dealer-total'));
}; //end displayScore function

//draws the dealers 2nd card on the initial draw, but keeps its value hidden
const hiddenDealerDraw = () =>{
  //puts random card into dealers hand array
  dealerSecondCard = deck[Math.floor(Math.random()*deck.length-1)];
  //puts random card into the dealers display area
  $('.dealers-area').append('<img src="images/back-of-card.png" alt="back of card" id="hidden-card" />');
  //runs the function that removes selected cards from the deck array, to avoid double draws of the same card
  removeItem(deck, dealerSecondCard);
};//end hiddenDealerDraw function

//player draws a random card and that card is removed from the deck array and the value of card is added to player score
const playerDraw = () =>{
  let randomCard = deck[Math.floor(Math.random()*deck.length-1)];
  //puts random card into players hand array
  playerHand.push(randomCard);
  //runs the function that removes selected cards from the deck array, to avoid double draws of the same card
  removeItem(deck, randomCard);
  generateValueOfCard(randomCard);
  playerClickCounter++;
};//end playerDraw function

//dealer draws a random card and that card is removed from the deck array and the value of card is added to dealer score
const dealerDraw = ()=>{
  let randomCard = deck[Math.floor(Math.random()*deck.length-1)];
  //puts random card into dealers hand array
  dealerHand.push(randomCard);
  //runs the function that removes selected cards from the deck array, to avoid double draws of the same card
  removeItem(deck, randomCard);
  generateValueOfCard(randomCard);
  dealerClickCounter++;
  whoseTurnIsIt = "player";
}//end dealerDraw function

//Function defines the first hand of the game 2 for player, 2 for dealer... one being facedown/hidden
const firstHand = () =>{
  while(playerHand.length < 2){
    whoseTurnIsIt = "player";
    playerDraw();
  } //end player while function
  while(dealerHand.length < 1){
    whoseTurnIsIt = "dealer";
    dealerDraw();
    hiddenDealerDraw();
  } //end dealer while function
  displayScore();
}; //end firstHand function

//checks to see if the player got a natural win by drawing 21 with their first cards
const naturalWin = () =>{
  if (dealerScore == 21){
    openLoseModal();
  } else if (playerScore == 21 && gotJack == true){
    openBlackJackModal();
  }else if (playerScore == 21 ){
    openBlackJackModal();
  }
}//end naturalWin function

//check to see if anyone has 21 or surpassed 21
const winCheck = () =>{
  if (dealerScore == playerScore && playerScore <= 21 && playerScore > 1){
    playerMoney += (bank);
    updatePlayerBank();
    openTieModal();
  } else if (playerScore == 21 && gotJack == true){
    playerMoney += (bank*2);
    updatePlayerBank();
    openBlackJackModal();
  } else if (playerScore == 21){
    playerMoney += (bank*2);
    updatePlayerBank();
    $('#win-modal-textbox').append('<img src="images/jack-smile.png" alt = "Jack Black" id="jack-smile">');
    openWinModal();
  }  else if (playerScore <= 21 && playerScore > dealerScore){
    playerMoney += (bank*2);
    updatePlayerBank();
    openWinModal();
  } else if (playerScore <= 21 && dealerScore > 21){
    playerMoney += (bank*2);
    updatePlayerBank();
    openWinModal();
  } else if (dealerScore == 21){
    bank == 0;
    openLoseModal();
  } else if (dealerScore <= 21 && dealerScore > playerScore){
    bank == 0;
    openLoseModal();
  } else if (dealerScore <= 21 && playerScore > 21){
    bank == 0;
    openLoseModal();
  }
}; //end winCheck function

//shows the hidden card and adds it value to the dealers score
const displayHiddenCard = () =>{
  whoseTurnIsIt = "dealer"
  dealerHand.push(dealerSecondCard);
  $('#hidden-card').remove();
  //puts random card into the dealers display area
  // $('.dealers-area').append($('<div>').text(dealerSecondCard));
  //runs the function that removes selected cards from the deck array, to avoid double draws of the same card
  generateValueOfCard(dealerSecondCard);
  dealerClickCounter++;
}; //end displayHiddenCard function

//checks balance of bank account, if it equals 0 the player loses
const checkBalance = () =>{
  if (playerMoney <= 0){
    openLoseModal();
    $('#lose-modal-textbox').append($('<h3>').text('You\'ve gone Bust! the page will refresh momentarily'));
    setTimeout(function(){window.location.reload();}, 7000);
  }
}//end check balance func
//----------------------------Play Buttons--------------------------------------

//run these scripts when the new hand button is clicked
$('#new-hand').on('click', ()=>{
  //reset all the card containers
  $('.players-area').empty();
  $('.dealers-area').empty();
  $('#jack-smile').remove();
  //generate a deck
  createDeck();
  //draw the first two cards for the dealer and the player
  firstHand();
  //display initial score
  displayScore();
  //see if there was a natural win
  naturalWin();
}); //end how the new hand button click is handled

//when the hit button is clicked run these functions
$('#hit-me').on('click', ()=>{
  whoseTurnIsIt = "player";
    //draw a card for the player
    playerDraw();
    //draw a card for the dealer
    displayScore();
    if (playerScore >= 21){
      displayHiddenCard();
      displayScore();
      winCheck();
    }
});//end how the hit me button is handled when clicked

//when the stay button is clicked run these functions
$('#stay').on('click', ()=>{
  whoseTurnIsIt = "dealer";
  //dealerClickCounter < playerClickCounter
    while (dealerScore <= playerScore){
      if (dealerHand.length == 1){
        displayHiddenCard();
        displayScore();
      } else {
        whoseTurnIsIt = "dealer";
          dealerDraw();
          displayScore();
      }//end if statement
    }//end while loop
  findJack();
  winCheck();
  checkBalance();
}); //end how the stay button is handled when clicked

//run these scripts when the new round button is clicked
$('#new-round').on('click', ()=>{
  $('.players-area').empty();
  $('#player-total').empty($('<h4>'));
  $('.dealers-area').empty();
  $('#dealer-total').empty($('<h4>'));
  $('#theBet').empty();
  $('#theBet').append($('<h3>').text('0'));
  $('#jack-smile').remove();
  playerHand = [];
  playerScore = 0;
  playerClickCounter = 0;
  gotJack = false;
  dealerHand = [];
  dealerSecondCard = "";
  dealerScore = 0;
  dealerClickCounter = 0;
  whoseTurnIsIt = "";
  bank = 0;
  checkBalance();

})

//----------------------------Chip Buttons--------------------------------------
$('#player-money').append($('<h3>').text(playerMoney));

$('#chip5').on('click', ()=>{
  bank += 5;
  playerMoney -=5;
  $('#theBet').empty();
  $('#theBet').append($('<h3>').text(bank));
  $('#player-money').empty();
  $('#player-money').append($('<h3>').text(playerMoney));
});

$('#chip10').on('click', ()=>{
  bank += 10;
  playerMoney -=10;
  $('#theBet').empty();
  $('#theBet').append($('<h3>').text(bank));
  $('#player-money').empty();
  $('#player-money').append($('<h3>').text(playerMoney));
});

$('#chip25').on('click', ()=>{
  bank += 25;
  playerMoney -=25;
  $('#theBet').empty();
  $('#theBet').append($('<h3>').text(bank));
  $('#player-money').empty();
  $('#player-money').append($('<h3>').text(playerMoney));
});

$('#chip50').on('click', ()=>{
  bank += 50;
  playerMoney -=50;
  $('#theBet').empty();
  $('#theBet').append($('<h3>').text(bank));
  $('#player-money').empty();
  $('#player-money').append($('<h3>').text(playerMoney));
});

$('#chip100').on('click', ()=>{
  bank += 100;
  playerMoney -=100;
  $('#theBet').empty();
  $('#theBet').append($('<h3>').text(bank));
  $('#player-money').empty();
  $('#player-money').append($('<h3>').text(playerMoney));
});

})//end doc ready function
