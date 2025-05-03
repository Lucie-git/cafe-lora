import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/header/header';
import { Banner } from '../components/banner/banner';
import { Menu } from '../components/menu/menu';
import { Gallery } from '../components/gallery/gallery';
import { Contact } from '../components/contact/contact';
import { Footer } from '../components/footer/footer';

const response = await fetch('http://localhost:4000/api/drinks');
const json = await response.json();
const drinks = json.data;

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header showMenu={true} />
    <main>
      <Banner />
      <Menu drinks={drinks} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

//mobile menu toggle
// nav-btn
// rolout-nav

const formsElm = document.querySelectorAll('.drink__controls');
formsElm.forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const drinkId = drinks.find((drink) => drink.id === Number(form.dataset.id));
    await fetch(`http://localhost:4000/api/drinks/${form.dataset.id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PATCH',
      body: JSON.stringify([{ op: 'replace', path: '/ordered', value: !drinkId.ordered }]),
    });
    window.location.reload();
  });
});
