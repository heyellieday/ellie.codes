'use strict';

/**
 * @ngdoc function
 * @name elliecodesApp.controller:ConsoleCtrl
 * @description
 * # ConsoleCtrl
 * Controller of the elliecodesApp
 */
angular.module('elliecodesApp')
  .controller('ConsoleCtrl', function ($scope) {
  	$(function () {
        var jqconsole = $('#console').jqconsole("Welcome to ellie.codes, the personal site of Ellie Day, which runs a custom CLI called 'heyellieday' for primary navigation. For a list of commands, type 'heyellieday' in the console. If you wish to navigate the site in a traditional fashion, type 'exit' into the console.\n", "ellie.codes$ ");
        var startPrompt = function () {
          // Start the prompt with history enabled.
          jqconsole.Prompt(true, function (input) {
            // Output input with the class jqconsole-output.
            if(input === "heyellieday"){
            	jqconsole.Write("Here are a list of commands:" + '\n', 'jqconsole-output');
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
