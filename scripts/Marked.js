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

renderer.codespan = function(text) {
	return '<code hljs>' + text + '</code>';
};

var Tabset = {};

Tabset.replace = function(string, callback) {
	JSDom.env(string, function(err, window) {
		debugger
	})
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

var markdownFile = fs.readFileSync("tmp/style.md").toString();

var renderedFile = Marked(markdownFile);
Tabset.replace(renderedFile, function(err, file) {
	fs.writeFileSync("public/templates/docs/tutorials/mark.html", file)
	debugger
})
