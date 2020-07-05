import { elements, elementStrings } from './base';
import { slideshowItems } from '../models/Slideshow';

/**** NAVIGATION MENU ****/
export const openNav = () => {
    elements.navMenu.classList.toggle('active');
    elements.navContent.classList.toggle('active');
    elements.headerTitle.classList.toggle('active');
    elements.navMenuOpenArrow.classList.toggle('active');
    //elements.navMenuArrowList.classList.toggle('active');
    setTimeout(animateNavList, 100);
};

export const closeNav = () => {
    animateNavList();
    setTimeout( () => {
        elements.navMenuOpenArrow.classList.remove('active');
        elements.navMenu.classList.remove('active');
        elements.navContent.classList.remove('active');
        elements.headerTitle.classList.remove('active');
        //elements.navMenuArrowList.classList.remove('active');
    }, 300);
};

const animateNavList = () => {
    const navList = document.querySelectorAll(`.${elementStrings.navMenuListItem}`);
    for (let i = 0; i < navList.length; i++) {
        navList[i].classList.toggle(`${elementStrings.navMenuListItem}--${i + 1}`);
    }
};

/**** SLIDESHOW ****/

let slideIndex = 0;

export function showSlides() {
    const slides = document.getElementsByClassName(`${elementStrings.headerSlides}`);
    const dots = document.getElementsByClassName(`${elementStrings.headerDot}`);
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove('active');
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 10000);
};

export function changeSlide(e) {
    if (e.target.matches(`.${elementStrings.headerDot}`)) {
        // Find ID of dot clicked
        const dotID = e.target.id.split('-');
        const dotNumber = dotID[1];

        // Change all slides style to 'none'
        const slideshowSlides = document.querySelectorAll(`.${elementStrings.headerSlides}`);
        slideshowSlides.forEach(el => {
            el.style.display = "none";
        });

        // Change view to that slide
        const currentSlide = document.getElementById(`slide-${dotNumber}`);
        currentSlide.style.display = "block";

        // Update corresponding dot
        const dots = document.querySelectorAll(`.${elementStrings.headerDot}`);
        dots.forEach(el => {
            el.classList.remove('active');
        });
        const currentDot = document.getElementById(`dot-${dotNumber}`);
        currentDot.classList.add('active');

        // Restart showSlides function from current position
        // Note: showSlides function continues the loop despite clicking and changing active slide
        const slideNumber = parseInt(dotID);
        let slideIndex = slideNumber;
        return slideIndex;
    }  
};

export const renderSlideshowItems = (item) => {
    // Use 'keys' function to calculate length of an object
    const slideshowItemsLength = Object.keys(slideshowItems);
    for (let i = 0; i < slideshowItemsLength.length; i++) {
        createSlideshowHTML(item[i].img, item[i].title);
        createDotHTML();
    }
};

const createSlideshowHTML = (img, title) => {
    const slidesLength = document.querySelectorAll(`.${elementStrings.headerSlides}`).length;
    const markup = `
    <div class="header__slideshow-slides header__slideshow-fade" id="slide-${slidesLength + 1}">
        <img class="header__slideshow-img" src="${img}" alt="${title}">
    </div>
    `;
    elements.headerSlidesContainer.insertAdjacentHTML('beforeend', markup);
};

const createDotHTML = () => {
    const dotLength = document.querySelectorAll(`.${elementStrings.headerDot}`).length;
    const markup = `<span class="header__slideshow-dot" id="dot-${dotLength + 1}"></span>`;
    elements.headerSlideshowDots.insertAdjacentHTML('beforeend', markup);
};