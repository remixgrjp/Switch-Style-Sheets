const keyImg = 'myImg';/* image tag id */
const arrayImg = new Array( "./conf.png","./lite.png","./dark.png" );
const keySave = 'mode';/* localStorage key */

setTheme( loadTheme() );

function setThemeLite(){
	document.getElementById( 'styleDark' ).disabled = true;
	document.getElementById( 'styleLite' ).disabled = false;
}
function setThemeDark(){
	document.getElementById( 'styleLite' ).disabled = true;
	document.getElementById( 'styleDark' ).disabled = false;
}
function setThemeSystem(){
	if( matchMedia( '(prefers-color-scheme: dark)' ).matches ){
		setThemeDark();
	} else {
		setThemeLite();
	}
}
function saveTheme( i ){
	localStorage.setItem( keySave, i );
}
function loadTheme(){
	return +localStorage.getItem( keySave );//''->NaN->0
}
/** Delete localStorage */
function deleteTheme(){
	localStorage.removeItem( keySave );
}

/** Theme 0:System Config, 1:Lite, 2:Dark */
function setTheme( i ){
	switch( i ){
	  case 2:
		setThemeDark();
		saveTheme( 2 );
		break;
	  case 1:
		setThemeLite();
		saveTheme( 1 );
		break;
	  default:
		setThemeSystem();
		saveTheme( 0 );
	}
}

/** Theme 2 -> 1 -> 0 -> 2... */
function switchTheme(){
	var i = loadTheme();
	if( 0 >= i ){
		i = arrayImg.length;
	}
	setTheme( --i );
	document.getElementById( keyImg ).src=arrayImg[i];
}
