export default function EncounterModal({ modalOpen, setModalOpen }) {
  if (!modalOpen) return null;

  return (
    <div className="modal-overlay" onClick={() => setModalOpen(false)}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setModalOpen(false)}>✕</button>
        <div className="modal-img-wrap">
          <img src="/livroautoral.jpeg" alt="Gabriella Dinair" className="modal-img" />
        </div>
        <div className="modal-body">
          <span className="modal-tag">Quinta edição · Livro autoral</span>
          <p className="modal-title display">As Extraordinárias Estações de uma Vida Comum</p>
          <p className="modal-author">Gabriella Dinair</p>
          <div className="modal-divider" />
          <p className="modal-desc">Um encontro especial onde a própria fundadora do projeto compartilhou sua obra autoral — um livro nascido de vivências reais, reflexões sobre a fé e as estações da vida. Uma noite de profunda emoção e conexão entre as participantes.</p>
          <div className="modal-presenter">
            <div className="modal-presenter-avatar">G</div>
            <div>
              <p className="modal-presenter-name display">Gabriella Dinair</p>
              <p className="modal-presenter-role">Fundadora do projeto · Autora</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
