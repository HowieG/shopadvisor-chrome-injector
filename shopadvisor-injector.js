chrome.storage.sync.get('devMode', (data) => {
	const devMode = data.devMode || false;
	const src = devMode
		? 'http://localhost:4173'
		: 'https://shopadvisor-embeddable-widget.vercel.app';

	var script = document.createElement('script');
	script.src = `${src}/index.js?t=${new Date().getTime()}`;
	script.defer = true;
	script.async = true;
	document.head.appendChild(script);

	if (devMode) {
		const devDiv = document.createElement("div");
		devDiv.textContent = "localhost";
		devDiv.style.position = "fixed";
		devDiv.style.top = "0";
		devDiv.style.left = "0";
		devDiv.style.backgroundColor = "#FFDDDD";
		devDiv.style.color = "red";
		devDiv.style.padding = "8px";
		devDiv.style.zIndex = "9999";
		document.body.appendChild(devDiv);
	}
});
