'use script';
import jQuery from 'jquery';
import $ from 'jquery';
import Swiper, {Navigation, Pagination, Autoplay} from 'swiper';
import Readmore from "readmore-js";

Swiper.use([Navigation, Pagination, Autoplay]);
window.addEventListener('DOMContentLoaded', () => {

    let benefitItems = document.querySelectorAll('.benefit-item');
    const mediaQuery = window.matchMedia('(min-width: 992px)');
    window.addEventListener('resize', numerationBenefit, false);
    numerationBenefit();

    function numerationBenefit() {

        if (benefitItems) {

            if (mediaQuery.matches) {
                let trigger;
                for (let i = 0, count = 0; i < benefitItems.length; count++, i = i + 2) {
                    let num = benefitItems[i].querySelector('.benefit-item__num');
                    if (num) {
                        num.innerHTML = count + 1;
                        trigger = count + 1;
                    }
                }
                for (let i = 1, count = trigger - 1; i < benefitItems.length; count++, i = i + 2) {
                    let num = benefitItems[i].querySelector('.benefit-item__num');
                    if (num) {
                        num.innerHTML = count + 2;
                    }
                }
            } else {
                for (let i = 0; i < benefitItems.length; i++) {
                    let num = benefitItems[i].querySelector('.benefit-item__num');
                    if (num) {
                        num.innerHTML = i + 1;
                    }
                }
            }
        }
    }

    /*BURGER-MENU*/

    let bur = document.querySelector('.header__burger'),
        burFix = document.querySelector('.header__burger-fixed'),
        burmenu = document.querySelector('.menu');
    if(bur){
        bur.addEventListener('click', function (e) {
            e.preventDefault();

            this.classList.toggle('active');
            if(burFix){
                burFix.classList.toggle('active');
            }
            if(burmenu){
                burmenu.classList.toggle('active');
            }
        }, false);
    }



    //$('[type="tel"]').mask("+7 (999) 999-99-99");


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

        aboutsParent = document.querySelector('.js-about-tabs'),


        mediaQuery991 = window.matchMedia('(min-width: 992px)');

    if (vacanciesParent) {

        vacanciesParent.addEventListener('click', (event) => {
            showHideTabs(event, 0, vacanciesContent, 'vacancy__content-active', vacancy, 'vacancy-active', true, 'vacancy__header', vacancyHexagon, 'vacancy__img-active');
        }, {passive: false});
    }
    if (newsParent) {
        hideTabsContent(newsContent, 'active', news, 'news-subtitle-active', false, 'news-subtitle');
        showTabsContent(0, newsContent, 'active', news, 'news-subtitle-active', false, 'news-subtitle');

        newsParent.addEventListener('click', (event) => {
            showHideTabs(event, 0, newsContent, 'active', news, 'news-subtitle-active', false, 'news-subtitle');
        }, {passive: false});
    }
    if (tabsParent) {
        hideTabsContent(tabsContent, 'active', tabs, 'stages-list__link-active', true, 'stages-list__link', tabsHexagon, 'stages-list__hexagon-active');
        showTabsContent(0, tabsContent, 'active', tabs, 'stages-list__link-active', true, 'stages-list__link', tabsHexagon, 'stages-list__hexagon-active');
        if (mediaQuery991.matches) {
            tabsParent.style.minHeight = tabsContent[0].offsetHeight + 'px';
        }
        tabsParent.addEventListener('click', (event) => {
            showHideTabs(event);
            /* fix bug height block */
            if (mediaQuery991.matches) {
                const target = event.target;


                if (target && target.classList.contains('stages-list__link')) {
                    tabs.forEach((item, i) => {
                        if (target == item) {
                            tabsParent.style.minHeight = tabsContent[i].offsetHeight + 'px';
                        }
                    });
                }
                if (target && target.classList.contains('stages-list__hexagon')) {
                    tabs.forEach((item, i) => {
                        if (target == item) {
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

        }, {passive: false});
    }
    if (faqParent) {
        faqParent.addEventListener('click', (event) => {
            event.preventDefault();
            showHideTabs(event, 0, faqContent, 'questions-item__text-active', faq, 'questions-item__title-active', false, 'questions-item__title');
        }, {passive: false});
    }
    if (aboutsParent) {
        let abouts = aboutsParent.querySelectorAll('.characteristic'),
            aboutsContent = aboutsParent.querySelectorAll('.text2column__right');

        hideTabsContent(aboutsContent, 'active', abouts, 'active', false, 'characteristic');
        showTabsContent(0, aboutsContent, 'active', abouts, 'active', false, 'characteristic');

        aboutsParent.addEventListener('click', (event) => {
            event.preventDefault();
            showHideTabs(event, 0, aboutsContent, 'active', abouts, 'active', false, 'characteristic');
        }, {passive: false});
    }

    function showHideTabs(event, i = 0, content = tabsContent, contentClass = 'active', link = tabs, linkClass = 'stages-list__link-active', hexagonTrigger = true, classCheck = 'stages-list__link', hexagon = tabsHexagon, hexagonClass = 'stages-list__hexagon-active') {
        const target = event.target;
        if (target && target.classList.contains(classCheck)) {
            event.preventDefault();
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
        spaceBetween: 200,
        observer: true,
        observeParents: true,
        autoplay:{
          delay: 4000,
        },
        pagination: {
            el: '.swiper-pagination-information',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.information__next',
            prevEl: '.information__prev',
        },



    });
    $('.swiper-slide').on('mouseover', function() {
        swiperInformation.autoplay.stop();
    });

    $('.swiper-slide').on('mouseout', function() {
        swiperInformation.autoplay.start();
    });
    let swiperModule = new Swiper('.swiper-container-module', {
        slidesPerView: 4,
        spaceBetween: 30,
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


        }

    });
    let swiperTags = new Swiper('.swiper-container-tags', {
        slidesPerView: "auto",
        spaceBetween: 20,
        allowSlidePrev: true,
        allowSlideNext: true,
        navigation: {
            nextEl: '.tags__next',
            prevEl: '.tags__prev',
        },

    });
    let swiperTags2 = new Swiper('.swiper-container-tags-2', {
        slidesPerView: 2,
        spaceBetween: 50,
        allowSlidePrev: true,
        allowSlideNext: true,
        navigation: {
            nextEl: '.tags__next-2',
            prevEl: '.tags__prev-2',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 100,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
        }

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

        }, {passive: false});
    }

    /* АНИМАЦИЯ ЧИСЕЛ ПРИ СКРОЛЛЕ */
    let numbers = document.querySelector('.number');

    if (numbers) {
        let number = document.querySelectorAll('.number__num'),
            numberTop = numbers.getBoundingClientRect().top;
        window.addEventListener('scroll', function onScroll() {

            if (window.pageYOffset > numberTop - window.innerHeight / 2) {
                this.removeEventListener('scroll', onScroll);
                let interval = setInterval(function () {
                    number[0].innerHTML = +number[0].innerHTML + 1;
                    if (+number[0].innerHTML === +number[0].dataset.max) {
                        clearInterval(interval);
                    }
                }, 5);
                let interval1 = setInterval(function () {
                    number[1].innerHTML = +number[1].innerHTML + 1;
                    if (+number[1].innerHTML === +number[1].dataset.max) {
                        clearInterval(interval1);
                    }
                }, 5);
                let interval2 = setInterval(function () {
                    number[2].innerHTML = +number[2].innerHTML + 1;
                    if (+number[2].innerHTML === +number[2].dataset.max) {
                        clearInterval(interval2);
                    }
                }, 5);
                let interval3 = setInterval(function () {
                    number[3].innerHTML = +number[3].innerHTML + 1;
                    if (+number[3].innerHTML === +number[3].dataset.max) {
                        clearInterval(interval3);
                    }
                }, 1);
            }
        });

    }
    let swal = document.querySelector('.swal2-popup');
    if (swal) {
        swal.addEventListener('click', (event) => {
            if (target && target.tagName == 'SPAN') {
                event.preventDefault();
                closeModal(modalRegion);
                closeModal(modalCall);
                closeModal(modalSubscribe);
                closeModal(modalVacancies);
                closeModal(modalFree);
            }
        });
    }

    /* МОДАЛКИ */
    document.addEventListener('click', (event) => {
        const target = event.target,
            modalCall = document.querySelector('.modal-call'),
            exitCall = document.querySelector('.modal-call__exit'),
            modalSubscribe = document.querySelector('.modal-subscribe'),
            exitSubscribe = document.querySelector('.modal-subscribe__exit'),

            modalRegion = document.querySelector('.modal-region'),
            exitRegion = document.querySelector('.modal-region__exit'),
            modalVacancies = document.querySelector('.modal-vacancies'),
            exitVacancies = document.querySelector('.modal-vacancies__exit'),
            modalFree = document.querySelector('.modal-free'),
            exitFree = document.querySelector('.modal-free__exit'),
            regionSelect = document.querySelectorAll('.modal-region__link'),
            regionBtn = document.querySelector('.js-region');

        if (target && target.classList.contains('swal2-confirm')) {
            event.preventDefault();
            closeModal(modalRegion);
            closeModal(modalCall);
            closeModal(modalVacancies);
            closeModal(modalFree);
        }


        /* открытие модалок */

        if (modalCall) {
            if (target && target.classList.contains('js-call')) {
                event.preventDefault();
                openModal(modalCall);
            }
        }
        if (modalSubscribe) {
            if (target && target.classList.contains('js-subscribe')) {
                event.preventDefault();
                openModal(modalSubscribe);
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
            exitCall.addEventListener('click', (event) => {
                event.preventDefault();
                closeModal(modalCall);
            });

        }
        if (exitSubscribe) {
            exitSubscribe.addEventListener('click', (event) => {
                event.preventDefault();
                closeModal(modalSubscribe);
            });

        }
        if (exitFree) {
            exitFree.addEventListener('click', (event) => {
                event.preventDefault();
                closeModal(modalFree);
            });

        }
        if (exitRegion) {
            exitRegion.addEventListener('click', (event) => {
                event.preventDefault();
                closeModal(modalRegion);
            });
            if (target.classList.contains('modal-region__link')) {
                event.preventDefault();
                closeModal(modalRegion);
                regionSelect.forEach(item => {
                    if (item == target) {
                        regionBtn.innerHTML = `
                <div class="location__item">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.9291 2.45591C14.3454 0.872191 12.2397 0 10.0001 0C7.76042 0 5.65478 0.872152 4.07099 2.45591C2.4873 4.03959 1.61511 6.14514 1.61511 8.3848C1.61511 10.6245 2.4873 12.7301 4.07099 14.3138L9.58578 19.8284C9.7002 19.9429 9.85016 20 10.0001 20C10.15 20 10.3 19.9428 10.4144 19.8284L15.929 14.3138C17.5127 12.7301 18.3849 10.6245 18.3849 8.38484C18.3849 6.1451 17.5127 4.03955 15.9291 2.45591ZM12.6334 11.018C11.93 11.7214 10.9949 12.1088 10.0001 12.1088C9.00539 12.1088 8.07023 11.7214 7.3669 11.0181C6.6635 10.3147 6.27615 9.37953 6.27615 8.3848C6.27615 7.39011 6.6635 6.45495 7.3669 5.75155C8.07023 5.04818 9.00539 4.66084 10.0001 4.66084C10.9949 4.66084 11.93 5.04818 12.6334 5.75155C13.3367 6.45487 13.7241 7.39003 13.7241 8.38476C13.7241 9.37949 13.3367 10.3147 12.6334 11.018Z"
                              fill="black"/>
                    </svg>
                    <div class="location__item-text">${item.innerHTML}</div>
                </div>
`;
                    }
                });

            } else if (target.classList.contains('js-region-close')) {
                event.preventDefault();
                let city = document.querySelector('.js-select-city');
                closeModal(modalRegion);

                regionBtn.innerHTML = `
                <div class="location__item">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.9291 2.45591C14.3454 0.872191 12.2397 0 10.0001 0C7.76042 0 5.65478 0.872152 4.07099 2.45591C2.4873 4.03959 1.61511 6.14514 1.61511 8.3848C1.61511 10.6245 2.4873 12.7301 4.07099 14.3138L9.58578 19.8284C9.7002 19.9429 9.85016 20 10.0001 20C10.15 20 10.3 19.9428 10.4144 19.8284L15.929 14.3138C17.5127 12.7301 18.3849 10.6245 18.3849 8.38484C18.3849 6.1451 17.5127 4.03955 15.9291 2.45591ZM12.6334 11.018C11.93 11.7214 10.9949 12.1088 10.0001 12.1088C9.00539 12.1088 8.07023 11.7214 7.3669 11.0181C6.6635 10.3147 6.27615 9.37953 6.27615 8.3848C6.27615 7.39011 6.6635 6.45495 7.3669 5.75155C8.07023 5.04818 9.00539 4.66084 10.0001 4.66084C10.9949 4.66084 11.93 5.04818 12.6334 5.75155C13.3367 6.45487 13.7241 7.39003 13.7241 8.38476C13.7241 9.37949 13.3367 10.3147 12.6334 11.018Z"
                              fill="black"/>
                    </svg>
                    <div class="location__item-text">${city.innerHTML}</div>
                </div>
`;

            }

        }
        if (exitVacancies) {
            exitVacancies.addEventListener('click', (event) => {
                event.preventDefault();
                closeModal(modalVacancies);
            });
        }


    });

    function openModal(modal) {
        modal.classList.add('active');
        $('html').addClass('lock');
    }

    function closeModal(modal) {
        modal.classList.remove('active');
        $('html').removeClass('lock');
    }

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

    jQuery(document).ready(function ($) {
        $('html').on('mousedown', function (e) {
            let time = new Date().getTime();

            if ((time - down) < 500 &&
                (disable_triple_click || (down - old_down) > 500)) {
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
    fixedHeight(document.querySelectorAll('.advantage__subtitle'));
    fixedHeight(document.querySelectorAll('.project'));
    fixedHeight(document.querySelectorAll('.project__img'));
    window.addEventListener("resize", (event) => {
        fixedHeight(document.querySelectorAll('.employees__img'));
        fixedHeight(document.querySelectorAll('.advantage__subtitle'));
        fixedHeight(document.querySelectorAll('.project__img'));
        fixedHeight(document.querySelectorAll('.project'));
    })

    function fixedHeight(items) {
        let maxHeight = 0;
        items.forEach(item => {
            if (item.offsetHeight > maxHeight) {
                maxHeight = item.offsetHeight;
            }
        });
        items.forEach(item => {
            item.style.height = maxHeight + 'px';
        });
    }
}, {passive: false});