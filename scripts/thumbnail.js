window.addEventListener('load', init);

function init(){
	document.getElementById("smallImages").addEventListener('click',function(event){changeImage(event)});
}

function changeImage(event){
	event = event || window.event;
	
	var targetElement = event.target || event.srcElement;
	
	if (targetElement.getAttribute("src") != null){
		document.getElementById("mainImage").src = targetElement.getAttribute("src");
	}
}