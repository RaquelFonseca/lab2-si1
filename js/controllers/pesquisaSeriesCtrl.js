app.controller("pesquisaSeriesCtrl", function ($scope, $http) {
	
	$scope.app = "PESQUISAR SÉRIES";
	$scope.seriesPesquisadas = [];
	$scope.seriesPerfil = [];
	$scope.seriesWatchlist = [];

	$scope.procuraSerie = function(nome) {
		$http.get("http://www.omdbapi.com/?s=" + nome+ "&type=series&apikey=93330d3c").then(successCallback, errorCallback);
			function successCallback(response){
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

	$scope.adicionaSerieAoWatchlist = function(serie) {
		if($scope.contemSeriePerfil(serie)) {
			alert("A série está no seu perfil!");
		}
		
		else if($scope.contemSerieWatchlist(serie)) {
			alert("A Série já existe no seu Watchlist!");
		}
		else {
			$scope.seriesWatchlist.push(serie);
		}
	}

	$scope.contemSerieWatchlist = function(serie) {
		for (var i = 0; i < $scope.seriesWatchlist.length; i++) {
			if($scope.seriesWatchlist[i].Title === serie.Title) {
				return true;
			}
		}
		return false;
	}

	$scope.adicionaSerieAoPerfil = function(serie) {
		if($scope.contemSeriePerfil(serie)) {
			alert("A Série já existe no seu Perfil!");
		}
		else {
			$scope.seriesPerfil.push(serie);
		}
	}

	$scope.contemSeriePerfil = function(serie) {
		for (var i = 0; i < $scope.seriesPerfil.length; i++) {
			if($scope.seriesPerfil[i].Title === serie.Title) {
				return true;
			}
		}
		return false;
	}


	 


}); 