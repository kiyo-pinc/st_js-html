const productList = [
  {
    product: 'Croissant',
    img: 'img-croissant.png',
    price: 2,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
    count: 0,
  },
  {
    product: 'Rice Flour Bread',
    img: 'img-rice_flour_bread.png',
    price: 5,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
    count: 0,
  },
  {
    product: 'Rye Bread',
    img: 'img-rye_bread.png',
    price: 3,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
    count: 0,
  },
];

const createHeader = (app) => {
  const
    header = document.createElement('header'),
    headerWrapper = document.createElement('div'),
    logoArea = document.createElement('div'),
    cartArea = document.createElement('div'),
    logoImg = document.createElement('img'),
    cartImg = document.createElement('img'),
    logoLink = document.createElement('a');

  header.style.padding = '1rem 0';
  header.style.boxSizing = 'border-box';
  header.style.backgroundColor = '#6666664D';
  header.style.position = 'fixed';
  header.style.top = '0';
  header.style.left = '0';
  header.style.width = '100%';
  header.style.zIndex = '9999';

  headerWrapper.style.width = '100%';
  headerWrapper.style.maxWidth = '1300px';
  headerWrapper.style.margin = '0 auto';
  headerWrapper.style.display = 'flex';
  headerWrapper.style.alignItems = 'center';
  headerWrapper.style.justifyContent = 'space-between';

  logoImg.src = 'https://withered-forest-9708.spearly.app/img/logo-bakery.svg';
  logoImg.style.display = 'block';
  logoImg.style.width = '76px';
  logoLink.href = '/';

  logoLink.appendChild(logoImg);
  logoArea.appendChild(logoLink);

  cartArea.style.justifyContent = 'end';
  cartImg.src = 'https://withered-forest-9708.spearly.app/img/icon-cart.svg';
  cartImg.style.display = 'block';
  cartImg.style.width = '36px';
  cartImg.style.cursor = 'pointer';
  cartImg.id = 'cartBtn';

  cartArea.addEventListener('click', () => {
    const getCartModal = document.getElementById('cartModal');

    if (getCartModal) {
      getCartModal.remove();
    } else {
      cartModal(app);
    }
  });

  cartArea.appendChild(cartImg);

  headerWrapper.appendChild(logoArea);
  headerWrapper.appendChild(cartArea);
  header.appendChild(headerWrapper);
  app.appendChild(header);
}

const createHero = (app) => {
  const
    section = document.createElement('section'),
    heroImg = document.createElement('img');
  heroImg.src = 'https://withered-forest-9708.spearly.app/img/img-hero.jpg'
  heroImg.alt = 'hero';
  heroImg.style.width = '100%';
  heroImg.style.display = 'block';

  section.appendChild(heroImg);
  app.appendChild(section);
}

const createOurProducts = (app) => {
  const
    section = document.createElement('section'),
    hedding = document.createElement('h2'),
    heddingText = document.createTextNode('Our products'),
    read = document.createElement('p'),
    readText = document.createTextNode('Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy tincidunt ut laoreet dolore magna aliquam erat volutpat.');

  read.style.fontSize = '24px';
  read.style.width = '100%';
  read.style.maxWidth = '800px';
  read.style.margin = '0 auto 80px';
  read.appendChild(readText);

  hedding.style.fontSize = '24px';
  hedding.style.fontWeight = 'bold';
  hedding.style.marginBottom = '10px';

  hedding.appendChild(heddingText);

  section.style.width = '100%';
  section.style.maxWidth = '1300px';
  section.style.margin = '0 auto';
  section.style.textAlign = 'center';
  section.style.paddingTop = '40px';
  section.style.paddingBottom = '80px';

  section.appendChild(hedding);
  section.appendChild(read);
  app.appendChild(section);
}

