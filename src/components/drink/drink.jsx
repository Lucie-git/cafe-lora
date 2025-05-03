import { Layer } from '../layer/layer';
import './drink.css';

export const Drink = ({ id, name, ordered, img, layers }) => {
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={`http://localhost:4000${img}`} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layers.map((layer) => {
            return <Layer key={id} color={layer.color} label={layer.label} />;
          })}
        </div>
      </div>
      <form className="drink__controls" data-id={id}>
        <input type="hidden" className="order-id" value="1" />
        <button className={ordered ? 'order-btn order-btn--ordered' : 'order-btn'}>
          {ordered ? 'zrušit' : 'objednat'}
        </button>
      </form>
    </div>
  );
};
