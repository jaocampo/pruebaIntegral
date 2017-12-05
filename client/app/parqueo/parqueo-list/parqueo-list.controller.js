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
  		this.parqueos = response;
  	})
  	.catch(err => {
  		console.log("ERROR...", err );
  	});
  }

  obtener(item) {
  		this.parqueoService.obtener(item).$promise
  			.then(response => {
  				console.log("PARQUEO_2 OK...", response);
  			this.parqueos = response;
  	})
  			.catch(err => {
  		console.log("ERROR_2...", err );
  	});
  			for (var i = 0; i < this.parqueos.length; i++) {
  				console.log("FOR....");
  					this.pago = 0;
  				if (this.parqueos.codigoFicha >= 1) {
  					console.log("IF_1...");
  					if (this.parqueos.horas <= 3 ) {
  						this.pago = this.parqueos.horas * 2;
  						console.log("PAGO...", this.pago);
  					}
  					else if (this.parqueos.horas == 4) {
  						this.pago = (this.parqueos.horas * 2) - 0.5;
  					}
  					else if (this.parqueos.horas == 5) {
  						this.pago = (this.parqueos.horas * 2) - 0.5;
  					}
  					else if (this.parqueos.horas > 5) {
  						this.pago = this.parqueos.horas * 1.5;
  						this.pago = this.pago * 5 / 100;
  					};
  			}
  		}
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
