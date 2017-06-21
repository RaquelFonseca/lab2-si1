app.controller("minhasSeriesCtrl", function ($scope, $http) {
	
	$scope.app = "MINHAS SÉRIES";
	$scope.seriesMeuPerfil = [];
	$scope.seriesPesquisadas = [];

	$scope.procuraSerie = function(nome) {
		$http.get("http://www.omdbapi.com/?s=" + nome+ "&type=series&apikey=93330d3c").then(successCallback, errorCallback);

			function successCallback(response){
				console.log(response);



				if (response.data.Response === 'False') {
    	    		alert("Série não encontrada!");
				}
				else {
					$scope.seriesPesquisadas = response.data.Search;


				}
			}

			function errorCallback(error){
    			console.log("erro");
			}
	}


}); 