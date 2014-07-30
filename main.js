var pen ={};

var app = angular.module('theEditor', []);
app.controller('contentCtr', ['$scope', function($scope){
    $scope.selectText = {};
    $scope.getSelection = function($event){
        var selectText =  window.getSelection();
        if (selectText != ''){
            var offset = selectText.anchorNode.getBoundingClientRect();
        }
    }
    
}])
