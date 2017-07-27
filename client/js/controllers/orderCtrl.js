angular.module('myApp')
  .controller('orderController', orderController)

orderController.$inject = ['$state', '$scope', '$http']

function orderController($state, $scope, $http) {
  $http.get('/orders').success(function(response){
    console.log("I got the data I requested")
    $scope.orders = response;
  })

}
function sortpOrder(){
  console.log('it works')
}
