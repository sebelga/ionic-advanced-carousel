# ionic Advanced Carousel
Carousel directive for Ionic Frameworks that let you use any custom template as an item.

## Demo
To be able to see the demo correctly you need to see the page in device mode / mobile emulation. Instructions for
        [Chrome here](https://developer.chrome.com/devtools/docs/device-mode) and for [Firefox here](https://developer.mozilla.org/en/docs/Tools/Responsive_Design_View)
  - [GitHub](http://sebelga.github.io/ionic-advanced-carousel/demo)

## Usage

  - If you use [bower](http://bower.io/), just `bower install ionic-advanced-carousel`. If not, download files [from the github repo](./dist).

  - Include `advanced-carousel.min.js`, and `advanced-carousel.min.css`:
  ```html
  <link href="advanced-carousel.min.css" rel="stylesheet" />
  <script src="advanced-carousel.min.js"></script>
  ```
  - Add `aCarousel` as a dependency to your application module:
  ```js
  angular.module('app', ['aCarousel']);
  ```
  
  - Put the following markup in your template:
  ```html
  <a-carousel
        item-directive="carousel-text-item"
        carousel-options="::vm.carouselOptions1"
        array-provider="::vm.carouselData1"
        on-select="vm.onSelectCarousel(item)">
  </a-carousel>
  ```
