$(document).ready(function() {
  
  var grid = prompt("Enter Grid Size");
  
  makeGrid(grid);

  $('#clear').click(function() {
	
	var grid = prompt("Enter Grid Size");
    $('td').removeClass('highlight');
	$('td').remove();
	$('tr').remove();
    makeGrid(grid);
       
  });
});

function makeGrid (grid) {
  for (i = 1; i <= grid; i++) {
    $('<tr></tr>').appendTo('table');
  }
  for (i = 1; i <= grid; i++) {
    $('<td></td>').appendTo('tr');
  }
  $('td').mouseenter(function() {
    $(this).addClass('highlight');
  });
}
