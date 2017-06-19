app.controller("minhasSeriesCtrl", function ($scope, $http) {
	
	$scope.app = "MINHAS SÉRIES";
	$scope.seriesMeuPerfil = [];  <!-- array de series-->

	$scope.procuraSerie = function(nome) {

		$http.get("http://www.omdbapi.com/?t=" + nome+ "&type=series&apikey=93330d3c").then(successCallback, errorCallback);

			function successCallback(response){
				console.log(response);

			if (response.data.Response === 'False') {
        		alert("Série não encontrada!");
			}

			}
			function errorCallback(error){
    			console.log("erro");
			}

	}



	$scope = function adionaSerie(nome) {
		$scope.seriesMeuPerfil.push(nome);
	}


}); 