module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      html: {
        files: [
          {expand: true, cwd: '', src: ['index.html'], dest: 'temp/'},
          {expand: true, cwd: 'pages', src: ['*.html'], dest: 'temp/pages/'}
        ]
      },
      main: {
        files: [
          {expand: true, cwd: 'assets/images', src: ['**/*'], dest: 'dist/assets/images/'},
          {expand: true, cwd: 'assets/components', src: ['**/*'], dest: 'dist/assets/components/'}
        ]
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'assets/css',
          src: ['*.css'],
          dest: 'dist/assets/css',
          ext: '.css'
        }]
      }
    },
    uglify: {
      target: {
        files: [{
          expand: true,
          cwd: 'assets/js',
          src: ['*.js'],
          dest: 'dist/assets/js',
          ext: '.js'
        }]
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'assets/images/',
          src: ['**/*.{png,jpg,jpeg,gif,webp}'],
          dest: 'dist/assets/images/'
        }]
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [
          {expand: true, cwd: '', src: ['index.html'], dest: 'dist/'},
          {expand: true, cwd: 'pages', src: ['*.html'], dest: 'dist/pages/'}
        ]
      }
    },
    clean: {
      temp: ['temp', 'temp/pages']
    },
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', [
    'cssmin',
    'uglify',
    'imagemin',
    'copy:html',
    'htmlmin',
    'copy:main',
    'clean:temp'
  ]);
};
