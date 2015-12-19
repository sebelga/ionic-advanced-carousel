(function () {
    'use strict';

    var scripts = document.getElementsByTagName("script")
    var currentScriptPath = scripts[scripts.length-1].src;

    angular
        .module('aCarousel')
        .directive('carouselGenericItem', carouselGenericItem);

    function carouselGenericItem() {
        return {
            restrict        : 'E',
            replace         : true,
            templateUrl     : function (elem, attr) {
                return attr.template;
            },
            scope           : {},
            controller      : Controller,
            controllerAs    : 'vm',
            bindToController: {
                ngModel        : '=',
                onSelect       : '&',
                carouselOptions: '='
            }
        };
    }

    Controller.$inject = ['$scope'];
    function Controller($scope) {
        var vm      = this;
        vm.selected = false;

        activate();

        function activate() {
            $scope.$on('a-carousel.itemselected', function (event, item) {
                vm.selected = item === vm.ngModel ? true : false;
            });
        }
    }
})();
