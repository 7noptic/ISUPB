'use csript';
window.addEventListener('DOMContentLoaded', () => {

    /* ТАБЫ */
    const tabs = document.querySelectorAll('.stages-list__link'),
        tabsContent = document.querySelectorAll('.stages-tabs__tab'),
        tabsParrent = document.querySelector('.stages-list'),
        tabsParrentTwo = document.querySelector('.stages-list__faq'),
        tabsHexagon = document.querySelectorAll('.stages-list__hexagon'),
        faq = document.querySelectorAll('.questions-item__title'),
        faqContent = document.querySelectorAll('.questions-item__text'),
        faqParrent = document.querySelector('.questions');

    if (tabsParrent) {
        hideTabsContent(tabsContent, 'stages-tabs__tab-active', tabs, 'stages-list__link-active', true, 'stages-list__link', tabsHexagon, 'stages-list__hexagon-active');
        showTabsContent(0, tabsContent, 'stages-tabs__tab-active', tabs, 'stages-list__link-active', true, 'stages-list__link', tabsHexagon, 'stages-list__hexagon-active');

        tabsParrent.addEventListener('click', (event) => {
            event.preventDefault();
            showHideTabs(event);
        });
    }
    if (tabsParrentTwo) {
        hideTabsContent(tabsContent, 'stages-tabs__tab-active', tabs, 'stages-list__link-active', false, 'stages-list__link');
        showTabsContent(0, tabsContent, 'stages-tabs__tab-active', tabs, 'stages-list__link-active', false, 'stages-list__link');

        tabsParrentTwo.addEventListener('click', (event) => {
            event.preventDefault();
            showHideTabs(event, 0, tabsContent, 'stages-tabs__tab-active', tabs, 'stages-list__link-active', false, 'stages-list__link');
        });
    }
    if (faqParrent) {
        hideTabsContent(faqContent, 'questions-item__text-active', faq, 'questions-item__title-active', false, 'questions-item__title');
        showTabsContent(0, faqContent, 'questions-item__text-active', faq, 'questions-item__title-active', false, 'questions-item__title');

        faqParrent.addEventListener('click', (event) => {
            event.preventDefault();
            showHideTabs(event, 0, faqContent, 'questions-item__text-active', faq, 'questions-item__title-active', false, 'questions-item__title');
        });
    }

    function showHideTabs(event, i = 0, content = tabsContent, contentClass = 'stages-tabs__tab-active', link = tabs, linkClass = 'stages-list__link-active', hexagonTrigger = true, classCheck = 'stages-list__link', hexagon = tabsHexagon, hexagonClass = 'stages-list__hexagon-active') {

        const target = event.target;

        if (target && target.classList.contains(classCheck)) {
            console.log('sdf')

            link.forEach((item, i) => {
                if (target == item) {
                    hideTabsContent(content, contentClass, link, linkClass, hexagonTrigger,classCheck, hexagon, hexagonClass);
                    showTabsContent(i, content, contentClass, link, linkClass, hexagonTrigger,classCheck, hexagon, hexagonClass);
                }
            });
        }

    }
    function hideTabsContent(content, contentClass, link, linkClass, hexagonTrigger,classCheck, hexagon, hexagonClass) {
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
    function showTabsContent(i = 0, content, contentClass, link, linkClass, hexagonTrigger,classCheck, hexagon, hexagonClass) {
        content[i].classList.add(contentClass);
        link[i].classList.add(linkClass);
        link.forEach(item => {
            if (hexagonTrigger) {
                hexagon[i].classList.add(hexagonClass);
            }
        });

    }





    /*


    function showFaq(i = 0) {
        faqContent[i].classList.add('questions-item__text-active');
        faq[i].classList.add('questions-item__title-active');

    }

    function showQuestion(event) {
        event.preventDefault();
        const target = event.target;

        if (target && target.classList.contains('questions-item__title')) {

            faq.forEach((item, i) => {
                if (target == item) {
                    hideFaq();
                    showFaq(i);
                }
            });
        }
    }

    function hideFaq() {
        faq.forEach(item => {
            item.classList.remove('questions-item__title-active');
        });

        faqContent.forEach(item => {
            item.classList.remove('questions-item__text-active');
        });
    }

    hideFaq();
    showFaq();


    tabsParrentTwo.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;

        if (target && target.classList.contains('stages-list__link')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });

        let test = document.querySelector('.project-numbers');
        elementInViewport2(test);

        function elementInViewport2(el) {
            var top = el.offsetTop;
            var left = el.offsetLeft;
            var width = el.offsetWidth;
            var height = el.offsetHeight;

            while (el.offsetParent) {
                el = el.offsetParent;
                top += el.offsetTop;
                left += el.offsetLeft;
            }
            return (
                top < (window.pageYOffset + window.innerHeight) &&
                left < (window.pageXOffset + window.innerWidth) &&
                (top + height) > window.pageYOffset &&
                (left + width) > window.pageXOffset


            );
        }

        АНИМАЦИЯ ЦИФР ПРИ СКРОЛЛЕ
        var number = document.querySelector('.number'),
            numberTop = number.getBoundingClientRect().top,
            start = +number.innerHTML, end = +number.dataset.max;

        window.addEventListener('scroll', function onScroll() {
            if (window.pageYOffset > numberTop - window.innerHeight / 2) {
                this.removeEventListener('scroll', onScroll);
                var interval = setInterval(function () {
                    number.innerHTML = ++start;
                    if (start == end) {
                        clearInterval(interval);
                    }
                }, 5);
            }
        });
        var number1 = document.querySelector('.number1'),
            number1Top = number1.getBoundingClientRect().top,
            start1 = +number1.innerHTML, end1 = +number1.dataset.max;

        window.addEventListener('scroll', function onScroll() {
            if (window.pageYOffset > number1Top - window.innerHeight / 2) {
                this.removeEventListener('scroll', onScroll);
                var interval1 = setInterval(function () {
                    number1.innerHTML = ++start1;
                    if (start1 == end1) {
                        clearInterval(interval1);
                    }
                }, 5);
            }
        });

        var number2 = document.querySelector('.number2'),
            number2Top = number2.getBoundingClientRect().top,
            start2 = +number2.innerHTML, end2 = +number2.dataset.max;

        window.addEventListener('scroll', function onScroll() {
            if (window.pageYOffset > number2Top - window.innerHeight / 2) {
                this.removeEventListener('scroll', onScroll);
                var interval2 = setInterval(function () {
                    number2.innerHTML = ++start2;
                    if (start2 == end2) {
                        clearInterval(interval2);
                    }
                }, 5);
            }
        });


        var number3 = document.querySelector('.number3'),
            number3Top = number3.getBoundingClientRect().top,
            start3 = +number3.innerHTML, end3 = +number3.dataset.max;

        window.addEventListener('scroll', function onScroll() {
            if (window.pageYOffset > number3Top - window.innerHeight / 2) {
                this.removeEventListener('scroll', onScroll);
                var interval3 = setInterval(function () {
                    number3.innerHTML = ++start3;
                    if (start3 == end3) {
                        clearInterval(interval3);
                    }
                }, 5);
            }
        });

     */
});