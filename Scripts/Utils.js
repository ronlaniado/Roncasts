function sendGetRequest(url, callback) {
	var request = new XMLHttpRequest();
	request.open("GET", url, true);
	request.setRequestHeader("Content-Type", "appplication/json");
	request.onreadystatechange = function() {
		if (request.readyState === 4) {
			const errored = request.status !== 200;

			if (errored) console.log(request);

			callback(request, errored);
		}
	};

	request.send();

	return request;
}

export { sendGetRequest };
