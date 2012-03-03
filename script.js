$( function () {
	$( "div.criteria" ).on( "click", "fieldset", function() {
		var $t = $( this );
		if ( $t.hasClass( "off" ) ) {
			$t.removeClass( "off" ).addClass( "on" );
		} else {
			$t.addClass( "off" ).removeClass( "on" );
		}
	});
	$( "div.criteria" ).on( "click", "label", function( e ) {
		e.stopPropagation();
		var cname = $( this ).find( "input" ).val();
		$( "div.engines div:not(." + cname + ")" ).removeClass( "add" ).addClass( "remove" );
		//$( "div.engines div." + cname ).addClass( "add" ).removeClass( "remove" );
	});
});