!function($, jQuery){
	'use strict';
	
	window.app = window.app || {};
	window.app.module = angular.module('xplatform-sample', ['ui.router', 'pascalprecht.translate', 'ngSanitize', 'ngNotify']);

	// insert the base URL here
	app.module.constant('apiBaseUrl', 'https://boardgameapi.azurewebsites.net/');

    FastClick.attach(document.body);
}();
