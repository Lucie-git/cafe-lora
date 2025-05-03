import { Drink } from '../drink/drink';
import { Layer } from '../layer/layer';
import './menu.css';

export const Menu = ({ drinks }) => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">
          {drinks.map((drink) => {
            return (
              <Drink key={drink.id} name={drink.name} layers={drink.layers} img={drink.image} />
            );
          })}
        </div>
        <div className="order-detail">
          <a href="/order.html">Detail objednávky</a>
        </div>
      </div>
    </section>
  );
};
