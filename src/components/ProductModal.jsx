import { whatsappNumber } from "../data";

export default function ProductModal({ product, setProduct }) {
  if (!product) return null;

  const msg = encodeURIComponent(`Olá! Tenho interesse em adquirir: ${product.name} — Loja Essência Plena.`);

  return (
    <div className="modal-overlay" onClick={() => setProduct(null)}>
      <div className="pm-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setProduct(null)}>✕</button>

        {/* Imagem do produto */}
        <div className="prod-modal-img-wrap" style={{ background: product.bg }}>
          {product.image
            ? <img src={product.image} alt={product.name} className="prod-modal-img" />
            : <div className="prod-modal-placeholder">{product.icon}</div>
          }
        </div>

        <div className="pm-body">
          <div className="pm-identity">
            <h3 className="pm-name display">{product.name}</h3>
            {product.price && <p className="prod-modal-price">{product.price}</p>}
          </div>

          <div className="pm-ornament">
            <span className="pm-ornament-line"/>
            <span className="pm-ornament-dot">✦</span>
            <span className="pm-ornament-line"/>
          </div>

          <p className="pm-desc">{product.desc}</p>

          {product.details && (
            <div className="pm-details">
              {product.details.map((item, i) => (
                <div key={i} className="pm-detail-row">
                  <span className="pm-detail-dash" />
                  <span className="pm-detail-text">{item}</span>
                </div>
              ))}
            </div>
          )}

          <a
            href={`https://wa.me/${whatsappNumber}?text=${msg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-button"
            style={{ display: "inline-flex", marginTop: 8 }}
          >
            <span>💬</span>
            Quero este produto
          </a>
        </div>
      </div>
    </div>
  );
}
