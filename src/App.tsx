import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TaglineStrip from './components/TaglineStrip';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Pillars from './components/Pillars';
import Team from './components/Team';
import Research from './components/Research';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyModal from './components/PrivacyModal';

function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <TaglineStrip />
        <About />
        <Capabilities />
        <Pillars />
        <Team />
        <Research />
        <News />
        <Contact />
      </main>
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />

      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </div>
  );
}

export default App;
