
var script = document.createElement('script');
script.src = chrome.runtime.getURL('index.js');
script.defer = true;
script.async = true;
document.head.appendChild(script);
