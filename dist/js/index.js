/*
import { elements, elementStrings } from './views/base';
import { SpotlightItem, spotlightItems } from './models/Spotlight';
import * as headerView from './views/headerView';
import * as spotlightView from './views/spotlightView';
import { slideshowItems } from './models/Slideshow';
*/

// TESTING

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
    spotlightPiece: document.querySelector('.spotlight__piece')
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
    galleryZoom: 'gallery__zoom'
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
        img: 'img/yubari.jpg',
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

const printItems = {
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

const galleryItems = {
    0: {
        id: '1',
        portrait: false,
        img: 'img/Charity1.jpg',
        title: 'Charity Piece 1',
        description: 'Charity Piece 1'
    },
    1: {
        id: '2',
        portrait: true,
        img: 'img/Charity2.jpg',
        title: 'Charity Piece 2',
        description: 'Charity Piece 2'
    },
    2: {
        id: '3',
        portrait: true,
        img: 'img/Charity3.jpg',
        title: 'Charity Piece 3',
        description: 'Charity Piece 3'
    },
    3: {
        id: '4',
        portrait: true,
        img: 'img/Charity4.jpg',
        title: 'Charity Piece 4',
        description: 'Charity Piece 4'
    },
    4: {
        id: '5',
        portrait: true,
        img: 'img/Charity5.jpg',
        title: 'Charity Piece 5',
        description: 'Charity Piece 5'
    },
    5: {
        id: '6',
        portrait: true,
        img: 'img/Charity6.jpg',
        title: 'Charity Piece 6',
        description: 'Charity Piece 6'
    },
    6: {
        id: '7',
        portrait: true,
        img: 'img/Charity7.jpg',
        title: 'Charity Piece 7',
        description: 'Charity Piece 7'
    }
    /*
    6: {
        id: '7',
        img: 'img/Nouveau_web.jpg',
        title: 'Charity Piece 7',
        description: 'Charity Piece 7'
    },
    7: {
        id: '8',
        img: 'img/Nouveau_web.jpg',
        title: 'Charity Piece 8',
        description: 'Charity Piece 8'
    },
    8: {
        id: '9',
        img: 'img/Nouveau_web.jpg',
        title: 'Charity Piece 9',
        description: 'Charity Piece 9'
    },
    9: {
        id: '10',
        img: 'img/Nouveau_web.jpg',
        title: 'Charity Piece 10',
        description: 'Charity Piece 10'
    },
    10: {
        id: '11',
        img: 'img/Nouveau_web.jpg',
        title: 'Charity Piece 11',
        description: 'Charity Piece 11'
    },
    11: {
        id: '12',
        img: 'img/Nouveau_web.jpg',
        title: 'Charity Piece 12',
        description: 'Charity Piece 12'
    },
    12: {
        id: '13',
        img: 'img/Nouveau_web.jpg',
        title: 'Charity Piece 13',
        description: 'Charity Piece 13'
    },
    13: {
        id: '14',
        img: 'img/Nouveau_web.jpg',
        title: 'Charity Piece 14',
        description: 'Charity Piece 14'
    }
    */
};

const sketchbookItems = {
    1: {
        imageLeft: 'img/Kiku.jpg',
        titleLeft: 'Sketchbook Page 1',
        imageRight: 'img/Nomu.jpg',
        titleRight: 'Sketchbook Page 2'
    },
    2: {
        imageLeft: 'img/Nomu.jpg',
        titleLeft: 'Sketchbook Page 3',
        imageRight: 'img/Love_Walk_Cafe.jpg',
        titleRight: 'Sketchbook Page 4'
    },
    3: {
        imageLeft: 'img/Frontpage3.jpg',
        titleLeft: 'Sketchbook Page 5',
        imageRight: 'img/Frontpage6.jpg',
        titleRight: 'Sketchbook Page 6'
    },
    4: {
        imageLeft: 'img/Love_Walk_Cafe.jpg',
        titleLeft: 'Sketchbook Page 7',
        imageRight: 'img/Gospel_Green.jpg',
        titleRight: 'Sketchbook Page 8'
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

// Set all anchor links to scroll smoothly
/*
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
*/

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
        createFocusHtml('show-client', portrait, img, title, client, description);

        // CHARITY ITEMS
    } else if (e.target.matches(`.${elementStrings.galleryZoom}, .${elementStrings.galleryZoom} *`)) {
        // Get clicked item's ID from DOM
        const pieceID = e.target.closest('figure').classList[1].split('--')[1];

        // Access the relevant information in the galleryItems object
        const { portrait, img, title, description } = galleryItems[pieceID - 1];

        // Create HTML and insert into the DOM
        createFocusHtml('gallery', portrait, img, title, description);
    } else if (e.target.matches(`.${elementStrings.printZoom}, .${elementStrings.printZoom} *`)) {
        // Get clicked item's ID from DOM
        const pieceID = e.target.closest('div').id.split('-')[1];

        // Access the relevant information in the galleryItems object
        const { portrait, img, title, client, description } = printItems[pieceID - 1];

        // Create HTML and insert into the DOM
        createFocusHtml('show-client', portrait, img, title, client, description);
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

const createFocusHtml = (section, portrait, img, title, client, desc) => {
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

/**** TESTING ****/
/*
function noBoxShadow() {
    for (let i = 0; i < 3; i++) {
        const spots = document.querySelectorAll('.spotlight__piece');
        spots[i].style.boxShadow = 'none';
    }
}
noBoxShadow();
*/

// Assign event listeners to all spotlight elements
const spotlightElements = document.querySelectorAll(`.${elementStrings.spotlightPiece}`);
spotlightElements.forEach((el) => {
    el.addEventListener('click', openFocus);
});

/**** PRINT SECTION ****/
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
    document.querySelector('.splide__list').insertAdjacentHTML('beforeend', markup);
};
renderPrintItems(printItems);

const printElements = document.querySelectorAll(`.${elementStrings.printItem}`);
printElements.forEach((el) => {
    el.addEventListener('click', openFocus);
});

/*
<div class="print__item-info">
    <h2 class="print__item-title heading-2">${title}</h2>
    <p class="print__item-client">${client}</p>
    <p class="print__item-description">${desc}</p>
</div>
*/

// Splide carousel initiation and options
document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
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
            arrow : 'splide__arrow your-class-arrow print__slide-arrow',
            page: 'splide__pagination__page print__slide-pages'
        }
    }).mount();
});

