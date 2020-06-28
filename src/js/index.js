import { elements, elementStrings } from './views/base';
import * as headerView from './views/headerView';
import * as spotlightView from './views/spotlightView';


/**** EVENT LISTENERS ****/

// Navigation Menu
document.getElementById('menu-open').addEventListener('click', headerView.toggleNav);
document.getElementById('menu-close').addEventListener('click', headerView.toggleNav);
elements.navMenuArrowList.addEventListener('click', headerView.toggleNav);

// Spotlight Pieces to open Focus
const spotlightElements = document.querySelectorAll(`.${elementStrings.spotlightPiece}`);
spotlightElements.forEach(el => {
    el.addEventListener('click', spotlightView.openFocus);
});


/*
document.querySelectorAll(`.${elementStrings.spotlightPiece}`).addEventListener('click', e => {
    if (e.target.matches(`.${elementStrings.spotlightZoom}, .${elementStrings.spotlightZoom} *`)) {
       
        // Get clicked item's img source and convert to relative path
        const imgSrcArr = e.target.closest(`.${elementStrings.spotlightPiece}`).firstElementChild.src.split('/');
        const imgSrcRelative = `/img/${imgSrcArr[imgSrcArr.length - 1]}`;
        
        // Get clicked item's information
        const pieceTitle = e.target.parentElement.firstElementChild.textContent;
        const pieceDesc = e.target.parentElement.firstElementChild.nextElementSibling.textContent;
        console.log(pieceDesc);

        // Create HTML and insert into the DOM
        spotlightView.createFocusHTML(imgSrcRelative, pieceTitle, pieceDesc);
    }
});
*/