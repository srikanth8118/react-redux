module.exports = {
	entry : __dirname+'/index.js', // here you may write ES6 code
	output : {
		path : __dirname,
		filename : 'bundle.js' // here will the ES 5.1 code 
	},
	devServer : {
		inline : true, // if you see a file change (build, re run and re render)
		port : 3333
	}, 
	module : {
		loaders : [
			{
				test : /\.js$/, // all the files that has to loaded
				exclude : /node_modules/, // the folder that must not be transpiled
				loader : 'babel-loader', // babel for transpilation
				query : {
					presets : ['es2015', 'react',  'stage-1'] // added react preset to convert JSX --> JavaScript
				}
			}
		]
	}
}