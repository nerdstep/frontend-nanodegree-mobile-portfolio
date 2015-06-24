#frontend-nanodegree-mobile-portfolio

Udacity Front-End Web Developer Nanodegree Project 4

### [View Project](http://nerdstep.github.io/frontend-nanodegree-mobile-portfolio/dist/)

## Installation

To build the project locally **node.js** must be installed first.

1. `git clone` this repo
2. Go to the root of the project directory and type `npm install` to install the development dependencies
3. After the dependencies have installed type `gulp build` to generate the `dist` files
4. Go to the `dist` directory and open **index.html** in your browser

## Project Optimization Notes

### Part 1: Optimize PageSpeed Insights 

To achieved a PageSpeed score above 90 I made the following optimizations:

- Minified and inlined CSS within the HTML file
- Minified and inlined Javascript and moved the script to the bottom of the page to prevent blocking
- Compressed images to reduce file size
- Added image `width` & `height` properties to each image tag

### Part 2: Optimize Frames per Second

- made minor improvements to variable declaration
- removed a String.capitalize transformation and added a CSS rule instead
- used more performant DOM element selectors `getElementById` and `getElementsByClassName` where applicable
- cached the DOM element selectors that are re-used often
- moved several functions outside of the `resizePizzas` function
- moved a height calculation outside of a for-loop
- added a function to use the `requestAnimationFrame` API to optimize concurrent animations [http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/](http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/)

