import { elements, elementStrings } from './views/base';
import { SpotlightItem, spotlightItems } from './models/Spotlight';
import * as headerView from './views/headerView';
import * as spotlightView from './views/spotlightView';
import { slideshowItems } from './models/Slideshow';

// TESTING
window.spotlightView = spotlightView;
window.SpotlightItem = SpotlightItem;
window.spotlightItems = spotlightItems;
window.slideshowItems = slideshowItems;


/**** SLIDESHOW CONTROLLER ****/
// Render slideshow items
headerView.renderSlideshowItems(slideshowItems);

/**** SPOTLIGHT CONTROLLER ****/
// Render Spotlight items
spotlightView.renderSpotlightItems(spotlightItems);


/**** EVENT LISTENERS ****/

/** INITIAL **/
// Start header slideshow
headerView.showSlides();

/** NAVIGATION MENU **/
// Open
document.getElementById('menu-open').addEventListener('click', headerView.openNav);
elements.navMenuInital.addEventListener('click', headerView.openNav);
//elements.navMenuArrowList.addEventListener('click', headerView.openNav);

// Close
document.getElementById('menu-close').addEventListener('click', headerView.closeNav);
// This EL is overwriting the open when placed on the same element
// elements.navMenuOpenArrow.addEventListener('click', headerView.closeNav);

/** HEADER **/
// Slideshow
const slideshowDots = document.querySelectorAll(`.${elementStrings.headerDot}`);
slideshowDots.forEach(el => {
    el.addEventListener('click', headerView.changeSlide);
});

/** SPOTLIGHT **/
// Assign event listeners to all spotlight elements
const spotlightElements = document.querySelectorAll(`.${elementStrings.spotlightPiece}`);
spotlightElements.forEach(el => {
    el.addEventListener('click', spotlightView.openFocus);
});

/**** UPDATE FORM ****/
/** SLIDESHOW **/
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

/** SPOTLIGHT **/

