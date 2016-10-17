var fs = require('fs');
var exec = require('child_process').exec;
var component_name = process.argv[2];
var destinationFolder = process.argv[3];

var file_path = destinationFolder ? __dirname + '/' + destinationFolder : __dirname + "/src/components/" + component_name + "/"
var colors = require('colors');

var deleteFile = function(){
    exec('rm -fr ' + file_path, function(error, stdout, stderr) {
        //something
        console.log("File " + file_path.green + " was destroyed");
    });

}

// if(remove) return deleteFile();

if (!fs.existsSync(component_name)){
    fs.mkdirSync(file_path);
    fs.mkdirSync(file_path + '__tests__');
    fs.openSync(file_path + component_name + '.js', 'w');
    fs.openSync(file_path + 'style.css', 'w');
    fs.openSync(file_path + 'index.js', 'w');


    var indexjsStuff = [
        "import "+ component_name +" from './"+ component_name +".js'",
        "export default " + component_name
    ].join("\n");


    var componetFileStuff = [
        "import React from 'react';",
        "//         _____ _     _                       ",
        "//        |_   _| |__ (_)_ __   __ _ ___       ",
        "//          | | | '_ \| | '_ \ / _` / __|      ",
        "//          | | | | | | | | | | (_| \__ \_ _ _ ",
        "//          |_| |_| |_|_|_| |_|\__, |___(_|_|_)",
        "//                             |___/           ",
        "export default " + component_name
    ].join("\n");

    fs.writeFile(file_path + component_name + '.js', componetFileStuff, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("File " + (file_path + component_name + '.js').green + " was created!");
    }); 

    fs.writeFile(file_path + 'index.js', indexjsStuff, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("File " + file_path.green + " was created!");
    }); 
}
