import { navItems } from "../data";

export default function Navbar({ menuOpen, setMenuOpen, scrollTo }) {
  return (
    <>
      <nav className="nav">
        <span className="nav-logo">Essência Plena</span>
        <button
          className={`nav-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span /><span /><span />
        </button>
      </nav>

      {menuOpen && (
        <>
          <div className="menu-overlay" onClick={() => setMenuOpen(false)} />
          <div className="menu-drawer">
            <p className="menu-drawer-logo">Navegue por aqui</p>
            <div className="menu-drawer-nav">
              {navItems.map(item => (
                <button key={item.id} className="menu-nav-item" onClick={() => scrollTo(item.id)}>
                  <span className="menu-nav-tag">{item.tag}</span>
                  <span className="menu-nav-label">{item.label}</span>
                </button>
              ))}
            </div>
            <div className="menu-drawer-footer">
              <p className="menu-drawer-footer-text">Alimentando o espírito, o corpo e a mente</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
