'use strict';

angular.module('agileimApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('find', {
                abstract: true,
                parent: 'site'
            });
    });
