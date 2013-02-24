var chooser = {
	choices: []
};

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
		var $t = $( this ),
			cname = $t.find( "input" ).val(),
			sibs = $t.siblings( "label" ),
			removeIndex,
			classes;
		$( sibs ).each( function() {
			removeIndex = chooser.choices.indexOf( $( this ).find( "input" ).val() );
			if ( removeIndex > -1 ) chooser.choices.splice( removeIndex, 1 );
		});
		if ( cname.length ) {
			if ( cname.indexOf( "." ) > -1 ) {
				$.each( cname.split( "." ), function( i, nm ) {
					if ( chooser.choices.indexOf( nm ) === -1 ) {
						chooser.choices.push( nm );
					} else {
						chooser.choices.splice( chooser.choices.indexOf( nm ), 1 );
						$t.removeAttr( "checked" );
					}
				});
			} else {
				if ( chooser.choices.indexOf( cname ) === -1 ) {
					chooser.choices.push( cname );
				} else {
					chooser.choices.splice( chooser.choices.indexOf( cname ), 1 );
					$t.removeAttr( "checked" );
				}
			}
		}
		if ( !chooser.choices.length ) return;
		classes = chooser.choices.join( "." );
		$( "div.engines div:not(." + classes + ")" ).addClass( "remove" ).removeClass( "add" );
		$( "div.engines div." + classes ).addClass( "add" ).removeClass( "remove" );
	});
});
