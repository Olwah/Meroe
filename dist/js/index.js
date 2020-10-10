/**** DOMSTRING VARIABLES ****/
const elements = {
    container: document.querySelector('.container'),
    navMenu: document.querySelector('.nav-menu'),
    navMenuInital: document.querySelector('.nav-menu__initial'),
    navMenuOpenArrow: document.querySelector('.nav-menu__open-arrow'),
    navMenuArrowList: document.querySelector('.nav-menu__arrow-list'),
    navClose: document.querySelector('.nav-menu__close'),
    navContent: document.querySelector('.nav-menu__content'),
    header: document.querySelector('.header'),
    headerWrapper: document.querySelector('.header__wrapper'),
    headerTitle: document.querySelector('.header__title'),
    headerSlidesContainer: document.querySelector('.header__slideshow-container'),
    headerSlides: document.querySelector('.header__slideshow-slides'),
    headerSlideshowDots: document.querySelector('.header__slideshow-dots'),
    spotlightPieces: document.querySelector('.spotlight__pieces'),
    spotlightPiece: document.querySelector('.spotlight__piece'),
    carouselItems: document.querySelectorAll('.splide-carousel__items'),
    carouselZooms: document.querySelectorAll('.splide-carousel__zoom')
};

const elementStrings = {
    navMenuListItem: 'nav-menu__list-item',
    headerSlides: 'header__slideshow-slides',
    headerDot: 'header__slideshow-dot',
    spotlightPiece: 'spotlight__piece',
    spotlightZoom: 'spotlight__zoom',
    spotlightImg: 'spotlight__img',
    spotlightTitle: 'spotlight__title',
    spotlightDesc: 'spotlight__description',
    printItem: 'print__item',
    printZoom: 'print__zoom',
    galleryItem: 'gallery__item',
    galleryZoom: 'gallery__zoom',
    carouselItem: 'splide-carousel__item',
    carouselZoom: 'splide-carousel__zoom'
};

/**** CONTENT OBJECTS ****/
const spotlightItems = {
    0: {
        id: 'spotlight-1',
        portrait: false,
        img: 'img/Love_Walk_Cafe.jpg',
        title: 'Love Walk Cafe',
        client: 'Client - Camberwell Arts Group',
        description:
            'Contribution to the Camberwell Arts Group, used on local banners as part of Camberwell’s new identity and branding.\nImage depicts Love Walk Cafe.'
    },
    1: {
        id: 'spotlight-2',
        portrait: false,
        img: 'img/Kiku.jpg',
        title: '‘Kiku’ bottle label',
        client: 'Client - Kanpai Saké Brewery',
        description:
            'Sumo bottle label design for Kanpai Saké Brewery’s limited edition range.\nForms part of a ‘triptych’ of labels adapting elements of Peckham with traditional/well known Japanese concepts.'
    },
    2: {
        id: 'spotlight-3',
        portrait: false,
        img: 'img/Frontpage3.jpg',
        title: '‘Miru’ bottle label',
        client: 'Client - Kanpai Saké Brewery',
        description:
            'Samurai bottle label design for Kanpai Saké Brewey’s limited edition range.\nForms part of a ‘triptych’ of labels adapting elements of Peckham with traditional/well known Japanese concepts.'
    },
    3: {
        id: 'spotlight-4',
        portrait: false,
        img: 'img/Nomu.jpg',
        title: '‘Nomu’ bottle label',
        client: 'Client - Kanpai Saké Brewery',
        description:
            'Geisha bottle label design for Kanpai Saké Brewery’s limited edition range.\nForms part of a ‘triptych’ of labels adapting elements of Peckham with traditional/well known Japanese concepts.'
    },
    4: {
        id: 'spotlight-5',
        portrait: true,
        img: 'img/Brixton.jpg',
        title: 'Brixton',
        client: 'Client - Maison Des Languages',
        description:
            'Images for Maison Des Languages’ language book for French students studying English.\nForms part of an exercise in a comic book format.'
    },
    5: {
        id: 'spotlight-6',
        portrait: true,
        img: 'img/Frontpage6.jpg',
        title: 'Tombstone Transaction - Republic of Cyprus',
        client: 'Client - Citi',
        description:
            'Poster design for Citi group to commemorate an agreement with the Government of Cyprus, commissioned by the French embassy.'
    },
    6: {
        id: 'spotlight-7',
        portrait: true,
        img: 'img/Citi_Telefonica.jpg',
        title: 'Tombstone Transaction - Telefonica',
        client: 'Client - Citi',
        description:
            'Poster design for Citi group to commemorate an agreement with Telefonica, featuring an ‘uncle Sam’ style figure. '
    },
    7: {
        id: 'spotlight-8',
        portrait: false,
        img: 'img/Gospel_Green.jpg',
        title: 'Bottle Label Design',
        client: 'Unused',
        description: 'Unused concept for Gospel Green Cider.'
    },
    8: {
        id: 'spotlight-9',
        portrait: false,
        img: 'img/Yubari.jpg',
        title: 'Yubari',
        client: 'Self Initiated',
        description:
            'Self initiated piece from a visit to Northern Japan’s Yubari, a former mining town that very much echoes the same issues faced by North East England.\nIt went on to be shortlisted and then a winner of Hire an Illustrator’s Showcase 100, and was exhibited at the Framer’s Gallery in London, 2015.'
    },
    9: {
        id: 'spotlight-10',
        portrait: true,
        img: 'img/WillGraham.jpg',
        title: 'Will Graham',
        client: 'Self Initiated - Fan Art',
        description: 'Born from a love of the Hannibal drama.'
    },
    10: {
        id: 'spotlight-11',
        portrait: false,
        img: 'img/Lumley_Castle.jpg',
        title: 'Lumley Castle',
        client: 'Private Commission',
        description: 'Commissioned for an 80th birthday gift.'
    }
};

