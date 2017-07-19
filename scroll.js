var marginY = 0;
var destination = 0;
var speed = 20;
var scroller = null;

function initScroll(elementId){
	destination = document.getElementById(elementId).offsetTop;
	
	scroller = setTimeout(function(){
		initScroll(elementId);
	}, 1);

	marginY = marginY + speed;

	if(marginY >= destination){
		clearTimeout(scroller);
	}

	window.scroll(0, marginY);

	console.log(destination);
}

function toTop(){
	scroller = setTimeout(function(){
		toTop();
	}, 1);

	marginY = marginY - speed;

	if(marginY <= 0){
		clearTimeout(scroller);
	}

	window.scroll(0, marginY);
}
function kingsbeach() {
    var mapOptions = {
        center: new google.maps.LatLng(39.236313, -120.031471),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
} 
function sandharbor() {
    var mapOptions = {
        center: new google.maps.LatLng(39.182577, -119.925728),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map1 = new google.maps.Map(document.getElementById("map1"), mapOptions);
} 
function emeraldbay() {
    var mapOptions = {
        center: new google.maps.LatLng(38.957091, -120.094042),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map2 = new google.maps.Map(document.getElementById("map2"), mapOptions);
} 






