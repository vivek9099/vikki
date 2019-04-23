
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const patient1= require('./patient1.js');
const argv = yargs.argv;
var command = argv._[0];
console.log("yargs",argv);
console.log('command:',command);

if (command==='insert'){
var patient =patient1.insertPatient(argv.id,argv.name);
  if(patient){
    console.log("patient details added successfully");
    console.log(`the title is :${patient.id}`);
    console.log("the body is :",patient.name);
  }
  else {
    console.log("cant add patient details");
  }
}

else if (command === 'retrieve'){
  var patient = patient1.retrievePatient(argv.id);
  if(patient){
    debugger;
    console.log('patient found');
    console.log('the title is -'+patient.id);
    console.log('the body is -'+patient.name);
  }
  else {
    console.log('id not found');
}}
