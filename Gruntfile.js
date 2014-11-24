// This is based on http://bit.ly/1tydiVw

var EXPIRE_IN_2030 = new Date('2030');  
var TWO_YEAR_CACHE_PERIOD_IN_SEC = 60 * 60 * 24 * 365 * 2;

var deployConfig = require('./deploy.json');  
var manifestSettings = deployConfig.manifest;

module.exports = function(grunt) { 

  var environment = grunt.option('environment');

  if (typeof environment === 'undefined') {
    environment = 'development';
  } 

  var redisConfig = deployConfig.redis[environment];

  grunt.initConfig({
    aws: grunt.file.readJSON('grunt-aws.json'),
    
    shell: {
      build: {
        command: 'ember build --environment production'
      }
    },

    upload: {
      options: {
        storeConfig: redisConfig
      },
      bootstrapIndex: {
        options: manifestSettings,
        files: [
          { src: 'dist/index.html' }
        ]
      }
    },
    
    listUploads: {
      options: {
        storeConfig: redisConfig
      },
      dist: {
        options: manifestSettings
      }
    },  
    
    deploy: {
      options: {
        storeConfig: redisConfig
      },
      dist: {
        options: manifestSettings
      }
    },

    s3: {
      options: {
        accessKeyId: '<%= aws.key %>',
        secretAccessKey: '<%= aws.secret %>',
        bucket: '<%= aws.bucket %>',
        headers: {
          CacheControl: TWO_YEAR_CACHE_PERIOD_IN_SEC,
          Expires: EXPIRE_IN_2030
        },
      },
      build: {
        cwd: 'dist',
        src: 'assets/**'
      },
    }
  });

  grunt.registerTask('default', ['shell', 's3:build']);
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-aws');
  grunt.loadNpmTasks('grunt-rt-deployinator');

}

