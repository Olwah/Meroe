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
    navMenuOpenArrowMobile: document.querySelector('.nav-menu__open-arrow--mobile'),
    navMenuContentMobile: document.querySelector('.nav-menu__content--mobile'),
    header: document.querySelector('.header'),
    headerWrapper: document.querySelector('.header__wrapper'),
    headerTitle: document.querySelector('.header__title'),
    spotlightPieces: document.querySelector('.spotlight__pieces'),
    spotlightPiece: document.querySelector('.spotlight__piece'),
    printPieces: document.querySelector('.print__pieces'),
    printPiece: document.querySelector('.print__piece'),
    carouselItems: document.querySelectorAll('.splide-carousel__items'),
    carouselZooms: document.querySelectorAll('.splide-carousel__zoom')
};

const elementStrings = {
    focusNavItem: 'focus__nav-item',
    navMenuListItem: 'nav-menu__list-item',
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
        additionalImgs: true,
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
        portrait: true,
        img: 'img/Kanae_Portrait_web.jpg',
        vAlign: false,
        title: 'Epiphany',
        client: 'Based on personal events summer 2021',
        description:
            'In summer 2021 my wife suffered a ‘subdural haematoma’ - essentially blood on the brain, that could have been fatal. Luckily I got her to Kings College hospital and after an initial misdiagnosis and a gruelling wait in A+E, she was operated on. A truly terrifying event. As we’re both massive science fiction fans she helped guide me as I made this piece, as a way of channelling the events.'
    },
    2: {
        id: 'spotlight-3',
        portrait: false,
        img: 'img/Camberwell_Police_Station_web.jpg',
        vAlign: false,
        title: 'Old Camberwell Police Station Takeover',
        client: 'Client - Self Initiated July/August 2021',
        description:
            'Documenting the takeover by "The Serious Annoyance" of the Old Camberwell Police Station as a protest against the new policing bill. Particularly liked the effort that had gone into the hand made fabric signs that they\'d arranged out of the windows and how it divided up the space on the front of the building. As of writing, the old Camberwell Police Station has actually been vacant since 2019 and I had no idea until the protest started.'
    },
    3: {
        id: 'spotlight-4',
        portrait: false,
        img: 'img/LifeonLettsom.jpg',
        vAlign: false,
        title: 'Lettsom Estate',
        client: 'Client - Life on Lettsom',
        description:
            'Editorial Illustration contribution to the Life on Lettsom magazine, a new Southwark Council funded publication for the residents of the Lettsom housing estate in South London.'
    },
    4: {
        id: 'spotlight-5',
        portrait: false,
        img: 'img/Love_Walk_Cafe.jpg',
        vAlign: false,
        title: 'Love Walk Cafe',
        client: 'Client - Camberwell Arts Group',
        description:
            'Contribution to the Camberwell Arts Group, used on local banners as part of Camberwell’s new identity and branding.\nImage depicts Love Walk Cafe.'
    },
    5: {
        id: 'spotlight-6',
        portrait: false,
        img: 'img/Kiku.jpg',
        vAlign: true,
        title: '‘Kiku’ bottle label',
        client: 'Client - Kanpai Saké Brewery',
        description:
            'Sumo bottle label design for Kanpai Saké Brewery’s limited edition range.\nForms part of a ‘triptych’ of labels adapting elements of Peckham with traditional/well known Japanese concepts.'
    },
    6: {
        id: 'spotlight-7',
        portrait: false,
        img: 'img/Miru.jpg',
        vAlign: true,
        title: '‘Miru’ bottle label',
        client: 'Client - Kanpai Saké Brewery',
        description:
            'Samurai bottle label design for Kanpai Saké Brewey’s limited edition range.\nForms part of a ‘triptych’ of labels adapting elements of Peckham with traditional/well known Japanese concepts.'
    },
    7: {
        id: 'spotlight-8',
        portrait: false,
        img: 'img/Nomu.jpg',
        vAlign: true,
        title: '‘Nomu’ bottle label',
        client: 'Client - Kanpai Saké Brewery',
        description:
            'Geisha bottle label design for Kanpai Saké Brewery’s limited edition range.\nForms part of a ‘triptych’ of labels adapting elements of Peckham with traditional/well known Japanese concepts.'
    },
    8: {
        id: 'spotlight-9',
        portrait: true,
        img: 'img/Brixton.jpg',
        vAlign: false,
        title: 'Brixton',
        client: 'Client - Maison Des Languages',
        description:
            'Images for Maison Des Languages’ language book for French students studying English.\nForms part of an exercise in a comic book format.'
    },
    9: {
        id: 'spotlight-10',
        portrait: true,
        img: 'img/Frontpage6.jpg',
        vAlign: false,
        title: 'Tombstone Transaction - Republic of Cyprus',
        client: 'Client - Citi',
        description:
            'Poster design for Citi group to commemorate an agreement with the Government of Cyprus, commissioned by the French embassy.'
    },
    10: {
        id: 'spotlight-11',
        portrait: true,
        img: 'img/Citi_Telefonica.jpg',
        vAlign: false,
        title: 'Tombstone Transaction - Telefonica',
        client: 'Client - Citi',
        description:
            'Poster design for Citi group to commemorate an agreement with Telefonica, featuring an ‘uncle Sam’ style figure. '
    },
    11: {
        id: 'spotlight-12',
        portrait: false,
        img: 'img/Gospel_Green.jpg',
        vAlign: false,
        title: 'Bottle Label Design',
        client: 'Unused',
        description: 'Unused concept for Gospel Green Cider.'
    },
    12: {
        id: 'spotlight-13',
        portrait: false,
        img: 'img/Yubari.jpg',
        vAlign: false,
        title: 'Yubari',
        client: 'Self Initiated',
        description:
            'Self initiated piece from a visit to Northern Japan’s Yubari, a former mining town that very much echoes the same issues faced by North East England.\nIt went on to be shortlisted and then a winner of Hire an Illustrator’s Showcase 100, and was exhibited at the Framer’s Gallery in London, 2015.'
    },
    13: {
        id: 'spotlight-14',
        portrait: true,
        img: 'img/WillGraham.jpg',
        vAlign: false,
        title: 'Will Graham',
        client: 'Self Initiated - Fan Art',
        description: 'Born from a love of the Hannibal drama.'
    },
    14: {
        id: 'spotlight-15',
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
        id: 'sketchbook-1',
        img: 'img/sketchbook_front.jpg',
        title: 'Sketchbook Front Page'
    },
    1: {
        id: 'sketchbook-2',
        img: 'img/Sketchbook1.jpg',
        title: 'Sketchbook Page 1'
    },
    2: {
        id: 'sketchbook-3',
        img: 'img/Sketchbook2.jpg',
        title: 'Sketchbook Page 2'
    },
    3: {
        id: 'sketchbook-4',
        img: 'img/Sketchbook3.jpg',
        title: 'Sketchbook Page 3'
    },
    4: {
        id: 'sketchbook-5',
        img: 'img/Sketchbook4.jpg',
        title: 'Sketchbook Page 4'
    },
    5: {
        id: 'sketchbook-6',
        img: 'img/Sketchbook5.jpg',
        title: 'Sketchbook Page 5'
    },
    6: {
        id: 'sketchbook-7',
        img: 'img/Sketchbook6.jpg',
        title: 'Sketchbook Page 6'
    },
    7: {
        id: 'sketchbook-8',
        img: 'img/Sketchbook7.jpg',
        title: 'Sketchbook Page 7'
    },
    8: {
        id: 'sketchbook-9',
        img: 'img/Sketchbook8.jpg',
        title: 'Sketchbook Page 8'
    },
    9: {
        id: 'sketchbook-10',
        img: 'img/Sketchbook9.jpg',
        title: 'Sketchbook Page 9'
    },
    10: {
        id: 'sketchbook-11',
        img: 'img/Sketchbook10.jpg',
        title: 'Sketchbook Page 10'
    },
    11: {
        id: 'sketchbook-12',
        img: 'img/Sketchbook11.jpg',
        title: 'Sketchbook Page 11'
    },
    12: {
        id: 'sketchbook-13',
        img: 'img/Sketchbook12.jpg',
        title: 'Sketchbook Page 12'
    },
    13: {
        id: 'sketchbook-14',
        img: 'img/Sketchbook13.jpg',
        title: 'Sketchbook Page 13'
    },
    14: {
        id: 'sketchbook-15',
        img: 'img/Sketchbook14.jpg',
        title: 'Sketchbook Page 14'
    },
    15: {
        id: 'sketchbook-16',
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
// Desktop nav menu elements
const navEventListeners = ['#menu-open', '.header__logo', '.nav-menu__initial'];

// Add initial event listeners based on client screen size
toggleNavEventListeners();

// Add resizing event listener to the window object
window.addEventListener('resize', toggleNavEventListeners);

// Function to determine window width and enable/disable event listeners
function toggleNavEventListeners() {
    // Get width of the window excluding scrollbars
    let w = document.documentElement.clientWidth;

    // If window size drops below 600px then remove eventlistener on desktop nav menu
    if (w <= 670) {
        // Remove nav desktop event listeners
        navEventListeners.forEach((el) => {
            document.querySelector(`${el}`).removeEventListener('click', toggleNav);
        });
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

const maxStrLength = (title, limit = 16) => {
    // Change word limit based on screen size
    let w = document.documentElement.clientWidth;
    if (w <= 400) limit = 22;
    if (w <= 670) limit = 17;
    if (w <= 900) limit = 22;
    if (w <= 1200) limit = 16;
    if (w > 1200) limit = 25;

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
    //Only changing in one direction need to fix
    section.innerHTML = 'SHOW ALL' ? (section.innerHTML = 'SHOW LESS') : (section.innerHTML = 'SHOW ALL');
};

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
};

/**** FOCUS ITEM ****/
const openFocus = (e) => {
    // SPOTLIGHT ITEMS
    if (e.target.matches(`.${elementStrings.spotlightZoom}, .${elementStrings.spotlightZoom} *`)) {
        // Get clicked item's ID from DOM
        const pieceID = e.target.closest('div').parentElement.id.split('-')[1];

        // Access the relevant information in the spotlightItems object
        const nearestSection = e.target.closest('div').parentElement.className.split('__')[0];
        const section = nearestSection === 'spotlight' ? spotlightItems : printItems;
        const { portrait, img, title, client, description, additionalImgs, imgLibrary } = section[pieceID - 1];

        // Create HTML and insert into the DOM
        createFocusHtml('show-client', img, title, client, description, portrait, additionalImgs);

        // Add in additional HTML for extra images
        if (additionalImgs) {
            // Get number of additional items from object
            const numberImgs = Object.keys(imgLibrary).length;
            // Loop through creating the necessary HTML
            for (let i = 0; i < numberImgs; i++) {
                createFocusNavListHtml(i);
                createFocusExtraImageHtml(imgLibrary, i, title);
                createFocusExtraImageInfoHtml(imgLibrary, i);
            }

            // Add event listeners to newly created nav buttons
            const focusNavItems = document.querySelectorAll('.focus__nav-item');
            focusNavItems.forEach((el) => {
                el.addEventListener('click', toggleFocusAddImgs);
            });
        }

        // CAROUSEL ITEMS
    } else if (e.target.matches(`.${elementStrings.carouselZoom}, .${elementStrings.carouselZoom} *`)) {
        // Get clicked item's section & ID from DOM
        const section = e.target.closest('div').id.split('-')[0].concat('Items');
        const pieceID = e.target.closest('div').id.split('-')[1];

        // Access the relevant information in the correct object
        const { img, title, client, description, portrait, additionalImgs, imgLibrary } = window[section][pieceID - 1];

        // Create HTML and insert into the DOM
        createFocusHtml(
            `${section === 'printItems' ? 'show-client' : 'carousel'}`,
            img,
            title,
            client,
            description,
            portrait,
            additionalImgs
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
    const focusClose = document.querySelector('.focus__close');

    // Remove 'focus' from DOM
    focus.classList.remove('appear');
    setTimeout(() => {
        focusClose.remove();
        focus.remove();
    }, 1000);

    // Remove 'focus-active' class from 'container
    const container = document.getElementById('container');
    container.classList.remove('focus-active');
};

const createFocusHtml = (section, img, title, client, desc, portrait, additionalImgs) => {
    if (desc === undefined) desc = client;
    const markup = `
        <div class="focus__close">
            <img src="img/close.png" class="focus__close-icon" id="focus-close" alt="Close">
        </div>
        <div class="focus ${portrait === true ? 'focus--portrait' : ''} ${
        section === 'show-client' ? '' : 'focus__charity'
    } ${additionalImgs === true ? 'focus__add-imgs' : ''}" id="focus">
            <div class="focus__hint ${additionalImgs === true ? 'focus__add-imgs' : ''}">
                <p>&larr; Scroll for details</p>
            </div>
            <div class="focus__nav ${additionalImgs === true ? 'active' : ''}">
                <ul class="focus__nav-list">
                    <li id="focus__nav-item--original" class="focus__nav-item active">1</li>
                    <!-- ADDITIONAL IMAGES NAVIGATION -->
                </ul>
            </div>
            <div class="focus__img-wrapper ${portrait === true ? 'focus__img-wrapper--portrait' : ''}">
                <img src="${img}" id="focus__img--original" class="focus__img active" alt="${title}">
                <!-- ADDITIONAL PROJECT IMAGES -->
            </div>
            <div class="focus__piece-info ${portrait === true ? 'focus__piece-info--portrait' : ''}">
                <h2 class="focus__title heading-3">${title}</h2>
                <p class="focus__client ${section === 'show-client' ? '' : 'focus__hide'}">${client}</p>
                <p id="focus__description--original" class="focus__description active">${desc}</p>
                <!-- ADDITIONAL PROJECT DESCRIPTIONS -->
            </div>
            <div class="focus__logo ${additionalImgs === true ? 'focus__add-imgs' : ''}">
                <h3>Meroë</h3>
            </div>
        </div>
        `;
    document.getElementById('container').insertAdjacentHTML('beforebegin', markup);
};

// HTML to be added if there are additional images in the project that need to be displayed in the focus panel
const createFocusNavListHtml = (id) => {
    const markup = `
        <li id="focus__nav-item--${id + 1}" class="focus__nav-item">${id + 2}</li>
    `;
    document.querySelector('.focus__nav-list').insertAdjacentHTML('beforeend', markup);
};

const createFocusExtraImageHtml = (imgLibrary, id, title) => {
    const markup = `
        <img src="${imgLibrary[id].img}" id="focus__img--${id + 1}" class="focus__img" alt="${title}">
    `;
    document.querySelector('.focus__img-wrapper').insertAdjacentHTML('beforeend', markup);
};

const createFocusExtraImageInfoHtml = (imgLibrary, id) => {
    const markup = `
        <p id="focus__description--${id + 1}" class="focus__description">${imgLibrary[id].desc}</p>
    `;
    document.querySelector('.focus__piece-info').insertAdjacentHTML('beforeend', markup);
};

// Function to control event listeners to focus nav buttons
const toggleFocusAddImgs = (e) => {
    // Find id of clicked focus nav button
    const id = e.target.closest('li').id.split('--')[1];

    // Remove 'active' class from all other elements
    const focusNavs = document.querySelectorAll('.focus__nav-item');
    const focusImgs = document.querySelectorAll('.focus__img');
    const focusDescs = document.querySelectorAll('.focus__description');
    const allEls = [focusNavs, focusImgs, focusDescs];
    allEls.forEach((group) => {
        group.forEach((el) => {
            el.classList.remove('active');
        });
    });

    // Add 'active' class to all other elements with matching id
    document.getElementById(`focus__nav-item--${id}`).classList.add('active');
    document.getElementById(`focus__img--${id}`).classList.add('active');
    document.getElementById(`focus__description--${id}`).classList.add('active');
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

// Assign event listeners to all spotlight & print elements
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
        <div class="splide__slide splide-carousel__item ${section}__item" style="height: 400px; width: auto;">
            <img class="splide-carousel__img" src="${img}" alt="${title}">
            <div class="splide-carousel__item-info ${section === 'sketchbook' ? 'active' : ''}" id="${id}">
                <h3 class="splide-carousel__item-title heading-3">${title}</h3>
                <svg class="splide-carousel__zoom">
                    <use xlink:href="img/sprite.svg#icon-plus"></use>
                </svg>
            </div>
        </div>
        `;
    document.querySelector(`.${section}__list`).insertAdjacentHTML('beforeend', markup);
};
renderCarouselItems('charity', charityItems);

const carouselElements = document.querySelectorAll(`.${elementStrings.carouselItem}`);
carouselElements.forEach((el) => {
    el.addEventListener('click', openFocus);
});

// Splide carousel options object
/*
const splideOptions = {
    type: 'loop',
    speed: 1500,
    rewindSpeed: 1000,
    fixedWidth: 'fit-content',
    //autoWidth: true,
    //height: '50vh',
    //autoHeight: true,
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
        670: {
            perPage: 2,
            start: 1,
            gap: '1.5rem',
            autoWidth: true
        },
        400: {
            perPage: 1,
            start: 1,
            gap: '1rem',
            autoWidth: true
        }
    }
};
*/

const splideOptions = {
    type: 'loop',
    speed: 1500,
    rewindSpeed: 1000,
    //fixedWidth: '33vw',
    autoWidth: true,
    //width: 'auto',
    height: '40rem',
    //autoHeight: true,
    //fixedHeight: '40rem', 
    focus: 'center',
    perPage: 2,
    gap: '5rem',
    //lazyLoad: 'sequential',
    classes: {
        arrow: 'splide__arrow splide-carousel__slide-arrow',
        page: 'splide__pagination__page splide-carousel__slide-pages'
    },
    breakpoints: {
        900: {
            perPage: 1,
            gap: '3rem'
        },
        670: {
            perPage: 2,
            start: 1,
            gap: '1.5rem',
            autoWidth: true
        },
        400: {
            perPage: 1,
            start: 1,
            gap: '1rem',
            autoWidth: true
        }
    }
};

// Splide carousel initiation
// Charity slideshow on DOM Content load
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#charity-splide', splideOptions).mount();
});

// Sketchbook slideshow triggered on window resize - this will hide flipbook and display carousel to prevent page dimensions breaking and provide better mobile viewing
window.addEventListener('resize', function () {
    // Hide flipbook and replace Splides HTML to prevent duplication
    document.getElementById('sketchbook__book').classList.add('active');
    const sketchItem = document.getElementById('sketchbook-splide');
    const sketchSplideHtml = `
        <div class="splide__track">
            <div class="splide__list sketchbook__list">
                <!-- DYNAMICALLY CREATED -->
            </div>
        </div>
    `;
    sketchItem.innerHTML = sketchSplideHtml;

    // Render the new splide and carousel items
    renderCarouselItems('sketchbook', sketchbookItems);
    new Splide('#sketchbook-splide', splideOptions).mount();
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
