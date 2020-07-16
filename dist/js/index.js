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
    spotlightDesc: 'spotlight__description'
};


/**** CONTENT OBJECTS ****/
const spotlightItems = {
    0: {
        id: 'spotlight-1',
        img: 'img/Frontpage1.jpg',
        title: 'Spotlight Piece 1',
        description: 'Spotlight Piece 1'
    },
    1: {
        id: 'spotlight-2',
        img: 'img/Frontpage2.jpg',
        title: 'Spotlight Piece 2',
        description: 'Spotlight Piece 2'
    },
    2: {
        id: 'spotlight-3',
        img: 'img/Frontpage3.jpg',
        title: 'Spotlight Piece 3',
        description: 'Spotlight Piece 3'
    },
    3: {
        id: 'spotlight-4',
        img: 'img/Frontpage4.jpg',
        title: 'Spotlight Piece 4',
        description: 'Spotlight Piece 4'
    },
    4: {
        id: 'spotlight-5',
        img: 'img/Frontpage5.jpg',
        title: 'Spotlight Piece 5',
        description: 'Spotlight Piece 5'
    },
    5: {
        id: 'spotlight-6',
        img: 'img/Frontpage6.jpg',
        title: 'Spotlight Piece 6',
        description: 'Spotlight Piece 6'
    },
    6: {
        id: 'spotlight-7',
        img: 'img/Nouveau_web.jpg',
        title: 'Spotlight Piece 7',
        description: 'Spotlight Piece 7'
    },
    7: {
        id: 'spotlight-8',
        img: 'img/vacancysubmissionweb.jpg',
        title: 'Spotlight Piece 8',
        description: 'Spotlight Piece 8'
    },
    8: {
        id: 'spotlight-9',
        img: 'img/WillGraham.jpg',
        title: 'Spotlight Piece 9',
        description: 'Spotlight Piece 9'
    }
};


/** NAVIGATION MENU **/
const toggleNav = () => {
    if (!elements.navMenuOpenArrow.classList.contains('animate-nav-arrow') && (!elements.navMenuOpenArrow.classList.contains('animate-nav-arrow-reverse'))) {
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

    [elements.headerTitle, elements.navMenu, elements.navContent].forEach(el => el.classList.add('active'));

    setTimeout( () => {
    elements.header.classList.remove('scroll-up');
    elements.header.classList.remove('scroll-down');
    }, 550);

    if (!elements.header.classList.contains('scroll-down')) {
        setTimeout( () => elements.navMenuOpenArrow.classList.remove('scroll-down'), 700);
    }
    setTimeout(animateNavList, 800);
};

const closeNav = () => {
    animateNavList();
    setTimeout( () => {
        elements.navMenuOpenArrow.classList.remove('animate-nav-arrow');
        elements.navMenuOpenArrow.classList.add('animate-nav-arrow-reverse');
        setTimeout( () => elements.navMenuOpenArrow.classList.remove('scroll-down'), 700);
        [elements.headerTitle, elements.navMenu, elements.navContent].forEach(el => el.classList.remove('active'));
    }, 300);
};

const animateNavList = () => {
    const navList = document.querySelectorAll(`.${elementStrings.navMenuListItem}`);
    for (let i = 0; i < navList.length; i++) {
        navList[i].classList.toggle(`${elementStrings.navMenuListItem}--${i + 1}`);
    }
};

document.getElementById('menu-open').addEventListener('click', toggleNav);
elements.navMenuInital.addEventListener('click', toggleNav);
document.getElementById('menu-close').addEventListener('click', closeNav);


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

    const body = document.body;
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
        createSpotlightHTML(item[i].id, item[i].img, item[i].title, item[i].description);
    }
};

const createSpotlightHTML = (id, img, title, description) => {
    const markup = `
    <div class="spotlight__piece" id="spotlight-${id}">
        <img src="${img}" class="spotlight__img" alt="${title}">
        <div class="spotlight__piece-info">
            <h2 class="spotlight__title heading-2">${title}</h2>
            <p class="spotlight__description">${description}</p>
            <svg class="spotlight__zoom">
                <use xlink:href="img/sprite.svg#icon-plus"></use>
            </svg>
        </div>
    </div>
    `;
    elements.spotlightPieces.insertAdjacentHTML('beforeend', markup);
};

const openFocus = (e) => {
    if (e.target.matches(`.${elementStrings.spotlightZoom}, .${elementStrings.spotlightZoom} *`)) {
        
        // Get clicked item's img source and convert to relative path
        const imgSrcArr = e.target.closest(`.${elementStrings.spotlightPiece}`).firstElementChild.src.split('/');
        const imgSrcRelative = `img/${imgSrcArr[imgSrcArr.length - 1]}`;
        
        // Get clicked item's information
        const pieceTitle = e.target.closest('svg').parentElement.firstElementChild.textContent;
        const pieceDesc = e.target.closest('svg').parentElement.firstElementChild.nextElementSibling.textContent;

        // Create HTML and insert into the DOM
        createFocusHTML(imgSrcRelative, pieceTitle, pieceDesc);

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
    }
};

const closeFocus = () => {
    // Select the 'focus' element
    const focus = document.getElementById('focus');

    // Remove 'focus' from DOM
    focus.remove();

    // Remove 'focus-active' class from 'container
    const container = document.getElementById('container');
    container.classList.remove('focus-active');
};

const createFocusHTML = (img, title, desc) => {
    const markup = `
    <div class="focus" id="focus">
        <div class="focus__close">
            <img src="img/close.png" class="focus__close-icon" id="focus-close" alt="Close">
        </div>
        <div class="focus__img-wrapper">
            <img src="${img}" class="focus__img" alt="${title}">
        </div>
        <div class="focus__piece-info">
            <h2 class="focus__title heading-2">${title}</h2>
            <p class="focus__description">${desc}</p>
            <h3 class="focus__logo">Meroë</h3>
        </div>
    </div>
    `;
    document.getElementById('container').insertAdjacentHTML('beforebegin', markup);
};

// Create Ppotlight items on load
renderSpotlightItems(spotlightItems);

// Assign event listeners to all spotlight elements
const spotlightElements = document.querySelectorAll(`.${elementStrings.spotlightPiece}`);
spotlightElements.forEach(el => {
    el.addEventListener('click', openFocus);
});





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