/*
const printButtons = document.querySelectorAll('.print__button');
printButtons.forEach(el => {
    el.addEventListener('click', slideDirection);
});

const slideDirection = (el) => {
    el.target.dataset === 'prev' ? slideTo(-1) : slideTo(1);
}

let printSlides = document.querySelectorAll('.print__item');
const slideTo = function (direction) {
    let i = 0;
    i = i + direction;
    i = Math.min(Math.max(index, 0), printSlides.length - 1);
    printSlides[i].scrollIntoView({ behavior: 'smooth' });
};
*/

/**** CHARITY SECTION ****/
const renderGalleryItems = (item) => {
    const galleryItemsLength = Object.keys(galleryItems).length;
    for (let i = 0; i < galleryItemsLength; i++) {
        createGalleryHtml(item[i].id, item[i].img, item[i].title);
    }
};

const createGalleryHtml = (id, img, title) => {
    const markup = `
    <figure class="gallery__item gallery__item--${id}">
        <img src="${img}" alt="${title}" class="gallery__img">
        <svg class="gallery__zoom">
            <use xlink:href="img/sprite.svg#icon-plus"></use>
        </svg>
    </figure>
    `;
    document.querySelector('.gallery__items').insertAdjacentHTML('beforeend', markup);
};

// Create Gallery items on load
renderGalleryItems(galleryItems);

// Add event listeners to all gallery items
const galleryZooms = document.querySelectorAll('.gallery__zoom');
galleryZooms.forEach((el) => {
    el.addEventListener('click', openFocus);
});

/**** SKETCHBOOK ****/

const renderSketchbookItems = (item) => {
    const sketchbookItemsLength = Object.keys(sketchbookItems).length;
    for (let i = 1; i <= sketchbookItemsLength; i++) {
        createSketchbookHtml(item[i].imageLeft, item[i].imageRight, item[i].titleLeft, item[i].titleRight);
    }
    addJsClass();
};

