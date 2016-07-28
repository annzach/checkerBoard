'use strict';
//document.ready
$(() => {
  console.log('ready');
  //var square_arr = $('.square');
  //var row_arr=$('.row');
  //console.log(square_arr);
  
  //colorSquares(square_arr);
  createBoard();
  addPieces();
  $('.piece').click(moveplayer);
  

});




  function createBoard() {
  let $rows = [];

  // fill it up
  for(let i = 0; i < 8; i++) {
    let $row = $('<div>').addClass('row');

    // fill it with squares
    for(let j = 0; j < 8; j++) {
      let $square = $('<div>').addClass('square');
      $row.append($square);

       if( (i+j) % 2 == 0 ) {
      $square.addClass('black');
    }
    else {
      $square.addClass('white');
    }
  }

    $rows.push($row);
  }

  $('.game').append($rows);

}

  

function addPieces(){
  $('.white').each(function(i){
    //console.log(this,i);
   if(i<12){
      var $player1Piece = $('<div>').addClass('player1 piece');
      $(this).append($player1Piece);
      

    }
    else if(i>19){
        var $player2Piece = $('<div>').addClass('player2 piece');
      $(this).append($player2Piece);

    
    }
    



  })
}

function moveplayer(){
  // selects the checker
  $(this).fadeOut("slow");
  $(this).fadeIn("slow");
  $('.black').click(event,blackClicked);
  

  move();
  //console.log($(this).keyPre);
  
}

function move(){
  $('piece').slideUp();
}

function blackClicked(event){
    if($h3.text()){
      $h3.text(" ");
    }
    else {
    console.log("black clicked");
    var $h3 =$('<h3>');
    $h3.text("black squares are not allowed");
    //console.log( $h3.text());
    }
   
  
   $("body").append($h3);
}
