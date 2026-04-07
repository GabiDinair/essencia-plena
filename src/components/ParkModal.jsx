export default function ParkModal({ parkModal, setParkModal }) {
  if (!parkModal) return null;

  const palette = ["#FFFFFF", "#F5F0EB", "#EDE8E3", "#D6CFC8", "#C8BFB5", "#B8A99A"];
  const paletteLabels = ["Branco", "Creme", "Areia", "Nude", "Bege", "Rosé nude"];

  return (
    <div className="modal-overlay" onClick={() => setParkModal(false)}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setParkModal(false)}>✕</button>

        {/* Header visual */}
        <div className="park-modal-header">
          <div className="park-modal-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--brown)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
          </div>
          <span className="modal-tag">Pilar Físico · Encontro ao Ar Livre</span>
          <p className="modal-title display">Parque de Águas Claras</p>
        </div>

        <div className="modal-body">
          <div className="modal-divider" />

          {/* Info rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
            <div className="modal-info-row">
              <div className="modal-info-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brown)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
              </div>
              <div>
                <p className="modal-info-label">Endereço</p>
                <p className="modal-info-value">Av. das Castanheiras — Águas Claras, Brasília – DF</p>
              </div>
            </div>

            <div className="modal-info-row">
              <div className="modal-info-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brown)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              </div>
              <div>
                <p className="modal-info-label">Data</p>
                <p className="modal-info-value">11 de abril de 2026</p>
              </div>
            </div>

            <div className="modal-info-row">
              <div className="modal-info-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brown)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
              </div>
              <div>
                <p className="modal-info-label">Horário</p>
                <p className="modal-info-value">Às 8h00 da manhã</p>
              </div>
            </div>
          </div>

          {/* Outfit info */}
          <div className="park-modal-outfit">
            <span className="modal-palette-label">✦ O que vestir</span>
            <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 6 }}>
              <p className="park-outfit-item">
                <span className="park-outfit-dot">·</span>
                Roupas fitness e confortáveis — legging, short, camiseta
              </p>
              <p className="park-outfit-item">
                <span className="park-outfit-dot">·</span>
                <strong>Tênis obrigatório</strong> — faremos atividade física
              </p>
              <p className="park-outfit-item">
                <span className="park-outfit-dot">·</span>
                Leve água e protetor solar
              </p>
            </div>
          </div>

          {/* Color palette */}
          <div className="modal-palette-section">
            <span className="modal-palette-label">✦ Paleta de cores · Inspire-se para o look</span>
            <div className="modal-palette-dots" style={{ alignItems: "flex-start", flexWrap: "wrap", gap: "10px 8px" }}>
              {palette.map((color, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <div
                    className="modal-palette-dot"
                    style={{ background: color, border: color === "#FFFFFF" ? "1px solid #E8DDD0" : "none" }}
                    title={color}
                  />
                  <span style={{ fontSize: "0.55rem", color: "var(--text-light)", letterSpacing: "0.05em", textAlign: "center" }}>
                    {paletteLabels[i]}
                  </span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "0.72rem", color: "var(--text-light)", fontStyle: "italic", marginTop: 10 }}>
              Tons clean e pastéis — leve, fresco e elegante
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
