import { elements, elementStrings } from './base';

export const toggleNav = () => {
    elements.navMenu.classList.toggle('active');
    elements.navContent.classList.toggle('active');
    elements.header.classList.toggle('active');
    elements.headerTitle.classList.toggle('active');
    elements.navMenuArrowList.classList.toggle('active');
};

// ['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));