'use strict';

/**
 * @ngdoc service
 * @name elliecodesApp.console
 * @description
 * # console
 * Factory in the elliecodesApp.
 */
angular.module('elliecodesApp')
  .factory('Console', function () {
    // Service logic
      var Console = function() {
      this.recipes = [];
      this.busy = false;
      this.currentPage = 1;
    };

    // Public API here
      Console.prototype.welcome = function () {
        var output = "Welcome to ellie.codes, the personal site of Ellie Day, which runs a custom CLI called 'heyellieday'. For a list of commands, type 'heyellieday' in the console. If you wish to navigate the site in a traditional fashion, type 'exit' into the console.\n" ;
        return output;
      };
      Console.prototype.heyellieday = function () {
        var output = "Usage: heyellieday COMMAND [command-specific-options]" + "\n" + "Type 'heroku help TOPIC' for more details of each command" + "\n\n\n" +"Here are a list of commands invoked by 'heyellieday':" + "\n\n" + "routes => lists the different pages you can navigate to using the CLI" + "\n" + "routes => lists the different pages you can navigate to using the CLI" + "\n";
        return output;
      };
      Console.prototype.heyellieday.routes = function () {
        var output = "Routes:\n"+
                    "GET ellie.codes/#/with/ruby \n"
                    "GET ellie.codes/#/with/javascript \n";
        return output;
      };
      return Console;
});