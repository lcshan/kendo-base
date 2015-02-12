'use strict';
exports.description="scaffolds a new test project";
exports.after="messages in after";
exports.wornOn='*';
exports.template=function(grunt,init,done){
  init.process({},[
      init.prompt('name'),
      init.prompt('title'),
      init.prompt('description'),
      init.prompt('version')
  ],function(err,props){
      var files = init.filesToCopy(props);
      
      init.copyAndProcess(files,props);
      
      grunt.file.mkdir('assets/img');
      grunt.file.mkdir('assets/css/plugings');
      grunt.file.mkdir('assets/js/vendor');
      
      init.writePackageJSON('package.json', {
				name: props.name,
				description: props.description,
				version: props.version,
				devDependencies: {
					"grunt-contrib-concat": "~0.3.x",
					"grunt-contrib-uglify": "~0.2.x",
					"grunt-contrib-cssmin": "~0.6.x",
					"grunt-contrib-sass": "~0.4.x",
					"grunt-contrib-watch": "~0.5.x",
					"jshint-stylish": "~0.1.4"
				},
			});

			// All done!
			done();
  });  
};