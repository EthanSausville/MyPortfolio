function openOverlay(whichOverlay) {
    document.getElementById(whichOverlay).style.width = "100%";
	$(document.body).addClass("anti-scroll");
}

function closeOverlay(whichOverlay) {
    document.getElementById(whichOverlay).style.width = "0%";
	$(document.body).removeClass("anti-scroll");
}