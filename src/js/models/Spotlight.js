/*
export default class SpotlightItem {
    constructor(img, title, description) {
        this.id = `spotlight-${spotlightItems.length + 1}`;
        this.img = img;
        this.title = title;
        this.description = description;
    }

    addItem(img, title, description) {
        const item = {
            id: `spotlight-${this.items.length + 1}`,
            img,
            title,
            description
        }
        this.items.push(item);
        return item;
    }

    deleteItem(id) {
        const index = this.items.findIndex(el => el.id === id);
        this.items.splice(index, 1);
    } 
    
};
*/

export const spotlightItems = {
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
        img: 'img/Frontpage7.jpg',
        title: 'Spotlight Piece 7',
        description: 'Spotlight Piece 7'
    },
    7: {
        id: 'spotlight-8',
        img: 'img/Frontpage7.jpg',
        title: 'Spotlight Piece 8',
        description: 'Spotlight Piece 8'
    },
    8: {
        id: 'spotlight-9',
        img: 'img/Frontpage7.jpg',
        title: 'Spotlight Piece 9',
        description: 'Spotlight Piece 9'
    }
};