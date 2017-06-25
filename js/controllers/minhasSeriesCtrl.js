app.controller("minhasSeriesCtrl", function ($scope, $http) {

	$scope.app = "MINHAS SÉRIES";
	$scope.seriesPesquisadas = [];
	$scope.seriesPerfil = [];
	$scope.seriesWatchlist = [];

	$scope.procuraSerie = function(nome) {
		$http.get("http://www.omdbapi.com/?s=" + nome+ "&type=series&apikey=93330d3c").then(successCallback, errorCallback);
			function successCallback(response){
				if (response.data.Response === 'False') {
    	    		alert("A série não foi encontrada!");
				}
				else {
					$scope.seriesPesquisadas = response.data.Search;
				}
			}
			function errorCallback(error){
    			console.log("erro");
			}
	}

	$scope.adicionaSerieAoPerfil = function(serie) {
		if($scope.contemSerie($scope.seriesPerfil, serie)) {
			alert("A série já pertence ao seu Perfil!");
		}
		else {
			if($scope.contemSerie($scope.seriesWatchlist, serie)) {
				$scope.removeSerie($scope.seriesWatchlist, serie);
			}
			$scope.seriesPerfil.push(serie);
		}
	}


	$scope.adicionaSerieAoWatchlist = function(serie) {
		if($scope.contemSerie($scope.seriesPerfil, serie)) {
			alert("A série já pertence ao seu Perfil!");
		}
		
		else if($scope.contemSerie($scope.seriesWatchlist, serie)) {
			alert("A série já pertence ao seu Watchlist!");
		}
		else {
			$scope.seriesWatchlist.push(serie);
			console.log(serie);
		}
	}

	$scope.contemSerie = function(array, serie) {
		for (var i = 0; i < array.length; i++) {
			if(array[i].Title === serie.Title) {
				return true;
			}
		}
		return false;
	}
	
	$scope.removeSeriePerfil = function(serie) {
		var resposta = confirm("Deseja realmente remover a série " +serie.Title+ "?");
		if (resposta==true) {
  			$scope.removeSerie($scope.seriesPerfil, serie);
  		}
  	}


	$scope.removeSerie = function(array, serie) {
		if(array === $scope.seriesPerfil){
		}
		var i = array.indexOf(serie);
		if(i !== -1) {
			array.splice(i, 1);
		}
    	return array;
	}

	$scope.reinicializaSeriesPesquisadas = function() {
		$scope.seriesPesquisadas = [];
	}

	

}); 


