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

    if (faqParrent) {
        faqParrent.addEventListener('click', (event) => {
            showQuestion(event);
        });
    }
    if (tabsParrent) {
        tabsParrent.addEventListener('click', (event) => {
            showHideTabs(event);
        });
    }
    if (tabsParrentTwo) {
        tabsParrentTwo.addEventListener('click', (event) => {
            showHideTabs(event);
        });
    }


    hideTabsContent();
    showTabsContent();
    hideFaq();
    showFaq();

    tabsParrent.addEventListener('click', (event) => {
        showHideTabs(event);
    });
    tabsParrentTwo.addEventListener('click', (event) => {
        showHideTabs(event);
    });


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

    function showFaq(i = 0) {
        faqContent[i].classList.add('questions-item__text-active');
        faq[i].classList.add('questions-item__title-active');

    }

    function showHideTabs(event) {
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
    }

    function hideTabsContent() {
        tabsContent.forEach(item => {
            item.classList.remove('stages-tabs__tab-active');
        });

        tabs.forEach(item => {
            item.classList.remove('stages-list__link-active');
        });
        tabs.forEach(item => {
            if (item.hasChildNodes()) {
                tabsHexagon.forEach(item => {
                    item.classList.remove('stages-list__hexagon-active');

                });
            }
        });


    }

    function showTabsContent(i = 0) {
        tabsContent[i].classList.add('stages-tabs__tab-active');
        tabs[i].classList.add('stages-list__link-active');
        tabs.forEach(item => {
            if (item.children.length > 0) {
                console.log('asdf');
                tabsHexagon[i].classList.add('stages-list__hexagon-active');
            }
        });

    }
    /*
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