import FadeIn from "./FadeIn";
import { whatsappNumber } from "../data";

export default function Parceiros() {
  return (
    <section id="parceiros" className="colaboradores">
      <div className="colaboradores-inner">
        <FadeIn>
          <div className="parceiros-invite" style={{ marginTop: 0, paddingTop: 0, borderTop: "none" }}>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--brown-light)", marginBottom: 16 }}>Seja um parceiro</p>
            <h3 className="parceiros-invite-title">Venha crescer com a gente</h3>
            <p className="parceiros-invite-desc">Quer apoiar este projeto e fazer parte de uma comunidade que transforma vidas? Entre em contato e descubra como contribuir.</p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre como apoiar ou patrocinar o projeto Essência Plena.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="parceiros-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Falar pelo WhatsApp
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
