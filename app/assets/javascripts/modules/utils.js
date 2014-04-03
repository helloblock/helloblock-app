var Utils = {}

Utils.namespace = function(explorerMode, serviceName, callback) {
	callback(explorerMode, serviceName)
}

Utils.explorerMode = function(host) {
	var subDomain = host.split(".")[0];

	if (subDomain == "test") {
		return "testnet";
	};

	return "mainnet";
}
