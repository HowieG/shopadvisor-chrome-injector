let allowedSites = [];
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

// Load config
fetch('config.json')
	.then(response => response.json())
	.then(config => {
		allowedSites = config.allowedSites;
	});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (changeInfo.status === 'complete') {
		const url = new URL(tab.url);
		if (allowedSites.some(site => url.hostname.endsWith(site))) {
			chrome.tabs.executeScript(tabId, { file: 'shopadvisor-injector.js' });
		}
	}
});
