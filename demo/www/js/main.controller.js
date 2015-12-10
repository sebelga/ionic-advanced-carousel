(function () {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    function AppController() {
        var vm = this;

        // Carousel Options
        vm.carouselOptions1 = {
            carouselId:'carousel-1',
            align:'left',
            selectFirst:true,
            centerOnSelect:true
        };

        vm.carouselOptions2 = {
            carouselId:'carousel-2',
            align:'right',
            selectFirst:true,
            centerOnSelect:true
        };


        vm.carouselOptions3 = {
            carouselId:'carousel-3',
            align:'left',
            selectFirst:false,
            centerOnSelect:false
        };

        vm.carouselOptions4 = {
            carouselId:'carousel-4',
            align:'center',
            selectFirst:false,
            centerOnSelect:true,
            template:'demo'
        };

        vm.onSelectCarousel = onSelectCarousel;

        activate();

        function activate() {

            // Mock data for carousel
            vm.carouselData  = createArray(20);
            vm.carouselData2 = createArray(5);

            function createArray(total) {
                var i, model, arr = [];
                for (i = 0; i < total; i++) {
                    model = {
                        id     : i,
                        display: 'item ' + i
                    };
                    if (i === 2 || i === 13){
                        model.display = 'longer ' + model.display;
                    }
                    arr.push(model);
                }

                return arr;
            }
        }

        function onSelectCarousel(item) {
            // console.log('Carousel item selected:', item);
            vm.itemSelected = item;
        }
    }
}());