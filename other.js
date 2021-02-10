// Make all the columns of the same height
(function () {
    function setEqualHeight(columns) {
        var tallestcolumn = 0;

        columns.each(function () {
            let currentHeight = jQuery(this).height();
            if (currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight;
            }
        });

        columns.height(tallestcolumn);
    }

    setEqualHeight(jQuery(".news-item .news-item__title"));

    jQuery('input[type="tel"]').mask("+7(999) 999-99-99");
})();

/* faq search */
let elastic = document.getElementById('elastic');
if (elastic){
    if (elastic.length > 0) {
        document.querySelector('#elastic').oninput = function () {
            let val = this.value.trim();
            let elasticItems = document.querySelectorAll('.elastic .questions-item[data-title]');

            console.log(elasticItems)

            if (val != '') {
                elasticItems.forEach(function (elem) {
                    if (elem.innerText.search(val) == -1) {
                        elem.classList.add('d-none');
                        // elem.innerHTML = elem.innerText;
                    } else {
                        elem.classList.remove('d-none');
                        // let str = elem.innerText;
                        // elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
                    }
                });
            } else {
                elasticItems.forEach(function (elem) {
                    elem.classList.remove('d-none');
                    // elem.innerHTML = elem.innerText;
                });
            }
        };
    }
}


/* masked input */
function insertMark(string, pos, len) {
    // hello world
    // hello <mark>wo</mark>rld
    // hello+<mark>+wo+</mark>+rld
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}

/* modal region */
(function () {
    jQuery('.modal-region__btn').on('click', function () {
        jQuery('.modal-region').removeClass('active');
    });
})();
