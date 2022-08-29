const creatHeader = (body) => {
  const header = document.createElement('header');
  const link = document.createElement('a');
  const headingTxt = document.createTextNode('My Work');

  body.appendChild(header);
  header.appendChild(link);
  link.href = 'https://google.com';
  link.target = '_blank';
  link.id = 'headerLink'
  link.dataset.page = 'top';
  link.appendChild(headingTxt);

  header.style.cssText = `
  margin: 0 auto;
  padding: 6rem 2rem;
  max-width: 900px;
  font-size: 28px;
  `;

  link.style.cssText = `
  color: #24292e;
  text-decoration: none;
  `;

  link.addEventListener('mouseover', () => {
    link.style.cssText = `
    color: #f00;
    text-decoration: none;
    `;
  });

  link.addEventListener('mouseleave', () => {
    link.style.cssText = `
    color: #24292e;
    text-decoration: none;
    `;
  });
}

window.addEventListener('load', () => {
  const body = document.querySelector('body');
  creatHeader(body);
})
