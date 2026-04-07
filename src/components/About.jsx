import FadeIn from "./FadeIn";

const pillars = [
  {
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--brown)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c0 0-2 2-2 4.5C10 9 12 10 12 10s2-1 2-3.5C14 4 12 2 12 2z"/>
        <line x1="12" y1="10" x2="12" y2="22"/>
        <path d="M8 22h8"/><path d="M9 17h6"/>
      </svg>
    ),
    bg: "rgba(184,152,128,0.12)",
    label: "Pilar 01",
    name: "Espiritual",
    desc: "Alimentando a Fé e a Comunhão.",
  },
  {
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--brown)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2"/>
        <path d="M12 7v6l3 3"/><path d="M9 10l-3 2M15 10l3 2"/>
        <path d="M9 20c0 0 1-3 3-3s3 3 3 3"/>
      </svg>
    ),
    bg: "rgba(140,107,82,0.12)",
    label: "Pilar 02",
    name: "Físico",
    desc: "Honrando o corpo como Templo.",
  },
  {
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--brown)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a7 7 0 0 1 7 7c0 2.5-1.3 4.7-3.3 6l-.7 2H9l-.7-2A7 7 0 0 1 5 10a7 7 0 0 1 7-7z"/>
        <path d="M9 21h6"/><path d="M10 13c0 0 .5-1.5 2-1.5s2 1.5 2 1.5"/>
      </svg>
    ),
    bg: "rgba(160,128,112,0.12)",
    label: "Pilar 03",
    name: "Mental",
    desc: "Cuidando das emoções com sabedoria.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="about">
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
          {pillars.map((p, i) => (
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
  );
}
