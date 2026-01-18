
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PostureProblems from './components/PostureProblems';
import Services from './components/Services';
import Locations from './components/Locations';
import Consultations from './components/Consultations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <PostureProblems />
        <Services />
        <AIConsultant />
        <Consultations />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
