// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');

galleryRef.insertAdjacentHTML('beforeend', creatGalleryToHtml());
let lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250, captionData: 'alt'});

function addGalleryItemHtml(item) {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" /> </a> </li>`;

}

function creatGalleryToHtml () {
    //console.log(galleryItems);
    return galleryItems.map(addGalleryItemHtml).join("");
     
    
}
