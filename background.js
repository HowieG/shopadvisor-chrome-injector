let devMode = false;

// Load initial state
chrome.storage.sync.get('devMode', (data) => {
	devMode = data.devMode || false;
});

// Listen for changes
chrome.storage.onChanged.addListener((changes) => {
	if ('devMode' in changes) {
		devMode = changes.devMode.newValue;
	}
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (changeInfo.status === 'complete') {
		chrome.tabs.executeScript(tabId, { file: 'shopadvisor-injector.js' });
	}
});