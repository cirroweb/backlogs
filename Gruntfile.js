module.exports = function(grunt) { 

  var environment = grunt.option('environment');

  if (typeof environment === 'undefined') {
    environment = 'development';
  } 

  grunt.initConfig({
    
    shell: {
      build: {
        command: 'ember build --environment production'
      },
      commit: {
        command: "git add . && git ci -m 'build'"
      },
      push: {
        command: 'git push origin master'
      }
    },

    git_subtree_push: {
        subtree: {
            options: {
                source: "https://github.com/cirroweb/backlogs.git",
                branch: "gh-pages",
                target: "dist"
            }
        }
    }

  });

  grunt.registerTask('default', ['shell']);
  grunt.registerTask('doit', ['shell:build', 'shell:commit', 'shell:push', 'git_subtree_push']);
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-aws');
  grunt.loadNpmTasks('grunt-rt-deployinator');
  grunt.loadNpmTasks('grunt-cmv-git-subtree');

}

