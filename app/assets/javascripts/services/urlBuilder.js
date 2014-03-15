hbApp.factory("UrlBuilder", function() {
	var UrlBuilder = {

		// subdomain: String
		// resource: String
		// paramsArray: Array
		// batch: Boolean
		build: function(subdomain, resource, paramsArray, batch) {
			var self = this;
			var url;
			var pre = "https://";
			var base = ".helloblock.io/v1";
			var resource = resource[0] == "/" ? resource : "/" + resource;

			var resourceUrl = pre + subdomain + base + resource;

			if (paramsArray.length === 0) {
				return resourceUrl;
			}

			if (batch === true) {
				var paramsString = self.paramsConcat(paramsArray);
				url = resourceUrl + paramsString
			} else {
				var single = "/" + paramsArray[0].value
				var paramsString = self.paramsConcat(paramsArray.slice(1));
				url = resourceUrl + single + paramsString
			}

			return url
		},
		paramsConcat: function(array) {
			var str = "";

			for (var i in array) {
				if (array[i].value === "") {
					continue;
				}

				if (str == "") {
					str += "?";
				} else {
					str += "&";
				}
				param = array[i].key + "=" + array[i].value;
				str += param
			}

			return str
		},
	}

	return UrlBuilder
})