var printItems = {
    0: {
        id: 'print-1',
        portrait: true,
        img: 'img/Print1.jpg',
        title: 'Cathryn',
        client: 'Self Initiated',
        description: 'An illustration referencing Emilé Zola’s work ‘Germinal’ Woodcut.'
    },
    1: {
        id: 'print-2',
        portrait: true,
        img: 'img/Print2.jpg',
        title: '‘Tama’',
        client: 'Bar Fujita, Sapporo',
        description: 'Super Soft Lino'
    },
    2: {
        id: 'print-3',
        portrait: true,
        img: 'img/Print3.jpg',
        title: '‘Coran’',
        client: 'Bar Fujita, Sapporo',
        description: 'Super Soft Lino'
    },
    3: {
        id: 'print-4',
        portrait: true,
        img: 'img/Print4.jpg',
        title: '‘Buran’',
        client: 'Bar Fujita, Sapporo',
        description: 'Super Soft Lino'
    },
    4: {
        id: 'print-5',
        portrait: true,
        img: 'img/Print5.jpg',
        title: '‘Nalow’',
        client: 'Bar Fujita, Sapporo',
        description: 'Super Soft Lino'
    }
};

var charityItems = {
    0: {
        id: 'charity-1',
        portrait: false,
        img: 'img/Charity1.jpg',
        title: 'The Favelas, Rio',
        description: 'For Caroline (2018)'
    },
    1: {
        id: 'charity-2',
        portrait: true,
        img: 'img/Charity2.jpg',
        title: 'Joi',
        description: 'For Tom (2018)'
    },
    2: {
        id: 'charity-3',
        portrait: true,
        img: 'img/Charity3.jpg',
        title: 'Greek Ruins (2018)',
        description: ''
    },
    3: {
        id: 'charity-4',
        portrait: true,
        img: 'img/Charity4.jpg',
        title: 'The Thin White Duke',
        description: 'For Peter (2018)'
    },
    4: {
        id: 'charity-5',
        portrait: true,
        img: 'img/Charity5.jpg',
        title: 'The Gallaghers',
        description: 'For Faye (2020)'
    },
    5: {
        id: 'charity-6',
        portrait: true,
        img: 'img/Charity6.jpg',
        title: 'A charming man',
        description: 'For Walter (2020)'
    },
    6: {
        id: 'charity-7',
        portrait: true,
        img: 'img/Charity7.jpg',
        title: 'Gammatron',
        description: 'For Oli (2019)'
    }
};

