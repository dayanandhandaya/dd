module.exports=function(grunt){

grunt.initConfig({
  connect:{
    server:{
      option: {
        port:8000,
        protocol:"http",
        hostname:"localhost",
        base: ".",
        directory:null,
        open:true,
        keepalive:true
      }
    }
  }
});
grunt.loadNpmTasks('grunt-contrib-connect');
};