const createProducts = (app) => {
  const section = document.createElement('section');
  const wrapper = document.createElement('div');

  const productsRender = () => {
    for (let i = 0; i < productList.length; i++) {
      const
        productBox = document.createElement('div'),
        productTitle = document.createElement('h3'),
        productImg = document.createElement('img'),
        productPrice = document.createElement('div'),
        currency = document.createTextNode('USD '),
        productDescription = document.createElement('p'),
        addCartBtn = document.createElement('button');

      addCartBtn.addEventListener('click', (ev) => {
        addItemModal(app, productList[i], removeOrAdd(ev));
      });

      productBox.style.width = 'calc(100% / 3)';
      productImg.style.width = '100%';
      productImg.style.display = 'block';
      productImg.style.padding = '0 3rem';
      productImg.style.boxSizing = 'border-box';
      productImg.style.marginBottom = '40px';
      productTitle.style.fontSize = '16px';
      productTitle.style.fontWeight = 'bold';
      productTitle.style.marginBottom = '4px';
      productPrice.style.marginBottom = '4px';
      productDescription.style.margin = '0 auto 1rem';
      productDescription.style.width = '250px';

      productTitle.innerText = productList[i].product;
      productImg.src = `https://withered-forest-9708.spearly.app/img/${productList[i].img}`;
      productPrice.appendChild(currency);
      productPrice.appendChild(document.createTextNode(productList[i].price));
      productDescription.innerText = productList[i].description;
      addCartBtn.innerText = 'add cart';
      addCartBtn.style.appearance = 'none';
      addCartBtn.style.border = 'none';
      addCartBtn.style.borderRadius = '100px';
      addCartBtn.style.color = '#fff';
      addCartBtn.style.backgroundColor = '#000';
      addCartBtn.style.padding = '.5rem 1rem';

      productBox.appendChild(productImg);
      productBox.appendChild(productTitle);
      productBox.appendChild(productPrice);
      productBox.appendChild(productDescription);
      productBox.appendChild(addCartBtn);

      wrapper.appendChild(productBox);
    }
    return;
  };
  productsRender();

  wrapper.style.display = 'flex';
  wrapper.style.flexWrap = 'wrap';

  section.style.width = '100%';
  section.style.maxWidth = '1300px';
  section.style.margin = '0 auto';
  section.style.textAlign = 'center';
  section.style.paddingTop = '40px';
  section.style.paddingBottom = '130px';
  section.appendChild(wrapper);

  app.appendChild(section);
}

const createFooter = (app) => {
  const
    footer = document.createElement('footer'),
    logoLink = document.createElement('a'),
    footerLogo = document.createElement('img');

  footer.style.padding = '100px 0';
  footer.style.display = 'flex';
  footer.style.alignItems = 'center';
  footer.style.justifyContent = 'center';
  footer.style.backgroundColor = '#000';

  logoLink.href = '/';

  footerLogo.src = 'https://withered-forest-9708.spearly.app/img/logo-bakery.svg';
  footerLogo.style.width = '76px';

  logoLink.appendChild(footerLogo);
  footer.appendChild(logoLink);
  app.appendChild(footer);
}

