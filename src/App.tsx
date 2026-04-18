import { GlobalStyles } from './styles/GlobalStyles';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
