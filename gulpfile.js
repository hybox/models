const gulp = require('gulp');  
const del = require('del');
const gulpGitbook = require('gulp-gitbook');  
const shell = require('gulp-shell');
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
  console.log('Building HTML version')
  gulpGitbook('.', cb);
});

// FIXME: smh, you should actually learn how to use gulp
gulp.task('build-ebooks', () => {
  console.log('Building PDF, ePUB, and MOBI versions')
  shell.task([
    'gitbook pdf docs _book/hybox-models.pdf',
    'gitbook epub docs _book/hybox-models.epub',
    'gitbook mobi docs _book/hybox-models.mobi',
  ]);
});

gulp.task('default', ['clean', 'build', 'publish']);