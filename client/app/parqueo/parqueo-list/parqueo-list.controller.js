'use strict';

(function(){

class ParqueoListComponent {
  constructor(parqueoService) {
  	this.parqueoService = parqueoService;
  }

  $onInit() {
  	this.parqueoService.query().$promise
  	.then(response => {
  		console.log("PARQUEO OK...", response);
  	})
  	.catch(err => {
  		console.log("ERROR...", err );
  	});
  }

}

ParqueoListComponent.$inject = ['parqueoService'];

angular.module('paraisoCiclistaApp')
  .component('parqueoList', {
    templateUrl: 'app/parqueo/parqueo-list/parqueo-list.html',
    controller: ParqueoListComponent,
    controllerAs: 'vm'
  });

})();