const sketchbookItems = {
    0: {
        img: 'img/SketchbookFront.jpg',
        title: 'Sketchbook Front Page'
    },
    1: {
        img: 'img/Sketchbook1.jpg',
        title: 'Sketchbook Page 1'
    },
    2: {
        img: 'img/Sketchbook2.jpg',
        title: 'Sketchbook Page 2'
    },
    3: {
        img: 'img/Sketchbook3.jpg',
        title: 'Sketchbook Page 3'
    },
    4: {
        img: 'img/Sketchbook4.jpg',
        title: 'Sketchbook Page 4'
    },
    5: {
        img: 'img/Sketchbook5.jpg',
        title: 'Sketchbook Page 5'
    },
    6: {
        img: 'img/Sketchbook6.jpg',
        title: 'Sketchbook Page 6'
    },
    7: {
        img: 'img/Sketchbook7.jpg',
        title: 'Sketchbook Page 7'
    },
    8: {
        img: 'img/Sketchbook8.jpg',
        title: 'Sketchbook Page 8'
    },
    9: {
        img: 'img/Sketchbook9.jpg',
        title: 'Sketchbook Page 9'
    },
    10: {
        img: 'img/Sketchbook10.jpg',
        title: 'Sketchbook Page 10'
    },
    11: {
        img: 'img/Sketchbook11.jpg',
        title: 'Sketchbook Page 11'
    },
    12: {
        img: 'img/Sketchbook12.jpg',
        title: 'Sketchbook Page 12'
    },
    13: {
        img: 'img/Sketchbook13.jpg',
        title: 'Sketchbook Page 13'
    },
    14: {
        img: 'img/Sketchbook14.jpg',
        title: 'Sketchbook Page 14'
    },
    15: {
        img: 'img/SketchbookBack.jpg',
        title: 'Sketchbook Back Page'
    }
};

/** NAVIGATION MENU **/
const toggleNav = () => {
    if (
        !elements.navMenuOpenArrow.classList.contains('animate-nav-arrow') &&
        !elements.navMenuOpenArrow.classList.contains('animate-nav-arrow-reverse')
    ) {
        openNav();
    } else if (elements.navMenuOpenArrow.classList.contains('animate-nav-arrow')) {
        closeNav();
    } else if (elements.navMenuOpenArrow.classList.contains('animate-nav-arrow-reverse')) {
        openNav();
    }
};

const openNav = () => {
    // Open nav arrow animation
    if (elements.navMenuOpenArrow.classList.contains('animate-nav-arrow')) {
        elements.navMenuOpenArrow.classList.remove('animate-nav-arrow');
        elements.navMenuOpenArrow.classList.add('animate-nav-arrow-reverse');
    } else {
        elements.navMenuOpenArrow.classList.remove('animate-nav-arrow-reverse');
        elements.navMenuOpenArrow.classList.add('animate-nav-arrow');
    }

    [elements.headerTitle, elements.navMenu, elements.navContent].forEach((el) => el.classList.add('active'));

    setTimeout(() => {
        elements.header.classList.remove('scroll-up');
        elements.header.classList.remove('scroll-down');
    }, 550);

    if (!elements.header.classList.contains('scroll-down')) {
        setTimeout(() => elements.navMenuOpenArrow.classList.remove('scroll-down'), 700);
    }
    setTimeout(animateNavList, 300);
};

const closeNav = () => {
    animateNavList();
    setTimeout(() => {
        elements.navMenuOpenArrow.classList.remove('animate-nav-arrow');
        elements.navMenuOpenArrow.classList.add('animate-nav-arrow-reverse');
        setTimeout(() => elements.navMenuOpenArrow.classList.remove('scroll-down'), 700);
        [elements.headerTitle, elements.navMenu, elements.navContent].forEach((el) => el.classList.remove('active'));
    }, 300);
};

const animateNavList = () => {
    const navList = document.querySelectorAll(`.${elementStrings.navMenuListItem}`);
    for (let i = 0; i < navList.length; i++) {
        navList[i].classList.toggle('active');
    }
};

// Nav-menu event listeners
const navEventListeners = ['#menu-open', '.header__logo', '.nav-menu__initial'];
navEventListeners.forEach((el) => {
    document.querySelector(`${el}`).addEventListener('click', toggleNav);
});
document.getElementById('menu-close').addEventListener('click', closeNav);

// Close nav-menu after anchor clicked
document.querySelectorAll(`li.${elementStrings.navMenuListItem} a`).forEach((el) => {
    el.addEventListener('click', closeNav);
});

