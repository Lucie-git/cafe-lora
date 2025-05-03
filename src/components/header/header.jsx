import './header.css';

export const Header = ({ showMenu }) => {
  if (showMenu === true) {
    return (
      <header>
        <div className="header__content container">
          <div className="site-logo"></div>
          <div className="navigation">
            <button className="nav-btn"></button>
            <nav className="rollout-nav nav-closed">
              <a href="#home">domů</a>
              <a href="#menu">menu</a>
              <a href="#gallery">galerie</a>
              <a href="#contact">kontakt</a>
            </nav>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header>
        <div className="header__content container">
          <div className="site-logo"></div>
          <div className="navigation">
            <button className="nav-btn"></button>
            <nav className="rollout-nav nav-closed">
              <a href="/">Hlavní stránka</a>
            </nav>
          </div>
        </div>
      </header>
    );
  }
};

// Do komponenty Header tedy přidejte prop s názvem showMenu. Pokud bude showMenu mít hodnotu true, komponenta Header zobrazí celé menu, jako doposud. Pokud bude false, zobrazí hlavičku pouze s odkazem na hlavní stránku, jak je navrženo v zadání projektu v souboru order.jsx.
