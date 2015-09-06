

'use strict';
var appSettings = angular.module('migrationApp.appSettings', [])

/*Dev environment*/
.constant( 'settings', { serviceHost: 'http://localhost:62734'
                        ,mrcoffeeHost: 'https://mrcoffee.webcentral.com.au'});