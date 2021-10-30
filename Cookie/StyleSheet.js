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
	var expire = new Date();
	expire.setTime( expire.getTime() + 1000 * 3600 * 24 * 365 );
	document.cookie = "myTheme=" + i + '; expires=' + expire.toUTCString();
}

function loadTheme(){
	var s = document.cookie.replace(/(?:(?:^|.*;s*)myTheme*=s*([^;]*).*$)|^.*$/, "$1");
	return +s;//''->NaN->0
}

function deleteTheme(){
	document.cookie = "myTheme=; expires=0";
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
