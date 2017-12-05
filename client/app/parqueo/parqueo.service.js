'use strict';

function parqueoService($resource , API) {
	return $resource(API + '/api/parqueo', {
		id:'@id'
	},{
		update: {
			method: 'PUT'
		},
		obtener: {
            url: API + '/api/parqueo/',
            method: 'GET',
            isArray: true
        }
	});
}

parqueoService.$inject = ['$resource' , 'API'];

angular.module('paraisoCiclistaApp')
  .factory('parqueoService', parqueoService);
