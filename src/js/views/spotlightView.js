import { elements, elementStrings } from './base';

export const openFocus = (e) => {
    if (e.target.matches(`.${elementStrings.spotlightZoom}, .${elementStrings.spotlightZoom} *`)) {
        // Get clicked item's img source and convert to relative path
        const imgSrcArr = e.target.closest(`.${elementStrings.spotlightPiece}`).firstElementChild.src.split('/');
        const imgSrcRelative = `/img/${imgSrcArr[imgSrcArr.length - 1]}`;
        
        // Get clicked item's information
        const pieceTitle = e.target.parentElement.firstElementChild.textContent;
        const pieceDesc = e.target.parentElement.firstElementChild.nextElementSibling.textContent;

        // Create HTML and insert into the DOM
        createFocusHTML(imgSrcRelative, pieceTitle, pieceDesc);

        // Add style to 'container' to blur background
        const container = document.getElementById('container');
        container.classList.add('focus-active');

        // Add event listener to close the focus
        const focusClose = document.getElementById('focus-close');
        focusClose.addEventListener('click', closeFocus);
    }
};

export const closeFocus = () => {
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
            <img src="/img/close.png" class="focus__close-icon" id="focus-close" alt="Close">
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
    document.getElementById('container').insertAdjacentHTML("beforebegin", markup);
};