/**** HEADER ****/
const scrollUp = 'scroll-up';
const scrollDown = 'scroll-down';
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 40) {
        elements.header.classList.remove(scrollUp);
        return;
    }

    const focus = document.getElementById('focus');
    if (elements.navMenu.classList.contains('active')) {
        elements.header.classList.remove(scrollDown);
        elements.header.classList.remove(scrollUp);
        return;
    } else if (focus) {
        elements.header.classList.remove(scrollUp);
        elements.header.classList.add(scrollDown);
        return;
    }

    if (currentScroll > lastScroll && !elements.header.classList.contains(scrollDown)) {
        // down
        elements.header.classList.remove(scrollUp);
        elements.header.classList.add(scrollDown);
        elements.navMenuOpenArrow.classList.add(scrollDown);
    } else if (currentScroll < lastScroll && elements.header.classList.contains(scrollDown)) {
        // up
        elements.header.classList.remove(scrollDown);
        elements.header.classList.add(scrollUp);
        elements.navMenuOpenArrow.classList.remove(scrollDown);
    }
    lastScroll = currentScroll;
});

/**** SPOTLIGHT ****/
const renderSpotlightItems = (item) => {
    // Use 'keys' function to calculate length of an object
    const spotlightItemsLength = Object.keys(spotlightItems).length;
    for (let i = 0; i < spotlightItemsLength; i++) {
        createSpotlightHtml(item[i].id, item[i].img, item[i].title, item[i].client);
    }
};

const createSpotlightHtml = (id, img, title, client) => {
    const markup = `
        <div class="spotlight__piece" id="${id}">
            <img src="${img}" class="spotlight__img" alt="${title}">
            <div class="spotlight__piece-info">
                <h2 class="spotlight__title heading-4">${maxStrLength(title)}</h2>
                <p class="spotlight__client">${client}</p>
                <svg class="spotlight__zoom">
                    <use xlink:href="img/sprite.svg#icon-plus"></use>
                </svg>
            </div>
        </div>
        `;
    elements.spotlightPieces.insertAdjacentHTML('beforeend', markup);
};

const maxStrLength = (title, limit = 19) => {
    const newStr = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newStr.push(cur);
            }
            return acc + cur.length;
        }, 0);
        return `${newStr.join(' ')} ...`;
    }
    return title;
};

/**** FOCUS ITEM ****/
const openFocus = (e) => {
    // SPOTLIGHT ITEMS
    if (e.target.matches(`.${elementStrings.spotlightZoom}, .${elementStrings.spotlightZoom} *`)) {
        // Get clicked item's ID from DOM
        const pieceID = e.target.closest('div').parentElement.id.split('-')[1];

        // Access the relevant information in the spotlightItems object
        const { portrait, img, title, client, description } = spotlightItems[pieceID - 1];

        // Create HTML and insert into the DOM
        createFocusHtml('show-client', img, title, client, description, portrait);

        /*
            // CHARITY ITEMS -- MERGED INTO CAROUSEL
        } else if (e.target.matches(`.${elementStrings.galleryZoom}, .${elementStrings.galleryZoom} *`)) {
            // Get clicked item's ID from DOM
            const pieceID = e.target.closest('figure').classList[1].split('--')[1];

            // Access the relevant information in the galleryItems object
            const { portrait, img, title, description } = galleryItems[pieceID - 1];

            // Create HTML and insert into the DOM
            createFocusHtml('gallery', img, title, description, portrait);

            // PRINT ITEMS -- MERGED INTO CAROUSEL
        } else if (e.target.matches(`.${elementStrings.printZoom}, .${elementStrings.printZoom} *`)) {
            // Get clicked item's ID from DOM
            const pieceID = e.target.closest('div').id.split('-')[1];

            // Access the relevant information in the galleryItems object
            const { portrait, img, title, client, description } = printItems[pieceID - 1];

            // Create HTML and insert into the DOM
            createFocusHtml('show-client', img, title, client, description, portrait);
            */
        // CAROUSEL ITEMS
    } else if (e.target.matches(`.${elementStrings.carouselZoom}, .${elementStrings.carouselZoom} *`)) {
        // Get clicked item's section & ID from DOM
        const section = e.target.closest('div').id.split('-')[0].concat('Items');
        const pieceID = e.target.closest('div').id.split('-')[1];

        // Access the relevant information in the correct object
        const { img, title, client, description, portrait } = window[section][pieceID - 1];

        // Create HTML and insert into the DOM
        createFocusHtml(
            `${section === 'printItems' ? 'show-client' : 'carousel'}`,
            img,
            title,
            client,
            description,
            portrait
        );
    }

    // Add second class to 'focus' element to enable transition
    const focus = document.getElementById('focus');
    const container = document.getElementById('container');
    requestAnimationFrame(() => {
        focus.classList.add('appear');
        container.classList.add('focus-active');
    });

    // Add event listener to be able to close 'focus'
    const focusClose = document.getElementById('focus-close');
    focusClose.addEventListener('click', closeFocus);
};

