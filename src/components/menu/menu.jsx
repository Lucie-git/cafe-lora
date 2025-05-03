import { Drink } from '../drink/drink';
import './menu.css';

export const Menu = () => {
  return (
    <section className="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">
          <Drink name="kafíčko1" img="/cups/doppio.png" />
          <Drink name="kafíčko2" img="/cups/doppio.png" />
          <Drink name="kafíčko3" img="/cups/doppio.png" />
        </div>
        <div className="order-detail">
          <a href="/order.html">Detail objednávky</a>
        </div>
      </div>
    </section>
  );
};
