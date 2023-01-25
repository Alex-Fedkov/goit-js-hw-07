import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
// const body = document.querySelector('body');

let instance;
let modalEl;

// body.addEventListener('keydown', onEscapeClick)

galleryEl.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    console.log("before create", instance);
    instance = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.getAttribute('data-source')}"
        alt="${event.target.getAttribute('alt')}" />
    </div>
`, {
        onShow: (instance) => {
            window.addEventListener('keydown', onEscapeClick);
        },
        onClose: (instance) => {
            window.removeEventListener('keydown', onEscapeClick);
            //     modalEl = document.querySelector(".modal");
            modalEl.removeEventListener("click", modalClick);
        }
    })
    // console.log("instance", instance);
    instance.show((instance) => {
        modalEl = document.querySelector(".modal");
        modalEl.addEventListener("click", modalClick);
        console.log("modalEl", modalEl);
    });
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

function onEscapeClick (event) {
    console.log("keydown", event.key);
    if (event.key === "Escape" && instance) {
        instance.close();
    }
}

function modalClick(event) {
    
    instance.close();
}