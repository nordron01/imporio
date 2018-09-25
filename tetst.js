$( document ).ready(function() {
console.log( "document loaded" );
		



$('#quear').css('width',2300);
 $('#quear').css('height',2300);
 $('#quear').css('border', '2px solid black');
 $('#quear').css('position', 'block');
 $('#quear').css('left', '350px');







var n = 100, m = 100;
var mas = [];
for (var i = 0; i < m; i++){
    mas[i] = [];
   for (var j = 0; j < n; j++){
        mas[i][j] = 0;
     var    kva2 = '<div id="w'+i+'h'+j+'">     </div>';
    $("#quear").append(kva2);
    $('#w'+i+'h'+j).css('width',20);
 	$('#w'+i+'h'+j).css('height',20);
 	$('#w'+i+'h'+j).css('border', '1px solid green');
    //$('#w'+i+j).css('position', 'relative');
    $('#w'+i+'h'+j).css('display', 'block');
 	$('#w'+i+'h'+j).css('float', 'left');

}

}
});