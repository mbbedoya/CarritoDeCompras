var control=angular.module('app')

control.controller('productController',['$http','$scope', productController])

function productController($http,$scope){
	var scope=$scope;

	scope.storeProducts=[];

	$http.get('/controller')
	.then(function success(data){
		scope.storeProducts=data.data;
		console.log( data);
	},function error(data){
		console.log('error '+ data);
	}
);

scope.clickLike=function(product){
	$http.put('/controller/clickLike',product)
	.success(function(data){
		console.log(data);

		$http.get('/controller')
		.then(function success(data){
			scope.storeProducts=data.data;
			console.log( data);
		},function error(data){
			console.log('error '+ data);
		}
	);
	})
	.error(function(err){
		console.log('error '+err);
	});



}
}