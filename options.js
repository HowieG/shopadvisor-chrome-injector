document.addEventListener('DOMContentLoaded', () => {
	const devModeCheckbox = document.getElementById('devMode');

	// Load saved devMode setting
	chrome.storage.sync.get('devMode', (data) => {
		devModeCheckbox.checked = data.devMode || false;
	});

	// Save devMode setting
	devModeCheckbox.addEventListener('change', () => {
		chrome.storage.sync.set({ devMode: devModeCheckbox.checked });
	});
});
