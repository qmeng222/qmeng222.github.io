# Qingying's Developer Journal

<br>

## Sunday, 11/13/2022

- added the loading Gif
- fading out the loading gif and the background sequentially
- bug fix: (PORTFOLIO section) images overlapping when the page was loaded the first time
- added the favicon
- study notes:
  - add viewport meta tag to <head> to ensure proper rendering and touch zooming on mobile devices:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  ```
  - add favicon in html:
    1. use any image as the favicon, or create a favicon at https://www.favicon.cc, save favicon image to the right directory
    2. add a <link> element to "index.html" file, save the "index.html" file and reload the browser

<br>

## Saturday, 11/12/2022

- added and styled the navigation bar via Bootstrap & Icons8
- sticking nav bar on scroll
- set the top padding (space) of the body element on scroll
- smooth transition to section on link click

<br>

## Friday, 11/11/2022

- added an overlay to the items
- added fly in/out transititons to the buttons
- enabled zooming images on hover
- enabled filtering items
- bug fix: icons do not slide in on mobile from time to time
- added copyright section
- study notes:
  - copyright symbol:
    ```html
    <p>&copy;</p>
    ```

<br>

## Tuesday, 11/8/2022

- added Isotope plugin (for **_portfolio_** section)
- added and styled the filter buttons
- added and styled portfolio items
- study notes:
  - Isotope plugin:
    - Isotope.pkgd.min.js: https://isotope.metafizzy.co/
    - Isotope options: https://isotope.metafizzy.co/options.html
  - Fancybox plugin:
    - Fancybox helps to create beautiful, modern overlay windows containing images, iframes, videos or any kind of HTML content.
    - use Fancybox: https://fancyapps.com/docs/ui/quick-start
  - Bootstrap grid system across multiple devices:
    ![Bootstrap grid multi devices](/images/journal-images/Bootstrap-grid-multi-devices.png)
    These classes cann be combined to create more dynamic and flexible layouts.

<br>

## Sunday, 11/6/2022

- added the **_stats_** section and styled the skills items
- added an icon to each skill using Font Awesome (Web Fonts with CSS)
- activated the count up on scroll
- added and styled the **_contact_** section
- study notes:
  - Font Awesome:
    - Font Awesome is an icon library and toolkit
    - use Font Awesome CDN to a deliver cached version nof Font Awesome's web fonts and CSS to the project:
      ```html
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
        crossorigin="anonymous"
      />
      ```
  - CountUp.js:
    - CountUp.js is a dependency-free, lightweight JavaScript class that can be used to quickly create animations that display numerical data in a more interesting way: https://inorganik.github.io/countUp.js/
    - download files: https://github.com/inorganik/CountUp.js
  - CSS box model:
    ![CSS box model](/images/journal-images/CSS-box-model.png)

<br>

## Thursday, 11/3/2022

- adde the Owl Carousel:
- added the **_technical skill_** section with slider and pie charts
- styled the pie charts
- activated the pie charts on scroll by setting skillsTopOffset as a trigger
- study notes:
  - colors for web designers: https://flatuicolors.com/
  - owl carousel:
    - owl carousel is a touch enabled jQuery plugin that lets you create a beautiful responsive carousel slider
    - download files: https://owlcarousel2.github.io/OwlCarousel2/
    - demos: https://owlcarousel2.github.io/OwlCarousel2/demos/demos.html
  - easy pie chart:
    - easy pie chart is a lightweight plugin to render simple, animated and retina optimized pie charts
    - download files: https://github.com/rendro/easy-pie-chart
    - options to set a custom look for the pie chart: https://github.com/rendro/easy-pie-chart > Options
    - callback params: https://github.com/rendro/easy-pie-chart > Callbacks
  - the **canvas** tag is transparent, and is only a container for graphics, you must use a script to actually draw the graphics

<br>

## Wednesday, 11/2/2022

- added the **_title_** section
- had typed through effect on subtitle using plugin typed.js
- added headshot & text to the **_about me_** section
- study notes:
  1. Typed.js
     - Typed.js is a library that types. Enter in any string, and watch it type at the speed you've set, backspace what it's typed, and begin a new sentence for however many strings you've set.
     - link: https://github.com/mattboldt/typed.js/
  2. shorthands handling properties related to edges of a box:
     ![CSS box edges](/images/journal-images/CSS-box-edges.png)

<br>

## Tuesday, 11/1/2022

- set up fullscreen image slider
- added images to thhe slider
- set Superslides options: https://github.com/nicinabox/superslides > Options
- added and styled "previous page" and "next page" buttons (icons)
- added a background overlay to the slider
- study notes:

  1. Superslides - Superslides is a full screen, hardware accelerated slider for jQuery. - google "superslides", click on https://github.com/nicinabox/superslides, get the two files we need (jquery.superslides.min.js & superslides.css), then add them to the head section
     ![adding superslides files](/images/journal-images/add-superslides-files.png)
  2. add placeholder images:
     ```html
     <div id="slides">
       <div class="slides-container">
         <img src="https://flickholdr.com/1000/800" alt="" />
         <img src="https://flickholdr.com/1000/800" alt="" />
       </div>
     </div>
     ```
     replace "http://flickholdr.com/1000/800" with the update-to-date link at https://placeholder.com/
  3. find free images at https://www.pexels.com/
  4. find free icons at https://icons8.com/
  5. in css, the one described in more detail takes precedence:
     ![css precedence eg](/images/journal-images/css-precedence-eg.png)
     👆in this example, **_right: 20px_** is overwritten by **_right: 0_** because **_a.next_** is has more detail than **_.next_**
  6. css **_position_** examples: https://www.ruanyifeng.com/blog/2019/11/css-position.html
  7. if two elements have the same z-index, it goes by the order the element was mounted

<br>

## Monday, 10/31/2022

- Project setup:
  1. addding jQuery
  2. adding Bootstrap
- study notes:
  1. HTML skeleton: type ! into an html file in VS Code and then press tab
     ![HTML skeleton](/images/journal-images/html-skeleton.png)
  2. Code > Preferences > Configure User Snippets > choose existing snippets or create new snippet
  3. jQuery:
     - jQuery is a JS library designed to simplify HTML DOM (Document Object Model) tree manipulation, event handling, CSS, and animation.
     - include CDN(content delivery network) versions of jQuery by searching "jquery cdn google"
  4. Bootstrap:
     - Bootstrap is a front-end component library. It's a good starting point.
     - add Bootstrap from a CDN: https://getbootstrap.com/docs/5.2/getting-started/download/
       ![adding Bootstrap](/images/journal-images/add-Bootstrap.png)
     - add Popper BEFORE JavaScript via a CDN:
       ![adding Popper](/images/journal-images/add-Popper.png)
     - Bootstrap grid system:
       - https://www.w3schools.com/bootstrap/bootstrap_grid_system.asp
       - example explained: https://stackoverflow.com/questions/24175998/meaning-of-numbers-in-col-md-4-col-xs-1-col-lg-2-in-bootstrap
