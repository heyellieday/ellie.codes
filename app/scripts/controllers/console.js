'use strict';

/**
 * @ngdoc function
 * @name elliecodesApp.controller:ConsoleCtrl
 * @description
 * # ConsoleCtrl
 * Controller of the elliecodesApp
 */
angular.module('elliecodesApp')
  .controller('ConsoleCtrl', function ($scope, Console) {
  	$(function () {
  		var console = new Console;
        var jqconsole = $('#console').jqconsole(console.welcome, "$ellie.codes: ");
        var startPrompt = function () {
          // Start the prompt with history enabled.
          jqconsole.Prompt(true, function (input) {
            // Output input with the class jqconsole-output.
            if(input === "heyellieday"){
            	jqconsole.Write(console.heyellieday(), "jqconsole-output");
            }else if(input === "heyellieday routes"){
            	jqconsole.Write(console.heyellieday.routes(), "jqconsole-output");
            }else{
            	jqconsole.Write("-bash: "+ input +": command not found" + '\n', 'jqconsole-output');	
            }
            // Restart the prompt.
            startPrompt();
          });
        };
        startPrompt();
      });
  });
