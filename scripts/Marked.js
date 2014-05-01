var Marked = require('marked');
var Swig = require("swig")
var JSDom = require("jsdom");
var fs = require("fs");

var renderer = new Marked.Renderer();

renderer.table = function(header, body) {
	var file = Swig.compileFile(__dirname + "/_table.html")({
		header: header,
		body: body
	})
	return file
};
renderer.code = function(code, lang, escaped) {
	var file = Swig.compileFile(__dirname + "/_code_block.html")({
		code: code,
		lang: lang
	})
	return file
};

Marked.setOptions({
	renderer: renderer,
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: false,
	smartLists: false,
	smartypants: false,
	headerPrefix: "",
	langPrefix: ""
});

var baseDir = "tutorials/";

fs.readdir(baseDir, function(err, files) {

	files.forEach(function(file) {
		fs.readFile(baseDir + file, function(err, data) {

			var renderedFile = Marked(data.toString());

			var targetDest = "public/templates/docs/tutorials/" + file.split(".")[0] + ".html"

			fs.writeFile(targetDest, renderedFile, function(err, data) {
				if (err) throw err;
				return true;
			})

		})
	})

})
