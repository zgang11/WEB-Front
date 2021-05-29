require.ensure(['./a'], function(require) {
    var content = require('./a')
    document.open()
    document.write('<h2>' + content + '</h2>')
    document.close()
})