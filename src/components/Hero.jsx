import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-ornament hero-ornament-1" />
      <div className="hero-ornament hero-ornament-2" />
      <div className="hero-content">
        <FadeIn delay={0.1}><span className="hero-badge">Desenvolvimento Feminino</span></FadeIn>
        <FadeIn delay={0.25}><h1 className="hero-title display">Essência Plena<br /></h1></FadeIn>
        <FadeIn delay={0.4}>
          <div className="hero-divider" />
          <p className="hero-subtitle">Alimentando o espírito, o corpo e a mente</p>
        </FadeIn>
        <FadeIn delay={0.55}>
          <p className="hero-desc" style={{ marginTop: 24 }}>
            "Glorificai, pois, a Deus, no vosso corpo <br />e no vosso espírito, os quais pertencem a Deus"
          </p>
        </FadeIn>
      </div>
      <div className="scroll-hint"><div className="scroll-line" /><span>rolar</span></div>
    </section>
  );
}
