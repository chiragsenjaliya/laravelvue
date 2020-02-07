const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
	.js('resources/js/admin.js', 'public/js')
   	.sass('resources/sass/app.scss', 'public/css')
   	.sass('resources/sass/admin.scss', 'public/css')
   	.webpackConfig({
	    output: {
	      	publicPath: "http://laravelvue.test:8080/"
	    },
	    devServer: {
	      	disableHostCheck: true,
	      	contentBase: path.join(__dirname, "public"),
	      	publicPath: '/',
	      	host: '0.0.0.0',
	      	port: 8080,
	      	proxy: {
	        	'/': {
	          		target : 'http://localhost'
	        	}
	      	},
	      	stats: { colors: true },
	    },
	    watchOptions: {
	      poll: 2000,
	      ignored: /node_modules/
	    }
  	});