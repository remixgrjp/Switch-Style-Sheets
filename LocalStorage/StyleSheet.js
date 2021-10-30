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
	localStorage.mode = i;
}

function loadTheme(){
	return +localStorage.mode;//''->NaN->0
}

function deleteTheme(){
	localStorage.removeItem('mode');
}

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
		deleteTheme();
	}
}
