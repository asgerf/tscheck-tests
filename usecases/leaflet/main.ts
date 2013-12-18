/// <reference path="leaflet.1.d.ts"/>

// Code is based on quick-start-example.html from Leaflet-0.6 documentation.

// var map = L.map('map').setView([51.505, -0.09], 13);
var map = L.map('map').setView(new L.LatLng(51.505, -0.09), 13); // changed to use LatLng class, because overloaded method is missing from interface

L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
}).addTo(map);


L.marker(new L.LatLng(51.5, -0.09)).addTo(map) // changed to use LatLng class instead of number[]
	.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

L.circle(new L.LatLng(51.508, -0.11), 500, { // changed to use LatLng class instead of number[]
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5
}).addTo(map).bindPopup("I am a circle.");

L.polygon([
	new L.LatLng(51.509, -0.08), // changed to use LatLng class instead of number[]
	new L.LatLng(51.503, -0.06),
	new L.LatLng(51.51, -0.04)
]).addTo(map).bindPopup("I am a polygon.");


var popup = L.popup();

function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
		.openOn(map);
}

map.on('click', onMapClick);

// ------------------ COMPILE ERRORS using leaflet.d.ts

// CHANGES in leaflet.0.d.ts (based on *compiler* messages, not our own tool!)
// class tileLayer --> function tileLayer + module tileLayer
//
// CHANGES in main.ts compared to quick-start-example.html:
// Use L.LatLng class instead of number array, because leaflet.d.ts does not document the number[] overload

// ------------------ WARNINGS in leaflet.0.d.ts
// $ tscheck --no-suggest leaflet.jsnap leaflet.0.d.ts

// L_PREFER_CANVAS: expected boolean but found nothing
// L_NO_TOUCH: expected boolean but found nothing
// L_DISABLE_3D: expected boolean but found nothing
// L.draggable: expected {(element:HTMLElement, dragHandle?:HTMLElement) => L.Draggable} but found nothing [HIGH] [FIX]
// L.CRS.Simple.code: expected string but found nothing [LOW] [FIX]
// L.GeoJSON.coordsToLatlng: expected {(coords:Array<number>, reverse?:boolean) => L.LatLng} but found nothing [HIGH] [FIX]
// L.GeoJSON.coordsToLatlngs: expected {(coords:Array<number>, levelsDeep?:number, reverse?:boolean) => Array<L.LatLng>} but found nothing [HIGH] [FIX]
// L.Path.VML: expected boolean but found nothing
// L.Path.CANVAS: expected boolean but found nothing

// ----------------- TEST CODE
// L.draggable(document.getElementById('map')); // No static type error; runtime error: "Uncaught TypeError: Object #<Object> has no method 'draggable'"
// new L.Draggable(document.getElementById('map')); // Matches documentation; no runtime error

// L.GeoJSON.coordsToLatlng([10,10]) // No static type error; runtime error "Uncaught TypeError: Object function () {...} has no method 'coordsToLatlng'"
// L.GeoJSON.coordsToLatlngs([10,10,20,20]) // No static type error: runtime error "Uncaught TypeError: Object function () {...} has no method 'coordsToLatlngs'"

// L.GeoJSON.coordsToLatLng([10,10]) // (FIX) Static type error "The property 'coordsToLatLng' does not exist on value of type 'typeof L.GeoJSON'", no runtime error

// ------------------ CHANGES in leaflet.1.d.ts 
// - removed non-existing and undocumented `draggable` function
// - fixed typos in coordsToLatlng(s)
// - made L.ICRS.code optional

// ------------------ WARNINGS in leaflet.1.d.ts
// $ tscheck --no-suggest leaflet.jsnap leaflet.1.d.ts

// L_PREFER_CANVAS: expected boolean but found nothing [LOW] [UNFIX]
// L_NO_TOUCH: expected boolean but found nothing [LOW] [UNFIX]
// L_DISABLE_3D: expected boolean but found nothing [LOW] [UNFIX]
// L.Path.VML: expected boolean but found nothing [LOW] [UNFIX]
// L.Path.CANVAS: expected boolean but found nothing [LOW] [UNFIX]

// ----------------- NOTES
// The remaining warnings are of little significance, and are unfixable!
// Add filter for boolean flags?


// ------------------ IMPLEMENTED FILTER
// Ignore warnings on form "expected boolean but found nothing" if the property occurs in a position that cannot be declared optional
// (class members and module members cannot be optional)
//
// This filter removed all the warnings from leaflet.1.d.ts
// The warnings from leaflet.0.d.ts were all preserved, except the 5 warnings also present in leaflet.1.d.ts which were again filtered out
//
// ------------------ WARNINGS in leaflet.0.d.ts AFTER FILTER
// $ tscheck --no-suggest leaflet.jsnap leaflet.0.d.ts
//
// L.draggable: expected {(element:HTMLElement, dragHandle?:HTMLElement) => L.Draggable} but found nothing
// L.CRS.Simple.code: expected string but found nothing
// L.GeoJSON.coordsToLatlng: expected {(coords:Array<number>, reverse?:boolean) => L.LatLng} but found nothing
// L.GeoJSON.coordsToLatlngs: expected {(coords:Array<number>, levelsDeep?:number, reverse?:boolean) => Array<L.LatLng>} but found nothing

