chrome.storage.sync.get('devMode', (data) => {
	const devMode = data.devMode || false;
	const src = devMode
		? 'http://localhost:4173'
		: 'https://shopadvisor-embeddable-widget.vercel.app';

	var script = document.createElement('script');
	script.src = `${src}/index.js?t=${new Date().getTime()}`;
	document.head.appendChild(script);
});
