var control=angular.module('app')

control.controller('reportController',['$http','$scope', reportController])

function reportController($http,$scope){
 var scope=$scope;

 scope.productPurchase=[];

 scope.generateReport= function(){
    $http.get('/reports/generateReport')
    .then(function success(data){
      scope.productPurchase=data.data;
      console.log( data);
    },function error(data){
      console.log('error '+ data);
    }
);

}


}