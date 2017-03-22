'use strict';

require('./scss/reset.scss'); //not js files//
require('./scss/main.scss'); //loaders and webpack turn from static assests into js files//

const angular = require('angular'); //angular js//
const cowsay = require('cowsay-browser'); //so we can interact with the cowsay browser//

const cowsayApp = angular.module('cowsayApp', []); //cowsayApp is the name of the app, no other major dependencies in this structure//

cowsayApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log) {
  $log.debug('CowsayController');

  this.title = 'Cow Creator.';
  this.secondTitle = 'make it, view it, and undo it!';
  this.subTitle1 = 'view it!';
  this.subTitle2 = 'check out the cow you just made!';
  this.history = [];

  cowsay.list((err, cowfiles)=> {
    this.cowfiles = cowfiles;
    this.current = this.cowfiles[0];
  });


  this.update = function(input) {
    $log.debug('cowsayCtrl.update');
    return cowsay.say({ text: input || 'suppppp duuuuuude', f: this.current});
  };

  this.speak = function(input) {
    $log.debug('cowsayCtrl.speak');
    this.spoken = this.update(input);
    this.history.push(this.spoken);
  };

  this.undo = function() {
    $log.debug('cowsayCtrl.undo()');
    this.history.pop();
    this.spoken = this.history.pop() || '';
  };
}

cowsayApp.controller('NavController',['$log', NavController]);

function NavController($log) {
  $log.debug('NavController');

  this.routes = [
    {
      name: 'home',
      url: '/home'
    },
    {
      name: 'cow creator',
      url: '/cowcreator'
    },
    {
      name: 'account',
      url: '/myaccount'
    }
  ];
}
