var fs = require('fs');

require('rimraf')('build', function(){
    require('mkdirp')('build', function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log('index.css: build and uglify');
            var uglified = require('uglifycss').processFiles(
                [ 'index.css' ],
                { maxLineLen: 500, expandVars: true }
            );
            fs.writeFile('build/index.css', uglified);

            console.log('index.html: copy');
            require('file-copy')('index.html', 'build/index.html');

            console.log('bundle.js: build and uglify');
            var b = require('browserify')();
            b.add('src/js/main.js');
            b.transform('uglifyify', { global: true  })
            var indexjs = fs.createWriteStream('build/bundle.js');
            b.bundle().pipe(indexjs);
        }
    });  
    console.log('All done!!!');
});