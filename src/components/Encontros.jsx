import FadeIn from "./FadeIn";
import { pastEncounters } from "../data";

export default function Encontros({ setModalOpen }) {
  return (
    <section id="encontros" className="encontros">
      <div className="container-wide">
        <FadeIn>
          <span className="section-tag">Memórias</span>
          <h2 className="section-title display">Nossos Encontros</h2>
          <p className="section-body">Cada encontro, uma história. Cada leitura, uma transformação.</p>
        </FadeIn>
        <div className="encontros-grid">
          {pastEncounters.map((enc, i) => (
            <FadeIn key={i} delay={i * 0.07} from="scale">
              <div
                className={`encontro-card${enc.special ? " special" : ""}`}
                onClick={enc.special ? () => setModalOpen(true) : undefined}
              >
                <div className="encontro-img-wrap">
                  {enc.img
                    ? <img src={enc.img} alt={enc.edicao} className="encontro-img" />
                    : <span className="encontro-img-placeholder">✦</span>
                  }
                </div>
                <div className="encontro-info">
                  <span className="encontro-edicao">{enc.edicao}</span>
                  <p className="encontro-livro display">{enc.livro}</p>
                  <p className="encontro-autor">{enc.autor}</p>
                  {enc.special && <span className="encontro-special-badge">✦ Livro autoral</span>}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
