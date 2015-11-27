// background.js


//Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function() {
	var search_term =  prompt(); 
	chrome.tabs.create({"url": "https://onedrive.live.com/?id=root&qt=search&q=" + search_term});


});





// Called when the user clicks on the browser action.
//chrome.browserAction.onClicked.addListener(function(tab) {
//	chrome.tabs.create({"url": "https://onedrive.live.com/?id=root&qt=search&q=spec"});
//});


