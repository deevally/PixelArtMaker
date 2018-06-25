// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


function makeGrid() {

// Your code goes here!
let tabelRC,gridHeight,gridWidth, cell;
 tabelRC=  $("#pixelCanvas");
 gridHeight  =$("#inputHeight").val();
 gridWidth  =$("#inputWidth").val();
// Set the Size of the Grid
tabelRC.children().remove();

for (var i = 1; i <= gridHeight; i++) {
  $('table').append("<tr></tr>");
  for (var j = 1; j <= gridWidth; j++) {
   $('tr:last').append("<td></td>");
   $('td').attr("class", 'cells');

  }
}


//when the color is selected ,change td color.

$(".cells").click(function(event){

  //select color input

  let color =$("#colorPicker").val();
  $(event.target).css("background-color",color);
  
  });

}

let submitSizes =$('input[type="submit"]');

submitSizes.click(function(ev){
  ev.preventDefault();
  makeGrid();
});


