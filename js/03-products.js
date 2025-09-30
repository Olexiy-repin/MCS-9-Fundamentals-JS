/*
 * Створи картки з товарами на основі масиву products
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт.
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox (https://github.com/electerious/basicLightbox)
 */

//* Product card template
/*
<li class="product-card js-product-card" data-id="">
  <img src="" alt="" class="product-card-img" />
  <div class="product-card-text-content">
    <h2 class="product-card-title"></h2>
    <p class="product-card-price">Price: uah.</p>
  </div>
</li>
*/

//* Modal card template
/*
<img class="product-modal-img" src="" alt="" />
<div class="product-modal-text-content">
  <h2 class="product-modal-title"></h2>
  <p class="product-modal-price">Price: uah.</p>
  <p class="product-modal-desc"></p>
</div>
*/

const products = [
  {
    id: 1,
    imgUrl: 'https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG',
    title: 'Monitor',
    price: 3000,
    description: '23-inch monitor with Full HD resolution.',
  },
  {
    id: 2,
    imgUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX',
    title: 'Laptop',
    price: 20000,
    description: 'Lightweight and powerful laptop with a 15-inch display and SSD.',
  },
  {
    id: 3,
    imgUrl: 'https://cdn.27.ua/799/66/39/6841913_1.jpeg',
    title: 'Smartphone',
    price: 8000,
    description: 'Equipped with a triple camera and a multi-core processor.',
  },
  {
    id: 4,
    imgUrl: 'https://cdn.27.ua/799/b6/16/4371990_1.jpeg',
    title: 'Tablet',
    price: 12000,
    description: '10-inch tablet with high performance and a Retina display.',
  },
];

const refs = {
  productsList: document.querySelector('.js-products'),
};

const createProductCardTemplate = product => {
  return `
  <li class="product-card js-product-card" data-id="${product.id}">
    <img src="${product.imgUrl}" alt="${product.title}" class="product-card-img" />
    <div class="product-card-text-content">
      <h2 class="product-card-title">${product.title}</h2>
      <p class="product-card-price">Price: ${product.price} uah.</p>
    </div>
  </li>
  `;
};

const productCardsTemplate = products.map(product => createProductCardTemplate(product)).join('');

refs.productsList.innerHTML = productCardsTemplate;

const onProductCardClick = event => {
  if (event.target === event.currentTarget) {
    return;
  }

  const currentCard = event.target.closest('.js-product-card');

  const productId = Number(currentCard.dataset.id);

  const productInfo = products.find(product => product.id === productId);

  const modalInstance = basicLightbox.create(`
      <img class="product-modal-img" src="${productInfo.imgUrl}" alt="${productInfo.title}" />
      <div class="product-modal-text-content">
        <h2 class="product-modal-title">${productInfo.title}</h2>
        <p class="product-modal-price">Price: ${productInfo.price} uah.</p>
        <p class="product-modal-desc">${productInfo.description}</p>
      </div>
    `);

  modalInstance.show();
};

refs.productsList.addEventListener('click', onProductCardClick);
