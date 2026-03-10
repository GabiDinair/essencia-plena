import { useInView } from "../hooks/useInView";

export default function FadeIn({ children, delay = 0, className = "", from = "bottom" }) {
  const [ref, visible] = useInView();
  const transforms = {
    bottom: visible ? "translateY(0)" : "translateY(36px)",
    left:   visible ? "translateX(0)" : "translateX(-32px)",
    right:  visible ? "translateX(0)" : "translateX(32px)",
    scale:  visible ? "scale(1)"      : "scale(0.96)",
  };
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: transforms[from] || transforms.bottom,
      transition: `opacity 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
    }}>
      {children}
    </div>
  );
}
