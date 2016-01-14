(function () {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$scope', '$timeout', '$ionicModal'];
    function AppController($scope, $timeout, $ionicModal) {
        var vm = this;

        vm.options = {
            unselectOthers: false
        };

        var modal;

        // Carousel Options
        vm.carouselOptions1 = {
            carouselId    : 'carousel-1',
            align         : 'left',
            selectFirst   : true,
            centerOnSelect: true
        };

        vm.carouselOptions2 = {
            carouselId    : 'carousel-2',
            align         : 'right',
            selectFirst   : true,
            centerOnSelect: true
        };

        vm.carouselOptions3 = {
            carouselId    : 'carousel-3',
            align         : 'left',
            selectFirst   : false,
            centerOnSelect: false
        };

        vm.carouselOptions4 = {
            carouselId    : 'carousel-4',
            align         : 'left',
            selectFirst   : true,
            centerOnSelect: true,
            template      : 'carousel-templates/demo-1.html'
        };

        vm.carouselOptions5 = {
            carouselId    : 'carousel-5',
            align         : 'center',
            selectFirst   : true,
            centerOnSelect: true,
            template      : 'carousel-templates/demo-2.html'
        };

        vm.carouselOptions6 = {
            carouselId    : 'carousel-6',
            align         : 'left',
            selectFirst   : false,
            centerOnSelect: false,
            template      : 'carousel-templates/demo-3.html',
            pullRefresh   : {
                active  : true,
                callBack: pullRefresh
            }
        };

        vm.carouselOptions7 = {
            carouselId    : 'carousel-7',
            align         : 'left',
            selectFirst   : true,
            centerOnSelect: false,
            template      : 'carousel-templates/demo-3.html'
        };

        vm.onSelectCarousel = onSelectCarousel;
        vm.addItemsCarousel = addItemsCarousel;
        vm.openModal        = openModal;

        activate();

        function activate() {

            // Mock data for carousel
            vm.carouselData1 = createArray(20);
            vm.carouselData2 = createArray(5);
            vm.carouselData3 = createArray(3);
            vm.carouselData4 = createArray(6);
            vm.carouselData5 = createArray(3);
            vm.carouselData6 = createArray(5, true);
            vm.carouselData7 = createArray(3, true);

            // To be able to use the carousel inside a modal we need to set the properties on the $scope object
            $scope.carouselOptions1 = vm.carouselOptions1;
            $scope.carouselData1    = vm.carouselData1;
            $scope.onSelectCarousel = vm.onSelectCarousel;
            $scope.closeModal       = closeModal;

            function createArray(total, randomImg) {
                randomImg                = typeof randomImg === 'undefined' ? false : randomImg;
                var i, model, imgId, arr = [];
                for (i = 0; i < total; i++) {
                    model = {
                        id     : i,
                        display: 'item ' + i
                    };
                    if (i === 2 || i === 13) {
                        model.display = 'longer ' + model.display;
                    }
                    if (randomImg) {
                        imgId     = Math.floor(Math.random() * 10000);
                        model.src = 'http://lorempixel.com/120/80/?' + imgId
                    }
                    arr.push(model);
                }

                return arr;
            }
        }

        function onSelectCarousel(item) {
            console.log('Carousel item selected:', item);
            vm.itemSelected = item;

            // unselect all carousel with id that contains string except one
            if (vm.options.unselectOthers) {
                $scope.$broadcast('a-carousel.desactivateItem', {idContains: 'carousel-', except: item.carouselId});
            }
        }

        // Example add 4 elements to carousel 7
        function addItemsCarousel(total) {
            var i, model
            var oldLength = vm.carouselData7.length;
            for (i = 0; i < total; i++) {
                model = getModelImageItem(oldLength + i);
                vm.carouselData7.push(model);
            }

            // Tell carousel 6 that its array has been updated
            $scope.$broadcast('a-carousel.arrayupdated', 'carousel-7');
        }

        // Pull refresgh method for carousel 6
        function pullRefresh() {
            $timeout(function () {
                var i, model, total = 5;
                var oldLength       = vm.carouselData6.length;
                for (i = 0; i < total; i++) {
                    model = getModelImageItem(oldLength + i);
                    vm.carouselData6.push(model);
                }

                $scope.$broadcast('a-carousel.arrayupdated', 'carousel-6');
                $scope.$broadcast('a-carousel.pullrefresh.done');
            }, 2500);
        }

        function getModelImageItem(id) {
            var imgId = Math.floor(Math.random() * 10000);
            return {
                id : id,
                src: 'http://lorempixel.com/120/80/?' + imgId
            }
        }

        function openModal() {
            var templateModal = '<ion-modal-view><ion-header-bar><h2>Inside a Modal</h2></ion-header-bar>' +
                '<ion-content><button class="btn" ng-click="closeModal()">Close modal</button><br><a-carousel item-directive="carousel-text-item" ' +
                'carousel-options="carouselOptions1" array-provider="carouselData1" ' +
                'on-select="onSelectCarousel(item)"></a-carousel></ion-content></ion-modal-view>';
            modal             = $ionicModal.fromTemplate(templateModal, {
                scope: $scope
            });
            modal.show();
        }

        function closeModal() {
            modal.hide();
        }

    }
}());
