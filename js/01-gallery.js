import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const body = document.querySelector('body');

let instance;

body.addEventListener('keydown', event => {
    console.log("keydown", event.key);
    if (event.key === "Escape" && instance) {
        instance.close();
    }
})

galleryEl.addEventListener('click', event => {
    event.preventDefault();
    console.log("before create", instance);
    instance = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.getAttribute('data-source')}"
        alt="${event.target.getAttribute('alt')}" />
    </div>
`)
    // console.log("instance", instance);
    instance.show();
});

// console.log(galleryEl);

const galleryItemsList = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
    <img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"
    />
</a>
</div>`;
});

// console.log("galleryItemsList", galleryItemsList);

galleryEl.insertAdjacentHTML('beforeend', galleryItemsList.join(''));

// console.log(galleryItems);


