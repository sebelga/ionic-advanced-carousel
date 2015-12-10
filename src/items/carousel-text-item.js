(function() {
    'use strict';

    angular
        .module('app.core')
        .directive('carouselTextItem', carouselTextItem);

    function carouselTextItem() {
        var directive = {
            restrict: 'E',
            replace:true,
            template: '<a class="carousel-text-item"' +
                        'ng-class="::{\'upper\':vm.carouselOptions.upperCase}"' +
                        'ng-bind="vm.ngModel.title"' +
                        'ng-click="vm.onSelect({item:vm.ngModel})">' +
                        '</a>',
            scope: {},
            controller: Controller,
            controllerAs: 'vm',
            bindToController: {
                ngModel:'=',
                onSelect:'&',
                carouselOptions:'='
            }
        };

        return directive;

    }

    /* @ngInject */
    function Controller($scope) {
        var vm = this;
        vm.selected:false;

        activate();

        function activate() {
            $scope.$on('acarousel.itemselected', function(event, item) {
                vm.selected = item === vm.ngModel ? true : false;
            });
        }
    }
})();
