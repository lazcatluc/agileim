 'use strict';

angular.module('agileimApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-agileimApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-agileimApp-params')});
                }
                return response;
            }
        };
    });
