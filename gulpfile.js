//Подключаем локальные пакеты
var gulp = require("gulp");
var sass = require("gulp-sass");

//Определение задачи по умолчанию в GULP
gulp.task("default", function (done) {
    console.log(10);
    done();
})

//Определение новой задачи в GULP для SCSS и SASS 
gulp.task("scss", function (done) {
    //**- ищем везде, включая вложенные папки
    gulp.src(["./*.scss", "./*.sass"])
        //Компиляция scss или sass в css формат
    .pipe(sass())
        //Вывод ошибки, без окончания компиляции
  .pipe(sass().on("error", sass.logError))
        //Путь компиляции файлов
.pipe(gulp.dest("./"));
done();
})

//Отслеживание изменений
gulp.task("scss:watch", function () {
    //Находим папку и отмечаем, за каким файлом необходимо наблюдать, если он найден - выполняем задание "scss"
    gulp.watch(["./*.scss", "./*.sass"],[ "scss"]);

})