const addItemModal = (app, item, boolean) => {
  const
    modalBody = document.createElement('div'),
    modalMainArea = document.createElement('div'),
    modalHeddingTextArea = document.createElement('h3'),
    modalHeddingText = boolean ? 'Remove from cart' : 'add this item to your cart?',
    modalHeddingTextNode = document.createTextNode(modalHeddingText),
    addItemDataArea = document.createElement('div'),
    dataProductArea = document.createElement('p'),
    dataPriceArea = document.createElement('p'),
    dataCountArea = document.createElement('p'),
    countBtnArea = document.createElement('div'),
    addBtn = document.createElement('button'),
    removeBtn = document.createElement('button'),
    footerBtnArea = document.createElement('div'),
    cancelBtn = document.createElement('button'),
    confirmBtn = document.createElement('button'),
    closeBtn = document.createElement('button'),
    baseItemCount = item.count;

  const removeModal = () => {
    modalBody.remove();
  };

  closeBtn.addEventListener('click', () => {
    item.count = baseItemCount;
    removeModal();
  });
  cancelBtn.addEventListener('click', () => {
    item.count = baseItemCount;
    removeModal();
  });
  confirmBtn.addEventListener('click', () => {
    removeModal();
  });

  addBtn.addEventListener('click', () => {
    const nowCount = item.count;
    item.count = nowCount + 1;
    dataCountArea.innerText = `count: ${item.count}`;
  });
  removeBtn.addEventListener('click', () => {
    const nowCount = item.count;
    if (nowCount === 0) return;
    item.count = nowCount - 1;
    dataCountArea.innerText = `count: ${item.count}`;
  });

  closeBtn.innerText = 'x';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '.75rem';
  closeBtn.style.right = '.75rem';
  closeBtn.style.appearance = 'none';
  closeBtn.style.border = 'none';
  closeBtn.style.borderRadius = '2px';
  closeBtn.style.padding = '.15rem .5rem';
  closeBtn.style.backgroundColor = 'rgba(0, 0, 0, .6)';
  closeBtn.style.color = 'white';
  closeBtn.style.fontSize = '14px';

  addBtn.innerText = "+";
  removeBtn.innerText = "-";

  addBtn.style.appearance = 'none';
  addBtn.style.border = 'none';
  addBtn.style.borderRadius = '100px';
  addBtn.style.padding = '.25rem 1rem';
  addBtn.style.backgroundColor = 'rgba(0, 0, 0, .2)';
  addBtn.style.boxShadow = '0 4px 4px 0 rgba(0, 0, 0, .2)';
  addBtn.style.marginLeft = '1rem';
  addBtn.style.fontSize = '14px';
  removeBtn.style.appearance = 'none';
  removeBtn.style.border = 'none';
  removeBtn.style.borderRadius = '100px';
  removeBtn.style.padding = '.25rem 1rem';
  removeBtn.style.backgroundColor = 'rgba(0, 0, 0, .2)';
  removeBtn.style.boxShadow = '0 4px 4px 0 rgba(0, 0, 0, .2)';
  removeBtn.style.fontSize = '14px';
  countBtnArea.style.marginBottom = '2rem'

  cancelBtn.innerText = 'cancel';
  confirmBtn.innerText = 'confirm';
  cancelBtn.style.appearance = 'none';
  cancelBtn.style.border = 'none';
  cancelBtn.style.borderRadius = '100px';
  cancelBtn.style.padding = '.25rem 1rem';
  cancelBtn.style.backgroundColor = 'rgba(0, 0, 0, .2)';
  cancelBtn.style.boxShadow = '0 4px 4px 0 rgba(0, 0, 0, .2)';
  cancelBtn.style.fontSize = '14px';
  confirmBtn.style.appearance = 'none';
  confirmBtn.style.border = 'none';
  confirmBtn.style.borderRadius = '100px';
  confirmBtn.style.padding = '.25rem 1rem';
  confirmBtn.style.backgroundColor = 'rgba(0, 0, 0, .6)';
  confirmBtn.style.boxShadow = '0 4px 4px 0 rgba(0, 0, 0, .2)';
  confirmBtn.style.color = 'white';
  confirmBtn.style.marginLeft = '1rem';
  confirmBtn.style.fontSize = '14px';
  confirmBtn.classList = 'confirmBtn';
  footerBtnArea.style.fontFamily = 'roboto';
  footerBtnArea.style.textAlign = 'center';

  dataProductArea.innerText = `product: ${item.product}`;
  dataPriceArea.innerText = `price: USD ${item.price}`;
  dataCountArea.innerText = `count: ${item.count}`;
  dataProductArea.style.marginBottom = '0';
  dataPriceArea.style.marginBottom = '0';
  dataCountArea.style.marginBottom = '0';
  addItemDataArea.style.marginBottom = '1rem';

  modalHeddingTextArea.style.fontSize = '20px';
  modalHeddingTextArea.style.fontWeight = '400';
  modalHeddingTextArea.style.marginBottom = '.75rem';
  modalHeddingTextArea.style.paddingBottom = '1rem';
  modalHeddingTextArea.style.borderBottom = '1px solid rgba(0, 0, 0, .6)';

  modalMainArea.style.position = 'absolute';
  modalMainArea.style.top = '50%';
  modalMainArea.style.left = '50%';
  modalMainArea.style.transform = 'translate(-50%, -50%)';
  modalMainArea.style.width = 'calc(100% - 2rem)';
  modalMainArea.style.height = 'calc(100% - 2rem)';
  modalMainArea.style.maxWidth = '340px';
  modalMainArea.style.maxHeight = '400px';
  modalMainArea.style.padding = '20px 30px';
  modalMainArea.style.backgroundColor = 'white';
  modalMainArea.style.display = 'flex';
  modalMainArea.style.flexDirection = 'column';
  modalMainArea.style.justifyContent = 'center';
  modalMainArea.style.borderRadius = '4px';

  modalBody.style.width = '100%';
  modalBody.style.height = '100%';
  modalBody.style.position = 'fixed';
  modalBody.style.top = '0';
  modalBody.style.left = '0';
  modalBody.style.backgroundColor = 'rgba(0, 0, 0, .7)';

  countBtnArea.appendChild(removeBtn);
  countBtnArea.appendChild(addBtn);
  footerBtnArea.appendChild(cancelBtn);
  footerBtnArea.appendChild(confirmBtn);
  addItemDataArea.appendChild(dataProductArea);
  addItemDataArea.appendChild(dataPriceArea);
  addItemDataArea.appendChild(dataCountArea);
  modalHeddingTextArea.appendChild(modalHeddingTextNode);
  modalMainArea.appendChild(modalHeddingTextArea);
  modalMainArea.appendChild(addItemDataArea);
  modalMainArea.appendChild(countBtnArea);
  modalMainArea.appendChild(footerBtnArea);
  modalMainArea.appendChild(closeBtn);
  modalBody.appendChild(modalMainArea);
  app.appendChild(modalBody);
}