const closeFocus = () => {
    // Select the 'focus' element
    const focus = document.getElementById('focus');

    // Remove 'focus' from DOM
    focus.classList.remove('appear');
    setTimeout(() => {
        focus.remove();
    }, 1000);

    // Remove 'focus-active' class from 'container
    const container = document.getElementById('container');
    container.classList.remove('focus-active');
};

const createFocusHtml = (section, img, title, client, desc, portrait) => {
    if (desc === undefined) desc = client;
    const markup = `
        <div class="focus ${portrait === true ? 'focus--portrait' : ''}" id="focus">
            <div class="focus__close">
                <img src="img/close.png" class="focus__close-icon" id="focus-close" alt="Close">
            </div>
            <div class="focus__img-wrapper ${portrait === true ? 'focus__img-wrapper--portrait' : ''}">
                <img src="${img}" class="focus__img" alt="${title}">
            </div>
            <div class="focus__piece-info ${portrait === true ? 'focus__piece-info--portrait' : ''}">
                <h2 class="focus__title heading-3">${title}</h2>
                <p class="focus__client ${section === 'show-client' ? '' : 'focus__hide'}">${client}</p>
                <p class="focus__description">${desc}</p>
                <h3 class="focus__logo">Meroë</h3>
            </div>
        </div>
        `;
    document.getElementById('container').insertAdjacentHTML('beforebegin', markup);
};

// Create Spotlight items on load
renderSpotlightItems(spotlightItems);

// Assign event listeners to all spotlight elements
const spotlightElements = document.querySelectorAll(`.${elementStrings.spotlightPiece}`);
spotlightElements.forEach((el) => {
    el.addEventListener('click', openFocus);
});

/**** OLD PRINT SECTION - NOW MERGED INTO CAROUSEL ****/
/*
    const renderPrintItems = (item) => {
        const printItemsLength = Object.keys(printItems).length;
        for (let i = 0; i < printItemsLength; i++) {
            const { id, img, title, client, description } = printItems[i];
            createPrintHtml(id, img, title, client, description);
        }
    };

    const createPrintHtml = (id, img, title) => {
        const markup = `
        <div class="splide__slide print__item">
            <img src="${img}" alt="${title}">
            <div class="print__item-info" id="${id}">
                <h3 class="print__item-title heading-3">${title}</h3>
                <svg class="print__zoom">
                    <use xlink:href="img/sprite.svg#icon-plus"></use>
                </svg>
            </div>
        </div>
        `;
        document.querySelector('.print__list').insertAdjacentHTML('beforeend', markup);
    };

    const createPrintHtml = (id, img, title) => {
        const markup = `
        <div class="splide__slide carousel__item">
            <img src="${img}" alt="${title}">
            <div class="carousel__item-info" id="${id}">
                <h3 class="carousel__item-title heading-3">${title}</h3>
                <svg class="carousel__zoom">
                    <use xlink:href="img/sprite.svg#icon-plus"></use>
                </svg>
            </div>
        </div>
        `;
        document.querySelector('.print__list').insertAdjacentHTML('beforeend', markup);
    };
    renderPrintItems(printItems);

    const printElements = document.querySelectorAll(`.${elementStrings.printItem}`);
    printElements.forEach((el) => {
        el.addEventListener('click', openFocus);
    });

    // Splide carousel initiation and options
    document.addEventListener('DOMContentLoaded', function () {
        new Splide('#print-splide', {
            type: 'loop',
            speed: 3000,
            rewindSpeed: 1000,
            //fixedWidth: '40rem',
            //fixedHeight: '80vh',
            heightRatio: 0.5,
            autoWidth: true,
            //trimSpace: false,
            focus: 'center',
            perPage: 2,
            gap: '15rem',
            classes: {
                arrow: 'splide__arrow your-class-arrow print__slide-arrow',
                page: 'splide__pagination__page print__slide-pages'
            }
        }).mount();
    });
    */

