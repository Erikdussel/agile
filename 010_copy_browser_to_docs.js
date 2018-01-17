var shell = require('child_process').execSync;
var fs = require('fs');
var path = require('path');

const src= 'platforms/browser/www';
const dist= 'docs';

if(process.env.CORDOVA_PLATFORMS == "browser"){
  shell('mkdir -p ${dist}');
  shell('cp -r ${src}/* ${dist}');
}
