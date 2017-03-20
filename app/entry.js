'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', '$scope', CowsayController]);

function CowsayController($log, $scope) {
  $log.debug('CowsayController');

  let cowsayCtrl = $scope.cowsayCtrl = {};

  cowsayCtrl.title = 'Welcome to da beach duuuude!';
  cowsayCtrl.oldTitle ='I repeat when asked to';

  cowsayCtrl.spoke = function(oldInput) {
    $log.debug('cowsayCtrl.spoke()');
    return cowsay.say({ text: oldInput|| 'suppppp duuuuuude', f: 'turtle' });
  };

  cowsayCtrl.speak = function(input) {
    $log.debug('cowsayCtrl.speak()');
    return cowsay.say({ text: input || 'suppp', f: 'turtle' });
  };


  cowsayCtrl.logger = function(input, oldInput) {
    $log.debug('cowsayCtrl.logger()');
    $log.log(input, oldInput);
    // return cowsay.say({text: input || 'repeat me now'});
  };
}
