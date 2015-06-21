myApp.controller('mainCtrl', function($scope) {
        $scope.isShow = false;
        $isMenuOpen = false;

        $scope.toggleMenu = function(){
            $scope.isMenuOpen = !$scope.isMenuOpen;
            $scope.isShow = !$scope.isShow;
        };
    });
