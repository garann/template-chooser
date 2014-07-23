var engines = [
		{
			name: "dom.js",
			link: "https://github.com/medikoo/domjs",
			link_text: "github",
			size: "",
			traits: [ "client-side","server-side","logicful","compile","dom","not-format" ]
		},
		{
			name: "DOMly",
			link: "https://github.com/lazd/DOMly/",
			link_text: "github",
			size: "0k",
			traits: [ "client-side","logicful","speedy","compile","dom","format" ]
		},
		{
			name: "doT.js",
			link: "http://olado.github.com/doT/",
			link_text: "project",
			size: "2.742k",
			traits: [ "client-side","server-side","logicful","speedy","compile","parts","string","format" ]
		},
		{
			name: "dust.js (LinkedIn)",
			link: "http://github.com/linkedin/dustjs/",
			link_text: "github",
			size: "9.3k",
			traits: [ "client-side","server-side","logicish","compile","parts","string","format" ]
		},
		{
			name: "EJS",
			link: "http://embeddedjs.com/",
			link_text: "project",
			size: "9.8k",
			traits: [ "client-side","server-side","logicful","compile","parts","string","format" ]
		},
		{
			name: "Handlebars.js",
			link: "http://handlebarsjs.com/",
			link_text: "project",
			size: "",
			traits: [ "client-side","server-side","logicish","compile","parts","string","format" ]
		},
		{
			name: "Hogan.js",
			link: "http://twitter.github.com/hogan.js/",
			link_text: "project",
			size: "2.5k",
			traits: [ "client-side","server-side","logicish","compile","parts","string","format" ]
		},
		{
			name: "ICanHaz.js",
			link: "http://icanhazjs.com/",
			link_text: "project",
			size: "5.445k",
			traits: [ "client-side","logicish","parts","string","format" ]
		},
		{
			name: "Jade templates",
			link: "https://github.com/visionmedia/jade",
			link_text: "github",
			size: "39.687k",
			traits: [ "client-side","server-side","logicish","compile","parts","string","not-format" ]
		},
		{
			name: "JsRender",
			link: "http://borismoore.github.com/jsrender/demos/index.html",
			link_text: "project",
			size: "30.709k",
			traits: [ "client-side","server-side","logicish","compile","parts","string","format" ]
		},
		{
			name: "Markup.js",
			link: "https://github.com/adammark/Markup.js",
			link_text: "github",
			size: "5.1k",
			traits: [ "client-side","server-side","logicish","string","format" ]
		},
		{
			name: "Microtemplating",
			link: "http://ejohn.org/blog/javascript-micro-templating/",
			link_text: "blog post",
			size: "1k",
			traits: [ "client-side","server-side","logicful","speedy","compile","parts","string","not-format" ]
		},
		{
			name: "Mustache.js",
			link: "https://github.com/janl/mustache.js/",
			link_text: "github",
			size: "14.513k",
			traits: [ "client-side","server-side","logicish","compile","parts","string","format" ]
		},
		{
			name: "Nunjucks",
			link: "https://github.com/jlongster/nunjucks",
			link_text: "github",
			size: "20k",
			traits: [ "client-side","server-side","logicish","compile","parts","string","format" ]
		},
		{
			name: "Plates.js",
			link: "https://github.com/flatiron/plates",
			link_text: "github",
			size: "10.811k",
			traits: [ "client-side","server-side","logicless","string","format" ]
		},
		{
			name: "pure.js",
			link: "http://beebole.com/pure",
			link_text: "project",
			size: "11.7k",
			traits: [ "client-side","logicless","compile","parts","dom","format" ]
		},
		{
			name: "Transparency",
			link: "http://leonidas.github.com/transparency/",
			link_text: "project",
			size: "5.491k",
			traits: [ "client-side","logicless","dom","format" ]
		},
		{
			name: "Underscore templates",
			link: "http://documentcloud.github.com/underscore/#template",
			link_text: "project",
			size: "4k",
			traits: [ "client-side","server-side","logicful","compile","string","format","speedy" ]
		}
	],
	chooser = {
		choices: []
};

$( function () {
	// render all engines
	var tmpls = doT.template( $( "#tmplsTmpl" ).text() ),
		$eng = $( "div.engines" );
	$eng.html( tmpls( { all: engines } ) );

	$( "div.criteria" ).on( "click", "fieldset", function() {
		var $t = $( this );
		if ( $t.hasClass( "on" ) ) {
			$t.removeClass( "on" );
			removeSibs( $t.find( "label" ) );
			updateClasses();
		} else {
			$t.addClass( "on" );
			var curr = $t.find( "input:checked" );
			if ( curr.length ) {
				setCriteria( curr.parent() );
			}
		}
	});
	$( "div.criteria" ).on( "click", "label", function( e ) {
		e.stopPropagation();
		setCriteria( this );
	});

	function setCriteria( lbl ) {
		var $t = $( lbl ),
			cname = $t.find( "input" ).val(),
			classes;

		removeSibs( $t.siblings( "label" ) );
		if ( cname.length ) {
			$.each( cname.split( "." ), function( i, nm ) {
				if ( chooser.choices.indexOf( nm ) === -1 ) {
					chooser.choices.push( nm );
				}
			});
		}
		updateClasses();
	}

	function removeSibs( sibs ) {
		var removeIndex;

		$( sibs ).each( function() {
			removeIndex = chooser.choices.indexOf( $( this ).find( "input" ).val() );
			if ( removeIndex > -1 ) chooser.choices.splice( removeIndex, 1 );
		});
	}

	function updateClasses() {
		if ( !chooser.choices.length ) {
			$eng.find( "div.remove" ).addClass( "add" ).removeClass( "remove" );
			return;
		}
		classes = chooser.choices.join( "." );
		$eng.find( "div:not(." + classes + ")" ).addClass( "remove" ).removeClass( "add" );
		$eng.find( "div." + classes ).addClass( "add" ).removeClass( "remove" );
	}
});
