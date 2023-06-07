// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const listEl = document.querySelector('.gallery');
const itemEl = galleryItems
  .map(
    item =>
      `<li class="gallery__item">
   <a class="gallery__link" href=${item.original} onclick="return false;">
      <img class="gallery__image" src=${item.preview} alt=${item.description} />
   </a>
</li>`
  )
  .join('');
listEl.insertAdjacentHTML('afterbegin', itemEl);
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '300',
});
