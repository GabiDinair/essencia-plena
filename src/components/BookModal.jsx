export default function BookModal({ bookModal, setBookModal }) {
  if (!bookModal) return null;

  return (
    <div className="modal-overlay" onClick={() => setBookModal(null)}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setBookModal(null)}>✕</button>
        <div className="modal-book-cover-wrap">
          <img src={bookModal.image} alt={bookModal.title} className="modal-book-cover" />
        </div>
        <div className="modal-body">
          <span className="modal-tag">{bookModal.edicao} · Clube do Livro</span>
          <p className="modal-title display">{bookModal.title}</p>
          <p className="modal-author">{bookModal.author}</p>
          <div className="modal-divider" />
          <p className="modal-desc" style={{ marginBottom: 20 }}>{bookModal.desc}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div className="modal-info-row">
              <div className="modal-info-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brown)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              </div>
              <div><p className="modal-info-label">Data</p><p className="modal-info-value">{bookModal.data}</p></div>
            </div>
            <div className="modal-info-row">
              <div className="modal-info-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brown)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
              </div>
              <div><p className="modal-info-label">Horário</p><p className="modal-info-value">{bookModal.horario}</p></div>
            </div>
            <div className="modal-info-row">
              <div className="modal-info-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brown)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
              </div>
              <div><p className="modal-info-label">Local</p><p className="modal-info-value">{bookModal.local}</p></div>
            </div>
          </div>
          <div className="modal-palette-section">
            <span className="modal-palette-label">✦ Paleta de cores · Inspire-se para o look</span>
            <div className="modal-palette-dots">
              {bookModal.palette.map((color, i) => (
                <div key={i} className="modal-palette-dot" style={{ background: color }} title={color} />
              ))}
              <span className="modal-palette-hint">tons da capa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
