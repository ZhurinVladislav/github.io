window.addEventListener('DOMContentLoaded', function() {
  // Header-top
  function setBurger(params) {
    const btn = document.querySelector(`.${params.btnClass}`);
    const menu = document.querySelector(`.${params.menuClass}`);
  
    menu.addEventListener("animationend", function () {
      if (this.classList.contains(params.hiddenClass)) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
      }
    });
  
    btn.addEventListener("click", function () {
      this.classList.toggle(params.activeClass);
  
      if (
        !menu.classList.contains(params.activeClass) &&
        !menu.classList.contains(params.hiddenClass)
      ) {
        menu.classList.add(params.activeClass);
        document.body.style.overflow = 'hidden';
      } else {
        menu.classList.add(params.hiddenClass);
        document.body.removeAttribute('style');
      }
    });
  }
  
  setBurger({
    btnClass: "header__menu-durger",
    menuClass: "header__menu-top-wrap",
    activeClass: "is-opened",
    hiddenClass: "is-closed"
  });
  
  function setSearch(params) {
    const openBtn = document.querySelector(`.${params.openBtnClass}`);
    const search = document.querySelector(`.${params.searchClass}`);
    const closeBtn = search.querySelector(`.${params.closeBtnClass}`);
  
    search.addEventListener("animationend", function (evt) {
      if (this._isOpened) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
        this._isOpened = false;
      } else {
        this._isOpened = true;
        }
      }
    );
    
    search.addEventListener('click', function(evt) {
      evt._isSearch = true;
    });
  
    openBtn.addEventListener("click", function (evt) {
      this.disabled = true;
  
      if (
        !search.classList.contains(params.activeClass) &&
        !search.classList.contains(params.hiddenClass)
      ) {
        search.classList.add(params.activeClass);
        }
      }
    );
    
    closeBtn.addEventListener('click', function () {
      openBtn.disabled = false;
      search.classList.add(params.hiddenClass);
    });
    
    document.body.addEventListener('click', function (evt) {
      if (!evt._isSearch && search._isOpened) {
        openBtn.disabled = false;
        search.classList.add(params.hiddenClass);
      }
    }
    );
  }
  
  setSearch({
    openBtnClass: "js-open-search",
    closeBtnClass: "js-close",
    searchClass: "js-form",
    activeClass: "is-opened",
    hiddenClass: "is-closed"
  });

  // Scroll
  document.querySelectorAll(".header__scroll-simplebar").forEach(dropdown => {
    new SimpleBar(dropdown, {
    autoHide: false,
    scrollbarMaxSize: 25,
  });

  const btns = document.querySelectorAll(".header__menu-list-item-btn");
  const dropdowns = document.querySelectorAll(".header__scroll");
  const activeClassdropdowns = "dropdown__active";
  const activeClassbtns = "btn__active";
  
  btns.forEach(item => {
    item.addEventListener("click", function() {
      let DropThis = this.parentElement.querySelector(".header__scroll");
      dropdowns.forEach(el => {
        if (el != DropThis) {
          el.classList.remove(activeClassdropdowns)
        }
      });
      btns.forEach(el => {
        if (el != this) {
          el.classList.remove(activeClassbtns)
        }
      });
      DropThis.classList.toggle(activeClassdropdowns);
      this.classList.toggle(activeClassbtns);
    })
  })
    
  // Swiper
  const swiper = new Swiper('.js-hero-swiper', {
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 10000,
    autoplay: {
      delay: 10000
    }
  });

  let gallerySlider = new Swiper(".section-gallery__slides-container", {
    slidesPerGroup: 3,
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".section-gallery .section-gallery__swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".section-gallery__swiper-btn-next",
      prevEl: ".section-gallery__swiper-btn-prev"
    },

    breakpoints: {
      320: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 24,
      },

      768: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 37,
      },

      1000: {
        slidesPerGroup: 3,
        slidesPerView: 2,
        spaceBetween: 34,
      },

      1415: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  });

  var slider2 = new Swiper('.section-events__slides-container', {
    autoHeight: true,
    slidesPerView: 3,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 50,
    navigation: {
      nextEl: ".section-events__swiper-btn-next",
      prevEl: ".section-events__swiper-btn-prev"
    },

    pagination: {
      el: '.section-events__swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 50,
      },

      768: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 33,
      },

      1000: {
        slidesPerGroup: 2,
        slidesPerView: 3,
        spaceBetween: 28,
      },

      1415: {
        slidesPerGroup: 2,
        slidesPerView: 3,
        spaceBetween: 50,
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  })

  var slider3 = new Swiper('.section-projects__slides-container', {
    slidesPerGroup: 1,
    slidesPerView: 3,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 50,
    navigation: {
      nextEl: ".section-projects__swiper-btn-next",
      prevEl: ".section-projects__swiper-btn-prev"
    },

    breakpoints: {
      320: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 50,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 33.8,
      },

      1000: {
        slidesPerView: 2,
        spaceBetween: 50,
      },

      1415: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  })

  // Select 
  const element = document.querySelector('#selectCustom');
  const choices = new Choices(element, {
  searchEnabled: true,
  itemSelectText: '',
  searchEnabled: false,
  })
  
  // Tabs
  document.querySelectorAll('.section-catalog__list-item').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event){
        const path = event.currentTarget.dataset.path;

        document.querySelectorAll('.section-catalog__list-item').forEach(function(btn){
    btn.classList.remove('section-catalog__list-item_active')});
    event.currentTarget.classList.add('section-catalog__list-item_active');

        document.querySelectorAll('.section-catalog__content-bottom-left').forEach(function(tabsBtn){
    tabsBtn.classList.remove('section-catalog__content-bottom-left_active')});

    document.querySelector(`[data-target="${path}"]`).classList.add('section-catalog__content-bottom-left_active');
    })
    })
  })

  // ValidateForm
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999)-999-99-99");

  im.mask(selector);

  new JustValidate('.section-feedback__form', {
    rules: {
      name: {
          required: true,
          minLength: 2,
          maxLength: 30,
      },
      tel: {
          required: true,
          function: (name, value) => {
              const phone = selector.inputmask.unmaskedvalue()
              return Number(phone) && phone.length === 10
          }
      },
      mail: {
          required: true,
          email: true,
          errorMessage: 'Как вас зовут?',
      },
    },
  });

  const validate = new window.JustValidate('#form');

  const validation = new JustValidate('#form');

  validation
    .addField('#name', [
      {
      rule: 'minLength',
      value: 3,
      },
      {
      rule: 'maxLength',
      value: 30,
      },
      {
      rule: 'required',
      errorMessage: 'Недопустимый формат имени',
      },
    ])
    .addField('#tel', [
      {
      rule: 'required',
      errorMessage: 'Недопустимый формат телефона',
      },
    ])

  new JustValidate('#form', {
    rules: {
      name: {
          required: true,
          minLength: 2,
          maxLength: 30
      },
      tel: {
          required: true,
          function: (name, value) => {
              const phone = selector.inputmask.unmaskedvalue()
              return Number(phone) && phone.length === 10
          }
      },
    },
});

  // Map
  ymaps.ready(init);
  function init() {
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
      "map",
      { 
      center: [55.75846806898367, 37.60108849999989], 
      zoom: 14, 
      controls: ['geolocationControl', 'zoomControl']
      },
      { 
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "400px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "320px", right: "20px" }
      }
  );

  myMap.behaviors.disable('scrollZoom');

  const myPlacemark = new ymaps.Placemark(
      [55.75846806898367, 37.60108849999989],
      {},
      {
      iconLayout: 'default#image',
      iconImageHref: 'img/subtract.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, 42]
      }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
  }
});

// Accordion
(() => {
  new Accordion(".section-catalog__accordion-container", {
    openOnInit: [0]
  });
  tippy('.js-tooltip-btn', {
    theme: 'test-tooltip',
    trigger: 'focus',
    duration: 500,
    maxWidth: 264,
});
})();


