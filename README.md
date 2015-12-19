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
        item-directive="name-of-your-directive"
        carousel-options="::vm.carouselOptions"
        array-provider="::vm.carouselData"
        on-select="vm.onSelectCarousel(item)">
  </a-carousel>
  ```
  
  ### Directive parameters
- array-provider: an array of object which will serve as 'model' for your carousel items so you can bind any value.
- item-directive (optional): the name of the directive you want to use as an item.
  One directives item is already included inside the advanced carousel: 'carousel-text-item' for simple text display. To use this text item, just pass it to the directive and the carousel will look for a 'display' property on the object pass through array-provider `[{id:0, display'item1'}, ...]`.
If you don't set this parameter you must indicate a templateUrl through the options (see below).
- carousel-options: a set of options to initiate the carousel. See example below. Don't forget the :: for one-time binding.
- on-select: method to be called when an item is selected
  
 ### Carousel options (with default value)
```js
var options = {
    carouselId    : 'my-carousel', // unique id for the carousel
    template      : null, // templateUrl in case you don't need to pass a directive but just a html view
    align         : 'left', // alignement of the carousel
    centerOnSelect: true, // center carousel when an item is selected
    trackBy       : '$index',  // indicate a track by property
    selectFirst   : true, // select first carousel item at start
    selectAtStart : {    // Select at start the item with the property (string) with value passed
        property: null,
        value   : null
    },
    pullRefresh   : {  // optional => set active to true for pull refresh passing a callBack
        active  : false,
        callBack: angular.noop
    }
};
```

