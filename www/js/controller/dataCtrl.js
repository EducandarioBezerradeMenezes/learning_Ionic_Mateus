//List Controller
//Controll the list view

angular.module("listApp").controller("dataCtrl", function($scope, dataApi, $timeout){
  $scope.info="";

  popularDados = function(){
    dataApi.getData().success(function(data){
      $scope.dados = data;
    });
  }

  popularDados();

  $scope.saveData = function(){

    dataApi.putData($scope.info).success(function(){
      popularDados();
    });

    $scope.info="";
  };

});
