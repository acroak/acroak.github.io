
console.log('JS sheet linked');

$(()=>{
console.log('jquery linked');
// make a containing div for the boardgame
  const $container = $('<div>').addClass('container');
  //$('body').append($container);
// make row for divs
  const $row = $('<div>').addClass('row');
  //$container.append($row);
// make divs(squares) for the players to click
  const $square = $('<div>').addClass('square');
  // $row.append($square);

let moveCounter = 0;
//keep count of the # of moves

//generate the rows and squares
for (var i = 0; i < 3; i++) {
  const $row = $('<div>').addClass('row');
  $row.attr('id','row'+i);
  $container.append($row);
  //console.log($row);

// generate the squares in a for loop
  for (var j = 0; j < 3; j++) {
    const $square = $('<div>').addClass('square').attr('id',j);
    $row.append($square);
    //console.log($square);
  }
}
$('body').append($container);



const winCheck = ()=>{
  const $sq1 = $('#row0').children().eq(0).text();
  const $sq2 = $('#row0').children().eq(1).text();
  const $sq3 = $('#row0').children().eq(2).text();
  const $sq4 = $('#row1').children().eq(0).text();
  const $sq5 = $('#row1').children().eq(1).text();
  const $sq6 = $('#row1').children().eq(2).text();
  const $sq7 = $('#row2').children().eq(0).text();
  const $sq8 = $('#row2').children().eq(1).text();
  const $sq9 = $('#row2').children().eq(2).text();

  //check rows
  if ($sq1 == $sq2 && $sq2 == $sq3 && $sq1 && $sq1 != ""){
    alert("Winner!");
  }else if ($sq4 == $sq5 && $sq5 == $sq6 && $sq6 != ""){
    alert("Winner!");
  }else if ($sq7 == $sq8 && $sq8 == $sq9 && $sq9 != ""){
    alert("Winner!");
  }

  //check columns
  else if ($sq1 == $sq4 && $sq4 == $sq7 && $sq7 != ""){
    alert("Winner!");
  }else if ($sq2 == $sq5 && $sq5 == $sq8 && $sq8 != ""){
    alert("Winner!");
  }else if ($sq3 == $sq6 && $sq6 == $sq9 && $sq9 != ""){
    alert("Winner!");
  }

  //check diagonals
  else if ($sq1 == $sq5 && $sq5 == $sq9 && $sq9 != ""){
    alert("Winner!");
  }else if ($sq7 == $sq5 && $sq5 == $sq3 && $sq3 != ""){
    alert("Winner!");
  }
};



const addMark = (event) =>{
  console.log('clicked');
  if ($(event.target).val() == 0){
    //check to see IF the target has been previously clicked, if it has it has a value of one, if its empty the value is 0
    if(moveCounter % 2 == 0){
      $(event.target).text('O');
      //add an O to the board
      $(event.target).val(1);
      //changes the val of the $square to 1 to track it has been clicked
      $(event.target).addClass('O');
      winCheck();
      moveCounter++;
    }else{
      $(event.target).text('X');
      //add an X to the board
      $(event.target).val(1);
      $(event.target).addClass('X');
      console.log($('#row0').children().eq(0).text());
      winCheck();
      moveCounter++;
    }
  }else{
    alert('select another square');
  }
}

$('.square').on('click', addMark);



})//END DOC READY
