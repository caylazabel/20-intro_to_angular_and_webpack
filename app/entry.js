'use strict';

require('./scss/reset.scss'); //not js files//
require('./scss/main.scss'); //loaders and webpack turn from static assests into js files//

const angular = require('angular'); //angular js//
const cowsay = require('cowsay-browser'); //so we can interact with the cowsay browser//

const cowsayApp = angular.module('cowsayApp', []); //cowsayApp is the name of the app, no other major dependencies in this structure// 

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
