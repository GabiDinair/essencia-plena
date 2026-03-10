import FadeIn from "./FadeIn";

export default function BookHighlight() {
  return (
    <section id="livro-autoral" className="book-highlight">
      <div className="container">
        <FadeIn>
          <div className="book-highlight-inner">
            <FadeIn from="left">
              <div className="book-highlight-img-side">
                <div className="book-highlight-img-wrap">
                  <img src="/livroautoral.jpeg" alt="As Extraordinárias Estações de uma Vida Comum" className="book-highlight-img" />
                </div>
              </div>
            </FadeIn>
            <FadeIn from="right" delay={0.15}>
              <div className="book-highlight-text-side">
                <span className="book-highlight-tag">Livro autoral</span>
                <h2 className="book-highlight-title display">As Extraordinárias Estações<br />de uma Vida Comum</h2>
                <p className="book-highlight-author">Gabriella Dinair</p>
                <div className="book-highlight-divider" />
                <p className="book-highlight-desc">Este livro nasceu das estações vividas. Até os dias mais simples podem ser profundamente cheios de propósito. Com base nas Escrituras, Gabriella Dinair nos encoraja a abandonar padrões mundanos e abraçar os planos de Deus para a vida. Assim como na natureza, nossas vidas também passam por diferentes estações — cada uma com seu propósito e seus ensinamentos, tornando-se oportunidades para descobrir o amor e a providência divina, encontrando um propósito mais profundo através de uma vida extraordinariamente comum.</p>
                <a
                  href="https://shopee.com.br/As-Extraordin%C3%A1rias-Esta%C3%A7%C3%B5es-de-uma-Vida-Comum-Gabriella-Dinair-i.285478332.22693718024?extraParams=%7B%22display_model_id%22%3A229416944242%2C%22model_selection_logic%22%3A3%7D&sp_atk=bf388eb3-530a-4379-b45c-d8c1dd72e83e&xptdk=bf388eb3-530a-4379-b45c-d8c1dd72e83e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="book-highlight-btn"
                >
                  Conhecer o livro
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
