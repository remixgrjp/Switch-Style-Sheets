const tagStyleDark = document.getElementById( 'styleDark' );
const tagStyleLite = document.getElementById( 'styleLite' );
const keySave = 'mode';/* localStorage key */

setTheme( loadStorage() );

function setThemeLite(){
	tagStyleDark.disabled = true;
	tagStyleLite.disabled = false;
	saveStorage( 1 );
}
function setThemeDark(){
	tagStyleLite.disabled = true;
	tagStyleDark.disabled = false;
	saveStorage( 2 );
}
function setThemeSystem(){
	if( matchMedia( '(prefers-color-scheme: dark)' ).matches ){
		setThemeDark();
	} else {
		setThemeLite();
	}
	saveStorage( 0 );
}

function saveStorage( i ){
	localStorage.mode = i;
}

function loadStorage(){
	return +localStorage.mode;//''->NaN->0
}

function deleteStorage(){
	localStorage.removeItem( keySave );
}

function setTheme( i ){
	switch( i ){
	  case 2:
		setThemeDark();
		break;
	  case 1:
		setThemeLite();
		break;
	  default:
		setThemeSystem();
	}
}
