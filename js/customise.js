/*
var app = angular.module('starter', []);
	app.controller('switchScreen', function($scope) {
	    $scope.userHome = false;
            $scope.userLogin = true;
	    $scope.userRegistrationS1 = true;
	    $scope.userRegistrationS2 = true;
	    $scope.userRegistrationS3 = true;
	    $scope.userRegistrationS4 = true;
	    $scope.userRegistrationS5 = true;
	    $scope.userRegistrationS6 = true;
	    $scope.userRegistrationS7 = true;
	    $scope.userRegistrationS8 = true;
	    $scope.userRegistrationS9 = true;

	    $scope.title = false;
            $scope.rscreen = 2;
	    $scope.toggleUserLogin = function() {
		$scope.userHome = !$scope.userHome;
	        $scope.userLogin = !$scope.userLogin;
		
	    }
	   $scope.toogleUserRegistration = function() {
		$scope.userHome = !$scope.userHome;
		$scope.userRegistrationS1 = !$scope.userRegistrationS1;
	    }
          
	  $scope.loadNextRegisterScreen = function() {
               
               var r = $scope.rscreen;
               switch(r)
	       {
		case 2:
			$scope.userRegistrationS2 = !$scope.userRegistrationS2;
			$scope.userRegistrationS1 = !$scope.userRegistrationS1;
			
			break;
		case 3:
			$scope.userRegistrationS3 = !$scope.userRegistrationS3;
			$scope.userRegistrationS2 = !$scope.userRegistrationS2;
			break;
		case 4:
			$scope.userRegistrationS4 = !$scope.userRegistrationS4;
			$scope.userRegistrationS3 = !$scope.userRegistrationS3;
			break;
		case 5:
			$scope.userRegistrationS5 = !$scope.userRegistrationS5;
			$scope.userRegistrationS4 = !$scope.userRegistrationS4;
			break;
		case 6:
			$scope.userRegistrationS6 = !$scope.userRegistrationS6;
			$scope.userRegistrationS5 = !$scope.userRegistrationS5;
			break;
		case 7:
			$scope.userRegistrationS7 = !$scope.userRegistrationS7;
			$scope.userRegistrationS6 = !$scope.userRegistrationS6;
			break;
		case 8:
			$scope.userRegistrationS8 = !$scope.userRegistrationS8;
			$scope.userRegistrationS7 = !$scope.userRegistrationS7;
			break;
		case 9:
			$scope.userRegistrationS9 = !$scope.userRegistrationS9;
			$scope.userRegistrationS8 = !$scope.userRegistrationS8;
			break;
	
		
	       }
              $scope.rscreen = ($scope.rscreen+1);
             
	  }
	});
	 

*/
