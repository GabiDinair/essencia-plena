export default function PartnerModal({ partner, setPartner }) {
  if (!partner) return null;

  return (
    <div className="modal-overlay" onClick={() => setPartner(null)}>
      <div className="pm-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setPartner(null)}>✕</button>

        {/* HEADER com gradiente + foto/avatar */}
        <div className="pm-header" style={{ background: partner.avatarBg }}>
          <div className="pm-header-overlay" />
          <div className="pm-avatar">
            {partner.photo
              ? <img src={partner.photo} alt={partner.name} className="pm-avatar-img" />
              : <span className="pm-avatar-initial">{partner.initial}</span>
            }
          </div>
        </div>

        {/* CONTEÚDO */}
        <div className="pm-body">
          {/* Tag + nome + cargo */}
          <div className="pm-identity">
            <span className="pm-tag">{partner.tag}</span>
            <h3 className="pm-name display">{partner.name}</h3>
            <p className="pm-role">{partner.role}</p>
          </div>

          {/* Divisor ornamental */}
          <div className="pm-ornament">
            <span className="pm-ornament-line"/>
            <span className="pm-ornament-dot">✦</span>
            <span className="pm-ornament-line"/>
          </div>

          {/* Descrição */}
          <p className="pm-desc">{partner.desc}</p>

          {/* Detalhes */}
          <div className="pm-details">
            {partner.details.map((item, i) => (
              <div key={i} className="pm-detail-row">
                <span className="pm-detail-dash" />
                <span className="pm-detail-text">{item}</span>
              </div>
            ))}
          </div>

          {/* CREF se houver */}
          {partner.cref && (
            <div className="pm-cref">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>{partner.cref}</span>
            </div>
          )}

          {/* Links — instagram primeiro, site abaixo */}
          <div className="pm-links">
            {partner.instagram && (
              <a href={`https://www.instagram.com/${partner.instagram}/`} target="_blank" rel="noopener noreferrer" className="pm-insta">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                @{partner.instagram}
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft:"auto",opacity:0.4}}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            )}
            {partner.site && (
              <a href={partner.site} target="_blank" rel="noopener noreferrer" className="pm-site">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                {partner.site.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft:"auto",opacity:0.4}}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
