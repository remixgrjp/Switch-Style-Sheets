const tagStyleD = document.getElementById( 'tagStyleD' );
const tagStyleL = document.getElementById( 'tagStyleL' );
const keySave = 'mode';/* localStorage key */

setTheme( loadStorage() );

function setThemeLite(){
	tagStyleD.disabled = true;
	tagStyleL.disabled = false;
	saveStorage( 1 );
}
function setThemeDark(){
	tagStyleL.disabled = true;
	tagStyleD.disabled = false;
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
