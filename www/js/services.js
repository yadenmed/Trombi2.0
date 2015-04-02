angular.module('directory.services', ['ngResource'])

    .factory('Employees', function ($resource) {
        return $resource('http://localhost:8000/employees/:employeeId/:data');
    });