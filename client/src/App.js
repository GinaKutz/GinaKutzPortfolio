import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

const App = () => {
  // State to manage the active section
  const [activeSection, setActiveSection] = useState('AboutMe');

  return (
    <div>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {activeSection === 'AboutMe' && <AboutMe />}
        {activeSection === 'Portfolio' && <Portfolio />}
        {activeSection === 'Contact' && <Contact />}
        {activeSection === 'Resume' && <Resume />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
