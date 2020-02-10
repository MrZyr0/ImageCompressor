const gulp = require('gulp');
const gulp_cache = require('gulp-cache'); // Cache image optimizations
const gulp_imagemin = require('gulp-imagemin'); // Optimize .gif .png .svg images
const imageminJpegoptim = require('imagemin-jpegoptim'); // Optimize .jpg & .jpeg images
const imageminMozjpeg = require('imagemin-mozjpeg'); // Optimize .jpg & .jpeg images
const del = require('del'); // Delete files before optimizations

const inputFolder = './input/';
const outputFolder = './output/';
const imgExtension = '*.+(svg|png|jpg|jpeg|gif)';


function clean(done) {
	del([ outputFolder + imgExtension ]);
	gulp_cache.clearAll();
	done();
}

function cleanAll(done) {
	del([ inputFolder + imgExtension, outputFolder + imgExtension ]);
	gulp_cache.clearAll();
	done();
}

function imgLossless() {
	del([outputFolder + imgExtension]);
	return gulp
		.src(inputFolder)
		.pipe(
			gulp_cache(
				gulp_imagemin([
					gulp_imagemin.gifsicle({
						interlaced: true,
						optimizationLevel: 5
					}),

					imageminJpegoptim({
						progressive: true,
						strilAll: true
					}),
					imageminMozjpeg({
						progressive: true,
						quality: 100
					}),

					gulp_imagemin.optipng({
						interlaced: true,
						optimizationLevel: 5
					}),

					gulp_imagemin.svgo({
						plugins: [
							{
								sortAttrs: true
							}
						]
					})
				])
			)
		)
		.pipe(gulp.dest(outputFolder));
}

function imgLossy() {
	del([outputFolder + imgExtension]);
	return gulp
		.src(inputFolder)
		.pipe(
			gulp_cache(
				gulp_imagemin([
					gulp_imagemin.gifsicle({
						interlaced: true,
						optimizationLevel: 5
					}),

					imageminJpegoptim({
						progressive: true,
						strilAll: true
					}),
					imageminMozjpeg({
						progressive: true,
						quality: 85
					}),

					gulp_imagemin.optipng({
						interlaced: true,
						optimizationLevel: 5
					}),

					gulp_imagemin.svgo({
						plugins: [
							{
								sortAttrs: true
							}
						]
					})
				])
			)
		)
		.pipe(gulp.dest(outputFolder));
}

function imgHard() {
	del([outputFolder + imgExtension]);
	return gulp
		.src(inputFolder)
		.pipe(
			gulp_cache(
				gulp_imagemin([
					gulp_imagemin.gifsicle({
						interlaced: true,
						optimizationLevel: 7
					}),

					imageminJpegoptim({
						progressive: true,
						strilAll: true
					}),
					imageminMozjpeg({
						progressive: true,
						quality: 70
					}),

					gulp_imagemin.optipng({
						interlaced: true,
						optimizationLevel: 7
					}),

					gulp_imagemin.svgo({
						plugins: [
							{
								sortAttrs: true
							}
						]
					})
				])
			)
		)
		.pipe(gulp.dest(outputFolder));
}

exports.default = imgLossless;
exports.lossless = imgLossless;

exports.lossy = imgLossy;

exports.hard = imgHard;

exports.clean = clean;
exports.cleanAll = cleanAll;
