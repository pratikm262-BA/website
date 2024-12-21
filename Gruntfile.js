module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    sass: {
      // Task
      dist: {
        // Target
        options: {
          // Target options
          style: "compressed"
        },
        files: {
          // Dictionary of files
          "dist/css/components.css": "dist/css/sass/components.scss",
          "dist/css/vendors.css": "dist/css/sass/vendors.scss",
        },
      },
    },
    watch: {
      css: {
        files: ["dist/css/sass/**/*.scss"],
        tasks: ["sass"],
        options: {
          spawn: false,
          livereload: true,
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");

  // Default task(s).
  grunt.registerTask("default");
};