// Add active class to first Sketchbook carousel item only
const addJsClass = () => {
    const spinnerFace = document.querySelector('.spinner--left').firstElementChild;
    spinnerFace.classList.add('js-active');
};

const createSketchbookHtml = (imgLeft, imgRight, titleLeft, titleRight) => {
    const markup = `
    <div class="spinner__face">
        <div class="content">
            <div class="content__left">
                <img src="${imgLeft}" alt="${titleLeft}" />
            </div>
            <div class="content__right">
                <img src="${imgRight}" alt="${titleRight}" />
            </div>
        </div>
    </div>
    `;
    document.querySelector('.spinner--left').insertAdjacentHTML('beforeend', markup);
};

/*
const preloadSketchbookImages = (imgLeft, imgRight) => {
    const markup = `
    <img src="${imgLeft}"/>
    <img src="${imgRight}"/>
    `;
    document.querySelector('.sketchbook__loader').insertAdjacentHTML('beforeend', markup);
};
*/

let activeIndex = 0;
let limit = 0;
let disabled = false;
let $stage;
let $controls;
let canvas = false;

const SPIN_FORWARD_CLASS = 'js-spin-fwd';
const SPIN_BACKWARD_CLASS = 'js-spin-bwd';
const DISABLE_TRANSITIONS_CLASS = 'js-transitions-disabled';
const SPIN_DUR = 1000;

const appendControls = () => {
    for (let i = 0; i < limit; i++) {
        $('.carousel__control').append(`<a href="#" data-index="${i}"></a>`);
    }
    let height = $('.carousel__control').children().last().outerHeight();

    $('.carousel__control').css('height', 30 + limit * height);
    $controls = $('.carousel__control').children();
    $controls.eq(activeIndex).addClass('active');
};

const setIndexes = () => {
    $('.spinner')
        .children()
        .each((i, el) => {
            $(el).attr('data-index', i);
            limit++;
        });
};

const duplicateSpinner = () => {
    const $el = $('.spinner').parent();
    const html = $('.spinner').parent().html();
    $el.append(html);
    $('.spinner').last().addClass('spinner--right');
    $('.spinner--right').removeClass('spinner--left');
};

const paintFaces = () => {
    $('.spinner__face').each((i, el) => {
        const $el = $(el);
        let color = $(el).attr('data-bg');
        $el.children().css('backgroundImage', `url(${getBase64PixelByColor(color)})`);
    });
};

const getBase64PixelByColor = (hex) => {
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.height = 1;
        canvas.width = 1;
    }
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = hex;
        ctx.fillRect(0, 0, 1, 1);
        return canvas.toDataURL();
    }
    return false;
};

const prepareDom = () => {
    setIndexes();
    paintFaces();
    duplicateSpinner();
    appendControls();
};

const spin = (inc = 1) => {
    if (disabled) return;
    if (!inc) return;
    activeIndex += inc;
    disabled = true;

    if (activeIndex >= limit) {
        activeIndex = 0;
    }

    if (activeIndex < 0) {
        activeIndex = limit - 1;
    }

    const $activeEls = $('.spinner__face.js-active');
    const $nextEls = $(`.spinner__face[data-index=${activeIndex}]`);
    $nextEls.addClass('js-next');

    if (inc > 0) {
        $stage.addClass(SPIN_FORWARD_CLASS);
    } else {
        $stage.addClass(SPIN_BACKWARD_CLASS);
    }

    $controls.removeClass('active');
    $controls.eq(activeIndex).addClass('active');

    setTimeout(
        () => {
            spinCallback(inc);
        },
        SPIN_DUR,
        inc
    );
};

const spinCallback = (inc) => {
    $('.js-active').removeClass('js-active');
    $('.js-next').removeClass('js-next').addClass('js-active');
    $stage.addClass(DISABLE_TRANSITIONS_CLASS).removeClass(SPIN_FORWARD_CLASS).removeClass(SPIN_BACKWARD_CLASS);

    $('.js-active').each((i, el) => {
        const $el = $(el);
        $el.prependTo($el.parent());
    });
    setTimeout(() => {
        $stage.removeClass(DISABLE_TRANSITIONS_CLASS);
        disabled = false;
    }, 100);
};

