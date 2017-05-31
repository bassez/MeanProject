/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.auth')
        .factory('AuthWrapper', ['$http', '$cookies', AuthWrapper]);

    /** @ngInject */
    function AuthWrapper($http, $cookies) {
        var baseURL = "http://localhost:3100/";
        return {
            getRequest: function (route) {
                var password = $cookies.get('encrypted_password');
                var username = $cookies.get('username');
                var url = baseURL + route;
                return $http({
                    'method': 'GET',
                    'url': url,
                    'headers': {
                        'Authorization': 'Basic ' + window.btoa(username + ':' + password)
                    }
                })
            },
            postRequest: function (route, data) {
                var password = $cookies.get('encrypted_password');
                var username = $cookies.get('username');
                var url = baseURL + route;
                return $http({
                    'method': 'POST',
                    'url': url,
                    'dataType': 'json',
                    'headers': {
                        'Authorization': 'Basic ' + window.btoa(username + ':' + password)
                    },
                    'data': data
                })
            },
            putRequest: function (route, data) {
                var password = $cookies.get('encrypted_password');
                var username = $cookies.get('username');
                var url = baseURL + route;
                return $http({
                    'method': 'PUT',
                    'url': url,
                    'dataType': 'json',
                    'headers': {
                        'Authorization': 'Basic ' + window.btoa(username + ':' + password)
                    },
                    'data': data
                })
            },
            deleteRequest: function (route, data) {
                var accessToken = $cookies.get('access_token');
                var password = $cookies.get('encrypted_password');
                var username = $cookies.get('username');
                return $http({
                    'method': 'PUT',
                    'url': url,
                    'dataType': 'json',
                    'headers': {
                        'Authorization': 'Basic ' + window.btoa(username + ':' + password)
                    },
                    'data': data
                })
            },
            login: function (username, password) {
                var url = baseURL + "login/";
                return $http({
                    'method': 'GET',
                    'url': url,
                    'headers': {
                        'Authorization': 'Basic ' + window.btoa(username + ':' + password)
                    }
                })
            },
            register: function (form) {
                var url = baseURL + 'register';
                return $http({
                    'method': 'POST',
                    'url': url,
                    'dataType': 'json',
                    'data': {
                        'form': {
                            'username': form.username,
                            'email': form.email,
                            'password': form.password
                        }
                    }
                })
            }
        }
    }

})();
