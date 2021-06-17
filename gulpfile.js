const { series, src, dest } = require('gulp');
const concat = require('gulp-concat');

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
    // body omitted
    cb();
    console.log('build');
}

function optimize() {
    return src('./src/*.js')
        .pipe(concat('all.js'))
        .pipe(dest('./dist/'));
    // console.log('optimize');
}

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function move(cb) {
  // body omitted
  cb();
  console.log('move');
}



function listen(cb) {
    cb();
    console.log('listen');
}

exports.build = build;
exports.optimize = optimize;
exports.move = move;
exports.listen = listen;
exports.runAll = series(build, optimize, move, listen);