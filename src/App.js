import { useState, useEffect, useRef } from "react";

const whatsappNumber = "5561984913140";
const whatsappLink = `https://wa.me/${whatsappNumber}`;

const pastEncounters = [
  { edicao: "Primeira edição", livro: "Mulheres Improváveis", autor: "Viviane Martinello", img: "/Edicao1.jpeg" },
  { edicao: "Segunda edição", livro: "Mulher Real", autor: "Júnia Hayashi", img: "/Edicao2.jpeg" },
  { edicao: "Terceira edição", livro: "Até que Nada Mais Importe", autor: "Luciano Subirá", img: "/Edicao3.jpeg" },
  { edicao: "Quarta edição", livro: "Como Ter o Coração de Maria no Mundo de Marta", autor: "Joana Weaver", img: "/Edicao4.jpeg" },
  {
    edicao: "Quinta edição",
    livro: "As Extraordinárias Estações de uma Vida Comum",
    autor: "Gabriella Dinair",
    img: "/Edicao5.jpeg",
    special: true,
    modalDesc: "Um encontro especial onde a própria fundadora do projeto compartilhou sua obra autoral — um livro nascido de vivências reais, reflexões sobre a fé e as estações da vida. Uma noite de profunda emoção e conexão entre as participantes.",
  },
  { edicao: "Sexta edição", livro: "Invisível", autor: "Sara Hagerty", img: "/Edicao6.jpeg" },
  { edicao: "Sétima edição", livro: "Enquanto Isso", autor: "Fernanda Witwytzky", img: "/Edicao7.jpeg" },
];

const books = [
  { month: "Maio", title: "Tudo sob Controle", author: "Jennifer Dukes Lee", image: "/livro1.png", dot: "#B89880" },
  { month: "Agosto", title: "Descanse em Deus", author: "Joanna Weaver", image: "/livro2.png", dot: "#8C6B52" },
  { month: "Novembro", title: "O Fim da Ansiedade", author: "Max Lucado", image: "/livro3.png", dot: "#D4C4B0" },
];

