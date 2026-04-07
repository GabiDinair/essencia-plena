import { useState } from "react";

import globalStyles from "./styles/globalStyles";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Pilares from "./components/Pilares";
import BookModal from "./components/BookModal";
import ParkModal from "./components/ParkModal";
import Calendar from "./components/Calendar";
import Encontros from "./components/Encontros";
import EncounterModal from "./components/EncounterModal";
import BookHighlight from "./components/BookHighlight";
import Contact from "./components/Contact";
import Parceiros from "./components/Parceiros";
import Footer from "./components/Footer";

export default function EssenciaPlena() {
  const [modalOpen, setModalOpen] = useState(false);
  const [bookModal, setBookModal] = useState(null);
  const [parkModal, setParkModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const isPilar = ["pilar-espiritual", "pilar-fisico", "pilar-mental"].includes(id);
        const offset = isPilar ? 96 : 20;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <>
      <style>{globalStyles}</style>

      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} />

      <Hero />
      <About />
      <Pilares setBookModal={setBookModal} setParkModal={setParkModal} />

      <BookModal bookModal={bookModal} setBookModal={setBookModal} />
      <ParkModal parkModal={parkModal} setParkModal={setParkModal} />

      <Calendar />
      <Encontros setModalOpen={setModalOpen} />

      <EncounterModal modalOpen={modalOpen} setModalOpen={setModalOpen} />

      <BookHighlight />
      <Contact />
      <Parceiros />
      <Footer />
    </>
  );
}
