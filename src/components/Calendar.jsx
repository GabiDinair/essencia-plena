import FadeIn from "./FadeIn";
import { timelineItems } from "../data";

export default function Calendar() {
  return (
    <section id="calendario" className="calendar">
      <div className="container">
        <FadeIn>
          <span className="section-tag">Agenda</span>
          <h2 className="section-title display">Calendário 2026</h2>
          <p className="section-body">Um ano repleto de encontros intencionais para nutrir o Espírito, cuidar da Mente e fortalecer o Corpo.</p>
        </FadeIn>
        <div className="cal-list">
          {timelineItems.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="cal-entry">
                <span className="cal-entry-month">{item.month}</span>
                <div className="cal-entry-body">
                  <p className="cal-entry-title display">{item.title}</p>
                  <p className="cal-entry-desc">{item.desc}</p>
                </div>
                <div className="cal-entry-dot" style={{ background: item.dot }} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
