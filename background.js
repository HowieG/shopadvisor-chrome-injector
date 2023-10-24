let devMode = false;

// Load initial state using Promises
chrome.storage.sync.get('devMode').then((data) => {
	devMode = data.devMode || false;
});

// Listen for changes
chrome.storage.onChanged.addListener((changes) => {
	if ('devMode' in changes) {
		devMode = changes.devMode.newValue;
	}
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (changeInfo.status === 'complete') {
		fetch('https://shopadvisor-embeddable-widget.vercel.app/index.js')
			.then(response => response.text())
			.then(scriptCode => {
				chrome.scripting.executeScript({
					target: { tabId: tabId },
					function: new Function(scriptCode)
				});
			});

	}
});
