var fs = require('fs');
var fse = require('fs-extra');
var exec = require('child_process').exec;

var patternsToExclude = new RegExp([
  'sass',
  'scss',
  'git',
  'DS_Store',
  'auto-scripts',
  'node_modules',
  'bower_components',
  'package.json',
  'dist'
].join('|'));

console.info('Copying files...');
fse.copy('./', 'dist/', {
  filter: function (file) {
    return !patternsToExclude.test(file);
  }
}, function (err) {
  if (err) return console.error(err)
  console.info("Files copied!")

  console.info('Installing bower deps...');
  exec("cd dist; bower i", function (error, stdout, stderr) {
    console.info(stdout);
    if (error !== null) {
      console.error('exec error: ' + error);
    } else console.info('Yay!! All done!');
  });
});
