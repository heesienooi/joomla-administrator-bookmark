javascript:(function() {
	var postfix = '/administrator?butterfly',
		url = location.href,
		xmlhttp = new XMLHttpRequest();

	url = url.replace(/[^\/]+?\.php[?\/]?/g, '');

	var paths = url.split('/');
	for ( var path; path = paths.pop(); ) {
		url = url.slice(0, (url.length - path.length) - 1);
		xmlhttp.open('GET', url + postfix, false);
		xmlhttp.send();
		if (xmlhttp.status = 200) break;
	}

	url = url.replace(/\/$/, '');

	window.open(url + postfix, '_blank');
})();
