let allowedSites = [];

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
