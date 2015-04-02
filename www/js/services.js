angular.module('directory.services', ['ngResource'])

    .factory('Employees', function ($resource) {
        return $resource('http://atlantictrombi.herokuapp.com/employees/:employeeId/:data');
    });