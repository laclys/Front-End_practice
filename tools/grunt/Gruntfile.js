module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');//监听模块
    grunt.initConfig({
        uglify: {
            options: {
                mangle: false //是否破坏压缩
            },
            a: {
                expand: true, //分开压缩
                cwd: 'js/', //要压缩的当前目录
                src: '*.js',
                dest: 'build/js'
            },
            // b: {
            //     src: 'js/b.js',
            //     dest: 'build/b.min.js'
            // }
        },
        cssmin: {
            a: {
                expand: true, //分开压缩
                cwd: 'css/', //要压缩的当前目录
                src: '*.css',
                dest: 'build/css/'
            }
        },
        //监听模块
        watch: {
            a: {
                files: 'css/test.css', //你要监听的模块
                tasks: 'cssmin' //监听的任务
            }
        }
    });
    // grunt.registerTask('default', ['uglify', 'cssmin']);
    grunt.registerTask('default', ['cssmin', 'watch']);
};