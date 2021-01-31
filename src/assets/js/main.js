'use script';
import jQuery from 'jquery';
import $ from 'jquery';
import Swiper, {Navigation, Pagination} from 'swiper';
import Readmore from "readmore-js";

Swiper.use([Navigation, Pagination]);
window.addEventListener('DOMContentLoaded', () => {

    /* BURGER-MENU */
    $(document).ready(function () {
        let subMenuParent = document.querySelector('.header__nav');
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
        tabsParent = document.querySelector('.stages-list'),
        tabsParentTwo = document.querySelector('.stages-list__faq'),
        tabsHexagon = document.querySelectorAll('.stages-list__hexagon'),
        vacancyHexagon = document.querySelectorAll('.vacancy__img'),
        faq = document.querySelectorAll('.questions-item__title'),
        faqContent = document.querySelectorAll('.questions-item__text'),
        faqParent = document.querySelector('.questions'),
        news = document.querySelectorAll('.news-subtitle'),
        newsContent = document.querySelectorAll('.news-articles__content'),
        newsParent = document.querySelector('.news-articles__header'),
        vacanciesParent = document.querySelector('.vacancies'),
        vacanciesContent = document.querySelectorAll('.vacancy__content'),
        vacancy = document.querySelectorAll('.vacancy__header'),
        mediaQuery991 = window.matchMedia('(min-width: 992px)');
    if (vacanciesParent) {

        vacanciesParent.addEventListener('click', (event) => {
            event.preventDefault();
            showHideTabs(event, 0, vacanciesContent, 'vacancy__content-active', vacancy, 'vacancy-active', true, 'vacancy__header', vacancyHexagon, 'vacancy__img-active');
        }, { passive: false });
    }
    if (newsParent) {
        hideTabsContent(newsContent, 'active', news, 'news-subtitle-active', false, 'news-subtitle');
        showTabsContent(0, newsContent, 'active', news, 'news-subtitle-active', false, 'news-subtitle');

        newsParent.addEventListener('click', (event) => {
            event.preventDefault();
            showHideTabs(event, 0, newsContent, 'active', news, 'news-subtitle-active', false, 'news-subtitle');
        }, { passive: false });
    }
    if (tabsParent) {
        hideTabsContent(tabsContent, 'active', tabs, 'stages-list__link-active', true, 'stages-list__link', tabsHexagon, 'stages-list__hexagon-active');
        showTabsContent(0, tabsContent, 'active', tabs, 'stages-list__link-active', true, 'stages-list__link', tabsHexagon, 'stages-list__hexagon-active');
        if (mediaQuery991.matches) {
            tabsParent.style.minHeight = tabsContent[0].offsetHeight + 'px';
        }
        tabsParent.addEventListener('click', (event) => {
            event.preventDefault();
            showHideTabs(event);
            /* fix bug height block */
            if (mediaQuery991.matches) {
                const target = event.target;


                if (target && target.classList.contains('stages-list__link')) {
                    tabs.forEach((item, i) => {
                        if (target == item) {
                            console.log(tabsContent[i].offsetHeight);
                            tabsParent.style.minHeight = tabsContent[i].offsetHeight + 'px';
                        }
                    });
                }
            }

        });
    }
    if (tabsParentTwo) {
        hideTabsContent(tabsFaqContent, 'active', tabsFaq, 'stages-list__link-active', false, 'stages-list__link');
        showTabsContent(0, tabsFaqContent, 'active', tabsFaq, 'stages-list__link-active', false, 'stages-list__link');
        if (mediaQuery991.matches) {
            tabsParentTwo.style.minHeight = tabsFaqContent[0].offsetHeight + 'px';
        }
        tabsParentTwo.addEventListener('click', (event) => {
            event.preventDefault();
            showHideTabs(event, 0, tabsFaqContent, 'active', tabsFaq, 'stages-list__link-active', false, 'stages-list__link');
            /* fix bug height block */
            if (mediaQuery991.matches) {
                const target = event.target;

                if (target && target.classList.contains('stages-list__link')) {
                    tabsFaq.forEach((item, i) => {
                        if (target == item) {
                            console.log(tabsFaqContent[i].offsetHeight);
                            tabsParentTwo.style.minHeight = tabsFaqContent[i].offsetHeight + 'px';
                        }
                    });
                }
            }

        }, { passive: false });
    }
    if (faqParent) {
        faqParent.addEventListener('click', (event) => {
            event.preventDefault();
            showHideTabs(event, 0, faqContent, 'questions-item__text-active', faq, 'questions-item__title-active', false, 'questions-item__title');
        }, { passive: false });
    }

    function showHideTabs(event, i = 0, content = tabsContent, contentClass = 'active', link = tabs, linkClass = 'stages-list__link-active', hexagonTrigger = true, classCheck = 'stages-list__link', hexagon = tabsHexagon, hexagonClass = 'stages-list__hexagon-active') {
        const target = event.target;
        if (target && target.classList.contains(classCheck)) {
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
            575: {
                slidesPerView: 2,
                slidesPerColumn: 3,
            },
            768: {
                slidesPerView: 1,
                slidesPerColumn: 3,
            },
            991: {
                slidesPerView: 2,
                slidesPerColumn: 3,
            },
            1280: {
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
    const footerMenuParent = document.querySelector('.footer'),
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

        }, { passive: false });
    }

    /* АНИМАЦИЯ ЧИСЕЛ ПРИ СКРОЛЛЕ */
    let numbers = document.querySelector('.number');

    if (numbers) {
        let number = document.querySelectorAll('.number__num'),
            numberTop = numbers.getBoundingClientRect().top;
        window.addEventListener('scroll', function onScroll() {

            if (window.pageYOffset > numberTop - window.innerHeight / 2) {
                console.log('worj');
                this.removeEventListener('scroll', onScroll);
                let interval = setInterval(function () {
                    number[0].innerHTML = +number[0].innerHTML + 1;
                    if (+number[0].innerHTML == +number[0].dataset.max) {
                        clearInterval(interval);
                    }
                }, 5);
                let interval1 = setInterval(function () {
                    number[1].innerHTML = +number[1].innerHTML + 1;
                    if (+number[1].innerHTML == +number[1].dataset.max) {
                        clearInterval(interval1);
                    }
                }, 5);
                let interval2 = setInterval(function () {
                    number[2].innerHTML = +number[2].innerHTML + 1;
                    if (+number[2].innerHTML == +number[2].dataset.max) {
                        clearInterval(interval2);
                    }
                }, 5);
                let interval3 = setInterval(function () {
                    number[3].innerHTML = +number[3].innerHTML + 1;
                    if (+number[3].innerHTML == +number[3].dataset.max) {
                        clearInterval(interval3);
                    }
                }, 1);
            }
        });

    }

    /* МОДАЛКИ */
    document.addEventListener('click', (event) => {
        const target = event.target,
            modalCall = document.querySelector('.modal-call'),
            exitCall = document.querySelector('.modal-call__exit'),
            modalRegion = document.querySelector('.modal-region'),
            exitRegion = document.querySelector('.modal-region__exit'),
            modalVacancies = document.querySelector('.modal-vacancies'),
            exitVacancies = document.querySelector('.modal-vacancies__exit'),
            modalFree = document.querySelector('.modal-free'),
            exitFree = document.querySelector('.modal-free__exit');


        /* открытие модалок */

        if (modalCall) {
            if (target && target.classList.contains('js-call')) {
                event.preventDefault();
                openModal(modalCall);
            }
        }
        if (modalFree) {
            if (target && target.classList.contains('js-free')) {
                event.preventDefault();
                openModal(modalFree);
            }
        }
        if (modalRegion) {

            if (target && target.classList.contains('js-region')) {
                event.preventDefault();
                openModal(modalRegion);
            }
        }

        if (modalVacancies) {

            if (target && target.classList.contains('js-vacancies')) {
                event.preventDefault();
                openModal(modalVacancies);
            }
        }

        /* закрытие модалок */
        if (exitCall) {
            exitCall.addEventListener('click', () => {
                event.preventDefault()
                closeModal(modalCall);
            });
        }
        if (exitFree) {
            exitFree.addEventListener('click', () => {
                event.preventDefault()
                closeModal(modalFree);
            });
        }
        if (exitRegion) {
            exitRegion.addEventListener('click', () => {
                event.preventDefault()
                closeModal(modalRegion);
            });
        }
        if (exitVacancies) {
            exitVacancies.addEventListener('click', () => {
                event.preventDefault()
                closeModal(modalVacancies);
            });
        }


        function openModal(modal) {
            modal.classList.add('active');
            $('html').addClass('lock');
        }

        function closeModal(modal) {
            modal.classList.remove('active');
            $('html').removeClass('lock');
        };


    });
    /* VIDEO */
    function findVideos() {
        let videos = document.querySelectorAll('.video');

        for (let i = 0; i < videos.length; i++) {
            setupVideo(videos[i]);
        }
    }

    function setupVideo(video) {
        let link = video.querySelector('.video__link');
        let media = video.querySelector('.video__media');
        let button = video.querySelector('.video__button');
        let id = parseMediaURL(media);

        video.addEventListener('click', () => {
            let iframe = createIframe(id);

            link.remove();
            button.remove();
            video.appendChild(iframe);
        });

        link.removeAttribute('href');
        video.classList.add('video--enabled');
    }

    function parseMediaURL(media) {
        let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault\.jpg/i;
        let url = media.src;
        let match = url.match(regexp);

        return match[1];
    }

    function createIframe(id) {
        let iframe = document.createElement('iframe');

        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('allow', 'autoplay');
        iframe.setAttribute('src', generateURL(id));
        iframe.classList.add('video__media');

        return iframe;
    }

    function generateURL(id) {
        let query = '?rel=0&showinfo=0&autoplay=1';

        return 'https://www.youtube.com/embed/' + id + query;
    }

    findVideos();
    /* FIX TEXT SLIDER */
    let disable_triple_click = true,
        down = new Date().getTime(),
        old_down = down;

    jQuery(document).ready(function($)
    {
        $('html').on('mousedown', function(e)
        {
            let time = new Date().getTime();

            if((time - down) < 500 &&
                (disable_triple_click || (down - old_down) > 500))
            {
                old_down = down;
                down = time;

                e.preventDefault(); // just in case
                return false; // mandatory
            }

            old_down = down;
            down = time;
        });
    });
    /* FIX HEIGHT BLOCK IMG */
    fixedHeight(document.querySelectorAll('.employees__img'));
    fixedHeight(document.querySelectorAll('.board-article__img'));
    function fixedHeight (items){
        let maxHeight = 0;
        items.forEach(item =>{
            if( item.offsetHeight > maxHeight ) {
                maxHeight = item.offsetHeight; 
            }
        });
        items.forEach(item => {
            item.style.height = maxHeight + 'px';
        });
    }
}), { passive: false };