// Passive event listeners
jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    this.addEventListener("touchstart", handle, {
      passive: !ns.includes("noPreventDefault"),
    });
  },
};
jQuery.event.special.touchmove = {
  setup: function (_, ns, handle) {
    this.addEventListener("touchmove", handle, {
      passive: !ns.includes("noPreventDefault"),
    });
  },
};

$(window).on("load", function () {
  // preloader init
  setTimeout(function () {
    $(".preloader").fadeOut(200);

    // aos scroll-animation Init
    function aosAnim() {
      AOS.init({
        duration: 600,
        once: true,
      });
    }
    setTimeout(function () {
      aosAnim();
    }, 100);
  }, 50);
});

// header sticky
$(window).scroll(function () {
  if ($(window).scrollTop() >= 50) {
    $(".header-nav").addClass("header-sticky-top");
  } else {
    $(".header-nav").removeClass("header-sticky-top");
  }
});

// on ready state
$(document).ready(function () {
  "use strict";

  // dropdownAnimation
  function dropdownAnimation() {
    $(".header-nav")
      .find(".dropdown-menu")
      .each(function (idx, item) {
        $(this).height($(this).height());
      });
  }
  dropdownAnimation();

  // replace image with video
  function videoInit() {
    $(".video-play-btn").on("click", function () {
      var thumbWidth = $(this).siblings(".video-thumb").width();
      var video =
        '<div class="embed-responsive embed-responsive-16by9 mx-auto bg-dark" style="max-width:' +
        thumbWidth +
        'px"><iframe class="embed-responsive-item" src="' +
        $(this).data("src") +
        "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" +
        '" allowscriptaccess="always" allow="autoplay" allowfullscreen></iframe></div>';
      $(this).fadeOut(100);
      $(this).siblings(".video-thumb").replaceWith(video);
    });
  }
  videoInit();

  // tab
  $(".tab-content")
    .find(".tab-pane")
    .each(function (idx, item) {
      var navTabs = $(this).closest(".code-tabs").find(".nav-tabs"),
        title = $(this).attr("title");
      navTabs.append(
        '<li class="nav-item"><a class="nav-link" href="#">' +
        title +
        "</a></li>"
      );
    });

  $(".code-tabs ul.nav-tabs").each(function () {
    $(this).find("li:first").addClass("active");
  });

  $(".code-tabs .tab-content").each(function () {
    $(this).find("div:first").addClass("active");
  });

  $(".nav-tabs a").click(function (e) {
    e.preventDefault();
    var tab = $(this).parent(),
      tabIndex = tab.index(),
      tabPanel = $(this).closest(".code-tabs"),
      tabPane = tabPanel.find(".tab-pane").eq(tabIndex);
    tabPanel.find(".active").removeClass("active");
    tab.addClass("active");
    tabPane.addClass("active");
  });

  // Accordions
  $(".collapse")
    .on("shown.bs.collapse", function () {
      $(this)
        .parent()
        .find(".fas fa-plus")
        .removeClass("fas fa-plus")
        .addClass("fas fa-minus");
    })
    .on("hidden.bs.collapse", function () {
      $(this)
        .parent()
        .find(".fas fa-minus")
        .removeClass("fas fa-minus")
        .addClass("fas fa-plus");
    });

  // menuHumBurger icon toggle Init
  function menuHumBurgerIcon() {
    $(".navbar-toggler").on("click", function () {
      $("i").toggleClass("d-inline d-none");
    });
  }
  menuHumBurgerIcon();

  // rellax
  const dataRellax = document.querySelector("[data-rellax-speed]");
  if (dataRellax) {
    function parallax() {
      new Rellax(dataRellax);
    }
    parallax();
  }

  // brandCarousel fix
  const brandCarouselEl = document.querySelector(".brand-carousel");
  if (brandCarouselEl) {
    function brandCarousel() {
      new Swiper(brandCarouselEl, {
        spaceBetween: 0,
        speed: 1000,
        loop: true,
        // autoplay: {
        // 	delay: 3000
        // },
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          767: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          991: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        },
      });
    }
    brandCarousel();
  }

  // featuresCarousel fix
  const featuresCarouselEl = document.querySelector(".features-carousel");
  if (featuresCarouselEl) {
    function featuresCarousel() {
      new Swiper(featuresCarouselEl, {
        spaceBetween: 0,
        speed: 600,
        autoplay: true,
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          575: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true,
        },
      });
    }
    featuresCarousel();
  }

  if ($(".pricing-check").length !== 0) {
    // pricing init
    function pricingInit() {
      var toggleSwitch = $(".pricing-check");
      var dataCount = $(".data-count");
      $(toggleSwitch).change(function () {
        if ($(toggleSwitch).is(":checked")) {
          dataCount.each(function () {
            $(this).html($(this).data("count-annually"));
            $(this)
              .prop("Counter", 999)
              .animate(
                {
                  Counter: $(this).text(),
                },
                {
                  duration: 250,
                  easing: "swing",
                  step: function (now) {
                    $(this).text(Math.ceil(now));
                  },
                }
              );
          });
          $(".text-monthly").addClass("d-none").removeClass("d-inline");
          $(".text-annually").addClass("d-inline").removeClass("d-none");
        } else if ($(toggleSwitch).is(":not(:checked)")) {
          dataCount.each(function () {
            $(this).html($(this).data("count-monthly"));
            $(this)
              .prop("Counter", 999)
              .animate(
                {
                  Counter: $(this).text(),
                },
                {
                  duration: 250,
                  easing: "swing",
                  step: function (now) {
                    $(this).text(Math.ceil(now));
                  },
                }
              );
          });
          $(".text-monthly").addClass("d-inline").removeClass("d-none");
          $(".text-annually").addClass("d-none").removeClass("d-inline");
        }
      });
    }
    pricingInit();
  }

  // Form validation Init
  (function () {
    window.addEventListener(
      "load",
      function () {
        var forms = document.getElementsByClassName("needs-validation");
        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener(
            "submit",
            function (event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add("was-validated");
            },
            false
          );
        });
      },
      false
    );
  })();

  // Sidebar in Mobile Devices Hide & Show
  function sidebar() {
    const sidebar = document.querySelector("#sidebarContent");
    const sidebarOpenBtn = document.querySelector(".sidebar-open-btn");
    const sidebarCloseBtn = document.querySelector(".breaches-sidebar-close-btn");

    function closeSidebar() {
      sidebarOpenBtn.classList.remove("active");
      sidebar.classList.remove("active");

      // Prevent Body Scrolling
      document.body.classList.remove("navbar-show");
      document.body.style.removeProperty("padding-right");

      // Remove Backdrop
      if (document.querySelector(".tf-backdrop")) {
        document.querySelector(".tf-backdrop").remove();
      }
    }

    function showSidebar() {
      sidebarOpenBtn.classList.add("active");
      sidebar.classList.add("active");

      // Close Sidebar If user click outside of sidebar element
      const backdrop = document.createElement("div");
      backdrop.setAttribute(
        "style",
        "width: 100vw;height: 100vh;background-color:#000000;opacity: 0.6;position:fixed;z-index:1000;left:0;top:0;"
      );
      backdrop.setAttribute("class", "tf-backdrop");
      if (!document.querySelector(".tf-backdrop")) {
        document.body.insertBefore(backdrop, sidebar.children[-1]);
      }
    }

    sidebarOpenBtn.addEventListener("click", (e) => {
      e.preventDefault();

      if (sidebarOpenBtn.classList.contains("active")) {
        closeSidebar();
      } else {
        showSidebar();
        document.querySelector(".tf-backdrop").addEventListener("click", () => {
          closeSidebar();
        });
      }

      window.addEventListener("resize", () => {
        if (screen.width >= 1200) {
          closeSidebar();
        }
      });
    });
    sidebarCloseBtn.addEventListener("click", (e) => {
      e.preventDefault();
      closeSidebar();
    });
  }
  sidebar();
});
