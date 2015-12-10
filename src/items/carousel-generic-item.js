(function() {
    'use strict';

    angular
        .module('app.core')
        .directive('carouselGenericItem', carouselGenericItem);

    function carouselGenericItem() {
        var directive = {
            restrict: 'EA',
            replace:true,
            templateUrl:function(elem, attr) {
                if (!attr.template) {
                    attr.template = 'item';
                }
                return 'app/widgets/directives/menu-carousel/items/carousel-generic-' + attr.template + '.html';
            },
            scope: {
                ngModel:'=',
                onSelect:'&',
                carouselOptions:'='
            },
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true
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