/**** OLD CHARITY SECTION - GALLERY FORMAT ****/
/*
    const renderGalleryItems = (item) => {
        const galleryItemsLength = Object.keys(charityItems).length;
        for (let i = 0; i < galleryItemsLength; i++) {
            createGalleryHtml(item[i].id, item[i].img, item[i].title);
        }
    };

    const createGalleryHtml = (id, img, title) => {
        const markup = `
        <figure class="charity__item charity__item--${id.split('-')[1]}">
            <img src="${img}" alt="${title}" class="charity__img">
            <svg class="charity__zoom">
                <use xlink:href="img/sprite.svg#icon-plus"></use>
            </svg>
        </figure>
        `;
        document.querySelector('.charity__items').insertAdjacentHTML('beforeend', markup);
    };

    // Create Gallery items on load
    renderGalleryItems(charityItems);

    // Add event listeners to all charity items
    const charityZooms = document.querySelectorAll('.charity__zoom');
    charityZooms.forEach((el) => {
        el.addEventListener('click', openFocus);
    });
    */

/**** CAROUSEL ****/
const renderCarouselItems = (section, obj) => {
    const objectLength = Object.keys(obj).length;
    for (let i = 0; i < objectLength; i++) {
        const { id, img, title } = obj[i];
        createCarouselHtml(section, id, img, title);
    }
};

const createCarouselHtml = (section, id, img, title) => {
    const markup = `
        <div class="splide__slide splide-carousel__item ${section}__item">
            <img src="${img}" alt="${title}">
            <div class="splide-carousel__item-info" id="${id}">
                <h3 class="splide-carousel__item-title heading-3">${title}</h3>
                <svg class="splide-carousel__zoom">
                    <use xlink:href="img/sprite.svg#icon-plus"></use>
                </svg>
            </div>
        </div>
        `;
    document.querySelector(`.${section}__list`).insertAdjacentHTML('beforeend', markup);
};
renderCarouselItems('print', printItems);
renderCarouselItems('charity', charityItems);

const carouselElements = document.querySelectorAll(`.${elementStrings.carouselItem}`);
carouselElements.forEach((el) => {
    el.addEventListener('click', openFocus);
});

// Splide carousel options object
const splideOptions = {
    type: 'loop',
    speed: 3000,
    rewindSpeed: 1000,
    heightRatio: 0.5,
    autoWidth: true,
    focus: 'center',
    perPage: 2,
    gap: '15rem',
    classes: {
        arrow: 'splide__arrow splide-carousel__slide-arrow',
        page: 'splide__pagination__page splide-carousel__slide-pages'
    }
};

// Splide carousel initiation
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#print-splide', splideOptions).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#charity-splide', splideOptions).mount();
});

elements.carouselZooms.forEach((el) => {
    el.addEventListener('click', openFocus);
});

/**** SKETCHBOOK ****/
$(window).ready(function () {
    $('#sketchbook__magazine').turn({
        display: 'double',
        acceleration: true,
        gradients: !$.isTouch,
        elevation: 50,
        when: {
            turned: function (e, page) {
                /*console.log('Current view: ', $(this).turn('view'));*/
            }
        }
    });
});

const renderSketchbookItems = () => {
    const sketchbookItemsLength = Object.keys(sketchbookItems).length;
    for (let i = 0; i < sketchbookItemsLength; i++) {
        const { img, title} = sketchbookItems[i];
        createSketchbookHtml(img, title);
    }
}

const createSketchbookHtml = (img, title) => {
    const markup = `
    <div>
        <img class="sketchbook__page" src="${img}" alt="${title}">
    </div>
    `;
    document.getElementById('sketchbook__magazine').insertAdjacentHTML('beforeend', markup);
};
renderSketchbookItems(sketchbookItems);

const sketchbookBtnPrevious = document.querySelector('.sketchbook__btn--left');
const sketchbookBtnNext = document.querySelector('.sketchbook__btn--right');

// Function & event listeners for sketchbook arrows
const sketchbookFlipPage = (e) => {
    if (e.target.matches(`.sketchbook__btn--left, .sketchbook__btn--left *`)) {
        $('#sketchbook__magazine').turn('previous');
    }
    if (e.target.matches(`.sketchbook__btn--right, .sketchbook__btn--right *`)) {
        $('#sketchbook__magazine').turn('next');
    }
};

[sketchbookBtnNext, sketchbookBtnPrevious].forEach((el) => {
    el.addEventListener('click', sketchbookFlipPage);
});

$(window).bind('keydown', function (e) {
    if (e.keyCode == 37) $('#sketchbook__magazine').turn('previous');
    else if (e.keyCode == 39) $('#sketchbook__magazine').turn('next');
});