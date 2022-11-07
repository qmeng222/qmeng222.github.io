# Qingying's Developer Journal

<br>

## Sunday, 11/6/2022

- added the stats section and styled the skills items
- added an icon to each skill using Font Awesome (Web Fonts with CSS)
- activated the counting up from zero on scroll
- study notes:

  - CSS box model:
    ![CSS box model](/images/journal-images/CSS-box-model.png)
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
