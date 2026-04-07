const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --cream: #FAF7F2; --white: #FEFEFE; --nude: #E8DDD0; --nude-dark: #D4C4B0;
    --brown-light: #B89880; --brown: #8C6B52; --brown-deep: #5C4033;
    --text-body: #6B5344; --text-light: #9E8070; --shadow: rgba(92,64,51,0.07);
  }
  html { scroll-behavior: smooth; }
  body { font-family: 'Jost', sans-serif; background: var(--cream); color: var(--text-body); font-weight: 300; -webkit-font-smoothing: antialiased; }
  .display { font-family: 'Cormorant Garamond', serif; }

  .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 18px 32px; display: flex; justify-content: center; align-items: center; background: rgba(250,247,242,0.85); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(184,152,128,0.15); transition: all 0.3s; }
  .nav-logo { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; font-weight: 400; letter-spacing: 0.25em; color: var(--brown); text-transform: uppercase; }
  .nav-hamburger { position: absolute; right: 24px; top: 50%; transform: translateY(-50%); width: 40px; height: 40px; border: none; background: transparent; cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; padding: 4px; border-radius: 8px; transition: background 0.2s; }
  .nav-hamburger:hover { background: rgba(184,152,128,0.1); }
  .nav-hamburger span { display: block; width: 22px; height: 1.5px; background: var(--brown); border-radius: 2px; transition: all 0.35s cubic-bezier(0.22,1,0.36,1); transform-origin: center; }
  .nav-hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
  .nav-hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .nav-hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

  /* DRAWER MENU */
  .menu-overlay { position: fixed; inset: 0; z-index: 98; background: rgba(60,40,30,0.35); backdrop-filter: blur(2px); animation: fadeOverlay 0.25s ease; }
  .menu-drawer { position: fixed; top: 0; right: 0; bottom: 0; z-index: 99; width: min(320px, 85vw); background: var(--white); box-shadow: -8px 0 48px rgba(92,64,51,0.15); display: flex; flex-direction: column; padding: 80px 0 0; animation: slideDrawer 0.35s cubic-bezier(0.22,1,0.36,1); overflow: hidden; }
  .menu-drawer-nav { flex: 1; overflow-y: auto; padding-bottom: 16px; }
  @keyframes slideDrawer { from{ opacity:0; transform:translateX(32px) } to{ opacity:1; transform:translateX(0) } }
  .menu-drawer-logo { font-family: 'Cormorant Garamond', serif; font-size: 0.75rem; letter-spacing: 0.35em; text-transform: uppercase; color: var(--brown-light); padding: 0 36px 28px; border-bottom: 1px solid var(--nude); margin-bottom: 12px; }
  .menu-nav-item { display: flex; flex-direction: column; padding: 14px 36px; cursor: pointer; border: none; background: transparent; text-align: left; width: 100%; transition: background 0.2s; position: relative; }
  .menu-nav-item:hover { background: var(--cream); }
  .menu-nav-item:hover .menu-nav-label { color: var(--brown); }
  .menu-nav-item:hover::before { content:''; position:absolute; left:0; top:50%; transform:translateY(-50%); height:60%; width:2px; background:var(--brown-light); border-radius:2px; }
  .menu-nav-tag { font-size: 0.55rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--brown-light); margin-bottom: 3px; }
  .menu-nav-label { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; color: var(--brown-deep); line-height: 1.2; transition: color 0.2s; }
  .menu-drawer-footer { margin-top: auto; padding: 24px 36px 0; border-top: 1px solid var(--nude); }
  .menu-drawer-footer-text { font-size: 0.65rem; color: var(--text-light); letter-spacing: 0.15em; font-style: italic; font-family: 'Cormorant Garamond', serif; }

  .hero { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 120px 24px 80px; position: relative; overflow: hidden; }
  .hero-bg { position: absolute; inset: 0; z-index: 0; background: radial-gradient(ellipse 80% 60% at 50% 40%, #EDE0D3 0%, var(--cream) 70%); }
  .hero-ornament { position: absolute; z-index: 0; border-radius: 50%; background: rgba(184,152,128,0.08); }
  .hero-ornament-1 { width: 420px; height: 420px; top: -80px; right: -100px; }
  .hero-ornament-2 { width: 280px; height: 280px; bottom: 40px; left: -60px; }
  .hero-content { position: relative; z-index: 1; max-width: 600px; }
  .hero-badge { display: inline-block; font-size: 0.65rem; letter-spacing: 0.35em; text-transform: uppercase; color: var(--brown); border: 1px solid var(--nude-dark); padding: 6px 18px; border-radius: 40px; margin-bottom: 32px; }
  .hero-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(3.2rem, 10vw, 5.5rem); font-weight: 300; line-height: 1.05; color: var(--brown-deep); letter-spacing: 0.02em; margin-bottom: 20px; }
  .hero-title em { font-style: italic; color: var(--brown); }
  .hero-subtitle { font-size: 0.85rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--brown-light); line-height: 1.8; }
  .hero-divider { width: 40px; height: 1px; background: var(--brown-light); margin: 28px auto; opacity: 0.5; }
  .hero-desc { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; font-style: italic; color: var(--text-light); line-height: 1.7; }
  .scroll-hint { position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 8px; font-size: 0.6rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--brown-light); animation: float 2.5s ease-in-out infinite; }
  @keyframes float { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(6px)} }
  .scroll-line { width: 1px; height: 36px; background: linear-gradient(to bottom, var(--brown-light), transparent); }

  section { padding: 100px 24px; }
  .container { max-width: 860px; margin: 0 auto; }
  .container-wide { max-width: 1100px; margin: 0 auto; }
  .section-tag { font-size: 0.6rem; letter-spacing: 0.4em; text-transform: uppercase; color: var(--brown-light); margin-bottom: 16px; display: block; }
  .section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 6vw, 3rem); font-weight: 300; color: var(--brown-deep); line-height: 1.2; margin-bottom: 24px; }
  .section-body { font-size: 0.9rem; line-height: 1.95; color: var(--text-body); font-weight: 300; max-width: 580px; }

  .about { background: var(--white); }
  .about-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
  .about-quote { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.5rem, 4vw, 2.2rem); font-weight: 300; font-style: italic; color: var(--brown); line-height: 1.5; padding-left: 24px; border-left: 2px solid var(--nude-dark); }
  @media(max-width:720px){ .about-inner{ grid-template-columns:1fr; gap:40px; } }

  .pilares { background: var(--cream); }
  .pilar-header { display: flex; align-items: flex-start; gap: 20px; margin-bottom: 32px; }
  .pilar-number { font-family: 'Cormorant Garamond', serif; font-size: 4rem; font-weight: 300; color: var(--nude-dark); line-height: 1; flex-shrink: 0; }
  .pilar-card { background: var(--white); border-radius: 16px; padding: 48px 40px; margin-bottom: 24px; border: 1px solid rgba(184,152,128,0.12); box-shadow: 0 4px 32px var(--shadow); }
  .pilar-label { font-size: 0.6rem; letter-spacing: 0.4em; text-transform: uppercase; color: var(--brown-light); margin-bottom: 6px; }
  .pilar-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.6rem, 5vw, 2.3rem); font-weight: 400; color: var(--brown-deep); margin-bottom: 16px; }
  .pilar-body { font-size: 0.88rem; line-height: 1.9; color: var(--text-body); margin-bottom: 28px; }
  .salmo-tag { display: inline-flex; align-items: center; gap: 10px; background: var(--cream); border: 1px solid var(--nude-dark); border-radius: 40px; padding: 12px 24px; font-size: 1rem; color: var(--brown); font-style: italic; font-family: 'Cormorant Garamond', serif; margin-bottom: 40px; letter-spacing: 0.02em; }

  /* BOOK CARDS */
  .books-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 180px)); gap: 20px; justify-content: center; }
  @media(max-width:640px){ .books-grid{ grid-template-columns: repeat(3, 1fr); gap: 12px; } }
  .book-card { background: var(--white); border-radius: 10px; overflow: hidden; border: 1px solid rgba(184,152,128,0.15); transition: transform 0.3s, box-shadow 0.3s; cursor: pointer; }
  .book-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(92,64,51,0.1); }
  .book-cover-placeholder { width: 100%; aspect-ratio: 2/3; overflow: hidden; display: block; background: var(--nude); position: relative; }
  .book-cover-placeholder img { width: 100%; height: 100%; object-fit: cover; object-position: center center; display: block; transition: transform 0.5s cubic-bezier(0.22,1,0.36,1); }
  .book-card:hover .book-cover-placeholder img { transform: scale(1.03); }
  .book-info { padding: 12px 12px 14px; }
  .book-month { font-size: 0.6rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--brown-light); margin-bottom: 6px; display: flex; align-items: center; gap: 6px; }
  .book-title { font-family: 'Cormorant Garamond', serif; font-size: 1.05rem; font-weight: 500; color: var(--brown-deep); line-height: 1.3; }
  .book-click-hint { font-size: 0.58rem; color: var(--brown-light); letter-spacing: 0.15em; text-transform: uppercase; margin-top: 6px; opacity: 0.7; }

  .evento-card { background: var(--white); border-radius: 16px; padding: 48px 40px; margin-bottom: 24px; border: 1px solid rgba(184,152,128,0.12); box-shadow: 0 4px 32px var(--shadow); display: grid; grid-template-columns: auto 1fr; gap: 32px; align-items: start; }
  @media(max-width:540px){ .evento-card{ grid-template-columns:1fr; } .pilar-card{ padding:36px 24px; } }

  .info-pill { display: inline-flex; align-items: center; gap: 6px; background: var(--cream); border: 1px solid var(--nude); border-radius: 40px; padding: 5px 14px; font-size: 0.75rem; color: var(--text-body); margin-right: 8px; margin-bottom: 8px; }
  .info-pill-icon { font-size: 0.8rem; }

  .calendar { background: var(--white); }
  .cal-list { margin-top: 64px; display: flex; flex-direction: column; }
  .cal-entry { display: flex; align-items: baseline; gap: 28px; padding: 28px 0; border-bottom: 1px solid var(--nude); }
  .cal-entry:first-child { border-top: 1px solid var(--nude); }
  .cal-entry-month { font-family: 'Jost', sans-serif; font-size: 0.62rem; letter-spacing: 0.35em; text-transform: uppercase; color: var(--brown-light); min-width: 72px; flex-shrink: 0; }
  .cal-entry-body { flex: 1; }
  .cal-entry-title { font-family: 'Cormorant Garamond', serif; font-size: 1.35rem; font-weight: 400; color: var(--brown-deep); line-height: 1.2; margin-bottom: 4px; }
  .cal-entry-desc { font-size: 0.8rem; color: var(--text-light); line-height: 1.5; }
  .cal-entry-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; margin-bottom: 3px; }

  .encontros { background: var(--cream); }
  .encontros-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 52px; }
  @media(max-width:900px){ .encontros-grid{ grid-template-columns: repeat(2, 1fr); } }
  @media(max-width:480px){ .encontros-grid{ grid-template-columns: 1fr 1fr; gap: 12px; } }
  .encontro-card { background: var(--white); border-radius: 16px; overflow: hidden; border: 1px solid rgba(184,152,128,0.13); box-shadow: 0 2px 16px var(--shadow); transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s; cursor: default; }
  .encontro-card.special { cursor: pointer; }
  .encontro-card:hover { transform: translateY(-5px); box-shadow: 0 14px 40px rgba(92,64,51,0.11); }
  .encontro-img-wrap { overflow: hidden; width: 100%; aspect-ratio: 4/3; background: linear-gradient(145deg, var(--nude), var(--nude-dark)); display: flex; align-items: center; justify-content: center; }
  .encontro-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s cubic-bezier(0.22,1,0.36,1); }
  .encontro-card:hover .encontro-img { transform: scale(1.04); }
  .encontro-img-placeholder { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; color: rgba(255,255,255,0.5); font-style: italic; }
  .encontro-info { padding: 16px 16px 18px; }
  .encontro-edicao { font-size: 0.58rem; letter-spacing: 0.35em; text-transform: uppercase; color: var(--brown-light); margin-bottom: 6px; display: block; }
  .encontro-livro { font-family: 'Cormorant Garamond', serif; font-size: 0.95rem; font-weight: 500; color: var(--brown-deep); line-height: 1.3; margin-bottom: 3px; }
  .encontro-autor { font-size: 0.72rem; color: var(--text-light); font-style: italic; font-family: 'Cormorant Garamond', serif; }
  .encontro-special-badge { display: inline-flex; align-items: center; gap: 5px; font-size: 0.58rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--brown); background: var(--cream); border: 1px solid var(--nude-dark); border-radius: 20px; padding: 3px 10px; margin-top: 8px; }

  /* MODAL — shared */
  .modal-overlay { position: fixed; inset: 0; z-index: 1000; background: rgba(60,40,30,0.55); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; padding: 24px; animation: fadeOverlay 0.3s ease; }
  @keyframes fadeOverlay { from{ opacity:0 } to{ opacity:1 } }
  .modal-box { background: var(--white); border-radius: 20px; max-width: 560px; width: 100%; overflow: hidden; box-shadow: 0 24px 80px rgba(60,40,30,0.2); animation: slideModal 0.35s cubic-bezier(0.22,1,0.36,1); position: relative; max-height: 90vh; overflow-y: auto; }
  @keyframes slideModal { from{ opacity:0; transform:translateY(24px) } to{ opacity:1; transform:translateY(0) } }
  .modal-close { position: absolute; top: 16px; right: 16px; width: 32px; height: 32px; border-radius: 50%; border: 1px solid var(--nude-dark); background: var(--cream); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--brown); font-size: 1rem; transition: all 0.2s; z-index: 2; }
  .modal-close:hover { background: var(--nude); }
  .modal-img-wrap { width: 100%; aspect-ratio: 16/9; overflow: hidden; background: linear-gradient(145deg, var(--nude), var(--nude-dark)); display: flex; align-items: center; justify-content: center; }
  .modal-img { width: 100%; height: 100%; object-fit: cover; object-position: center top; display: block; }
  .modal-body { padding: 32px 36px 36px; }
  .modal-tag { font-size: 0.58rem; letter-spacing: 0.38em; text-transform: uppercase; color: var(--brown-light); margin-bottom: 10px; display: block; }
  .modal-title { font-family: 'Cormorant Garamond', serif; font-size: 1.6rem; font-weight: 400; color: var(--brown-deep); margin-bottom: 6px; line-height: 1.2; }
  .modal-author { font-family: 'Cormorant Garamond', serif; font-size: 0.95rem; font-style: italic; color: var(--brown-light); margin-bottom: 20px; }
  .modal-divider { width: 32px; height: 1px; background: var(--nude-dark); margin-bottom: 20px; }
  .modal-desc { font-size: 0.88rem; line-height: 1.85; color: var(--text-body); }
  .modal-presenter { display: flex; align-items: center; gap: 14px; margin-top: 24px; padding-top: 20px; border-top: 1px solid var(--nude); }
  .modal-presenter-avatar { width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, var(--nude), var(--brown-light)); overflow: hidden; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; color: white; }
  .modal-presenter-name { font-family: 'Cormorant Garamond', serif; font-size: 1rem; color: var(--brown-deep); margin-bottom: 2px; }
  .modal-presenter-role { font-size: 0.68rem; color: var(--text-light); letter-spacing: 0.1em; text-transform: uppercase; }

  /* BOOK MODAL extras */
  .modal-book-cover-wrap { width: 100%; aspect-ratio: 3/2; overflow: hidden; display: flex; align-items: center; justify-content: center; background: var(--cream); }
  .modal-book-cover { height: 100%; width: auto; max-width: 100%; object-fit: contain; display: block; padding: 24px; }
  .modal-info-row { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
  .modal-info-icon { width: 32px; height: 32px; border-radius: 50%; background: var(--cream); border: 1px solid var(--nude); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .modal-info-label { font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--brown-light); margin-bottom: 1px; }
  .modal-info-value { font-size: 0.88rem; color: var(--brown-deep); font-family: 'Cormorant Garamond', serif; }
  .modal-palette-section { margin-top: 24px; padding-top: 20px; border-top: 1px solid var(--nude); }
  .modal-palette-label { font-size: 0.6rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--brown-light); margin-bottom: 12px; display: block; }
  .modal-palette-dots { display: flex; align-items: center; gap: 10px; }
  .modal-palette-dot { width: 28px; height: 28px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.6); box-shadow: 0 2px 8px rgba(0,0,0,0.12); flex-shrink: 0; transition: transform 0.2s; cursor: default; }
  .modal-palette-dot:hover { transform: scale(1.2); }
  .modal-palette-hint { font-size: 0.75rem; color: var(--text-light); font-style: italic; font-family: 'Cormorant Garamond', serif; margin-left: 4px; }
  .park-modal-header { display: flex; flex-direction: column; align-items: center; text-align: center; padding-bottom: 4px; }
  .park-modal-icon { width: 56px; height: 56px; border-radius: 50%; background: var(--cream); border: 1px solid var(--nude-dark); display: flex; align-items: center; justify-content: center; margin-bottom: 12px; }
  .park-modal-outfit { background: var(--cream); border-radius: 10px; padding: 14px 16px; margin-bottom: 20px; }
  .park-outfit-item { font-size: 0.82rem; color: var(--text-body); line-height: 1.7; display: flex; gap: 8px; }
  .park-outfit-dot { color: var(--brown-light); flex-shrink: 0; }

  .book-highlight { background: var(--white); }
  .book-highlight-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
  @media(max-width:720px){ .book-highlight-inner{ grid-template-columns: 1fr; gap: 48px; } .book-highlight-img-side{ order: -1; max-width: 260px; margin: 0 auto; } }
  .book-highlight-img-wrap { border-radius: 16px; overflow: hidden; background: linear-gradient(145deg, var(--nude), var(--nude-dark)); aspect-ratio: 3/4; box-shadow: 0 20px 60px rgba(92,64,51,0.15); transition: transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s; }
  .book-highlight-img-wrap:hover { transform: translateY(-6px) rotate(0.5deg); box-shadow: 0 32px 80px rgba(92,64,51,0.2); }
  .book-highlight-img { width: 100%; height: 100%; object-fit: cover; object-position: center top; display: block; }
  .book-highlight-tag { font-size: 0.6rem; letter-spacing: 0.4em; text-transform: uppercase; color: var(--brown-light); margin-bottom: 16px; display: block; }
  .book-highlight-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem, 4vw, 2.5rem); font-weight: 300; color: var(--brown-deep); line-height: 1.2; margin-bottom: 8px; }
  .book-highlight-author { font-family: 'Cormorant Garamond', serif; font-size: 1rem; font-style: italic; color: var(--brown-light); margin-bottom: 32px; }
  .book-highlight-divider { width: 40px; height: 1px; background: var(--nude-dark); margin-bottom: 28px; }
  .book-highlight-desc { font-size: 0.9rem; line-height: 2; color: var(--text-body); margin-bottom: 40px; }
  .book-highlight-btn { display: inline-flex; align-items: center; gap: 10px; border: 1px solid var(--brown); color: var(--brown); background: transparent; font-family: 'Jost', sans-serif; font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; padding: 13px 28px; border-radius: 50px; cursor: pointer; text-decoration: none; transition: all 0.3s; }
  .book-highlight-btn:hover { background: var(--brown); color: white; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(140,107,82,0.25); }

  .contact { background: var(--cream); text-align: center; }
  .contact-inner { max-width: 480px; margin: 0 auto; }
  .wa-button { display: inline-flex; align-items: center; gap: 12px; background: var(--brown); color: white; border: none; cursor: pointer; font-family: 'Jost', sans-serif; font-size: 0.8rem; font-weight: 400; letter-spacing: 0.2em; text-transform: uppercase; padding: 16px 36px; border-radius: 50px; text-decoration: none; transition: all 0.3s; margin-top: 32px; }
  .wa-button:hover { background: var(--brown-deep); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(92,64,51,0.25); }
  .wa-icon { font-size: 1.1rem; }

  footer { padding: 32px 24px; text-align: center; background: var(--white); border-top: 1px solid rgba(184,152,128,0.12); }
  .footer-text { font-size: 0.72rem; letter-spacing: 0.15em; color: var(--text-light); }
  .footer-logo { font-family: 'Cormorant Garamond', serif; font-size: 1rem; color: var(--brown-light); letter-spacing: 0.25em; text-transform: uppercase; margin-bottom: 8px; }

  /* COLABORADORES / PARCEIROS */
  .colaboradores { background: var(--white); }
  .colaboradores-inner { max-width: 860px; margin: 0 auto; text-align: center; }
  .parceiros-invite { margin-top: 64px; padding-top: 48px; border-top: 1px solid var(--nude); }
  .parceiros-invite-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.5rem, 3vw, 2rem); color: var(--brown-deep); margin-bottom: 12px; font-weight: 400; }
  .parceiros-invite-desc { font-size: 0.88rem; color: var(--text-light); line-height: 1.8; margin-bottom: 32px; max-width: 400px; margin-left: auto; margin-right: auto; }
  .parceiros-btn { display: inline-flex; align-items: center; gap: 10px; background: transparent; border: 1.5px solid var(--brown-light); color: var(--brown); font-size: 0.8rem; letter-spacing: 0.18em; text-transform: uppercase; padding: 14px 32px; border-radius: 50px; text-decoration: none; transition: all 0.3s cubic-bezier(0.22,1,0.36,1); font-family: 'Jost', sans-serif; }
  .parceiros-btn:hover { background: var(--brown); color: var(--white); border-color: var(--brown); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(92,64,51,0.18); }

  .ornament-divider { display: flex; align-items: center; gap: 16px; margin: 48px 0; }
  .ornament-line { flex: 1; height: 1px; background: var(--nude); }
  .ornament-symbol { font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; color: var(--brown-light); font-style: italic; }

  .pillars-strip { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 52px; }
  .pillar-icon-card { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 14px; padding: 32px 20px; border-radius: 16px; background: var(--white); border: 1px solid rgba(184,152,128,0.13); box-shadow: 0 4px 24px var(--shadow); transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s; }
  .pillar-icon-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(92,64,51,0.11); }
  .pillar-icon-wrap { width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.6rem; }
  .pillar-icon-label { font-size: 0.6rem; letter-spacing: 0.35em; text-transform: uppercase; color: var(--brown-light); margin-bottom: 2px; }
  .pillar-icon-name { font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; font-weight: 500; color: var(--brown-deep); margin-bottom: 4px; }
  .pillar-icon-desc { font-size: 0.78rem; color: var(--text-light); line-height: 1.7; }
  @media(max-width:560px){ .pillars-strip{ grid-template-columns:1fr; gap:16px; } .pillar-icon-card{ flex-direction:row; text-align:left; gap:16px; padding:20px; } .pillar-icon-wrap{ flex-shrink:0; width:50px; height:50px; } }

  .park-photo-card { width: 100%; border-radius: 14px; overflow: hidden; margin: 28px 0 24px; position: relative; aspect-ratio: 16/7; background: var(--nude); }
  .park-photo-card img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.6s cubic-bezier(0.22,1,0.36,1); }
  .park-photo-card:hover img { transform: scale(1.03); }
  .park-photo-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(92,64,51,0.35) 0%, transparent 55%); display: flex; align-items: flex-end; padding: 20px 24px; }
  .park-photo-caption { font-family: 'Cormorant Garamond', serif; font-size: 0.9rem; font-style: italic; color: rgba(255,255,255,0.92); letter-spacing: 0.05em; }

  .psico-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 220px)); gap: 20px; margin-top: 28px; justify-content: center; }
  .psico-card { background: var(--cream); border-radius: 16px; overflow: hidden; border: 1px solid var(--nude); text-align: center; transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s; }
  .psico-card:hover { transform: translateY(-4px); box-shadow: 0 14px 40px rgba(92,64,51,0.1); }
  .psico-photo { width: 100%; aspect-ratio: 1/1; object-fit: cover; object-position: center 20%; display: block; }
  .psico-info { padding: 14px 12px 18px; }
  .psico-name { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; color: var(--brown-deep); margin-bottom: 4px; }
  .psico-role { font-size: 0.65rem; color: var(--text-light); letter-spacing: 0.15em; text-transform: uppercase; }
  @media(max-width:480px){ .psico-grid{ grid-template-columns: repeat(2, 1fr); } }
`;

export default styles;
