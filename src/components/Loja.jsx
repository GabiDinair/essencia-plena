import { useState } from "react";
import FadeIn from "./FadeIn";
import ProductModal from "./ProductModal";

const products = [
  {
    id: "marcapaginas",
    name: "Marca-páginas",
    shortDesc: "Acompanhe suas leituras com delicadeza",
    desc: "Marca-páginas artesanal com mensagem inspiracional, produzido especialmente para as participantes do Clube do Livro. Um presente que une fé, beleza e amor pela leitura.",
    details: ["Mensagem inspiracional exclusiva", "Ideal para presente"],
    price: "R$ 5,00",
    icon: "🔖",
    bg: "linear-gradient(135deg, #F5EFE8, #E8DDD0)",
    image: "/marcapagina.png",
  },
  {
    id: "copo-cafe",
    name: "Copo de Café",
    shortDesc: "Para os momentos de pausa e presença",
    desc: "Copo exclusivo Essência Plena — ideal para tomar aquele café enquanto você mergulha em uma boa leitura ou se concentra no trabalho. Porque os melhores momentos merecem um copo especial.",
    details: ["Design exclusivo", "Material resistente", "Identidade visual do projeto"],
    price: "R$ 15,00",
    icon: "☕",
    bg: "linear-gradient(135deg, #EDE0D3, #D4C4B0)",
    image: "/copo.png",
  },
  {
    id: "coqueteleira",
    name: "Coqueteleira",
    shortDesc: "Cuide do corpo com estilo",
    desc: "Coqueteleira personalizada Essência Plena, pensada para acompanhar você nas atividades físicas. Porque cuidar do corpo também é um ato de fé.",
    details: ["Arte exclusiva do projeto", "600ml", "Perfeita para atividades físicas"],
    price: "R$ 30,00",
    icon: "🥤",
    bg: "linear-gradient(135deg, #D4C4B0, #B89880)",
    image: "/coqueteleira.png",
  },
  {
    id: "ecobag",
    name: "Ecobag",
    shortDesc: "Leve a Essência onde você for",
    desc: "Sacola ecológica com estampa exclusiva do Clube do Livro. Prática, sustentável e cheia de significado — perfeita para carregar seu livro, caderno, itens do dia a dia e tudo mais que você precisar.",
    details: ["Estampa exclusiva", "Material sustentável", "Tamanho prático"],
    price: "R$ 20,00",
    icon: "🛍️",
    bg: "linear-gradient(135deg, #C8B4A0, #9E8070)",
    image: "/ecobag.png",
  },
];

export default function Loja() {
  const [product, setProduct] = useState(null);

  return (
    <section id="loja" className="loja-section">
      <div className="container-wide">

        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 className="section-title display" style={{ color: "var(--nude)", marginBottom: 12 }}>
              Loja Essência Plena
            </h2>
            <p style={{ fontSize: "0.85rem", color: "rgba(232,221,208,0.7)", lineHeight: 1.7, maxWidth: 460, margin: "0 auto" }}>
              Produtos exclusivos que nasceram nos nossos encontros e carregam a identidade do projeto.
            </p>
          </div>
        </FadeIn>

        <div className="loja-grid">
          {products.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.1} from="scale">
              <div className="loja-card" onClick={() => setProduct(p)}>
                {/* Imagem / placeholder */}
                <div className="loja-card-img" style={{ background: p.bg }}>
                  {p.image
                    ? <img src={p.image} alt={p.name} className="loja-card-photo" />
                    : <span className="loja-card-icon">{p.icon}</span>
                  }
                </div>
                {/* Info */}
                <div className="loja-card-body">
                  <p className="loja-card-name display">{p.name}</p>
                  <p className="loja-card-desc">{p.shortDesc}</p>
                  <span className="loja-card-hint">Ver detalhes →</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="loja-note">
            ✦ &nbsp;Produtos disponíveis por tempo limitado · Entre em contato pelo WhatsApp para adquirir
          </p>
        </FadeIn>
      </div>

      <ProductModal product={product} setProduct={setProduct} />
    </section>
  );
}
