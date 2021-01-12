'use script';
import jQuery from 'jquery';
import $ from 'jquery';
import Swiper, {Navigation, Pagination} from 'swiper';
import Readmore from "readmore-js";

Swiper.use([Navigation, Pagination]);
window.addEventListener('DOMContentLoaded', () => {
    /* BURGER-MENU */
    $(document).ready(function () {
        let subMenuParrent = document.querySelector('.header__nav');
        if ($('.header__burger')) {
            $('.header__burger').click(function (event) {
                event.preventDefault()
                $('.header__burger,.header__burger-fixed,.menu').toggleClass('active');

                $('html').toggleClass('lock');

            });
        }

    });
    /* ТАБЫ */
    const tabs = document.querySelectorAll('.js-stages__link'),
        tabsFaq = document.querySelectorAll('.js-faq__list'),
        tabsContent = document.querySelectorAll('.js-stages__tab'),
        tabsFaqContent = document.querySelectorAll('.js-faq__tab'),
        tabsParrent = document.querySelector('.stages-list'),
        tabsParrentTwo = document.querySelector('.stages-list__faq'),
        tabsHexagon = document.querySelectorAll('.stages-list__hexagon'),
        vacancyHexagon = document.querySelectorAll('.vacancy__img'),
        faq = document.querySelectorAll('.questions-item__title'),
        faqContent = document.querySelectorAll('.questions-item__text'),
        faqParrent = document.querySelector('.questions'),
        news = document.querySelectorAll('.news-subtitle'),
        newsContent = document.querySelectorAll('.news-articles__content'),
        newsParent = document.querySelector('.news-articles__header'),
        vacanciesParent = document.querySelector('.vacancies'),
        vacanciesContent = document.querySelectorAll('.vacancy__content'),
        vacancy = document.querySelectorAll('.vacancy');
    if (vacanciesParent) {

        vacanciesParent.addEventListener('click', (event) => {
            event.preventDefault();
            showHideTabs(event, 0, vacanciesContent, 'vacancy__content-active', vacancy, 'vacancy-active', true, 'vacancy', vacancyHexagon, 'vacancy__img-active');
        });
    }
    if (newsParent) {
        hideTabsContent(newsContent, 'active', news, 'news-subtitle-active', false, 'news-subtitle');
        showTabsContent(0, newsContent, 'active', news, 'news-subtitle-active', false, 'news-subtitle');

        newsParent.addEventListener('click', (event) => {
            event.preventDefault();
            showHideTabs(event, 0, newsContent, 'active', news, 'news-subtitle-active', false, 'news-subtitle');
        });
    }
    if (tabsParrent) {
        hideTabsContent(tabsContent, 'stages-tabs__tab-active', tabs, 'stages-list__link-active', true, 'stages-list__link', tabsHexagon, 'stages-list__hexagon-active');
        showTabsContent(0, tabsContent, 'stages-tabs__tab-active', tabs, 'stages-list__link-active', true, 'stages-list__link', tabsHexagon, 'stages-list__hexagon-active');

        tabsParrent.addEventListener('click', (event) => {
            event.preventDefault();
            showHideTabs(event);
        });
    }
    if (tabsParrentTwo) {
        hideTabsContent(tabsFaqContent, 'stages-tabs__tab-active', tabsFaq, 'stages-list__link-active', false, 'stages-list__link');
        showTabsContent(0, tabsFaqContent, 'stages-tabs__tab-active', tabsFaq, 'stages-list__link-active', false, 'stages-list__link');

        tabsParrentTwo.addEventListener('click', (event) => {
            event.preventDefault();
            showHideTabs(event, 0, tabsFaqContent, 'stages-tabs__tab-active', tabsFaq, 'stages-list__link-active', false, 'stages-list__link');
        });
    }
    if (faqParrent) {
        faqParrent.addEventListener('click', (event) => {
            event.preventDefault();
            showHideTabs(event, 0, faqContent, 'questions-item__text-active', faq, 'questions-item__title-active', false, 'questions-item__title');
        });
    }

    function showHideTabs(event, i = 0, content = tabsContent, contentClass = 'stages-tabs__tab-active', link = tabs, linkClass = 'stages-list__link-active', hexagonTrigger = true, classCheck = 'stages-list__link', hexagon = tabsHexagon, hexagonClass = 'stages-list__hexagon-active') {

        const target = event.target;


        if (target && target.classList.contains(classCheck)) {
            console.log(target);
            link.forEach((item, i) => {
                if (target == item) {
                    hideTabsContent(content, contentClass, link, linkClass, hexagonTrigger, classCheck, hexagon, hexagonClass);
                    showTabsContent(i, content, contentClass, link, linkClass, hexagonTrigger, classCheck, hexagon, hexagonClass);
                }
            });
        }

    }

    function hideTabsContent(content, contentClass, link, linkClass, hexagonTrigger, classCheck, hexagon, hexagonClass) {
        content.forEach(item => {
            item.classList.remove(contentClass);
        });

        link.forEach(item => {
            item.classList.remove(linkClass);
        });
        link.forEach(item => {
            if (hexagonTrigger) {
                hexagon.forEach(item => {
                    item.classList.remove(hexagonClass);
                });
            }
        });


    }

    function showTabsContent(i = 0, content, contentClass, link, linkClass, hexagonTrigger, classCheck, hexagon, hexagonClass) {
        content[i].classList.add(contentClass);
        link[i].classList.add(linkClass);
        link.forEach(item => {
            if (hexagonTrigger) {
                hexagon[i].classList.add(hexagonClass);
            }
        });

    }

    /* СЛАЙДЕРЫ */
    let swiperReviews = new Swiper('.swiper-container-reviews', {
        slidesPerView: 4,
        loop: true,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.reviews__next',
            prevEl: '.reviews__prev',
        },


        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 4,
            },


        }

    });
    let swiperAwards = new Swiper('.swiper-container-awards', {
        slidesPerView: 4,
        loop: true,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.awards__next',
            prevEl: '.awards__prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 4,
            },


        }

    });
    let swiperProject = new Swiper('.swiper-container-project', {
        slidesPerView: 3,
        slidesPerColumn: 3,
        loop: false,
        spaceBetween: 15,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.project__next',
            prevEl: '.project__prev',
        },


        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerColumn: 3,
            },
            768: {
                slidesPerView: 2,
                slidesPerColumn: 3,
            },
            991: {
                slidesPerView: 3,
                slidesPerColumn: 3,
            },


        }

    });
    let swiperInformation = new Swiper('.swiper-container-information', {
        slidesPerView: 1,
        loop: false,
        spaceBetween: 200,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.swiper-pagination-information',
            type: 'bullets',
            clickable: true,
        },

    });
    let swiperModule = new Swiper('.swiper-container-module', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.module-more__next',
            prevEl: '.module-more__prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 4,
            },
            1630: {
                slidesPerView: 5,
            },
        }

    });
    let swiperTags = new Swiper('.swiper-container-tags', {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 20,
        allowSlidePrev: true,
        allowSlideNext: true,
        navigation: {
            nextEl: '.tags__next',
            prevEl: '.tags__prev',
        },

    });
    /* СПИСКИ В ФУТЕРЕ */
    let footerMenuParent = document.querySelector('.footer'),
        footerLink = document.querySelectorAll('.footer-content__title'),
        footerList = document.querySelectorAll('.footer-content__list');
    if (footerMenuParent) {
        footerMenuParent.addEventListener('click', (event) => {
            const target = event.target;
            if (target && target.classList.contains('footer-content__title')) {
                event.preventDefault();
                footerLink.forEach((item, i) => {
                    if (item == target) {
                        target.classList.toggle('active');
                        footerList[i].classList.toggle('active');
                    }
                });
            }

        });
    }
    if (scrollItems) {
        window.addEventListener('scroll', animOnScroll);
        animOnScroll();

        function animOnScroll() {
            for (let i = 0; i < scrollItems.length; i++) {
                const animItem = scrollItems[i],
                    animItemHeight = animItem.offsetHeight,
                    animItemOffset = offset(scrollItems).top,
                    animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;

                }
                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('animationShow');
                } else {
                    animItem.classList.remove('animationShow');
                }
            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect;
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
        }

    }


    const scrollItems = document.querySelectorAll('section');

    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight) + window.scrollY;
        console.log(windowCenter);
        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
            if (windowCenter >= scrollOffset) {
                el.classList.add('animationShow');
            } else {
                el.classList.remove('animationShow');
            }
        });
    };

    // scrollAnimation();
    // window.addEventListener('scroll', () => {
    //     scrollAnimation();
    // });
});