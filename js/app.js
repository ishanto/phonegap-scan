// Phonegap Barcode scanner
// Author: Umer Pasha
// Date: 8/26/14

var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {

	document.querySelector("#startScan").addEventListener("touchend", startScan, false);
	resultDiv = document.querySelector("#results");
	

}

function startScan() {

/*	cordova.plugins.diagnostic.isCameraPresent(function(present){
    console.log("Camera is " + (present ? "present" : "absent"));
	//alert(""Camera is " + (present ? "present" : "absent")");
}, function(error){
    console.error("The following error occurred: "+error);
	//alert("The following error occurred: "+error);
});*/
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			var s = "Result: " + result.text + "<br/>" +
			"Format: " + result.format + "<br/>" +
			"Cancelled: " + result.cancelled;
			resultDiv.innerHTML = s;
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}
	);

}