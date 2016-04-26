/* main */
$(document).ready(function() {

  var grid = prompt("Enter Grid Size");
  
  $('#clear').click(function() {

	var grid = prompt("Enter Grid Size");
        $('td').removeClass('highlight');
	$('td').remove();
	$('tr').remove();
        makeGrid(grid);

  });
});
/* Grid Generator */
function makeGrid (grid) {
  for (i = 1; i <= grid; i++) {
    $('<tr></tr>').appendTo('table');
  }
  for (i = 1; i <= grid; i++) {
    $('<td></td>').appendTo('tr');
  }
  $('td').mouseenter(function() {
    $(this).addClass('highlight');
    $(this).css('background-color', randomColors);
  });
}
/* random color generator */
var randomColors = function randomColors() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ',' + g + ',' + b + ")";
}
