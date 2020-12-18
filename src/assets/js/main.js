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
                if(animItemHeight > window.innerHeight){
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;

                }
                if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset +animItemHeight)){
                    animItem.classList.add('animationShow');
                }else {
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