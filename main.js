function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    var name =document.getElementById("name");
    var email = document.getElementById("email");
    var feedback = document.getElementById("feedback");
  
    if(name.value == ""){
      alert("nama harus diisi");
      name.focus();
      return false;
    }
  
    if(email.value == ""){
      alert("email harus diisi");
      email.focus();
      return false;
    }
  
    if(feedback.value == ""){
      alert("feedback harus diisi");
      feedbck.focus();
      return false;
    }
  
    if(feedbck.value.length >= 100){
      alert("harus kurang dari 100 kata");
      feedback.focus();
      return false;
    }
    return true;
  
  
  }
  
  (function() {
      "use strict";
    
      /**
       * Easy selector helper function
       */
      const select = (el, all = false) => {
        el = el.trim()
        if (all) {
          return [...document.querySelectorAll(el)]
        } else {
          return document.querySelector(el)
        }
      }
    
      /**
       * Easy event listener function
       */
      const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
          if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
          } else {
            selectEl.addEventListener(type, listener)
          }
        }
      }
    
      /**
       * Easy on scroll event listener 
       */
      const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
      }
    
      /**
       * Toggle .header-scrolled class to #header when page is scrolled
       */
      let selectHeader = select('#header')
      if (selectHeader) {
        const headerScrolled = () => {
          if (window.scrollY > 100) {
            selectHeader.classList.add('header-scrolled')
          } else {
            selectHeader.classList.remove('header-scrolled')
          }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
      }
    
    
    
      /**
       * Mobile nav toggle
       */
      on('click', '.mobile-nav-toggle', function(e) {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
      })
    
      /**
       * Mobile nav dropdowns activate
       */
      on('click', '.navbar .dropdown > a', function(e) {
        if (select('#navbar').classList.contains('navbar-mobile')) {
          e.preventDefault()
          this.nextElementSibling.classList.toggle('dropdown-active')
        }
      }, true)
    
      /**
       * Hero carousel indicators
       */
      let heroCarouselIndicators = select("#hero-carousel-indicators")
      let heroCarouselItems = select('#heroCarousel .carousel-item', true)
    
      heroCarouselItems.forEach((item, index) => {
        (index === 0) ?
        heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
          heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
      });
    
      /**
       * Porfolio isotope and filter
       */
      window.addEventListener('load', () => {
        let galeriContainer = select('.galeri-container');
        if (galeriContainer) {
          let galeriIsotope = new Isotope(galeriContainer, {
            itemSelector: '.galeri-item'
          });
    
          let galeriFilters = select('#galeri-flters li', true);
    
          on('click', '#galeri-flters li', function(e) {
            e.preventDefault();
            galeriFilters.forEach(function(el) {
              el.classList.remove('filter-active');
            });
            this.classList.add('filter-active');
    
            galeriIsotope.arrange({
              filter: this.getAttribute('data-filter')
            });
          }, true);
        }
    
      });
    
      /**
       * Initiate galeri lightbox 
       */
      const galeriLightbox = GLightbox({
        selector: '.galeri-lightbox'
      });
    
      /**
       * galeri details slider
       */
      new Swiper('.galeri-details-slider', {
        speed: 400,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      });
    
      /**
       * Initiate galeri details lightbox 
       */
      const galeriDetailsLightbox = GLightbox({
        selector: '.galeri-details-lightbox',
        width: '90%',
        height: '90vh'
      });
  
    
    })()