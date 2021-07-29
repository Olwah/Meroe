/**** DOMSTRING VARIABLES ****/
const elements = {
    container: document.querySelector('.container'),
    navMenu: document.querySelector('.nav-menu'),
    navMenuInital: document.querySelector('.nav-menu__initial'),
    navMenuOpenArrow: document.querySelector('.nav-menu__open-arrow'),
    navMenuArrowList: document.querySelector('.nav-menu__arrow-list'),
    navClose: document.querySelector('.nav-menu__close'),
    navContent: document.querySelector('.nav-menu__content'),
    navMenuMobile: document.querySelector('.nav-menu__mobile'),
    navMenuCheckbox: document.querySelector('.nav-menu__checkbox'),
    navMenuOpenArrowMobile: document.querySelector('.nav-menu__open-arrow--mobile'),
    navMenuContentMobile: document.querySelector('.nav-menu__content--mobile'),
    header: document.querySelector('.header'),
    headerWrapper: document.querySelector('.header__wrapper'),
    headerTitle: document.querySelector('.header__title'),
    headerSlidesContainer: document.querySelector('.header__slideshow-container'),
    headerSlides: document.querySelector('.header__slideshow-slides'),
    headerSlideshowDots: document.querySelector('.header__slideshow-dots'),
    spotlightPieces: document.querySelector('.spotlight__pieces'),
    spotlightPiece: document.querySelector('.spotlight__piece'),
    printPieces: document.querySelector('.print__pieces'),
    printPiece: document.querySelector('.print__piece'),
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
    showAll: 'show-all',
    showAllSpotlight: 'show-all--spotlight',
    showAllPrint: 'show-all--print',
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
        img: 'img/LIWUMI_MockUp_Box.jpg',
        vAlign: false,
        title: 'Life is What U Make It',
        client: 'Client - Battersea Arts Centre',
        description:
            'Throughout the first half of 2021 I art directed and produced illustrations for the board game "Life Is What U Make It" along with designer Messy Pandas who worked on the branding, colour schemes and layout. The board game will be trialled in schools across London to educate children on the dangers of joining gangs and the potential long term impact.',
        imgLibrary: {
            0: {
                img: 'img/LIWUMI_Rule_Book_Cover.jpg',
                desc: 'Manual/rule book cover for the "Life Is What U Make It" board game.'
            },
            1: {
                img: 'img/LIWUMI_StickerSheet1.jpg',
                desc: 'Used to decorate the packaging and images also appear across the game.'
            },
            2: {
                img: 'img/LIWUMI_StickerSheet2.jpg',
                desc: 'Used to decorate the packaging and images also appear across the game.'
            },
            3: {
                img: 'img/LIWUMI_Banner.jpg',
                desc: 'Promotional Image for the "Life Is What U Make It" board game used across digital media.'
            }
        }
    },
    1: {
        id: 'spotlight-2',
        portrait: false,
        img: 'img/LifeonLettsom.jpg',
        vAlign: false,
        title: 'Lettsom Estate',
        client: 'Client - Life on Lettsom',
        description:
            'Editorial Illustration contribution to the Life on Lettsom magazine, a new Southwark Council funded publication for the residents of the Lettsom housing estate in South London.'
    },
    2: {
        id: 'spotlight-3',
        portrait: false,
        img: 'img/Love_Walk_Cafe.jpg',
        vAlign: false,
        title: 'Love Walk Cafe',
        client: 'Client - Camberwell Arts Group',
        description:
            'Contribution to the Camberwell Arts Group, used on local banners as part of Camberwell’s new identity and branding.\nImage depicts Love Walk Cafe.'
    },
    3: {
        id: 'spotlight-4',
        portrait: false,
        img: 'img/Kiku.jpg',
        vAlign: true,
        title: '‘Kiku’ bottle label',
        client: 'Client - Kanpai Saké Brewery',
        description:
            'Sumo bottle label design for Kanpai Saké Brewery’s limited edition range.\nForms part of a ‘triptych’ of labels adapting elements of Peckham with traditional/well known Japanese concepts.'
    },
    4: {
        id: 'spotlight-5',
        portrait: false,
        img: 'img/Miru.jpg',
        vAlign: true,
        title: '‘Miru’ bottle label',
        client: 'Client - Kanpai Saké Brewery',
        description:
            'Samurai bottle label design for Kanpai Saké Brewey’s limited edition range.\nForms part of a ‘triptych’ of labels adapting elements of Peckham with traditional/well known Japanese concepts.'
    },
    5: {
        id: 'spotlight-6',
        portrait: false,
        img: 'img/Nomu.jpg',
        vAlign: true,
        title: '‘Nomu’ bottle label',
        client: 'Client - Kanpai Saké Brewery',
        description:
            'Geisha bottle label design for Kanpai Saké Brewery’s limited edition range.\nForms part of a ‘triptych’ of labels adapting elements of Peckham with traditional/well known Japanese concepts.'
    },
    6: {
        id: 'spotlight-7',
        portrait: true,
        img: 'img/Brixton.jpg',
        vAlign: false,
        title: 'Brixton',
        client: 'Client - Maison Des Languages',
        description:
            'Images for Maison Des Languages’ language book for French students studying English.\nForms part of an exercise in a comic book format.'
    },
    7: {
        id: 'spotlight-8',
        portrait: true,
        img: 'img/Frontpage6.jpg',
        vAlign: false,
        title: 'Tombstone Transaction - Republic of Cyprus',
        client: 'Client - Citi',
        description:
            'Poster design for Citi group to commemorate an agreement with the Government of Cyprus, commissioned by the French embassy.'
    },
    8: {
        id: 'spotlight-9',
        portrait: true,
        img: 'img/Citi_Telefonica.jpg',
        vAlign: false,
        title: 'Tombstone Transaction - Telefonica',
        client: 'Client - Citi',
        description:
            'Poster design for Citi group to commemorate an agreement with Telefonica, featuring an ‘uncle Sam’ style figure. '
    },
    9: {
        id: 'spotlight-10',
        portrait: false,
        img: 'img/Gospel_Green.jpg',
        vAlign: false,
        title: 'Bottle Label Design',
        client: 'Unused',
        description: 'Unused concept for Gospel Green Cider.'
    },
    10: {
        id: 'spotlight-11',
        portrait: false,
        img: 'img/Yubari.jpg',
        vAlign: false,
        title: 'Yubari',
        client: 'Self Initiated',
        description:
            'Self initiated piece from a visit to Northern Japan’s Yubari, a former mining town that very much echoes the same issues faced by North East England.\nIt went on to be shortlisted and then a winner of Hire an Illustrator’s Showcase 100, and was exhibited at the Framer’s Gallery in London, 2015.'
    },
    11: {
        id: 'spotlight-12',
        portrait: true,
        img: 'img/WillGraham.jpg',
        vAlign: false,
        title: 'Will Graham',
        client: 'Self Initiated - Fan Art',
        description: 'Born from a love of the Hannibal drama.'
    },
    12: {
        id: 'spotlight-13',
        portrait: false,
        img: 'img/Lumley_Castle.jpg',
        vAlign: false,
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
        vAlign: false,
        title: 'Cathryn',
        client: 'Self Initiated',
        description: 'An illustration referencing Emilé Zola’s work ‘Germinal’ Woodcut.'
    },
    1: {
        id: 'print-2',
        portrait: true,
        img: 'img/Print2.jpg',
        vAlign: false,
        title: '‘Tama’',
        client: 'Bar Fujita, Sapporo',
        description: 'Super Soft Lino'
    },
    2: {
        id: 'print-3',
        portrait: true,
        img: 'img/Print3.jpg',
        vAlign: false,
        title: '‘Coran’',
        client: 'Bar Fujita, Sapporo',
        description: 'Super Soft Lino'
    },
    3: {
        id: 'print-4',
        portrait: true,
        img: 'img/Print4.jpg',
        vAlign: false,
        title: '‘Buran’',
        client: 'Bar Fujita, Sapporo',
        description: 'Super Soft Lino'
    },
    4: {
        id: 'print-5',
        portrait: true,
        img: 'img/Print5.jpg',
        vAlign: false,
        title: '‘Nalow’',
        client: 'Bar Fujita, Sapporo',
        description: 'Super Soft Lino'
    },
    5: {
        id: 'print-6',
        portrait: true,
        img: 'img/Print6.jpg',
        vAlign: false,
        title: 'Full Moon in SE8',
        client: 'Bar Fujita, Sapporo',
        description: 'Prints made to be given out for donators to my Blood Cancer UK 2021 Dry January Fundraiser'
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
        img: 'img/sketchbook_front.jpg',
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
        img: 'img/sketchbook_back.jpg',
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

const toggleMobileNav = () => {
    if (elements.navMenuContentMobile.classList.contains('active')) {
        [elements.navMenuContentMobile, elements.navMenuOpenArrowMobile].forEach((el) => el.classList.remove('active'));
    } else {
        [elements.navMenuContentMobile, elements.navMenuOpenArrowMobile].forEach((el) => el.classList.add('active'));
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
// Desktop nave menu elements
const navEventListeners = ['#menu-open', '.header__logo', '.nav-menu__initial'];

// Add initial event listeners on load
navEventListeners.forEach((el) => {
    document.querySelector(`${el}`).addEventListener('click', toggleNav);
});
document.getElementById('menu-close').addEventListener('click', closeNav);

// Add resizing event listener to the window object
window.addEventListener('resize', toggleNavEventListeners);

// Function to determine window width and enable/disable event listeners
function toggleNavEventListeners() {
    // Get width of the window excluding scrollbars
    let w = document.documentElement.clientWidth;
    
    // If window size drops below 600px then remove eventlistener on desktop nav menu
    if (w <= 600) {
        // Remove nav desktop event listeners
        navEventListeners.forEach((el) => {
            document.querySelector(`${el}`).removeEventListener('click', toggleNav);
        });
        document.getElementById('menu-close').removeEventListener('click', closeNav);
    } else {
        // Add nav desktop event listeners
        navEventListeners.forEach((el) => {
            document.querySelector(`${el}`).addEventListener('click', toggleNav);
        });
        document.getElementById('menu-close').addEventListener('click', closeNav);
    }  
}

// Mobile nav-menu event listeners
const mobileNavEventListeners = ['.nav-menu__mobile'];
mobileNavEventListeners.forEach((el) => {
    document.querySelector(`${el}`).addEventListener('click', toggleMobileNav);
});

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
const renderSpotlightItems = (section, item) => {
    // Use 'keys' function to calculate length of an object
    const spotlightItemsLength = Object.keys(spotlightItems).length;
    for (let i = 0; i < spotlightItemsLength; i++) {
        createSpotlightHtml(section, item[i].id, item[i].img, item[i].vAlign, item[i].title, item[i].client);
    }
};

const createSpotlightHtml = (section, id, img, vAlign, title, client) => {
    const markup = `
        <div class="${section}__piece" id="${id}">
            <img src="${img}" class="spotlight__img ${vAlign === true ? 'spotlight__img--top' : ''}" alt="${title}">
            <div class="spotlight__piece-info">
                <h2 class="spotlight__title heading-4">${maxStrLength(title)}</h2>
                <p class="spotlight__client">${client}</p>
                <svg class="spotlight__zoom">
                    <use xlink:href="img/sprite.svg#icon-plus"></use>
                </svg>
            </div>
        </div>
        `;
    if (section === 'spotlight') elements.spotlightPieces.insertAdjacentHTML('beforeend', markup);
    if (section === 'print') elements.printPieces.insertAdjacentHTML('beforeend', markup);
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

/**** SHOW ALL BUTTONS ****/
const showAllText = (section) => {
    console.log(section.innerText);
    //Only changing in one direction need to fix
    section.innerText = "SHOW ALL" ? section.innerText = "SHOW LESS" : section.innerText = "SHOW ALL";
}

const showAll = (e) => {
    if (e.target.matches(`.${elementStrings.showAllSpotlight}, .${elementStrings.showAllSpotlight} *`)) {
        const spotPieceEls = document.querySelectorAll('.spotlight__piece');
        // Show hidden spotlight pieces
        spotPieceEls.forEach((el) => {
            el.classList.toggle('active');
        });
        // Add styles to clicked show all button
        const showAllSpotlight = document.querySelector('.show-all--spotlight');
        showAllText(showAllSpotlight);

    } else if (e.target.matches(`.${elementStrings.showAllPrint}, .${elementStrings.showAllPrint} *`)) {
        const printPieceEls = document.querySelectorAll('.print__piece');
        printPieceEls.forEach((el) => {
            el.classList.toggle('active');
        });
        const showAllPrint = document.querySelector('.show-all--print');
        showAllText(showAllPrint);
    }
}

/**** FOCUS ITEM ****/
const openFocus = (e) => {
    // SPOTLIGHT ITEMS
    if (e.target.matches(`.${elementStrings.spotlightZoom}, .${elementStrings.spotlightZoom} *`)) {
        // Get clicked item's ID from DOM
        const pieceID = e.target.closest('div').parentElement.id.split('-')[1];

        // Access the relevant information in the spotlightItems object
        const nearestSection = e.target.closest('div').parentElement.className.split('__')[0];
        const section = nearestSection === 'spotlight' ? spotlightItems : printItems;
        const { portrait, img, title, client, description } = section[pieceID - 1];

        // Create HTML and insert into the DOM
        createFocusHtml('show-client', img, title, client, description, portrait);

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
        <div class="focus ${portrait === true ? 'focus--portrait' : ''} ${section === 'show-client' ? '' : 'focus__charity'}" id="focus">
            <div class="focus__hint">
                <p>Hover for details</p>
            </div>
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
            </div>
            <div class="focus__logo">
                <h3>Meroë</h3>
            </div>
        </div>
        `;
    document.getElementById('container').insertAdjacentHTML('beforebegin', markup);
};

// Create Spotlight items on load
renderSpotlightItems('spotlight', spotlightItems);

/**** PRINT SECTION ****/
const renderPrintItems = (section, item) => {
    // Use 'keys' function to calculate length of an object
    const printItemsLength = Object.keys(printItems).length;
    for (let i = 0; i < printItemsLength; i++) {
        createSpotlightHtml(section, item[i].id, item[i].img, item[i].vAlign, item[i].title, item[i].client);
    }
};

// Create Print items on load
renderPrintItems('print', printItems);

// Assign event listeners to all spotlight elements
const spotlightElements = document.querySelectorAll(`.${elementStrings.spotlightPiece}`);
const printElements = document.querySelectorAll('.print__piece');

spotlightElements.forEach((el) => {
    el.addEventListener('click', openFocus);
});

printElements.forEach((el) => {
    el.addEventListener('click', openFocus);
});

// Assign event listeners to Show All buttons
const showAllElements = document.querySelectorAll(`.${elementStrings.showAll}`);
showAllElements.forEach((el) => {
    el.addEventListener('click', showAll);
});

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
            <img class="splide-carousel__img" src="${img}" alt="${title}">
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
//renderCarouselItems('print', printItems);
renderCarouselItems('charity', charityItems);

const carouselElements = document.querySelectorAll(`.${elementStrings.carouselItem}`);
carouselElements.forEach((el) => {
    el.addEventListener('click', openFocus);
});

// Splide carousel options object
const splideOptions = {
    type: 'loop',
    speed: 1500,
    rewindSpeed: 1000,
    //heightRatio: 0.5,
    //autoWidth: true,
    fixedWidth: 'fit-content',
    fixedHeight: '35rem',
    focus: 'center',
    perPage: 2,
    gap: '5rem',
    classes: {
        arrow: 'splide__arrow splide-carousel__slide-arrow',
        page: 'splide__pagination__page splide-carousel__slide-pages'
    },
    breakpoints: {
		900: {
			perPage: 1,
            gap: '3rem'
		},
        600: {
            gap: '1.5rem',
            height: '45vh',
            autoWidth: true
        },
        400: {
            gap: '1rem',
            height: '35vh',
        }
    }
};

// Splide carousel initiation
/*
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#print-splide', splideOptions).mount();
});
*/

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
        const { img, title } = sketchbookItems[i];
        createSketchbookHtml(img, title);
    }
};

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
