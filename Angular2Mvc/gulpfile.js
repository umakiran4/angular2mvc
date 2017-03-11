var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');
var embedTemplates = require('gulp-angular-embed-templates');
var destPath = './libs/';

// Delete the dist directory
gulp.task('clean', function () {
    return gulp.src(['./libs/','./scripts/app'])
        .pipe(clean());
});

gulp.task("scriptsNStyles", () => {
    gulp.src([
            'core-js/client/**',
            'systemjs/dist/system.src.js',
            'reflect-metadata/**',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
            'jquery/dist/jquery.*js',
            'bootstrap/dist/js/bootstrap.*js'            
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest("./libs"));
});

var tsProject = ts.createProject('tsconfig.json', {
    typescript: require('typescript')
});
gulp.task('ts', function (done) {
    //var tsResult = tsProject.src()
    var tsResult = gulp.src([
            "app/**/*.ts","./*.ts"
    ])
        .pipe(embedTemplates({ sourceType: 'ts' }))
        .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest('./scripts'));
});

gulp.task('watch', ['watch.ts']);

gulp.task('watch.ts', ['ts'], function () {
    return gulp.watch('app/**/*.ts', ['ts']);
});

gulp.task('default', ['scriptsNStyles', 'watch']);