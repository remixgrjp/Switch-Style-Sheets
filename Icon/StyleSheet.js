const tagStyleDark = document.getElementById( 'styleDark' );
const tagStyleLite = document.getElementById( 'styleLite' );
const tagBtn = document.getElementById( 'tagBtn' );/* Buttun tag */
const tagImg = document.getElementById( 'tagImg' );/* image tag */
const arrayImg = new Array( "./conf.png","./lite.png","./dark.png" );
const keySave = 'mode';/* localStorage key */

setTheme( loadStorage() );

function saveStorage( i ){
	localStorage.setItem( keySave, i );
	tagImg.src=arrayImg[i];
}
function loadStorage(){
	return +localStorage.getItem( keySave );//''->NaN->0
}
function deleteStorage(){
	localStorage.removeItem( keySave );
}
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

/** Theme 2:Dark, 1:Lite, -:System Config */
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
/** Theme 2 -> 1 -> 0 -> 2... */
tagImg.onclick = function(){
	var i = loadStorage();
	if( 0 >= i ){
		i = arrayImg.length;
	}
	setTheme( --i );
};
/** Delete localStorage */
tagBtn.onclick = function(){
	deleteStorage();
};
