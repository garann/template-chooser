var chooser = {
	choices: []
};

$( function () {
	var $criteria = $( ".criteria" );
	$criteria.on( "click", "fieldset", function() {
		var $t = $( this );
		if ( $t.hasClass( "off" ) ) {
			$t.removeClass( "off" ).addClass( "on" );
		} else {
			$t.addClass( "off" ).removeClass( "on" );
		}
	});
	$criteria.on( "click", "label", function( e ) {
		e.stopPropagation();
		var $t = $( this ),
			cname = $t.find( "input" ).val(),
			$sibs = $t.siblings( "label" ),
			removeIndex,
			classes;
		$sibs.each( function() {
			removeIndex = chooser.choices.indexOf( $( this ).find( "input" ).val() );
			if ( removeIndex > -1 ) chooser.choices.splice( removeIndex, 1 );
		});
		if ( cname.length ) {
			if ( cname.indexOf( "." ) > -1 ) {
				$.each( cname.split( "." ), function( i, nm ) {
					chooser.choices.push( nm );
				});
			} else {
				chooser.choices.push( cname );
			}
		}
		if ( !chooser.choices.length ) return;
		classes = chooser.choices.join( "." );
		$( ".engines div:not(." + classes + ")" ).addClass( "remove" ).removeClass( "add" );
		$( ".engines div." + classes ).addClass( "add" ).removeClass( "remove" );
	});
});