const cartModal = (app) => {
  const
    section = document.createElement('section'),
    wrapper = document.createElement('div'),
    productContainer = document.createElement('div'),
    totalAmountArea = document.createElement('div'),
    ConfirmPurchaseArea = document.createElement('div'),
    ConfirmPurchaseBtn = document.createElement('button'),
    ConfirmPurchaseText = document.createTextNode('Confirm purchase'),
    notSelectedText = document.createElement('p');

    notSelectedText.innerText = 'No products have been selected.';

  const totalAmount = () => {
    let sum = 0;
    for (let i = 0; i < productList.length; i++) {
      sum += productList[i].price * productList[i].count;
    }
    return sum;
  }

  ConfirmPurchaseBtn.addEventListener('click', () => {
    purchaseModal(app)
  })

  document.addEventListener('click', (ev) => {
    if (ev.target.className === 'confirmBtn') {
      const removeItem = document.querySelectorAll('.productBox');
      totalAmountArea.innerText = `My cart [ Total Amount : ${totalAmount()} ]`;

      for (let i = 0; i < removeItem.length; i++) {
        removeItem[i].remove();
      }
      productsRender();
    }
  })

  totalAmountArea.innerText = `My cart [ Total Amount : ${totalAmount()} ]`;
  totalAmountArea.style.width = '100%';
  totalAmountArea.style.fontSize = '24px';
  totalAmountArea.style.fontWeight = '700';
  totalAmountArea.style.textAlign = 'center';
  totalAmountArea.style.alignSelf = 'flex-end';
  totalAmountArea.style.marginBottom = '50px';
  wrapper.appendChild(totalAmountArea);

  const productsRender = () => {
    for (let i = 0; i < productList.length; i++) {
      const
        productBox = document.createElement('div'),
        productTitle = document.createElement('h3'),
        productImg = document.createElement('img'),
        productPrice = document.createElement('div'),
        currency = document.createTextNode('USD '),
        productDescription = document.createElement('p'),
        count = document.createElement('p'),
        removeCartBtn = document.createElement('button');

      if (productList[i].count === 0) continue;

      removeCartBtn.addEventListener('click', (ev) => {
        addItemModal(app, productList[i], removeOrAdd(ev));
      });

      productBox.className = 'productBox';
      productBox.style.width = 'calc(100% / 3)';
      productImg.style.width = '100%';
      productImg.style.display = 'block';
      productImg.style.padding = '0 3rem';
      productImg.style.boxSizing = 'border-box';
      productImg.style.marginBottom = '40px';
      productImg.style.alignSelf = 'flex-start';
      productTitle.style.fontSize = '16px';
      productTitle.style.fontWeight = 'bold';
      productTitle.style.marginBottom = '4px';
      productPrice.style.marginBottom = '4px';
      productDescription.style.margin = '0 auto .25rem';
      productDescription.style.width = '250px';
      productDescription.style.color = 'rgba(0, 0, 0, .5)';

      productTitle.innerText = productList[i].product;
      productImg.src = `https://withered-forest-9708.spearly.app/img/${productList[i].img}`;
      productPrice.appendChild(currency);
      productPrice.appendChild(document.createTextNode(productList[i].price));
      productDescription.innerText = productList[i].description;
      count.innerText = `count: ${productList[i].count}`;
      removeCartBtn.innerText = 'remove';
      removeCartBtn.style.appearance = 'none';
      removeCartBtn.style.border = '2px solid #000';
      removeCartBtn.style.borderRadius = '100px';
      removeCartBtn.style.color = '#000';
      removeCartBtn.style.backgroundColor = '#fff';
      removeCartBtn.style.padding = '.5rem 1rem';
      removeCartBtn.className = 'removeBtn';

      productBox.appendChild(productImg);
      productBox.appendChild(productTitle);
      productBox.appendChild(productPrice);
      productBox.appendChild(productDescription);
      productBox.appendChild(count);
      productBox.appendChild(removeCartBtn);

      productContainer.appendChild(productBox);
    }
    return;
  };

  let itemCountSum = 0;
  for (let i = 0; i < productList.length; i++ ){
    itemCountSum += productList[i].count;
  }

  if (itemCountSum !== 0) {
    productsRender();
  }

  productContainer.id = 'productContainer';
  productContainer.style.display = 'flex';
  productContainer.style.flexWrap = 'wrap';
  productContainer.style.alignItems = 'self-start;';
  productContainer.style.justifyContent = 'center';
  productContainer.style.margin = '0 auto 4rem';
  productContainer.style.width = '100%';

  wrapper.style.maxWidth = '1300px';
  wrapper.style.height = '100%';
  wrapper.style.margin = '0 auto';
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.alignItems = 'center';
  wrapper.style.justifyContent = 'center';
  wrapper.appendChild(productContainer);

  ConfirmPurchaseBtn.style.appearance = 'none';
  ConfirmPurchaseBtn.style.border = '2px solid #000';
  ConfirmPurchaseBtn.style.borderRadius = '100px';
  ConfirmPurchaseBtn.style.color = '#000';
  ConfirmPurchaseBtn.style.backgroundColor = '#fff';
  ConfirmPurchaseBtn.style.padding = '.5rem 1rem';
  ConfirmPurchaseBtn.appendChild(ConfirmPurchaseText)
  ConfirmPurchaseArea.appendChild(ConfirmPurchaseBtn)
  if (itemCountSum !== 0) {
    wrapper.appendChild(ConfirmPurchaseArea);
  } else {
    wrapper.appendChild(notSelectedText);
  }

  section.style.position = 'fixed';
  section.style.top = '0';
  section.style.left = '0';
  section.style.width = '100%';
  section.style.height = '100%';
  section.style.textAlign = 'center';
  section.style.backgroundColor = '#E5E5E5';
  section.id = 'cartModal';
  section.appendChild(wrapper);

  app.appendChild(section);
}

