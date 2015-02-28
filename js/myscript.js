//var mainCtrl = function($scope){
//    $scope.users = [
//        {"name":"taga", "score":12.34},
//        {"name":"taga2", "score":22.34},
//        {"name":"taga3", "score":32.34},
//    ];
//}
angular.module('sampleApp', [])
    .controller('mainCtrl', ['$scope', function($scope) {
        $scope.addUser = function(){
        };
        $scope.users = [
            {"name":"taga1", "score":12.34},
            {"name":"taga2", "score":22.34},
            {"name":"taga3", "score":32.34},
            {"name":"taga4", "score":12.34},
            {"name":"taga5", "score":22.34},
            {"name":"taga6", "score":32.34},
            {"name":"taga7", "score":12.34},
            {"name":"taga8", "score":22.34},
            {"name":"taga9", "score":32.34},
            {"name":"taga10", "score":12.34},
            {"name":"taga11", "score":22.34},
            {"name":"taga12", "score":32.34},
        ];
        $scope.today = new Date();
    }])
    .controller('userItemCtrl', ['$scope', function($scope) {
        $scope.increment = function() {
            $scope.user.score++;
        }
    }])
;
