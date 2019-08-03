var liveServer = require("live-server");

var params = {
	root: "elements", // Set root directory that's being served. Defaults to cwd.
	open: true, // When false, it won't load your browser by default.
	// ignore: '/src', // comma-separated string for paths to ignore
	file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
	logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
};

liveServer.start(params);