const timelineItems = [
  { month: "Abril", title: "Encontro de Saúde Física", desc: "Atividade ao ar livre no Parque da Cidade", dot: "#B89880" },
  { month: "Maio", title: "Clube do Livro", desc: "Oitava Edição — Leitura e reflexão", dot: "#A08070" },
  { month: "Agosto", title: "Clube do Livro", desc: "Nona Edição — Leitura e reflexão", dot: "#8C6B52" },
  { month: "Outubro", title: "Encontro de Saúde Mental", desc: "Cuidado emocional à luz da Palavra", dot: "#7A5C44" },
  { month: "Novembro", title: "Clube do Livro", desc: "Décima Edição — Encerramento do ano", dot: "#5C4033" },
];

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, className = "", from = "bottom" }) {
  const [ref, visible] = useInView();
  const transforms = {
    bottom: visible ? "translateY(0)" : "translateY(36px)",
    left:   visible ? "translateX(0)" : "translateX(-32px)",
    right:  visible ? "translateX(0)" : "translateX(32px)",
    scale:  visible ? "scale(1)"      : "scale(0.96)",
  };
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: transforms[from] || transforms.bottom,
      transition: `opacity 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
    }}>
      {children}
    </div>
  );
}

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

  /* NAV */
  .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 20px 32px; display: flex; justify-content: center; align-items: center; background: rgba(250,247,242,0.85); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(184,152,128,0.15); transition: all 0.3s; }
  .nav-logo { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; font-weight: 400; letter-spacing: 0.25em; color: var(--brown); text-transform: uppercase; }

  /* HERO */
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

  /* SECTIONS */
  section { padding: 100px 24px; }
  .container { max-width: 860px; margin: 0 auto; }
  .container-wide { max-width: 1100px; margin: 0 auto; }
  .section-tag { font-size: 0.6rem; letter-spacing: 0.4em; text-transform: uppercase; color: var(--brown-light); margin-bottom: 16px; display: block; }
  .section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 6vw, 3rem); font-weight: 300; color: var(--brown-deep); line-height: 1.2; margin-bottom: 24px; }
  .section-body { font-size: 0.9rem; line-height: 1.95; color: var(--text-body); font-weight: 300; max-width: 580px; }

  /* ABOUT */
  .about { background: var(--white); }
  .about-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
  .about-quote { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.5rem, 4vw, 2.2rem); font-weight: 300; font-style: italic; color: var(--brown); line-height: 1.5; padding-left: 24px; border-left: 2px solid var(--nude-dark); }
  @media(max-width:720px){ .about-inner{ grid-template-columns:1fr; gap:40px; } }

  /* PILARES */
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
  .book-card { background: var(--white); border-radius: 10px; overflow: hidden; border: 1px solid rgba(184,152,128,0.15); transition: transform 0.3s, box-shadow 0.3s; }
  .book-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(92,64,51,0.1); }
  .book-cover-placeholder { width: 100%; aspect-ratio: 2/3; overflow: hidden; display: block; background: var(--nude); position: relative; }
  .book-cover-placeholder img { width: 100%; height: 100%; object-fit: cover; object-position: center center; display: block; transition: transform 0.5s cubic-bezier(0.22,1,0.36,1); }
  .book-card:hover .book-cover-placeholder img { transform: scale(1.03); }
  .book-info { padding: 12px 12px 14px; }
  .book-month { font-size: 0.6rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--brown-light); margin-bottom: 6px; display: flex; align-items: center; gap: 6px; }
  .book-title { font-family: 'Cormorant Garamond', serif; font-size: 1.05rem; font-weight: 500; color: var(--brown-deep); line-height: 1.3; }

  /* EVENTO CARDS */
  .evento-card { background: var(--white); border-radius: 16px; padding: 48px 40px; margin-bottom: 24px; border: 1px solid rgba(184,152,128,0.12); box-shadow: 0 4px 32px var(--shadow); display: grid; grid-template-columns: auto 1fr; gap: 32px; align-items: start; }
  @media(max-width:540px){ .evento-card{ grid-template-columns:1fr; } .pilar-card{ padding:36px 24px; } }

  /* INFO PILL */
  .info-pill { display: inline-flex; align-items: center; gap: 6px; background: var(--cream); border: 1px solid var(--nude); border-radius: 40px; padding: 5px 14px; font-size: 0.75rem; color: var(--text-body); margin-right: 8px; margin-bottom: 8px; }
  .info-pill-icon { font-size: 0.8rem; }

  /* CALENDAR */
  .calendar { background: var(--white); }
  .cal-list { margin-top: 64px; display: flex; flex-direction: column; }
  .cal-entry { display: flex; align-items: baseline; gap: 28px; padding: 28px 0; border-bottom: 1px solid var(--nude); }
  .cal-entry:first-child { border-top: 1px solid var(--nude); }
  .cal-entry-month { font-family: 'Jost', sans-serif; font-size: 0.62rem; letter-spacing: 0.35em; text-transform: uppercase; color: var(--brown-light); min-width: 72px; flex-shrink: 0; }
  .cal-entry-body { flex: 1; }
  .cal-entry-title { font-family: 'Cormorant Garamond', serif; font-size: 1.35rem; font-weight: 400; color: var(--brown-deep); line-height: 1.2; margin-bottom: 4px; }
  .cal-entry-desc { font-size: 0.8rem; color: var(--text-light); line-height: 1.5; }
  .cal-entry-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; margin-bottom: 3px; }

  /* PAST ENCOUNTERS */
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

  /* MODAL */
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

  /* BOOK HIGHLIGHT */
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

  /* CONTACT */
  .contact { background: var(--cream); text-align: center; }
  .contact-inner { max-width: 480px; margin: 0 auto; }
  .wa-button { display: inline-flex; align-items: center; gap: 12px; background: var(--brown); color: white; border: none; cursor: pointer; font-family: 'Jost', sans-serif; font-size: 0.8rem; font-weight: 400; letter-spacing: 0.2em; text-transform: uppercase; padding: 16px 36px; border-radius: 50px; text-decoration: none; transition: all 0.3s; margin-top: 32px; }
  .wa-button:hover { background: var(--brown-deep); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(92,64,51,0.25); }
  .wa-icon { font-size: 1.1rem; }

  /* FOOTER */
  footer { padding: 32px 24px; text-align: center; background: var(--white); border-top: 1px solid rgba(184,152,128,0.12); }
  .footer-text { font-size: 0.72rem; letter-spacing: 0.15em; color: var(--text-light); }
  .footer-logo { font-family: 'Cormorant Garamond', serif; font-size: 1rem; color: var(--brown-light); letter-spacing: 0.25em; text-transform: uppercase; margin-bottom: 8px; }

  /* DIVIDER */
  .ornament-divider { display: flex; align-items: center; gap: 16px; margin: 48px 0; }
  .ornament-line { flex: 1; height: 1px; background: var(--nude); }
  .ornament-symbol { font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; color: var(--brown-light); font-style: italic; }

  /* PILLAR ICONS STRIP */
  .pillars-strip { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 52px; }
  .pillar-icon-card { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 14px; padding: 32px 20px; border-radius: 16px; background: var(--white); border: 1px solid rgba(184,152,128,0.13); box-shadow: 0 4px 24px var(--shadow); transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s; }
  .pillar-icon-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(92,64,51,0.11); }
  .pillar-icon-wrap { width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.6rem; }
  .pillar-icon-label { font-size: 0.6rem; letter-spacing: 0.35em; text-transform: uppercase; color: var(--brown-light); margin-bottom: 2px; }
  .pillar-icon-name { font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; font-weight: 500; color: var(--brown-deep); margin-bottom: 4px; }
  .pillar-icon-desc { font-size: 0.78rem; color: var(--text-light); line-height: 1.7; }
  @media(max-width:560px){ .pillars-strip{ grid-template-columns:1fr; gap:16px; } .pillar-icon-card{ flex-direction:row; text-align:left; gap:16px; padding:20px; } .pillar-icon-wrap{ flex-shrink:0; width:50px; height:50px; } }

  /* PARK PHOTO CARD */
  .park-photo-card { width: 100%; border-radius: 14px; overflow: hidden; margin: 28px 0 24px; position: relative; aspect-ratio: 16/7; background: var(--nude); }
  .park-photo-card img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.6s cubic-bezier(0.22,1,0.36,1); }
  .park-photo-card:hover img { transform: scale(1.03); }
  .park-photo-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(92,64,51,0.35) 0%, transparent 55%); display: flex; align-items: flex-end; padding: 20px 24px; }
  .park-photo-caption { font-family: 'Cormorant Garamond', serif; font-size: 0.9rem; font-style: italic; color: rgba(255,255,255,0.92); letter-spacing: 0.05em; }

  /* PSICO PHOTO CARDS */
  .psico-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 220px)); gap: 20px; margin-top: 28px; justify-content: center; }
  .psico-card { background: var(--cream); border-radius: 16px; overflow: hidden; border: 1px solid var(--nude); text-align: center; transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s; }
  .psico-card:hover { transform: translateY(-4px); box-shadow: 0 14px 40px rgba(92,64,51,0.1); }
  .psico-photo { width: 100%; aspect-ratio: 1/1; object-fit: cover; object-position: center 20%; display: block; }
  .psico-info { padding: 14px 12px 18px; }
  .psico-name { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; color: var(--brown-deep); margin-bottom: 4px; }
  .psico-role { font-size: 0.65rem; color: var(--text-light); letter-spacing: 0.15em; text-transform: uppercase; }
  @media(max-width:480px){ .psico-grid{ grid-template-columns: repeat(2, 1fr); } }
`;

export default function EssenciaPlena() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <style>{styles}</style>

      <nav className="nav">
        <span className="nav-logo">Essência Plena</span>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-ornament hero-ornament-1" />
        <div className="hero-ornament hero-ornament-2" />
        <div className="hero-content">
          <FadeIn delay={0.1}><span className="hero-badge">Desenvolvimento Feminino</span></FadeIn>
          <FadeIn delay={0.25}>
            <h1 className="hero-title display">Essência<br /><em>Plena</em></h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="hero-divider" />
            <p className="hero-subtitle">Alimentando o espírito, a mente e o corpo</p>
          </FadeIn>
          <FadeIn delay={0.55}>
            <p className="hero-desc" style={{ marginTop: 24 }}>
              "Glorificai, pois, a Deus, no vosso corpo <br />e no vosso espírito, os quais pertencem a Deus"
            </p>
          </FadeIn>
        </div>
        <div className="scroll-hint"><div className="scroll-line" /><span>rolar</span></div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <div className="container">
          <div className="about-inner">
            <FadeIn from="left">
              <div>
                <span className="section-tag">Sobre o projeto</span>
                <h2 className="section-title display">O que é o<br />Essência Plena?</h2>
                <p className="section-body">Essência Plena nasce com o propósito de lembrar que somos seres integrais. Fomos criadas para viver uma fé que alcança o espírito, transforma a mente e fortalece o corpo.</p>
                <br />
                <p className="section-body">O projeto reúne encontros intencionais que promovem crescimento espiritual, cuidado emocional e atenção ao corpo — fortalecendo mulheres em todas as áreas da vida.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} from="right">
              <blockquote className="about-quote display">"Somos seres integrais, criadas para florescer em espírito, mente e corpo."</blockquote>
            </FadeIn>
          </div>

          <div className="pillars-strip">
            {[
              {
                svg: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--brown)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c0 0-2 2-2 4.5C10 9 12 10 12 10s2-1 2-3.5C14 4 12 2 12 2z"/><line x1="12" y1="10" x2="12" y2="22"/><path d="M8 22h8"/><path d="M9 17h6"/></svg>),
                bg: "rgba(184,152,128,0.12)", label: "Pilar 01", name: "Espiritual", desc: "Alimentando a Fé e a Comunhão.",
              },
              {
                svg: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--brown)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a7 7 0 0 1 7 7c0 2.5-1.3 4.7-3.3 6l-.7 2H9l-.7-2A7 7 0 0 1 5 10a7 7 0 0 1 7-7z"/><path d="M9 21h6"/><path d="M10 13c0 0 .5-1.5 2-1.5s2 1.5 2 1.5"/></svg>),
                bg: "rgba(160,128,112,0.12)", label: "Pilar 02", name: "Mental", desc: "Cuidando das emoções com sabedoria.",
              },
              {
                svg: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--brown)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2"/><path d="M12 7v6l3 3"/><path d="M9 10l-3 2M15 10l3 2"/><path d="M9 20c0 0 1-3 3-3s3 3 3 3"/></svg>),
                bg: "rgba(140,107,82,0.12)", label: "Pilar 03", name: "Físico", desc: "Honrando o corpo como Templo.",
              },
            ].map((p, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.15} from="scale">
                <div className="pillar-icon-card">
                  <div className="pillar-icon-wrap" style={{ background: p.bg }}>{p.svg}</div>
                  <div>
                    <p className="pillar-icon-label">{p.label}</p>
                    <p className="pillar-icon-name">{p.name}</p>
                    <p className="pillar-icon-desc">{p.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="pilares">
        <div className="container-wide">
          <FadeIn>
            <span className="section-tag" style={{ textAlign: "center", display: "block" }}>Os pilares</span>
            <h2 className="section-title display" style={{ textAlign: "center", maxWidth: 500, margin: "0 auto 64px" }}>
              Três pilares,<br />da Essência Plena
            </h2>
          </FadeIn>

          {/* PILAR 1 — ESPIRITUAL */}
          <FadeIn from="left">
            <div className="pilar-card">
              <div className="pilar-header">
                <span className="pilar-number display">01</span>
                <div>
                  <p className="pilar-label">Pilar espiritual</p>
                  <h3 className="pilar-title display">Clube do Livro</h3>
                </div>
              </div>
              <p className="pilar-body">O Clube do Livro é o espaço onde o espírito é alimentado através da leitura, reflexão e comunhão. Em 2026, o clube será conduzido à luz do Salmo 37, com a mensagem que guia cada encontro:</p>
              <span className="salmo-tag display">✦ &nbsp;"Entregue, confie, descanse e aguarde"&nbsp; — Salmo 37</span>
              <div className="books-grid">
                {books.map((book, i) => (
                  <FadeIn key={i} delay={i * 0.12}>
                    <div className="book-card">
                      <div className="book-cover-placeholder"><img src={book.image} alt={book.title} /></div>
                      <div className="book-info">
                        <div className="book-month">{book.month}</div>
                        <p className="book-title display">{book.title}</p>
                        <p style={{ fontSize: "0.72rem", color: "var(--text-light)", marginTop: 4, fontStyle: "italic" }}>{book.author}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* PILAR 2 — FÍSICO */}
          <FadeIn delay={0.1}>
            <div className="evento-card pilar-card" style={{ display: "block" }}>
              <div className="pilar-header">
                <span className="pilar-number display">02</span>
                <div>
                  <p className="pilar-label">Pilar físico</p>
                  <h3 className="pilar-title display">Saúde Física</h3>
                </div>
              </div>
              <p className="pilar-body">Um encontro especial voltado para atividade física, disciplina e cuidado com o corpo como Templo do Espírito Santo. Um momento ao ar livre, cercado pela natureza e boa companhia — seguido de um café à vontade para compartilhar, conversar e fortalecer os laços de amizade e comunhão.</p>
              <div className="park-photo-card">
                <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=75&auto=format&fit=crop" alt="Parque da Cidade" loading="lazy" />
                <div className="park-photo-overlay"><span className="park-photo-caption">Parque da Cidade · Sarah Kubitschek</span></div>
              </div>
              <div style={{ marginBottom: 0, display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
                <span className="info-pill"><span className="info-pill-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></span> 11 de abril de 2026</span>
                <span className="info-pill"><span className="info-pill-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg></span> Às 8h00 da manhã</span>
                <span className="info-pill"><span className="info-pill-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg></span> Parque da Cidade</span>
                <span className="info-pill"><span className="info-pill-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg></span> Café após atividade</span>
              </div>
            </div>
          </FadeIn>

          {/* PILAR 3 — MENTAL */}
          <FadeIn delay={0.15} from="right">
            <div className="pilar-card">
              <div className="pilar-header">
                <span className="pilar-number display">03</span>
                <div>
                  <p className="pilar-label">Pilar mental</p>
                  <h3 className="pilar-title display">Saúde Mental</h3>
                </div>
              </div>
              <p className="pilar-body">Um encontro voltado para o cuidado emocional e fortalecimento mental à luz da Palavra. Com sensibilidade e base profissional, abordaremos a importância do cuidado emocional, trazendo reflexões sobre ansiedade, acolhimento e equilíbrio interior à luz da fé cristã.</p>
              <div style={{ marginBottom: 24, display: "flex", justifyContent: "flex-start" }}>
                <span className="info-pill"><span className="info-pill-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></span> Outubro de 2026</span>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="psico-grid">
                  <FadeIn delay={0.1} from="scale">
                    <div className="psico-card">
                      <img src="/elo.png" alt="Eloiza Lançoni" className="psico-photo" />
                      <div className="psico-info">
                        <p className="psico-name display">Eloiza Lançoni</p>
                        <p className="psico-role">Psicóloga</p>
                      </div>
                    </div>
                  </FadeIn>
                  <FadeIn delay={0.22} from="scale">
                    <div className="psico-card">
                      <img src="/thay.png" alt="Thayrra Andrese" className="psico-photo" />
                      <div className="psico-info">
                        <p className="psico-name display">Thayrra Andrese</p>
                        <p className="psico-role">Psicóloga</p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CALENDAR */}
      <section className="calendar">
        <div className="container">
          <FadeIn>
            <span className="section-tag">Agenda</span>
            <h2 className="section-title display">Calendário 2026</h2>
            <p className="section-body">Um ano repleto de encontros intencionais para nutrir o Espírito, cuidar da Mente e fortalecer o Corpo.</p>
          </FadeIn>
          <div className="cal-list">
            {timelineItems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="cal-entry">
                  <span className="cal-entry-month">{item.month}</span>
                  <div className="cal-entry-body">
                    <p className="cal-entry-title display">{item.title}</p>
                    <p className="cal-entry-desc">{item.desc}</p>
                  </div>
                  <div className="cal-entry-dot" style={{ background: item.dot }} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* NOSSOS ENCONTROS */}
      <section className="encontros">
        <div className="container-wide">
          <FadeIn>
            <span className="section-tag">Memórias</span>
            <h2 className="section-title display">Nossos Encontros</h2>
            <p className="section-body">Cada encontro, uma história. Cada leitura, uma transformação.</p>
          </FadeIn>
          <div className="encontros-grid">
            {pastEncounters.map((enc, i) => (
              <FadeIn key={i} delay={i * 0.07} from="scale">
                <div className={`encontro-card${enc.special ? " special" : ""}`} onClick={enc.special ? () => setModalOpen(true) : undefined}>
                  <div className="encontro-img-wrap">
                    {enc.img ? <img src={enc.img} alt={enc.edicao} className="encontro-img" /> : <span className="encontro-img-placeholder">✦</span>}
                  </div>
                  <div className="encontro-info">
                    <span className="encontro-edicao">{enc.edicao}</span>
                    <p className="encontro-livro display">{enc.livro}</p>
                    <p className="encontro-autor">{enc.autor}</p>
                    {enc.special && <span className="encontro-special-badge">✦ Livro autoral</span>}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL 5ª EDIÇÃO */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalOpen(false)}>✕</button>
            <div className="modal-img-wrap">
              <img src="/Livroautoral.jpeg" alt="Gabriella Dinair" className="modal-img" />
            </div>
            <div className="modal-body">
              <span className="modal-tag">Quinta edição · Livro autoral</span>
              <p className="modal-title display">As Extraordinárias Estações de uma Vida Comum</p>
              <p className="modal-author">Gabriella Dinair</p>
              <div className="modal-divider" />
              <p className="modal-desc">Um encontro especial onde a própria fundadora do projeto compartilhou sua obra autoral — um livro nascido de vivências reais, reflexões sobre a fé e as estações da vida. Uma noite de profunda emoção e conexão entre as participantes.</p>
              <div className="modal-presenter">
                <div className="modal-presenter-avatar">G</div>
                <div>
                  <p className="modal-presenter-name display">Gabriella Dinair</p>
                  <p className="modal-presenter-role">Fundadora do projeto · Autora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DESTAQUE DO LIVRO */}
      <section className="book-highlight">
        <div className="container">
          <FadeIn>
            <div className="book-highlight-inner">
              <FadeIn from="left">
                <div className="book-highlight-img-side">
                  <div className="book-highlight-img-wrap">
                    <img src="/livroautoral.jpeg" alt="As Extraordinárias Estações de uma Vida Comum" className="book-highlight-img" />
                  </div>
                </div>
              </FadeIn>
              <FadeIn from="right" delay={0.15}>
                <div className="book-highlight-text-side">
                  <span className="book-highlight-tag">Livro autoral</span>
                  <h2 className="book-highlight-title display">As Extraordinárias Estações<br />de uma Vida Comum</h2>
                  <p className="book-highlight-author">Gabriella Dinair</p>
                  <div className="book-highlight-divider" />
                  <p className="book-highlight-desc">Este livro nasceu das estações vividas. Até os dias mais simples podem ser profundamente cheios de propósito. Com base nas Escrituras, Gabriella Dinair nos encoraja a abandonar padrões mundanos e abraçar os planos de Deus para a vida. Assim como na natureza, nossas vidas também passam por diferentes estações — cada uma com seu propósito e seus ensinamentos, tornando-se oportunidades para descobrir o amor e a providência divina, encontrando um propósito mais profundo através de uma vida extraordinariamente comum.</p>
                  <a href="https://shopee.com.br/As-Extraordin%C3%A1rias-Esta%C3%A7%C3%B5es-de-uma-Vida-Comum-Gabriella-Dinair-i.285478332.22693718024?extraParams=%7B%22display_model_id%22%3A229416944242%2C%22model_selection_logic%22%3A3%7D&sp_atk=bf388eb3-530a-4379-b45c-d8c1dd72e83e&xptdk=bf388eb3-530a-4379-b45c-d8c1dd72e83e" target="_blank" rel="noopener noreferrer" className="book-highlight-btn">
                    Conhecer o livro
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <div className="contact-inner">
          <FadeIn>
            <span className="section-tag">Comunidade</span>
            <h2 className="section-title display">Venha fazer parte<br />do Essência Plena</h2>
            <div className="ornament-divider">
              <div className="ornament-line" />
              <span className="ornament-symbol">✦</span>
              <div className="ornament-line" />
            </div>
            <p className="section-body" style={{ margin: "0 auto", textAlign: "center" }}>
              Entre em contato pelo WhatsApp para saber mais sobre os encontros e fazer parte desta comunidade de mulheres que crescem juntas.
            </p>
            <div style={{ textAlign: "center" }}>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="wa-button">
                <span className="wa-icon">💬</span>
                Entrar na comunidade
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer>
        <p className="footer-logo">Essência Plena</p>
        <p className="footer-text">Alimentando o Espírito, a Mente e o Corpo · 2026</p>
      </footer>
    </>
  );
}