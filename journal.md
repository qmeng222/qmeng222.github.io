# Developer's Journal

## Wednesday, 11/2/2022

- added the title section
- added the about section
- my notes:
  1. addf

<br>

## Tuesday, 11/1/2022

- set up fullscreen image slider
- added images to thhe slider
- set Superslides options: https://github.com/nicinabox/superslides > Options
- added and styled "previous page" and "next page" buttons (icons)
- added a background overlay to the slider
- my notes:

  1. Superslides - Superslides is a full screen, hardware accelerated slider for jQuery. - google "superslides", click on https://github.com/nicinabox/superslides, get the two files we need (jquery.superslides.min.js & superslides.css), then add them to the head section
     ![adding superslides files](/images/add-superslides-files.png)
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
     ![css precedence eg](/images/css-precedence-eg.png)
     👆in this example, **_right: 20px_** is overwritten by **_right: 0_** because **_a.next_** is has more detail than **_.next_**
  6. css **_position_** examples: https://www.ruanyifeng.com/blog/2019/11/css-position.html
  7. if two elements have the same z-index, it goes by the order the element was mounted

<br>

## Monday, 10/31/2022

- Project setup:
  1. addding jQuery
  2. adding Bootstrap
- My notes:
  1. HTML skeleton: type ! into an html file in VS Code and then press tab
     ![HTML skeleton](/images/html-skeleton.png)
  2. Code > Preferences > Configure User Snippets > choose existing snippets or create new snippet
  3. jQuery:
     - jQuery is a JS library designed to simplify HTML DOM (Document Object Model) tree manipulation, event handling, CSS, and animation.
     - include CDN(content delivery network) versions of jQuery by searching "jquery cdn google"
  4. Bootstrap:
     - Bootstrap is a front-end component library. It's a good starting point.
     - add Bootstrap from a CDN: https://getbootstrap.com/docs/5.2/getting-started/download/
       ![adding Bootstrap](/images/add-Bootstrap.png)
     - add Popper BEFORE JavaScript via a CDN:
       ![adding Popper](/images/add-Popper.png)