const attachListeners = () => {
    document.onkeyup = (e) => {
        switch (e.keyCode) {
            case 38:
                spin(-1);
                break;
            case 40:
                spin(1);
                break;
        }
    };

    $controls.on('click', (e) => {
        e.preventDefault();
        if (disabled) return;
        const $el = $(e.target);
        const toIndex = parseInt($el.attr('data-index'), 10);
        spin(toIndex - activeIndex);
    });
};

const assignEls = () => {
    $stage = $('.carousel__stage');
};

const init = () => {
    assignEls();
    prepareDom();
    attachListeners();
};

$(() => {
    init();
});

// Create Sketchbook items on load
renderSketchbookItems(sketchbookItems);

// TESTING
window.sketchbookItems = sketchbookItems;

/**** UPDATE FORM ****/
/** SLIDESHOW **/
/*
const slideshowImg = document.getElementById('slideshow-img');
slideshowImg.addEventListener('change', getSlides);

function getSlides() {
    if (slideshowImg.options[slideshowImg.selectedIndex].value === "0") {
        document.querySelector('.update__slideshow-info').classList.remove('active');
    } else {
        document.querySelector('.update__slideshow-info').classList.add('active');
    };
};

const whatTask = document.getElementById('whatTask');
whatTask.addEventListener('change', getTask);

function getTask() {
    if (whatTask.options[whatTask.selectedIndex].value === "0") {
        document.querySelector('.update__slideshow-info').classList.remove('active');
        document.querySelector('.update__edit-slide').classList.add('active');

        document.getElementById('update__new-btn').classList.remove('active');
        document.getElementById('update__edit-btn').classList.add('active');

    } else if (whatTask.options[whatTask.selectedIndex].value === "1") {
        document.querySelector('.update__edit-slide').classList.remove('active');
        document.querySelector('.update__slideshow-info').classList.add('active');

        document.getElementById('update__edit-btn').classList.remove('active');
        document.getElementById('update__new-btn').classList.add('active');
    };
};


const updateSlide = () => {
    if (slideshowImg.options[slideshowImg.selectedIndex].value !== "0") {
        // Determine which slide is selected
        const slideIndex = parseInt(slideshowImg.options[slideshowImg.selectedIndex].value);
        
        // Grab the values from inputs
        const imgPath = 'img/';
        const imgValue = document.getElementById('imgSrc').value;
        const imgSrc = imgPath.concat(imgValue);
        const imgTitle = document.getElementById('imgTitle').value;
        //const imgFile = document.getElementById('imgFile');
        
        // Update values in slideshowItems object
        slideshowItems[slideIndex - 1].img = imgSrc;
        slideshowItems[slideIndex - 1].title = imgTitle;
    }
    return imgSrc, imgTitle;
};

const slideshowItemsLength = Object.keys(slideshowItems).length;

const newSlide = () => {
    // Grab the values from inputs
    const imgPath = 'img/';
    const imgValue = document.getElementById('imgSrc').value;
    const imgSrc = imgPath.concat(imgValue);
    const imgTitle = document.getElementById('imgTitle').value;
    //const imgFile = document.getElementById('imgFile');

    // Add values to the slideshowItems object
    const addKey = {
        // Square brackets use the computed value for an object key e.g "3"
        [slideshowItemsLength]: {
            img: imgSrc,
            title: imgTitle
        }
    };
    const updateSlideshowItems = Object.assign({}, slideshowItems, addKey);
    
    return updateSlideshowItems;
};

// Need to add this to the render slideshow items function if you end up merging everything into a single js file
const createSlideOption = () => {
    const markup = `<option value="${slideshowItemsLength}">Slide ${slideshowItemsLength}</option>`;
    document.getElementById('slideshow-img').insertAdjacentHTML('beforeend', markup);
};

// Event listener for update slideshow button
const slideshowUpdate = document.getElementById('update__edit-btn');
slideshowUpdate.addEventListener('click', updateSlide);

// Event listener for add new slide button
const addSlide = document.getElementById('update__new-btn');
addSlide.addEventListener('click', newSlide);
*/
