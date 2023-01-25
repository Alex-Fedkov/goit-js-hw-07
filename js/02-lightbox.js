import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryItemsList = galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
});

galleryEl.insertAdjacentHTML('beforeend', galleryItemsList.join(''));

// console.log("galleryItemsList", galleryItemsList);
// console.log("galleryItemsList.join", galleryItemsList.join(''));
// console.log("galleryItems", galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
    // captionSelector: "img",
    // captionType: "attr",
    captionsData: "alt",
    captionDelay: 250,
});
