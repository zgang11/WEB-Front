var load = require('bundle-loader!./a.js')

load(function(file){
	document.open()
	document.write('<h2>'+file+'</h2>')
	document.close()
})