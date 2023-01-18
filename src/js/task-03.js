const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const listGallery = document.querySelector('.gallery');

const imgItemEl = images
  .map(image => `<li class="gallery_list"><img class="gallery_img" src= ${image.url} alt = ${image.alt} width = "370"></img></li>`)
  .join("");

listGallery.insertAdjacentHTML('beforeend', imgItemEl);

listGallery.style.listStyle = "none";
listGallery.style.display = "flex";
listGallery.style.flexWrap = "wrap";
listGallery.style.gap = "30px";