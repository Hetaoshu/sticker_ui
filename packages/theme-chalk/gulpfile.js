const { series,src, dest  } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
//主任务
function compile(){
    return src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
        browsers: ['ie > 9', 'last 2 versions'],
        cascade: false
      }))
    .pipe(cssmin())
    .pipe(dest('./lib'));
}
//复制字体
function copyfont() {
  return src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(dest('./lib/fonts'));
}
exports.build = series(compile,copyfont);