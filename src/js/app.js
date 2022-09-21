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
  header.style.backgroundColor = '#6666664D';
  header.style.position = 'fixed';
  header.style.top = '0';
  header.style.left = '0';
  header.style.width = '100%';

  headerWrapper.style.width = '100%';
  headerWrapper.style.maxWidth = '1300px';
  headerWrapper.style.margin = '0 auto';
  headerWrapper.style.display = 'flex';
  headerWrapper.style.alignItems = 'center';
  headerWrapper.style.justifyContent = 'space-between';

  logoImg.src = '../img/logo-bakery.svg';
  logoImg.style.display = 'block';
  logoImg.style.width = '76px';
  logoLink.href = '/';

  logoLink.appendChild(logoImg);
  logoArea.appendChild(logoLink);

  cartArea.style.justifyContent = 'end';
  cartImg.src = '../img/icon-cart.svg';
  cartImg.style.display = 'block';
  cartImg.style.width = '36px';
  cartImg.style.cursor = 'pointer';
  cartImg.id = 'cartBtn';

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
  heroImg.src = '../img/img-hero.jpg'
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

      productBox.style.width = 'calc(100% / 3)';
      productImg.style.width = '100%';
      productImg.style.display = 'block';
      productImg.style.padding = '0 3rem';
      productImg.style.marginBottom = '40px';
      productTitle.style.fontSize = '16px';
      productTitle.style.fontWeight = 'bold';
      productTitle.style.marginBottom = '4px';
      productPrice.style.marginBottom = '4px';
      productDescription.style.margin = '0 auto 1rem';
      productDescription.style.width = '250px';

      productTitle.innerText = productList[i].product;
      productImg.src = `../img/${productList[i].img}`;
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

  footerLogo.src = '../img/logo-bakery.svg';
  footerLogo.style.width = '76px';

  logoLink.appendChild(footerLogo);
  footer.appendChild(logoLink);
  app.appendChild(footer);
}

const addModal = (app) => {
  const
    modalBody = document.createElement('div'),
    modalMainArea = document.createElement('div'),
    modalHeddingTextArea = document.createElement('h3'),
    modalHeddingText = document.createTextNode('add this item to your cart?');

  modalHeddingTextArea.style.fontSize = '20px';
  modalHeddingTextArea.style.fontWeight = '400';
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

  modalBody.style.width = '100%';
  modalBody.style.height = '100%';
  modalBody.style.position = 'fixed';
  modalBody.style.top = '0';
  modalBody.style.left = '0';
  modalBody.style.backgroundColor = 'rgba(0, 0, 0, .7)';

  modalHeddingTextArea.appendChild(modalHeddingText);
  modalMainArea.appendChild(modalHeddingTextArea);
  modalBody.appendChild(modalMainArea);
  app.appendChild(modalBody);
}

window.addEventListener('load', () => {
  const app = document.querySelector('#app');
  app.style.fontFamily = 'Inter';
  createHeader(app);
  createHero(app);
  createOurProducts(app);
  createProducts(app);
  createFooter(app);
  addModal(app);
})
