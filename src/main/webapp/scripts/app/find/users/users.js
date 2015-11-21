'use strict';

angular.module('agileimApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('users', {
                parent: 'find',
                url: '/users',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'global.menu.find.users'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/find/users/users.html',
                        controller: 'UsersController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('users');
                        return $translate.refresh();
                    }]
                }
            });
    });