const purchaseModal = (app) => {
  const
    modalBody = document.createElement('div'),
    modalMainArea = document.createElement('div'),
    modalHeddingTextArea = document.createElement('h3'),
    modalHeddingText = 'Confirm purchase?',
    modalHeddingTextNode = document.createTextNode(modalHeddingText),
    addItemDataArea = document.createElement('div'),
    dataProductArea = document.createElement('p'),
    dataPriceArea = document.createElement('p'),
    dataCountArea = document.createElement('p'),
    countBtnArea = document.createElement('div'),
    footerBtnArea = document.createElement('div'),
    cancelBtn = document.createElement('button'),
    confirmBtn = document.createElement('button'),
    closeBtn = document.createElement('button');

  const removeModal = () => {
    modalBody.remove();
  };

  closeBtn.addEventListener('click', removeModal);
  cancelBtn.addEventListener('click', removeModal);
  confirmBtn.addEventListener('click', removeModal);

  closeBtn.innerText = 'x';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '.75rem';
  closeBtn.style.right = '.75rem';
  closeBtn.style.appearance = 'none';
  closeBtn.style.border = 'none';
  closeBtn.style.borderRadius = '2px';
  closeBtn.style.padding = '.15rem .5rem';
  closeBtn.style.backgroundColor = 'rgba(0, 0, 0, .6)';
  closeBtn.style.color = 'white';
  closeBtn.style.fontSize = '14px';

  cancelBtn.innerText = 'cancel';
  confirmBtn.innerText = 'confirm';
  cancelBtn.style.appearance = 'none';
  cancelBtn.style.border = 'none';
  cancelBtn.style.borderRadius = '100px';
  cancelBtn.style.padding = '.25rem 1rem';
  cancelBtn.style.backgroundColor = 'rgba(0, 0, 0, .2)';
  cancelBtn.style.boxShadow = '0 4px 4px 0 rgba(0, 0, 0, .2)';
  cancelBtn.style.fontSize = '14px';
  confirmBtn.style.appearance = 'none';
  confirmBtn.style.border = 'none';
  confirmBtn.style.borderRadius = '100px';
  confirmBtn.style.padding = '.25rem 1rem';
  confirmBtn.style.backgroundColor = 'rgba(0, 0, 0, .6)';
  confirmBtn.style.boxShadow = '0 4px 4px 0 rgba(0, 0, 0, .2)';
  confirmBtn.style.color = 'white';
  confirmBtn.style.marginLeft = '1rem';
  confirmBtn.style.fontSize = '14px';
  confirmBtn.classList = 'confirmBtn';
  footerBtnArea.style.fontFamily = 'roboto';
  footerBtnArea.style.textAlign = 'center';

  dataProductArea.style.marginBottom = '0';
  dataPriceArea.style.marginBottom = '0';
  dataCountArea.style.marginBottom = '0';
  addItemDataArea.style.marginBottom = '1rem';

  modalHeddingTextArea.style.fontSize = '20px';
  modalHeddingTextArea.style.fontWeight = '400';
  modalHeddingTextArea.style.marginBottom = '.75rem';
  modalHeddingTextArea.style.textAlign = 'center';

  modalMainArea.style.position = 'absolute';
  modalMainArea.style.top = '50%';
  modalMainArea.style.left = '50%';
  modalMainArea.style.transform = 'translate(-50%, -50%)';
  modalMainArea.style.width = 'calc(100% - 2rem)';
  modalMainArea.style.height = 'calc(100% - 2rem)';
  modalMainArea.style.maxWidth = '340px';
  modalMainArea.style.maxHeight = '200px';
  modalMainArea.style.padding = '20px 30px';
  modalMainArea.style.backgroundColor = 'white';
  modalMainArea.style.display = 'flex';
  modalMainArea.style.flexDirection = 'column';
  modalMainArea.style.justifyContent = 'center';
  modalMainArea.style.borderRadius = '4px';

  modalBody.style.width = '100%';
  modalBody.style.height = '100%';
  modalBody.style.position = 'fixed';
  modalBody.style.top = '0';
  modalBody.style.left = '0';
  modalBody.style.backgroundColor = 'rgba(0, 0, 0, .7)';

  footerBtnArea.appendChild(cancelBtn);
  footerBtnArea.appendChild(confirmBtn);
  modalHeddingTextArea.appendChild(modalHeddingTextNode);
  modalMainArea.appendChild(modalHeddingTextArea);
  modalMainArea.appendChild(addItemDataArea);
  modalMainArea.appendChild(countBtnArea);
  modalMainArea.appendChild(footerBtnArea);
  modalMainArea.appendChild(closeBtn);
  modalBody.appendChild(modalMainArea);
  app.appendChild(modalBody);
}

const removeOrAdd = (ev) => {
  if (ev.target.className == 'removeBtn') {
    return true // remove
  } else {
    return false //add
  }
}

window.addEventListener('load', () => {
  const app = document.querySelector('#app');
  app.style.fontFamily = 'Inter';
  app.style.boxSizing = 'border-box';
  createHeader(app);
  createHero(app);
  createOurProducts(app);
  createProducts(app);
  createFooter(app);
})