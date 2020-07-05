import { elements, elementStrings } from './views/base';
import { SpotlightItem, spotlightItems } from './models/Spotlight';
import * as headerView from './views/headerView';
import * as spotlightView from './views/spotlightView';
import { slideshowItems } from './models/Slideshow';

// TESTING
window.spotlightView = spotlightView;
window.SpotlightItem = SpotlightItem;
window.spotlightItems = spotlightItems;

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

