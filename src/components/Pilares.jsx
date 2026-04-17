import FadeIn from "./FadeIn";
import { books } from "../data";

export default function Pilares({ setBookModal, setParkModal }) {
  return (
    <section id="clube" className="pilares">
      <div className="container-wide">
        <FadeIn>
          <span className="section-tag" style={{ textAlign: "center", display: "block" }}>Os pilares</span>
          <h2 className="section-title display" style={{ textAlign: "center", maxWidth: 500, margin: "0 auto 64px" }}>Três pilares,<br />da Essência Plena</h2>
        </FadeIn>

        {/* PILAR 1 — ESPIRITUAL */}
        <FadeIn from="left">
          <div id="pilar-espiritual" className="pilar-card">
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
                  <div className="book-card" onClick={() => setBookModal(book)}>
                    <div className="book-cover-placeholder"><img src={book.image} alt={book.title} /></div>
                    <div className="book-info">
                      <div className="book-month">{book.month}</div>
                      <p className="book-title display">{book.title}</p>
                      <p style={{ fontSize: "0.72rem", color: "var(--text-light)", marginTop: 4, fontStyle: "italic" }}>{book.author}</p>
                      <p className="book-click-hint">Ver detalhes →</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* PILAR 2 — FÍSICO */}
        <FadeIn delay={0.1}>
          <div id="pilar-fisico" className="evento-card pilar-card" style={{ display: "block" }}>
            <div className="pilar-header">
              <span className="pilar-number display">02</span>
              <div>
                <p className="pilar-label">Pilar físico</p>
                <h3 className="pilar-title display">Saúde Física</h3>
              </div>
            </div>
            <p className="pilar-body">Um encontro especial voltado para atividade física, disciplina e cuidado com o corpo como Templo do Espírito Santo. Um momento ao ar livre, cercado pela natureza e boa companhia — seguido de um café à vontade para compartilhar, conversar e fortalecer os laços de amizade e comunhão.</p>
            <div className="park-photo-card" onClick={() => setParkModal(true)} style={{ cursor: "pointer" }}>
              <img src="/saudefisica.jpg" alt="Encontro de Saúde Física" loading="lazy" />
              <div className="park-photo-overlay">
                <span className="park-photo-caption">Parque de Águas Claras · Ver detalhes →</span>
              </div>
            </div>
            <div style={{ marginBottom: 0, display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
              <span className="info-pill">
                <span className="info-pill-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                </span> 11 de abril de 2026
              </span>
              <span className="info-pill">
                <span className="info-pill-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
                </span> Às 8h00 da manhã
              </span>
              <span className="info-pill">
                <span className="info-pill-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                </span> Parque de Águas Claras
              </span>
              <span className="info-pill">
                <span className="info-pill-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
                </span> Café após atividade
              </span>
            </div>
          </div>
        </FadeIn>

        {/* PILAR 3 — MENTAL */}
        <FadeIn delay={0.15} from="right">
          <div id="pilar-mental" className="pilar-card">
            <div className="pilar-header">
              <span className="pilar-number display">03</span>
              <div>
                <p className="pilar-label">Pilar mental</p>
                <h3 className="pilar-title display">Saúde Mental</h3>
              </div>
            </div>
            <p className="pilar-body">Um encontro voltado para o cuidado emocional e fortalecimento mental à luz da Palavra. Com sensibilidade e base profissional, abordaremos a importância do cuidado emocional, trazendo reflexões sobre ansiedade, acolhimento e equilíbrio interior à luz da fé cristã.</p>
            <div style={{ marginBottom: 24, display: "flex", justifyContent: "flex-start" }}>
              <span className="info-pill">
                <span className="info-pill-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                </span> Outubro de 2026
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="psico-grid">
                <FadeIn delay={0.1} from="scale">
                  <div className="psico-card">
                    <img src="/elo.png" alt="Eloiza Lançoni" className="psico-photo" />
                    <div className="psico-info"><p className="psico-name display">Eloiza Lançoni</p><p className="psico-role">Psicóloga</p></div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.22} from="scale">
                  <div className="psico-card">
                    <img src="/thay.png" alt="Thayrra Andrese" className="psico-photo" />
                    <div className="psico-info"><p className="psico-name display">Thayrra Andrese</p><p className="psico-role">Psicóloga</p></div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
