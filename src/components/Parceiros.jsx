import { useState, useEffect, useRef } from "react";
import FadeIn from "./FadeIn";
import PartnerModal from "./PartnerModal";
import { whatsappNumber } from "../data";

const partners = [
  {
    id: "valter",
    name: "Valter Santos",
    role: "Personal Trainer · Massoterapeuta",
    tag: "Saúde & Movimento",
    initial: "VS",
    avatarBg: "linear-gradient(135deg, #D4C4B0, #B89880)",
    desc: "Profissional dedicado ao cuidado integral do corpo, unindo treinamento personalizado e massoterapia. Atende de forma presencial e online, adaptando cada treino à realidade e aos objetivos de cada pessoa.",
    details: ["Formado em Educação Física","Personal Trainer — treinos personalizados","Massoterapia — cuidado e recuperação","Consultoria online e presencial","Brasília – DF"],
    cref: "CREF 022353-G DF",
    instagram: "personal._santos",
    photo: "/personal.png",
    placeholder: false,
    Logo: () => (
      <svg viewBox="0 0 180 80" width="180" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* PERSONAL — topo */}
        <text x="90" y="21" textAnchor="middle"
          fontFamily="Cormorant Garamond, Georgia, serif"
          fontSize="9.5" fontWeight="400" fill="#8C6B52" letterSpacing="6">
          PERSONAL
        </text>
        {/* linha esquerda */}
        <line x1="18" y1="40" x2="72" y2="40" stroke="#B89880" strokeWidth="0.8"/>
        {/* ponto central */}
        <circle cx="90" cy="40" r="2.5" fill="#8C6B52"/>
        {/* linha direita */}
        <line x1="108" y1="40" x2="162" y2="40" stroke="#B89880" strokeWidth="0.8"/>
        {/* Santos — base */}
        <text x="90" y="66" textAnchor="middle"
          fontFamily="Cormorant Garamond, Georgia, serif"
          fontSize="28" fontWeight="300" fill="#5C4033" letterSpacing="1.5">
          Santos
        </text>
      </svg>
    ),
  },
  {
    id: "gabriella",
    name: "Gabriella Dinair",
    role: "Videomaker Mobile",
    tag: "Audiovisual",
    initial: "GD",
    avatarBg: "linear-gradient(135deg, #C8B4A0, #9E8070)",
    desc: "Com um olhar único e sensível, Gabriella transforma histórias em emoções que atravessam o tempo. Especialista em videomaker mobile, cria memórias afetivas que podem ser revividas para sempre.",
    details: ["Videomaker Mobile","Produção audiovisual criativa","Cobertura de eventos e encontros","Criatividade que atravessa o tempo"],
    cref: null,
    instagram: "dinairfilms",
    site: "https://videomaker-black.vercel.app/",
    photo: "/dinairfilms.png",
    placeholder: false,
    Logo: () => (
      <svg viewBox="0 0 180 80" width="180" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* DINAIR — topo */}
        <text x="90" y="21" textAnchor="middle"
          fontFamily="Cormorant Garamond, Georgia, serif"
          fontSize="9.5" fontWeight="400" fill="#8C6B52" letterSpacing="6">
          DINAIR
        </text>
        {/* linha esquerda */}
        <line x1="18" y1="40" x2="72" y2="40" stroke="#B89880" strokeWidth="0.8"/>
        {/* ponto central */}
        <circle cx="90" cy="40" r="2.5" fill="#8C6B52"/>
        {/* linha direita */}
        <line x1="108" y1="40" x2="162" y2="40" stroke="#B89880" strokeWidth="0.8"/>
        {/* films — base */}
        <text x="90" y="66" textAnchor="middle"
          fontFamily="Cormorant Garamond, Georgia, serif"
          fontSize="28" fontStyle="italic" fontWeight="300" fill="#5C4033" letterSpacing="1.5">
          films
        </text>
      </svg>
    ),
  },
];

// Triplicar para loop mais suave
const looped = [...partners, ...partners, ...partners];

export default function Parceiros() {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragPosStart = useRef(0);
  const [partner, setPartner] = useState(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const step = () => {
      if (!isDragging.current) {
        posRef.current += 0.55;
        // halfWidth = 1/3 do total (triplicamos)
        const third = track.scrollWidth / 3;
        if (third > 0 && posRef.current >= third) {
          posRef.current -= third;
        }
      }
      track.style.transform = `translateX(-${posRef.current}px)`;
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const onMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.pageX;
    dragPosStart.current = posRef.current;
    if (trackRef.current) trackRef.current.style.cursor = "grabbing";
  };
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const dx = e.pageX - dragStartX.current;
    const third = trackRef.current.scrollWidth / 3;
    let newPos = dragPosStart.current - dx;
    newPos = ((newPos % third) + third) % third;
    posRef.current = newPos;
  };
  const stopDrag = () => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };
  const onTouchStart = (e) => {
    isDragging.current = true;
    dragStartX.current = e.touches[0].pageX;
    dragPosStart.current = posRef.current;
  };
  const onTouchMove = (e) => {
    if (!isDragging.current) return;
    const dx = e.touches[0].pageX - dragStartX.current;
    const third = trackRef.current.scrollWidth / 3;
    let newPos = dragPosStart.current - dx;
    newPos = ((newPos % third) + third) % third;
    posRef.current = newPos;
  };

  const handleClick = (p) => {
    if (p.placeholder) return;
    setPartner(p);
  };

  return (
    <section id="parceiros" className="colaboradores">

      {/* Título */}
      <div className="colaboradores-inner">
        <FadeIn>
          <h2 className="section-title display" style={{ textAlign: "center", color: "var(--brown-deep)", marginBottom: 48 }}>Nossos parceiros</h2>
        </FadeIn>
      </div>

      {/* Strip de logos — largura total da seção */}
      <FadeIn>
        <div className="logos-strip-section">
          <div className="logos-fade-left" />
          <div className="logos-fade-right" />
          <div
            ref={trackRef}
            className="logos-strip-track"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={stopDrag}
          >
            {looped.map((p, i) => (
              <div
                key={`${p.id}-${i}`}
                className={`logo-item${p.placeholder ? " logo-item-placeholder" : ""}`}
                onClick={() => handleClick(p)}
              >
                <p.Logo />
              </div>
            ))}
          </div>
        </div>
        <p className="logos-tip">arraste para explorar · clique para conhecer</p>
      </FadeIn>

      {/* Convite — bloco escuro */}
      <FadeIn>
        <div className="parceiros-cta">
          <div className="parceiros-cta-inner">
            <h2 className="parceiros-cta-title display">Seja um parceiro</h2>
            <p className="parceiros-cta-desc">Quer apoiar este projeto e fazer parte de uma comunidade que transforma vidas? Entre em contato e descubra como contribuir.</p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre como apoiar ou patrocinar o projeto Essência Plena.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="parceiros-cta-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </FadeIn>

      <PartnerModal partner={partner} setPartner={setPartner} />
    </section>
  );
}
