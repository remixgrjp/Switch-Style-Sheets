const tagStyleDark = document.getElementById( 'styleDark' );
const tagStyleLite = document.getElementById( 'styleLite' );

setTheme( loadCookie() );

function setThemeLite(){
	tagStyleDark.disabled = true;
	tagStyleLite.disabled = false;
}
function setThemeDark(){
	tagStyleLite.disabled = true;
	tagStyleDark.disabled = false;
}
function setThemeSystem(){
	if( matchMedia( '(prefers-color-scheme: dark)' ).matches ){
		setThemeDark();
	} else {
		setThemeLite();
	}
}

function saveCookie( i ){
	var expire = new Date();
	expire.setTime( expire.getTime() + 1000 * 3600 * 24 * 365 );
	document.cookie = "myTheme=" + i + '; expires=' + expire.toUTCString();
}

function loadCookie(){
	var s = document.cookie.replace(/(?:(?:^|.*;s*)myTheme*=s*([^;]*).*$)|^.*$/, "$1");
	return +s;//''->NaN->0
}

function deleteCookie(){
	document.cookie = "myTheme=; expires=0";
}

function setTheme( i ){
	switch( i ){
	  case 2:
		setThemeDark();
		saveCookie( 2 );
		break;
	  case 1:
		setThemeLite();
		saveCookie( 1 );
		break;
	  default:
		setThemeSystem();
		deleteCookie();
	}
}
