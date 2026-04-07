import FadeIn from "./FadeIn";
import { whatsappNumber } from "../data";

export default function Contact() {
  return (
    <section id="comunidade" className="contact">
      <div className="contact-inner">
        <FadeIn>
          <h2 className="section-title display" style={{ whiteSpace: "nowrap", fontSize: "clamp(1.4rem, 3.5vw, 2.4rem)" }}>Faça parte da Comunidade</h2>
          <div className="ornament-divider">
            <div className="ornament-line" />
            <span className="ornament-symbol">✦</span>
            <div className="ornament-line" />
          </div>
          <p className="section-body" style={{ margin: "0 auto", textAlign: "center" }}>
            Entre em contato pelo WhatsApp para saber mais sobre os encontros e fazer parte desta comunidade de mulheres que crescem juntas.
          </p>
          <div style={{ textAlign: "center" }}>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de fazer parte da Comunidade Essência Plena.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-button"
            >
              <span className="wa-icon">💬</span>
              Entrar na comunidade
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
