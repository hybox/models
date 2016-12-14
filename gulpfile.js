const gulp = require('gulp');  
const del = require('del');
const gulpGitbook = require('gulp-gitbook');  
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

// Publishes the site to GitHub Pages
gulp.task('publish', () => {  
  console.log('Publishing to GH Pages');
  return gulp.src('./_book/**/*')
    .pipe($.ghPages({
      origin: 'origin',
      branch: 'gh-pages'
    }));
});

gulp.task('clean', () => {  
  console.log('Clean build directory');
  return del('./_book/**/*');
});

gulp.task('build', function (cb) {
  gulpGitbook('.', cb);
});

gulp.task('default', ['clean', 'build', 'publish']);