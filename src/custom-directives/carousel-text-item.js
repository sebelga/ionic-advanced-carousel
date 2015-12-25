(function () {
    'use strict';

    angular
        .module('aCarousel')
        .directive('carouselTextItem', carouselTextItem);

    function carouselTextItem() {
        return {
            restrict        : 'E',
            replace         : true,
            template        : '<a class="a-carousel-text-item"' +
                                'ng-bind="::vm.ngModel.display"' +
                                'ng-click="vm.onSelect({item:vm.ngModel})">' +
                                '</a>',
            scope           : {},
            controller      : Controller,
            controllerAs    : 'vm',
            bindToController: {
                ngModel        : '=',
                onSelect       : '&'
            }
        };
    }

    Controller.$inject = ['$scope'];
    function Controller($scope) {
        var vm      = this;
        vm.selected = false;

        activate();

        function activate() {
            $scope.$on('acarousel.itemselected', function (event, item) {
                vm.selected = item === vm.ngModel ? true : false;
            });
        }
    }
})();
