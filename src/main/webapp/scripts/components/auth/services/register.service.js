'use strict';

angular.module('agileimApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


